#!/usr/bin/env python3
"""Install /phothera-embed/ nginx reverse proxy on VPS (strips X-Frame-Options)."""
from __future__ import annotations

import os
import sys
import time

import paramiko

HOST = os.environ.get("RADESKI_DEPLOY_HOST", "161.35.107.0")
USER = os.environ.get("RADESKI_DEPLOY_USER", "root")
PASSWORD = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
CONF = "/etc/nginx/sites-available/radeski.uz"

SNIPPET = r"""
    # Phothera about-phototherapy embed (same-origin iframe from SPA)
    location /phothera-embed/ {
        proxy_pass https://www.phothera.com/;
        proxy_ssl_server_name on;
        proxy_set_header Host www.phothera.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Accept-Encoding "";
        proxy_hide_header X-Frame-Options;
        proxy_hide_header Content-Security-Policy;
        proxy_hide_header Content-Security-Policy-Report-Only;
        sub_filter_types text/html text/css;
        sub_filter_once off;
        sub_filter 'href="/' 'href="/phothera-embed/';
        sub_filter "href='/" "href='/phothera-embed/";
        sub_filter 'src="/' 'src="/phothera-embed/';
        sub_filter "src='/" "src='/phothera-embed/";
        sub_filter 'https://www.phothera.com/' '/phothera-embed/';
        sub_filter 'https://phothera.com/' '/phothera-embed/';
    }
"""


def run(client: paramiko.SSHClient, cmd: str, timeout: int = 120) -> str:
    _, stdout, stderr = client.exec_command(cmd, get_pty=True, timeout=timeout)
    out = stdout.read().decode("utf-8", "replace")
    err = stderr.read().decode("utf-8", "replace")
    code = stdout.channel.recv_exit_status()
    if code != 0:
        raise RuntimeError(f"exit {code}: {cmd}\n{out}\n{err}")
    return out


def main() -> None:
    if not PASSWORD:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=PASSWORD, timeout=30)

    current = run(client, f"cat {CONF}")
    if "location /phothera-embed/" in current:
        print("nginx phothera-embed already present")
    else:
        # Insert before the SPA try_files / location / block fallback — after server { markers
        # Prefer inserting just before "location / {" that serves the SPA.
        marker = "    location / {"
        if marker not in current:
            raise SystemExit("Could not find SPA location / in nginx conf")
        updated = current.replace(marker, SNIPPET + "\n" + marker, 1)
        remote_tmp = "/tmp/radeski.uz.phothera.conf"
        sftp = client.open_sftp()
        with sftp.file(remote_tmp, "w") as f:
            f.write(updated)
        sftp.close()
        run(client, f"cp {CONF} {CONF}.bak.$(date +%s) && mv {remote_tmp} {CONF}")
        print("nginx conf updated")

    out = run(client, "nginx -t && systemctl reload nginx")
    print(out)
    # smoke
    smoke = run(
        client,
        "curl -sk -o /dev/null -w '%{http_code}' "
        "-H 'Host: radeski.uz' https://127.0.0.1/phothera-embed/about-phototherapy/",
    )
    print("embed http", smoke.strip())
    client.close()


if __name__ == "__main__":
    main()
