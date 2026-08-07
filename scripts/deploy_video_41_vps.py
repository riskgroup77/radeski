#!/usr/bin/env python3
"""Upload public/videos/41.mp4 to VPS public + dist folders."""
import os
import sys
from pathlib import Path

import paramiko

HOST = "161.35.107.0"
USER = "root"
APP_DIR = "/var/www/radeski"
NAME = "41.mp4"


def main() -> None:
    pwd = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
    if not pwd:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    root = Path(__file__).resolve().parents[1]
    local = root / "public" / "videos" / NAME
    if not local.exists():
        raise SystemExit(f"Missing {local}")

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=pwd, timeout=30)
    sftp = client.open_sftp()
    sftp.get_channel().settimeout(600)

    for rel in (f"public/videos/{NAME}", f"dist/videos/{NAME}"):
        remote = f"{APP_DIR}/{rel}"
        remote_dir = remote.rsplit("/", 1)[0]
        client.exec_command(f"mkdir -p {remote_dir}")
        print(f"Uploading {NAME} -> {remote}...")
        sftp.put(str(local), remote)
        print("  OK")

    _, stdout, _ = client.exec_command(
        "python3 - <<'PY'\n"
        "import ssl,urllib.request\n"
        "ctx=ssl.create_default_context(); ctx.check_hostname=False; ctx.verify_mode=ssl.CERT_NONE\n"
        "req=urllib.request.Request('https://127.0.0.1/videos/41.mp4', method='HEAD', headers={'Host':'radeski.uz'})\n"
        "with urllib.request.urlopen(req, context=ctx, timeout=30) as r:\n"
        " print('static41', r.status, r.headers.get('Content-Type'), r.headers.get('Content-Length'))\n"
        "PY"
    )
    print(stdout.read().decode("utf-8", "replace"))
    sftp.close()
    client.close()


if __name__ == "__main__":
    main()
