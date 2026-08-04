#!/usr/bin/env python3
"""Upload public/videos/39.mp4 to VPS public + dist folders."""
import os
import sys
from pathlib import Path

import paramiko

HOST = "161.35.107.0"
USER = "root"
APP_DIR = "/var/www/radeski"
NAME = "39.mp4"


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

    for rel in (f"public/videos/{NAME}", f"dist/videos/{NAME}"):
        remote = f"{APP_DIR}/{rel}"
        remote_dir = remote.rsplit("/", 1)[0]
        client.exec_command(f"mkdir -p {remote_dir}")
        print(f"Uploading {NAME} -> {remote}...")
        sftp.put(str(local), remote)
        print("  OK")

    _, stdout, _ = client.exec_command(
        "python3 - <<'PY'\n"
        "import json,urllib.request,ssl\n"
        "ctx=ssl.create_default_context(); ctx.check_hostname=False; ctx.verify_mode=ssl.CERT_NONE\n"
        "req=urllib.request.Request('https://127.0.0.1/videos/39.mp4', method='HEAD', headers={'Host':'radeski.uz'})\n"
        "with urllib.request.urlopen(req, context=ctx, timeout=20) as r:\n"
        " print('static39', r.status, r.headers.get('Content-Type'), r.headers.get('Content-Length'))\n"
        "req2=urllib.request.Request('https://127.0.0.1/api/videos', headers={'Host':'radeski.uz'})\n"
        "with urllib.request.urlopen(req2, context=ctx, timeout=20) as r:\n"
        " d=json.load(r)\n"
        " print('api_total', len(d))\n"
        " for i in sorted(d, key=lambda x: x.get('sort_order', 999))[:3]:\n"
        "  print(i.get('sort_order'), i.get('title_uz'))\n"
        "PY"
    )
    print(stdout.read().decode("utf-8", "replace"))
    sftp.close()
    client.close()


if __name__ == "__main__":
    main()
