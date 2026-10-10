#!/usr/bin/env python3
"""Upgrade the radeski.uz nginx setup in place (runs ON the VPS as root; idempotent).

  * /api/* public GET responses are cached for 60 s (stale copies served on errors/429), so
    visitors never hit the CMS API rate limit — the API sees a handful of requests a minute.
  * Security headers (HSTS, nosniff, frame/referrer/permissions policy, frame-ancestors CSP).
  * HTML is served with `Cache-Control: no-cache` so a new deploy is picked up immediately.
  * Prerendered pages: `try_files $uri $uri/index.html @radeski_spa`; app sections get the SPA
    shell, any other path is a real 404 (the same shell renders the "not found" page).
  * Caching: hashed /assets/ 1 year immutable, image variants / video covers 30 days, other
    static files 7 days — one Cache-Control header each (expires + add_header sent two).
  * Old URLs redirect server-side (301): /xx/contacts, /rus/…, /eng/…, /fikr.
  * POST /api/reviews/submit goes to the Node app (server-side review publishing).
  * api.radeski.uz: /docs, /redoc and /openapi.json return 404.

Every file is backed up first; if `nginx -t` fails, all changes are rolled back.
Usage: python3 scripts/server/nginx_upgrade.py [--dry-run]
"""
from __future__ import annotations

import re
import shutil
import subprocess
import sys
import time
from pathlib import Path

SITE_ROOT_MARKER = "root /var/www/radeski/dist"
NODE_APP = "http://127.0.0.1:8787"
BACKUP_DIR = Path("/root/radeski-nginx-backups") / time.strftime("%Y%m%d-%H%M%S")

HTTP_CONF = Path("/etc/nginx/conf.d/radeski-upgrade.conf")
HTTP_CONF_TEXT = """# Managed by scripts/server/nginx_upgrade.py
proxy_cache_path /var/cache/nginx/radeski_api levels=1:2 keys_zone=radeski_api:10m max_size=256m inactive=30m use_temp_path=off;

# Public, read-only CMS endpoints that may be cached (never anything with an Authorization header).
map "$request_method:$uri" $radeski_api_public {
    default 0;
    "~^(GET|HEAD):/api/(doctors|services|prices|articles|site-texts|partners|reviews|branches|treatment-results|videos|clinic-ratings|stats/client-count)$" 1;
}
map "$radeski_api_public:$http_authorization" $radeski_api_skip_cache {
    default 1;
    "1:" 0;
}

# Paths the React app serves (it shows its own 404 page inside them); anything else -> 404.
map $uri $radeski_spa_known {
    default 0;
    "/" 1;
    "~^/admin(/|$)" 1;
    "~^/(uz|ru|en)/?$" 1;
    "~^/(uz|ru|en)/(about|services|conditions|doctors|prices|articles|videos|branches|qoqon|fargona|results|technologies|daavlin-foto-kabinalari|dermoscan|science|obrazovaniya|malaka-oshirish|tele-dermatology|skin-pathology-center|brend|terms|privacy|fikr|promo|clinic-equipment|admin)(/|$)" 1;
}

# HTML must be revalidated so visitors get a new deploy immediately (assets are hashed).
map $sent_http_content_type $radeski_html_cache_control {
    "~^text/html" "no-cache";
    default "";
}
"""

HEADERS_SNIPPET = Path("/etc/nginx/snippets/radeski-security-headers.conf")
HEADERS_TEXT = """# Managed by scripts/server/nginx_upgrade.py
add_header Strict-Transport-Security "max-age=31536000" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "SAMEORIGIN" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=(), usb=()" always;
add_header Content-Security-Policy "frame-ancestors 'self'; base-uri 'self'; object-src 'none'" always;
add_header Cache-Control $radeski_html_cache_control;
"""

API_CACHE_SNIPPET = Path("/etc/nginx/snippets/radeski-api-cache.conf")
API_CACHE_TEXT = """# Managed by scripts/server/nginx_upgrade.py
proxy_cache radeski_api;
proxy_cache_key "$scheme$host$request_uri";
proxy_cache_valid 200 60s;
proxy_cache_lock on;
proxy_cache_background_update on;
proxy_cache_use_stale error timeout updating http_429 http_500 http_502 http_503 http_504;
proxy_cache_bypass $radeski_api_skip_cache;
proxy_no_cache $radeski_api_skip_cache;
proxy_ignore_headers Cache-Control Expires Set-Cookie Vary;
"""

INCLUDE_HEADERS = "include snippets/radeski-security-headers.conf;"
INCLUDE_API_CACHE = "include snippets/radeski-api-cache.conf;"

REVIEWS_LOCATION = f"""location = /api/reviews/submit {{
        proxy_pass {NODE_APP}/api/reviews/submit;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        client_max_body_size 64k;
    }}

    """

PERF_MARKER = "# radeski-perf (managed by nginx_upgrade.py)"
PERF_BLOCK = f"""{PERF_MARKER}
    location ^~ /assets/ {{
        {INCLUDE_HEADERS}
        add_header Cache-Control "public, max-age=31536000, immutable";
        try_files $uri =404;
    }}

    location ^~ /img-cache/ {{
        {INCLUDE_HEADERS}
        add_header Cache-Control "public, max-age=2592000";
        try_files $uri =404;
    }}

    location ^~ /video-thumbs/ {{
        {INCLUDE_HEADERS}
        add_header Cache-Control "public, max-age=2592000";
        try_files $uri =404;
    }}

    location ~* \\.(?:mp4|webm)$ {{
        {INCLUDE_HEADERS}
        add_header Cache-Control "public, max-age=604800";
        try_files $uri =404;
    }}

    location ~ ^/(uz|ru|en)/contacts/?$ {{
        return 301 /$1/branches;
    }}

    location ~ ^/rus(/.*)?$ {{
        return 301 /ru$1;
    }}

    location ~ ^/eng(/.*)?$ {{
        return 301 /en$1;
    }}

    location = /fikr {{
        return 301 /uz/fikr;
    }}

    location @radeski_spa {{
        if ($radeski_spa_known = 0) {{
            return 404;
        }}
        rewrite ^ /index.html break;
    }}

    error_page 404 /index.html;
    # end radeski-perf

    """

DOCS_BLOCK = """location ~ ^/(docs|redoc|openapi\\.json)(/|$) {
        return 404;
    }

    """


def find_blocks(text: str, start: int, end: int, opener: re.Pattern[str]) -> list[tuple[int, int, int]]:
    """(block_start, body_start, block_end) for `opener {` blocks directly inside text[start:end]."""
    blocks = []
    depth = 0
    i = start
    while i < end:
        ch = text[i]
        if ch == "#":  # skip comments
            nl = text.find("\n", i)
            i = end if nl == -1 else nl
            continue
        if ch in "\"'":
            close = text.find(ch, i + 1)
            i = end if close == -1 else close + 1
            continue
        if ch == "{":
            if depth == 0:
                line_start = text.rfind("\n", start, i) + 1
                header = text[line_start:i]
                if opener.match(header.strip() + " {"):
                    block_start = line_start + (len(header) - len(header.lstrip()))
                    blocks.append([block_start, i + 1, None])
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0 and blocks and blocks[-1][2] is None:
                blocks[-1][2] = i + 1
        i += 1
    return [tuple(b) for b in blocks if b[2] is not None]


SERVER_RE = re.compile(r"^server\s*\{")
LOCATION_RE = re.compile(r"^location\b.*\{")


def indent_of(text: str, pos: int) -> str:
    line_start = text.rfind("\n", 0, pos) + 1
    return re.match(r"[ \t]*", text[line_start:]).group(0)


def patch_site(text: str) -> str:
    servers = [b for b in find_blocks(text, 0, len(text), SERVER_RE) if SITE_ROOT_MARKER in text[b[0]:b[2]]]
    if not servers:
        raise SystemExit(f"No server block with '{SITE_ROOT_MARKER}' found")

    for s_start, s_body, s_end in reversed(servers):
        block = text[s_start:s_end]
        inner = s_body - s_start
        locations = find_blocks(block, inner, len(block) - 1, LOCATION_RE)

        edits: list[tuple[int, int, str]] = []  # (start, end, replacement) inside `block`
        for l_start, l_body, l_end in locations:
            header = block[l_start:l_body]
            body = block[l_body:l_end]
            pad = indent_of(block, l_start) + "    "
            # location-level add_header replaces the server-level headers — repeat them there.
            if "add_header" in body and INCLUDE_HEADERS not in body:
                edits.append((l_body, l_body, f"\n{pad}{INCLUDE_HEADERS}"))
            if re.match(r"location\s+(\^~\s+)?/api/\s*\{", header) and INCLUDE_API_CACHE not in body:
                edits.append((l_body, l_body, f"\n{pad}{INCLUDE_API_CACHE}"))
            if re.match(r"location\s+/\s*\{", header):
                new_body = re.sub(
                    r"try_files\s+\$uri\s+\$uri/(index\.html)?\s+/index\.html\s*;",
                    "try_files $uri $uri/index.html @radeski_spa;",
                    body,
                )
                if new_body != body:
                    edits.append((l_body, l_end, new_body))
            # One Cache-Control per response: `expires` + `add_header Cache-Control` sent two, and
            # "immutable" on files whose names never change kept stale copies for a week.
            if "expires" in body and "Cache-Control" in body:
                new_body = re.sub(r"\n[ \t]*expires\s+\S+\s*;", "", body)
                new_body = re.sub(
                    r'add_header\s+Cache-Control\s+"public(, immutable)?"\s*;',
                    'add_header Cache-Control "public, max-age=604800";',
                    new_body,
                )
                if new_body != body and not any(e[0] == l_body for e in edits):
                    edits.append((l_body, l_end, new_body))

        if PERF_MARKER not in block:
            root_loc = next((l for l in locations if re.match(r"location\s+/\s*\{", block[l[0]:l[1]])), None)
            anchor = root_loc[0] if root_loc else s_end - s_start - 1
            edits.append((anchor, anchor, PERF_BLOCK))

        if "location = /api/reviews/submit" not in block:
            api_loc = next(
                (l for l in locations if re.match(r"location\s+(\^~\s+)?/api/\s*\{", block[l[0]:l[1]])), None
            )
            anchor = api_loc[0] if api_loc else s_end - s_start - 1
            edits.append((anchor, anchor, REVIEWS_LOCATION))

        if INCLUDE_HEADERS not in block[inner : (locations[0][0] if locations else len(block))]:
            root_match = re.search(r"root\s+/var/www/radeski/dist\s*;", block)
            pos = root_match.end()
            edits.append((pos, pos, f"\n{indent_of(block, root_match.start())}{INCLUDE_HEADERS}"))

        for start, end, replacement in sorted(edits, key=lambda e: e[0], reverse=True):
            block = block[:start] + replacement + block[end:]
        text = text[:s_start] + block + text[s_end:]
    return text


def patch_api_docs(text: str) -> str:
    servers = [
        b for b in find_blocks(text, 0, len(text), SERVER_RE)
        if re.search(r"server_name[^;]*\bapi\.radeski\.uz\b", text[b[0]:b[2]])
        and "proxy_pass" in text[b[0]:b[2]]
    ]
    for s_start, s_body, s_end in reversed(servers):
        block = text[s_start:s_end]
        if "openapi" in block:
            continue
        first_location = re.search(r"\n([ \t]*)location\b", block)
        if first_location:
            pos = first_location.start() + 1 + len(first_location.group(1))
            block = block[:pos] + DOCS_BLOCK + block[pos:]
        else:
            block = block[:-1] + "    " + DOCS_BLOCK.rstrip() + "\n}"
        text = text[:s_start] + block + text[s_end:]
    return text


def site_config_files() -> tuple[Path | None, Path | None]:
    site = api = None
    for path in sorted(Path("/etc/nginx/sites-enabled").iterdir()):
        real = path.resolve()
        content = real.read_text()
        if SITE_ROOT_MARKER in content and site is None:
            site = real
        if re.search(r"server_name[^;]*\bapi\.radeski\.uz\b", content) and api is None:
            api = real
    return site, api


def main() -> None:
    dry_run = "--dry-run" in sys.argv
    site, api = site_config_files()
    if site is None:
        raise SystemExit("radeski.uz nginx site config not found in /etc/nginx/sites-enabled")

    planned: dict[Path, str] = {
        HTTP_CONF: HTTP_CONF_TEXT,
        HEADERS_SNIPPET: HEADERS_TEXT,
        API_CACHE_SNIPPET: API_CACHE_TEXT,
        site: patch_site(site.read_text()),
    }
    if api is not None and api != site:
        planned[api] = patch_api_docs(api.read_text())
    elif api == site:
        planned[site] = patch_api_docs(planned[site])

    if dry_run:
        for path, content in planned.items():
            print(f"===== {path}\n{content}")
        return

    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    originals: dict[Path, str | None] = {}
    for path, content in planned.items():
        originals[path] = path.read_text() if path.exists() else None
        if originals[path] is not None:
            shutil.copy2(path, BACKUP_DIR / path.name)
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(content)
    Path("/var/cache/nginx/radeski_api").mkdir(parents=True, exist_ok=True)
    subprocess.run(["chown", "-R", "www-data:www-data", "/var/cache/nginx/radeski_api"], check=False)

    test = subprocess.run(["nginx", "-t"], capture_output=True, text=True)
    if test.returncode != 0:
        for path, original in originals.items():
            if original is None:
                path.unlink(missing_ok=True)
            else:
                path.write_text(original)
        print(test.stderr)
        raise SystemExit("nginx -t failed — all nginx changes rolled back, nothing reloaded.")

    subprocess.run(["systemctl", "reload", "nginx"], check=True)
    print(f"nginx upgraded and reloaded (backups in {BACKUP_DIR})")


if __name__ == "__main__":
    main()
