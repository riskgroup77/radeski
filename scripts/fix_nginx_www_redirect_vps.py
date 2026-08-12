#!/usr/bin/env python3
"""Patch nginx: redirect www.radeski.uz -> radeski.uz (apex canonical)."""
from __future__ import annotations

import os
import sys
import time

import paramiko

HOST = os.environ.get("RADESKI_DEPLOY_HOST", "161.35.107.0")
USER = os.environ.get("RADESKI_DEPLOY_USER", "root")
PASSWORD = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
DOMAIN = "radeski.uz"
CONF = f"/etc/nginx/sites-available/{DOMAIN}"


def run(client: paramiko.SSHClient, cmd: str, timeout: int = 120) -> str:
    print(f"\n>>> {cmd[:160]}")
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
    print(out[-3000:] if len(out) > 3000 else out)
    if err.strip():
        print(err[-800:])
    if code != 0:
        raise RuntimeError(f"Exit {code}: {cmd}")
    return out


def main() -> None:
    if not PASSWORD:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    patch = r'''
from pathlib import Path
p = Path("/etc/nginx/sites-available/radeski.uz")
text = p.read_text()
marker = "server_name radeski.uz www.radeski.uz;"
if "www_redirect_ok" in text:
    print("ALREADY_OK")
else:
    # Insert dedicated www -> apex redirect server blocks before first server {
    redirect = """# www_redirect_ok
server {
    listen 80;
    listen [::]:80;
    server_name www.radeski.uz;
    return 301 https://radeski.uz$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.radeski.uz;
    ssl_certificate /etc/letsencrypt/live/radeski.uz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/radeski.uz/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    return 301 https://radeski.uz$request_uri;
}

"""
    idx = text.find("server {")
    if idx == -1:
        raise SystemExit("no server block")
    text = redirect + text
    # Apex server_name should be apex only when possible
    text = text.replace(marker, "server_name radeski.uz;", 1)
    p.write_text(text)
    print("PATCHED")
'''

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=PASSWORD, timeout=30)
    run(client, f"python3 - <<'PY'\n{patch}\nPY")
    run(client, "nginx -t")
    run(client, "systemctl reload nginx")
    run(client, "curl -sI https://www.radeski.uz/ | head -8")
    client.close()
    print("Done.")


if __name__ == "__main__":
    main()
