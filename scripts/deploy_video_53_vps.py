#!/usr/bin/env python3
"""Upload public/videos/53.mp4 + sitePagesContent.ts to VPS and rebuild."""
import os
import sys
from pathlib import Path

import paramiko

HOST = "161.35.107.0"
USER = "root"
APP_DIR = "/var/www/radeski"
FILES = [
    "public/videos/53.mp4",
    "src/data/sitePagesContent.ts",
    "src/hooks/useCmsData.ts",
]


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
    sftp.get_channel().settimeout(600)

    for rel in FILES:
        local = root / rel
        if not local.exists():
            raise SystemExit(f"Missing {local}")
        remote = f"{APP_DIR}/{rel.replace(chr(92), '/')}"
        remote_dir = remote.rsplit("/", 1)[0]
        client.exec_command(f"mkdir -p {remote_dir}")
        print(f"Uploading {rel}...")
        sftp.put(str(local), remote)
        dist_video = f"{APP_DIR}/dist/videos/53.mp4"
        if rel.endswith("53.mp4"):
            client.exec_command(f"mkdir -p {APP_DIR}/dist/videos")
            sftp.put(str(local), dist_video)
        print("  OK")

    sftp.close()

    _, stdout, _ = client.exec_command(
        f"cd {APP_DIR} && export VITE_API_URL=https://api.radeski.uz && npm run build && nginx -t && systemctl reload nginx && echo VIDEO53_OK",
        get_pty=True,
        timeout=600,
    )
    out = stdout.read().decode("utf-8", errors="replace")
    print(out.encode("ascii", errors="replace").decode("ascii")[-2500:])
    code = stdout.channel.recv_exit_status()
    client.close()
    if code != 0:
        sys.exit(code)


if __name__ == "__main__":
    main()
