#!/usr/bin/env python3
"""Upload public/videos/35.mp4 and 36.mp4 to VPS public + dist folders."""
import os
import sys
from pathlib import Path

import paramiko

HOST = "161.35.107.0"
USER = "root"
APP_DIR = "/var/www/radeski"
FILES = ["35.mp4", "36.mp4"]


def main() -> None:
    pwd = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
    if not pwd:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    root = Path(__file__).resolve().parents[1]
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=pwd, timeout=30)
    sftp = client.open_sftp()

    for name in FILES:
        local = root / "public" / "videos" / name
        if not local.exists():
            raise SystemExit(f"Missing {local}")
        for rel in (f"public/videos/{name}", f"dist/videos/{name}"):
            remote = f"{APP_DIR}/{rel}"
            remote_dir = remote.rsplit("/", 1)[0]
            client.exec_command(f"mkdir -p {remote_dir}")
            print(f"Uploading {name} -> {remote}...")
            sftp.put(str(local), remote)
            print("  OK")

    _, stdout, _ = client.exec_command(
        "curl -sk -o /dev/null -w 'static35=%{http_code} type=%{content_type}\\n' "
        "https://radeski.uz/videos/35.mp4; "
        "curl -sk -o /dev/null -w 'static36=%{http_code} type=%{content_type}\\n' "
        "https://radeski.uz/videos/36.mp4; "
        "curl -sk --max-time 20 https://radeski.uz/api/videos | python3 -c "
        "\"import sys,json; d=json.load(sys.stdin); "
        "print('api_total',len(d)); "
        "[print(i.get('sort_order'), i.get('title_uz')) for i in d if i.get('sort_order') in (35,36)]\""
    )
    print(stdout.read().decode("utf-8", "replace"))
    sftp.close()
    client.close()


if __name__ == "__main__":
    main()
