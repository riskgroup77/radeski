"""Shared SSH helpers for the radeski.uz VPS scripts.

Authentication order:
  1. SSH key (RADESKI_DEPLOY_KEY or ~/.ssh/radeski_deploy_ed25519 — see setup_ssh_key_vps.py)
  2. RADESKI_DEPLOY_PASSWORD environment variable
  3. hidden password prompt (never echoed, never stored)

The server's host key is remembered in ~/.ssh/known_hosts on first contact and verified on
every later connection, so a spoofed server is detected instead of silently trusted.
"""
from __future__ import annotations

import getpass
import os
import sys
import time
from pathlib import Path

import paramiko

HOST = os.environ.get("RADESKI_DEPLOY_HOST", "161.35.107.0")
USER = os.environ.get("RADESKI_DEPLOY_USER", "root")
APP_DIR = "/var/www/radeski"
DEFAULT_KEY = Path.home() / ".ssh" / "radeski_deploy_ed25519"
KNOWN_HOSTS = Path.home() / ".ssh" / "known_hosts"


def _new_client() -> paramiko.SSHClient:
    client = paramiko.SSHClient()
    KNOWN_HOSTS.parent.mkdir(parents=True, exist_ok=True)
    KNOWN_HOSTS.touch(exist_ok=True)
    client.load_host_keys(str(KNOWN_HOSTS))
    # First contact: trust and remember the key; afterwards a changed key raises BadHostKeyException.
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    return client


def key_path() -> Path | None:
    configured = os.environ.get("RADESKI_DEPLOY_KEY")
    if configured:
        return Path(configured)
    return DEFAULT_KEY if DEFAULT_KEY.exists() else None


def connect_with_key(path: Path) -> paramiko.SSHClient:
    client = _new_client()
    client.connect(
        HOST, username=USER, key_filename=str(path), timeout=30, look_for_keys=False, allow_agent=False
    )
    client.save_host_keys(str(KNOWN_HOSTS))
    return client


def connect_with_password(password: str) -> paramiko.SSHClient:
    client = _new_client()
    client.connect(HOST, username=USER, password=password, timeout=30, look_for_keys=False, allow_agent=False)
    client.save_host_keys(str(KNOWN_HOSTS))
    return client


def ask_password() -> str:
    password = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
    if not password and sys.stdin.isatty():
        password = getpass.getpass(f"{USER}@{HOST} parol: ")
    if not password:
        sys.exit("Set RADESKI_DEPLOY_PASSWORD or set up an SSH key: python scripts/setup_ssh_key_vps.py")
    return password


def connect() -> paramiko.SSHClient:
    path = key_path()
    if path:
        try:
            return connect_with_key(path)
        except paramiko.AuthenticationException:
            print(f"SSH key {path} was rejected — falling back to password.", file=sys.stderr)
    return connect_with_password(ask_password())


def run(client: paramiko.SSHClient, cmd: str, timeout: int = 1800, check: bool = True) -> tuple[int, str]:
    """Run a remote command, streaming its output; raise on non-zero exit when check=True."""
    print(f"\n>>> {cmd.splitlines()[0][:160]}{' …' if len(cmd) > 160 or chr(10) in cmd else ''}")
    _, stdout, _ = client.exec_command(cmd, get_pty=True, timeout=timeout)
    channel = stdout.channel
    chunks: list[str] = []
    while True:
        if channel.recv_ready():
            text = channel.recv(65536).decode("utf-8", errors="replace")
            chunks.append(text)
            sys.stdout.write(text.encode("ascii", errors="replace").decode("ascii"))
            sys.stdout.flush()
        elif channel.exit_status_ready():
            break
        else:
            time.sleep(0.1)
    rest = stdout.read().decode("utf-8", errors="replace")
    if rest:
        chunks.append(rest)
        sys.stdout.write(rest.encode("ascii", errors="replace").decode("ascii"))
    code = channel.recv_exit_status()
    if check and code != 0:
        raise RuntimeError(f"Remote command failed with exit {code}")
    return code, "".join(chunks)


# Pull, back up server-side edits, install deps when needed, build (snapshot + article index +
# client + prerender), keep clinic videos, reload nginx.
DEPLOY_SCRIPT = f"""set -euo pipefail
cd {APP_DIR}
PREV=$(git rev-parse HEAD)
VIDEO_BACKUP="/tmp/radeski-videos-backup"
rm -rf "$VIDEO_BACKUP"
if [ -d public/videos ] && [ "$(ls -A public/videos 2>/dev/null)" ]; then
  cp -a public/videos "$VIDEO_BACKUP"
fi
git fetch origin main
BACKUP_DIR="/root/radeski-predeploy-backups/$(date +%Y%m%d-%H%M%S)"
if [ -n "$(git status --porcelain --untracked-files=no)" ]; then
  mkdir -p "$BACKUP_DIR"
  git diff HEAD > "$BACKUP_DIR/server-changes.patch"
  git status --porcelain > "$BACKUP_DIR/status.txt"
  echo "Server-side changes backed up to $BACKUP_DIR"
fi
git reset --hard origin/main
if [ -d "$VIDEO_BACKUP" ]; then
  mkdir -p public/videos
  cp -a "$VIDEO_BACKUP"/. public/videos/
  rm -rf "$VIDEO_BACKUP"
fi
if ! git diff --quiet "$PREV" HEAD -- package-lock.json || [ ! -x node_modules/.bin/tsx ] || [ ! -x node_modules/.bin/vite ]; then
  npm ci --include=dev --no-audit --no-fund
fi
if [ -f .env ]; then set -a; . ./.env; set +a; fi
export VITE_API_URL="${{VITE_API_URL:-https://api.radeski.uz}}"
npm run build
if [ -d public/videos ] && [ "$(ls -A public/videos 2>/dev/null)" ]; then
  mkdir -p dist/videos
  cp -a public/videos/. dist/videos/
fi
nginx -t
systemctl reload nginx
echo DEPLOY_OK
git log -1 --oneline
"""
