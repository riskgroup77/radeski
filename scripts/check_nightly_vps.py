#!/usr/bin/env python3
"""Read-only check of the nightly rebuild on the VPS (nothing is changed on the server).

    python scripts/check_nightly_vps.py

Prints: the server clock and time zone, the cron entries, the last nightly runs (start / done /
FAILED lines of /var/log/radeski-nightly.log), the tail of the last run, build-status.json, the
age of the live dist/ files, the commit the server is on, and free disk space.
Authentication as in vps_common (SSH key, RADESKI_DEPLOY_PASSWORD or a hidden prompt).
"""
from __future__ import annotations

from vps_common import APP_DIR, connect, run

CHECKS = [
    ("Server clock", "date -Is; timedatectl 2>/dev/null | grep -i 'time zone' || cat /etc/timezone"),
    ("Cron entries", "cat /etc/cron.d/radeski-nightly /etc/cron.d/radeski-snapshot 2>&1"),
    (
        "Nightly runs (last 14)",
        "grep -E '\\[nightly\\].*(start|done|FAILED|skipped)' /var/log/radeski-nightly.log | tail -n 28",
    ),
    ("Tail of the last run", "tail -n 25 /var/log/radeski-nightly.log"),
    ("Errors in the log (last 10)", "grep -inE 'error|failed' /var/log/radeski-nightly.log | tail -n 10 || true"),
    ("build-status.json", f"cat {APP_DIR}/dist/build-status.json 2>&1"),
    (
        "Live files",
        f"ls -l --time-style=full-iso {APP_DIR}/dist/sitemap.xml {APP_DIR}/dist/index.html {APP_DIR}/dist/robots.txt",
    ),
    ("Server commit", f"cd {APP_DIR} && git log -1 --format='%h %ci %s'"),
    ("Disk", "df -h / | tail -n 1"),
]


def main() -> None:
    client = connect()
    try:
        for title, cmd in CHECKS:
            print(f"\n=== {title} ===")
            _, out = run(client, cmd, timeout=60, check=False)
            if out and not out.endswith("\n"):
                print()
    finally:
        client.close()


if __name__ == "__main__":
    main()
