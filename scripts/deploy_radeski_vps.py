#!/usr/bin/env python3
"""One-time VPS deploy for radeski.uz — do not commit with credentials."""
from __future__ import annotations

import os
import sys
import textwrap
import time

import paramiko

HOST = os.environ.get("RADESKI_DEPLOY_HOST", "161.35.107.0")
USER = os.environ.get("RADESKI_DEPLOY_USER", "root")
PASSWORD = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
REPO = "https://github.com/riskgroup77/radeski.git"
APP_DIR = "/var/www/radeski"
API_URL = "https://api.radeski.uz"
DOMAIN = "radeski.uz"


def run(client: paramiko.SSHClient, cmd: str, timeout: int = 900) -> str:
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
    # Avoid Windows console encoding errors
    safe = out.encode("utf-8", errors="replace").decode("utf-8", errors="replace")
    try:
        print(safe[-4000:] if len(safe) > 4000 else safe)
    except UnicodeEncodeError:
        print(safe.encode("ascii", errors="replace").decode("ascii"))
    if err.strip():
        print(err[-2000:])
    if code != 0:
        raise RuntimeError(f"Exit {code} for: {cmd}")
    return out


def main() -> None:
    pwd = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
    if not pwd:
        print("Set RADESKI_DEPLOY_PASSWORD environment variable.", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=pwd, timeout=30)

    bootstrap = textwrap.dedent(
        f"""
        set -euo pipefail
        export DEBIAN_FRONTEND=noninteractive
        apt-get update -qq
        apt-get install -y -qq git curl ca-certificates nginx certbot python3-certbot-nginx

        if ! command -v node >/dev/null 2>&1; then
          curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
          apt-get install -y -qq nodejs
        fi

        node -v
        npm -v
        nginx -v

        mkdir -p {APP_DIR}
        if [ ! -d {APP_DIR}/.git ]; then
          git clone {REPO} {APP_DIR}
        fi
        cd {APP_DIR}
        git fetch origin main
        git reset --hard origin/main

        cat > {APP_DIR}/.env <<'ENVEOF'
        VITE_API_URL={API_URL}
        CHAT_SERVER_PORT=8787
        PORT=8787
        APP_URL=https://{DOMAIN}
        ENVEOF
        sed -i 's/^        //' {APP_DIR}/.env

        cd {APP_DIR}
        export VITE_API_URL={API_URL}
        npm ci --no-audit --no-fund
        npm run build

        cat > /etc/nginx/sites-available/{DOMAIN} <<'NGINXEOF'
        server {{
            listen 80;
            listen [::]:80;
            server_name {DOMAIN} www.{DOMAIN};

            root {APP_DIR}/dist;
            index index.html;

            gzip on;
            gzip_types text/plain text/css application/json application/javascript text/xml application/xml image/svg+xml;
            gzip_min_length 256;

            location = /api/chat {{
                proxy_pass http://127.0.0.1:8787/api/chat;
                proxy_http_version 1.1;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
                proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                proxy_set_header X-Forwarded-Proto $scheme;
                proxy_read_timeout 120s;
            }}

            location = /api/chat-health {{
                proxy_pass http://127.0.0.1:8787/api/chat/health;
                proxy_http_version 1.1;
                proxy_set_header Host $host;
                proxy_set_header X-Real-IP $remote_addr;
            }}

            location / {{
                try_files $uri $uri/ /index.html;
            }}

            location ~* \\.(?:js|css|png|jpg|jpeg|gif|webp|svg|ico|woff2?)$ {{
                expires 7d;
                add_header Cache-Control "public, immutable";
                try_files $uri =404;
            }}
        }}
        NGINXEOF
        sed -i 's/^        //' /etc/nginx/sites-available/{DOMAIN}

        ln -sf /etc/nginx/sites-available/{DOMAIN} /etc/nginx/sites-enabled/{DOMAIN}
        rm -f /etc/nginx/sites-enabled/default
        nginx -t
        systemctl enable nginx
        systemctl reload nginx

        cat > /etc/systemd/system/radeski-chat.service <<'SVCEOF'
        [Unit]
        Description=Radeski clinic AI chat API
        After=network.target

        [Service]
        Type=simple
        WorkingDirectory={APP_DIR}
        EnvironmentFile={APP_DIR}/.env
        ExecStart=/usr/bin/npm start
        Restart=always
        RestartSec=4

        [Install]
        WantedBy=multi-user.target
        SVCEOF
        sed -i 's/^        //' /etc/systemd/system/radeski-chat.service

        systemctl daemon-reload
        systemctl enable radeski-chat
        systemctl restart radeski-chat
        systemctl status radeski-chat --no-pager | head -15

        DIGIP=$(dig +short {DOMAIN} A | head -1 || true)
        echo "DNS A for {DOMAIN}: $DIGIP"
        if [ "$DIGIP" = "{HOST}" ]; then
          certbot --nginx -d {DOMAIN} -d www.{DOMAIN} --non-interactive --agree-tos -m admin@{DOMAIN} --redirect || true
          systemctl reload nginx
        else
          echo "SKIP_SSL: point {DOMAIN} A record to {HOST} then run certbot"
        fi

        echo DEPLOY_OK
        curl -sI http://127.0.0.1 -H "Host: {DOMAIN}" | head -5
        """
    ).strip()

    run(client, bootstrap, timeout=1800)
    client.close()
    print("\nDeploy finished.")


if __name__ == "__main__":
    main()
