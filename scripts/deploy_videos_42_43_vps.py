#!/usr/bin/env python3
"""Upload public/videos/42.mp4 and 43.mp4 to VPS public + dist folders."""
import os
import sys
from pathlib import Path

import paramiko

HOST = "161.35.107.0"
USER = "root"
APP_DIR = "/var/www/radeski"
FILES = ["42.mp4", "43.mp4"]


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
    sftp.get_channel().settimeout(1800)

    for name in FILES:
        local = root / "public" / "videos" / name
        if not local.exists():
            raise SystemExit(f"Missing {local}")
        for rel in (f"public/videos/{name}", f"dist/videos/{name}"):
            remote = f"{APP_DIR}/{rel}"
            remote_dir = remote.rsplit("/", 1)[0]
            client.exec_command(f"mkdir -p {remote_dir}")
            print(f"Uploading {name} -> {remote} ({local.stat().st_size // (1024*1024)} MB)...")
            sftp.put(str(local), remote)
            print("  OK")

    _, stdout, _ = client.exec_command(
        "curl -sk -o /dev/null -w 'static42=%{http_code} len=%{size_download}\\n' "
        "https://radeski.uz/videos/42.mp4; "
        "curl -sk -o /dev/null -w 'static43=%{http_code} len=%{size_download}\\n' "
        "https://radeski.uz/videos/43.mp4"
    )
    print(stdout.read().decode("utf-8", "replace"))
    sftp.close()
    client.close()
    print("Done.")


if __name__ == "__main__":
    main()
