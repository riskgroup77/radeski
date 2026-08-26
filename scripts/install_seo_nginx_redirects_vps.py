#!/usr/bin/env python3
"""Install nginx 301 redirects for SEO: article aliases + site-level SPA redirects."""
from __future__ import annotations

import os
import sys
import time
from pathlib import Path

import paramiko

HOST = os.environ.get("RADESKI_DEPLOY_HOST", "161.35.107.0")
USER = os.environ.get("RADESKI_DEPLOY_USER", "root")
PASSWORD = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
SITE_CONF = "/etc/nginx/sites-available/radeski.uz"
ARTICLE_MAP_CONF = "/etc/nginx/conf.d/radeski-article-redirects.map.conf"
SITE_MAP_CONF = "/etc/nginx/conf.d/radeski-site-redirects.map.conf"
ARTICLE_MARKER = "radeski_article_redirects_ok"
SITE_MARKER = "radeski_site_redirects_ok"
ROOT = Path(__file__).resolve().parent.parent
LOCAL_ARTICLE_MAP = ROOT / "nginx" / "radeski-article-redirects.map.conf"
LOCAL_SITE_MAP = ROOT / "nginx" / "radeski-site-redirects.map.conf"

ARTICLE_SNIPPET = f"""
    # {ARTICLE_MARKER}
    if ($radeski_article_redirect) {{
        return 301 $radeski_article_redirect$is_args$args;
    }}
"""

SITE_SNIPPET = f"""
    # {SITE_MARKER}
    if ($radeski_site_redirect) {{
        return 301 $radeski_site_redirect$is_args$args;
    }}
"""


def run(client: paramiko.SSHClient, cmd: str, timeout: int = 120) -> str:
    print(f"\n>>> {cmd[:160]}")
    _, stdout, stderr = client.exec_command(cmd, get_pty=True, timeout=timeout)
    chunks: list[str] = []
    while not stdout.channel.exit_status_ready():
        if stdout.channel.recv_ready():
            chunks.append(stdout.channel.recv(4096).decode("utf-8", errors="replace"))
        time.sleep(0.2)
    chunks.append(stdout.read().decode("utf-8", errors="replace"))
    err = stderr.read().decode("utf-8", errors="replace")
    code = stdout.channel.recv_exit_status()
    out = "".join(chunks)
    print(out[-4000:] if len(out) > 4000 else out)
    if err.strip():
        print(err[-800:])
    if code != 0:
        raise RuntimeError(f"Exit {code}: {cmd}")
    return out


def patch_site_conf(site: str, marker: str, snippet: str) -> str:
    if marker in site:
        return site
    anchor = "    location = /api/chat {"
    if anchor not in site:
        raise SystemExit("Could not find insertion point in nginx site conf")
    return site.replace(anchor, snippet + "\n" + anchor, 1)


def main() -> None:
    if not PASSWORD:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)
    if not LOCAL_ARTICLE_MAP.is_file():
        print(f"Missing {LOCAL_ARTICLE_MAP}. Run: npx tsx scripts/generateArticleNginxRedirects.ts", file=sys.stderr)
        sys.exit(1)
    if not LOCAL_SITE_MAP.is_file():
        print(f"Missing {LOCAL_SITE_MAP}. Run: npx tsx scripts/generateSiteNginxRedirects.ts", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=PASSWORD, timeout=30)

    sftp = client.open_sftp()
    sftp.put(str(LOCAL_ARTICLE_MAP), ARTICLE_MAP_CONF)
    sftp.put(str(LOCAL_SITE_MAP), SITE_MAP_CONF)
    sftp.close()
    print(f"Uploaded maps -> {ARTICLE_MAP_CONF}, {SITE_MAP_CONF}")

    site = run(client, f"cat {SITE_CONF}")
    site = patch_site_conf(site, ARTICLE_MARKER, ARTICLE_SNIPPET)
    site = patch_site_conf(site, SITE_MARKER, SITE_SNIPPET)

    remote_tmp = "/tmp/radeski.uz.seo-redirects.conf"
    sftp = client.open_sftp()
    with sftp.file(remote_tmp, "w") as handle:
        handle.write(site)
    sftp.close()
    run(client, f"cp {SITE_CONF} {SITE_CONF}.bak.$(date +%s) && mv {remote_tmp} {SITE_CONF}")
    print("Patched site conf with SEO redirect handlers")

    run(client, "nginx -t")
    run(client, "systemctl reload nginx")

    tests = [
        "curl -sI 'https://radeski.uz/uz/articles/rozacea-ipl' | head -3",
        "curl -sI 'https://radeski.uz/uz/daavlin-foto-kabinalari/cabins' | head -3",
        "curl -sI 'https://radeski.uz/uz/daavlin-foto-kabinalari/models/deka-co2-laser' | head -3",
        "curl -sI 'https://radeski.uz/uz/contacts' | head -3",
    ]
    for cmd in tests:
        run(client, cmd)

    client.close()
    print("Done.")


if __name__ == "__main__":
    main()
