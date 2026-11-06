"""Shared SSH helpers for the radeski.uz VPS scripts.

Authentication order:
  1. SSH key (RADESKI_DEPLOY_KEY or ~/.ssh/radeski_deploy_ed25519 — see setup_ssh_key_vps.py)
  2. RADESKI_DEPLOY_PASSWORD environment variable
  3. hidden password prompt (never echoed, never stored)

The server's host key is remembered in ~/.ssh/known_hosts on first contact and verified on
every later connection, so a spoofed server is detected instead of silently trusted.
"""
from __future__ import annotations

import codecs
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


_session_password: str | None = None


def connect() -> paramiko.SSHClient:
    """Connect by key or password; a password typed once is reused for reconnects in this process."""
    global _session_password
    path = key_path()
    if path:
        try:
            client = connect_with_key(path)
        except paramiko.AuthenticationException:
            print(f"SSH key {path} was rejected — falling back to password.", file=sys.stderr)
            path = None
    if not path:
        if _session_password is None:
            _session_password = ask_password()
        client = connect_with_password(_session_password)
    # Keepalives stop routers and NAT from dropping a connection that is quiet during a long build.
    transport = client.get_transport()
    if transport:
        transport.set_keepalive(15)
    return client


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


REMOTE_LOG_DIR = "/var/log/radeski-deploy"
_CONNECTION_ERRORS = (OSError, EOFError, paramiko.SSHException)


def _quiet_exec(client: paramiko.SSHClient, cmd: str) -> bytes:
    _, stdout, _ = client.exec_command(cmd, timeout=60)
    return stdout.read()


def run_detached(client: paramiko.SSHClient, script: str, timeout: int = 3600) -> paramiko.SSHClient:
    """Run a long script on the server in the background and follow its log.

    The script does not depend on this SSH connection: when the connection drops (Windows
    error 10054, a Wi-Fi switch, a sleeping laptop) the build keeps going on the server and
    this function reconnects and continues showing the log from where it stopped.
    Returns the client that is connected at the end (it may be a new one).
    """
    name = time.strftime("%Y%m%d-%H%M%S")
    script_path = f"{REMOTE_LOG_DIR}/{name}.sh"
    log_path = f"{REMOTE_LOG_DIR}/{name}.log"
    exit_path = f"{REMOTE_LOG_DIR}/{name}.exit"

    _quiet_exec(client, f"mkdir -p {REMOTE_LOG_DIR} && find {REMOTE_LOG_DIR} -type f -mtime +14 -delete")
    with client.open_sftp() as sftp:
        with sftp.open(script_path, "w") as fh:
            fh.write(script)
    _quiet_exec(
        client,
        f"setsid nohup bash -c 'bash {script_path}; echo $? > {exit_path}' > {log_path} 2>&1 < /dev/null &",
    )
    print(f"\n>>> started on the server; log: {log_path}")

    decoder = codecs.getincrementaldecoder("utf-8")(errors="replace")
    offset = 0
    failures = 0
    deadline = time.monotonic() + timeout
    while True:
        try:
            chunk = _quiet_exec(client, f"tail -c +{offset + 1} {log_path}")
            offset += len(chunk)
            if chunk:
                sys.stdout.write(decoder.decode(chunk).encode("ascii", errors="replace").decode("ascii"))
                sys.stdout.flush()
            status = _quiet_exec(client, f"cat {exit_path} 2>/dev/null").strip()
            failures = 0
        except _CONNECTION_ERRORS as error:
            failures += 1
            if failures > 20:
                raise RuntimeError(
                    f"Lost the connection to the server ({error}). The deploy is still running there; "
                    f"its log is {log_path}."
                ) from error
            print(f"\n[connection lost: {error} - reconnecting in 10 s, the server keeps building]", flush=True)
            time.sleep(10)
            try:
                client.close()
                client = connect()
            except _CONNECTION_ERRORS:
                pass
            continue
        if status and not chunk:
            code = int(status)
            if code != 0:
                raise RuntimeError(f"Remote command failed with exit {code} (log: {log_path})")
            return client
        if time.monotonic() > deadline:
            raise RuntimeError(f"The deploy took longer than {timeout} s; it may still be running (log: {log_path})")
        time.sleep(2)


# Pull, back up server-side edits, install deps when needed, build (snapshot + article index +
# client + prerender), keep clinic videos, reload nginx.
DEPLOY_SCRIPT = f"""set -euo pipefail
# Same lock as scripts/server/nightly_build.sh — wait for a running nightly build to finish.
exec 9>/var/lock/radeski-build.lock
flock -w 1200 9 || {{ echo "Another build is still running — try again later"; exit 1; }}
cd {APP_DIR}
PREV=$(git rev-parse HEAD)
VIDEO_BACKUP="/tmp/radeski-videos-backup"
rm -rf "$VIDEO_BACKUP"
if [ -d public/videos ] && [ "$(ls -A public/videos 2>/dev/null)" ]; then
  cp -a public/videos "$VIDEO_BACKUP"
fi
git fetch origin main
BACKUP_DIR="/root/radeski-predeploy-backups/$(date +%Y%m%d-%H%M%S)"
# Rewritten by every build (covers for newly uploaded videos) — not a manual server edit.
git checkout -- public/video-thumbs/index.json 2>/dev/null || true
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
# Notify Yandex/Bing (IndexNow) about pages whose content changed in this deploy.
export INDEXNOW=1
npm run build
if [ -d public/videos ] && [ "$(ls -A public/videos 2>/dev/null)" ]; then
  mkdir -p dist/videos
  cp -a public/videos/. dist/videos/
fi
# SEO 301 maps from the repo (nginx/*.map.conf) replace the installed ones when they changed;
# a map that breaks `nginx -t` is put back.
for MAP in radeski-article-redirects.map.conf radeski-site-redirects.map.conf; do
  if [ -f "nginx/$MAP" ] && [ -f "/etc/nginx/conf.d/$MAP" ] && ! cmp -s "nginx/$MAP" "/etc/nginx/conf.d/$MAP"; then
    cp "/etc/nginx/conf.d/$MAP" "/tmp/$MAP.bak"
    cp "nginx/$MAP" "/etc/nginx/conf.d/$MAP"
    if nginx -t 2>/dev/null; then
      echo "Updated /etc/nginx/conf.d/$MAP"
    else
      cp "/tmp/$MAP.bak" "/etc/nginx/conf.d/$MAP"
      echo "WARNING: nginx/$MAP failed nginx -t — kept the installed map"
    fi
  fi
done
nginx -t
systemctl reload nginx
# Renews only certificates within 30 days of expiry (backs up the certbot timer).
if command -v certbot >/dev/null; then
  certbot renew --quiet --no-random-sleep-on-renew || echo "WARNING: certbot renew failed — check: certbot certificates"
  certbot certificates 2>/dev/null | grep -E "Domains|Expiry" || true
fi
echo DEPLOY_OK
git log -1 --oneline
"""
