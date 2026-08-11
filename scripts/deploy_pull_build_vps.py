#!/usr/bin/env python3
"""Pull latest main and rebuild radeski.uz on VPS."""
from __future__ import annotations

import os
import sys
import time

import paramiko

HOST = os.environ.get("RADESKI_DEPLOY_HOST", "161.35.107.0")
USER = os.environ.get("RADESKI_DEPLOY_USER", "root")
PASSWORD = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
APP_DIR = "/var/www/radeski"


def run(client: paramiko.SSHClient, cmd: str, timeout: int = 900) -> str:
    print(f"\n>>> {cmd[:180]}{'...' if len(cmd) > 180 else ''}")
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
    safe = out.encode("ascii", errors="replace").decode("ascii")
    print(safe[-5000:] if len(safe) > 5000 else safe)
    if err.strip():
        print(err[-1500:])
    if code != 0:
        raise RuntimeError(f"Exit {code} for: {cmd}")
    return out


def main() -> None:
    if not PASSWORD:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=PASSWORD, timeout=30)
    run(
        client,
        f"""set -euo pipefail
cd {APP_DIR}
git fetch origin main
git reset --hard origin/main
if [ -f .env ]; then set -a; . ./.env; set +a; fi
export VITE_API_URL="${{VITE_API_URL:-https://api.radeski.uz}}"
npm run build
nginx -t
systemctl reload nginx
echo DEPLOY_OK
git log -1 --oneline
""",
        timeout=900,
    )
    client.close()
    print("Done.")


if __name__ == "__main__":
    main()
