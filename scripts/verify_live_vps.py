#!/usr/bin/env python3
"""Verify radeski.uz serves live API data (no 502, no stale API host in bundle)."""
import os
import sys

import paramiko

HOST = "161.35.107.0"
USER = "root"

ENDPOINTS = [
    "doctors",
    "services",
    "prices",
    "articles",
    "partners",
    "site-texts",
    "branches",
    "videos",
    "treatment-results",
    "clinic-ratings",
    "reviews?published=true",
    "stats/client-count",
]

REMOTE = r"""
echo "=== stale API host in bundle (0 = good) ==="
grep -o "radeskiapi.arxivfjsti.uz" /var/www/radeski/dist/assets/*.js | wc -l

echo "=== bundle referenced by index.html ==="
grep -o "index-[A-Za-z0-9_-]*\.js" /var/www/radeski/dist/index.html | head -1

echo "=== endpoints ==="
""" + "\n".join(
    f'printf "%-26s" "{ep}"; curl -sk --max-time 25 '
    f'-w " http=%{{http_code}} bytes=%{{size_download}}\\n" -o /dev/null '
    f'"https://radeski.uz/api/{ep}"'
    for ep in ENDPOINTS
) + r"""

echo "=== uploads image ==="
curl -sk -o /dev/null -w "image http=%{http_code} type=%{content_type}\n" --max-time 25 \
  https://radeski.uz/uploads/articles/30479a438255408d901eadf61b2f83ed.jpg

echo "=== chat ==="
curl -sk -o /dev/null -w "chat-health http=%{http_code}\n" --max-time 25 \
  https://radeski.uz/api/chat-health

echo "=== sample payload (articles) ==="
curl -sk --max-time 25 "https://radeski.uz/api/articles" | head -c 200
echo ""
echo ALL_DONE
"""


def main() -> None:
    pwd = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
    if not pwd:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=pwd, timeout=30)

    _, stdout, stderr = client.exec_command(REMOTE, get_pty=True, timeout=300)
    out = stdout.read().decode("utf-8", errors="replace")
    err = stderr.read().decode("utf-8", errors="replace")
    print(out.encode("ascii", errors="replace").decode("ascii"))
    if err.strip():
        print(err.encode("ascii", errors="replace").decode("ascii")[:1500])
    client.close()


if __name__ == "__main__":
    main()
