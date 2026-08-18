#!/usr/bin/env python3
"""Install nginx 301 redirects for article slug/UUID -> canonical art-* URLs."""
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
MAP_CONF = "/etc/nginx/conf.d/radeski-article-redirects.map.conf"
MARKER = "radeski_article_redirects_ok"
LOCAL_MAP = Path(__file__).resolve().parent.parent / "nginx" / "radeski-article-redirects.map.conf"

SERVER_SNIPPET = f"""
    # {MARKER}
    if ($radeski_article_redirect) {{
        return 301 $radeski_article_redirect$is_args$args;
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


def main() -> None:
    if not PASSWORD:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)
    if not LOCAL_MAP.is_file():
        print(f"Missing {LOCAL_MAP}. Run: npx tsx scripts/generateArticleNginxRedirects.ts", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=PASSWORD, timeout=30)

    sftp = client.open_sftp()
    sftp.put(str(LOCAL_MAP), MAP_CONF)
    sftp.close()
    print(f"Uploaded map -> {MAP_CONF}")

    site = run(client, f"cat {SITE_CONF}")
    if MARKER not in site:
        marker = "    location = /api/chat {"
        if marker not in site:
            raise SystemExit("Could not find insertion point in nginx site conf")
        site = site.replace(marker, SERVER_SNIPPET + "\n" + marker, 1)
        remote_tmp = "/tmp/radeski.uz.article-redirects.conf"
        sftp = client.open_sftp()
        with sftp.file(remote_tmp, "w") as handle:
            handle.write(site)
        sftp.close()
        run(client, f"cp {SITE_CONF} {SITE_CONF}.bak.$(date +%s) && mv {remote_tmp} {SITE_CONF}")
        print("Patched site conf with article redirect handler")
    else:
        print("Site conf already contains article redirect handler")

    run(client, "nginx -t")
    run(client, "systemctl reload nginx")

    tests = [
        "curl -sI 'https://radeski.uz/uz/articles/rozacea-ipl' | head -5",
        "curl -sI 'https://radeski.uz/uz/articles/6ed35ebc-de2d-4b68-8787-29ad3093e607' | head -5",
        "curl -sI 'https://radeski.uz/ru/articles/vitiligo-davolash-daavlin-fototerapiya' | head -5",
    ]
    for cmd in tests:
        run(client, cmd)

    client.close()
    print("Done.")


if __name__ == "__main__":
    main()
