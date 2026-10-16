#!/usr/bin/env python3
"""Check VPS deployment status for radeski.uz."""
import os
import re
import sys
import urllib.request

import paramiko

HOST = os.environ.get("RADESKI_DEPLOY_HOST", "161.35.107.0")
USER = os.environ.get("RADESKI_DEPLOY_USER", "root")
PWD = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
APP = "/var/www/radeski"


def run(client: paramiko.SSHClient, cmd: str) -> str:
    _, stdout, stderr = client.exec_command(cmd, timeout=30)
    out = stdout.read().decode("utf-8", errors="replace").strip()
    err = stderr.read().decode("utf-8", errors="replace").strip()
    return out or err or ""


def main() -> None:
    if not PWD:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=PWD, timeout=30)

    dist_bundle = run(client, f"grep -oE 'index-[A-Za-z0-9_-]+\\.js' {APP}/dist/index.html | head -1")
    dist_mtime = run(client, f"stat -c '%y' {APP}/dist/index.html")
    nav_hover = run(client, f"test -f {APP}/src/utils/navDropdownHover.ts && echo OK || echo MISSING")
    nav_hover_mtime = run(client, f"stat -c '%y' {APP}/src/utils/navDropdownHover.ts 2>/dev/null")
    header_mtime = run(client, f"stat -c '%y' {APP}/src/components/Header.tsx")
    flyout_mtime = run(client, f"stat -c '%y' {APP}/src/components/NavSideFlyout.tsx")
    hover_zone_count = run(client, f"grep -c useNavDropdownHoverZone {APP}/src/components/Header.tsx")
    slide_anim = run(client, f"grep -c slide-in-from-top-2 {APP}/dist/assets/*.js 2>/dev/null | head -1 || echo 0")
    fizio_src = run(
        client,
        f"grep -c art-fizioterapiya-dermatovenereologiya {APP}/src/data.ts",
    )
    fizio_cover = run(
        client,
        f"ls -la {APP}/dist/articles/fizioterapiya-dermatologiya-cover.png 2>&1",
    )
    build_log = run(client, f"ls -lt {APP}/dist/assets/index-*.js | head -3")

    client.close()

    live_html = urllib.request.urlopen("https://radeski.uz/uz/", timeout=20).read().decode(
        "utf-8", errors="replace"
    )
    live_match = re.search(r"index-[A-Za-z0-9_-]+\.js", live_html)
    live_bundle = live_match.group(0) if live_match else "NOT FOUND"

    print("=== RADESKI.UZ SERVER DEPLOY CHECK ===")
    print(f"dist/index.html modified: {dist_mtime}")
    print(f"dist JS bundle (built):   {dist_bundle}")
    print(f"live site JS bundle:      {live_bundle}")
    print(f"bundle match:             {'YES' if dist_bundle == live_bundle else 'NO'}")
    print()
    print(f"navDropdownHover.ts:      {nav_hover} ({nav_hover_mtime})")
    print(f"Header.tsx modified:      {header_mtime}")
    print(f"NavSideFlyout.tsx:        {flyout_mtime}")
    print(f"useNavDropdownHoverZone:   {hover_zone_count} refs in Header")
    print()
    print(f"fizioterapiya article:    {'OK' if fizio_src.strip() not in ('0', '') else 'MISSING'}")
    print(f"fizioterapiya cover:      {fizio_cover}")
    print()
    print("Recent dist JS files:")
    print(build_log)


if __name__ == "__main__":
    main()
