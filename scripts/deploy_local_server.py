#!/usr/bin/env python3
"""Deploy latest radeski frontend to local server (192.168.0.101)."""
from __future__ import annotations

import os
import sys
import time

import paramiko

HOST = os.environ.get("RADESKI_DEPLOY_HOST", "192.168.0.101")
USER = os.environ.get("RADESKI_DEPLOY_USER", "admin_root")
PASSWORD = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
REPO = "https://github.com/riskgroup77/radeski.git"
DEPLOY_DIR = "/home/admin_root/radeski-deploy"
TARGET = "/home/radeski-skin-clinic/radeski-skin-clinic"


def run(client: paramiko.SSHClient, cmd: str, timeout: int = 1200) -> str:
    print(f"\n>>> {cmd[:200]}{'...' if len(cmd) > 200 else ''}")
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
    print(safe[-8000:] if len(safe) > 8000 else safe)
    if err.strip():
        print(err[-1500:])
    if code != 0:
        raise RuntimeError(f"Exit {code} for: {cmd}")
    return out


def main() -> None:
    if not PASSWORD:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    # Escape single quotes in password for bash
    pwd_esc = PASSWORD.replace("'", "'\"'\"'")

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=PASSWORD, timeout=30)

    script = f"""
set -euo pipefail
DEPLOY_DIR="{DEPLOY_DIR}"
TARGET="{TARGET}"
SUDO_PASS='{pwd_esc}'

mkdir -p "$DEPLOY_DIR"
if [ ! -d "$DEPLOY_DIR/.git" ]; then
  git clone {REPO} "$DEPLOY_DIR"
fi
cd "$DEPLOY_DIR"
git fetch origin main
git reset --hard origin/main
git log -1 --oneline

export VITE_API_URL="${{VITE_API_URL:-https://api.radeski.uz}}"
npm ci --no-audit --no-fund
npm run build

# Serve static SPA on :3011 (nginx proxies radeski.devflix.uz here)
pm2 delete radeski 2>/dev/null || true
fuser -k 3011/tcp 2>/dev/null || true
cd "$DEPLOY_DIR/dist"
pm2 start npx --name radeski -- serve -s . -l 3011
pm2 save 2>/dev/null || true
sleep 2
curl -sI http://127.0.0.1:3011/ | head -5
echo DEPLOY_LOCAL_OK
git log -1 --oneline
"""

    run(client, script.strip(), timeout=1800)
    client.close()
    print("\nLocal server deploy finished.")


if __name__ == "__main__":
    main()
