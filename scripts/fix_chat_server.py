#!/usr/bin/env python3
"""Fix nginx chat proxy + DeepSeek key on VPS. Uses RADESKI_DEPLOY_PASSWORD env."""
import os
import sys
import textwrap

import paramiko

HOST = "161.35.107.0"
USER = "root"
APP_DIR = "/var/www/radeski"
DEEPSEEK_KEY = os.environ.get("RADESKI_DEEPSEEK_KEY", "")


def main() -> None:
    pwd = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
    key = DEEPSEEK_KEY or os.environ.get("RADESKI_DEEPSEEK_KEY", "")
    if not pwd:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)
    if not key:
        print("Set RADESKI_DEEPSEEK_KEY", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=pwd, timeout=30)

    script = textwrap.dedent(
        f"""
        set -euo pipefail
        cd {APP_DIR}

        # Ensure DeepSeek key in .env (do not echo key)
        grep -q '^DEEPSEEK_API_KEY=' {APP_DIR}/.env && \\
          sed -i 's/^DEEPSEEK_API_KEY=.*/DEEPSEEK_API_KEY={key}/' {APP_DIR}/.env || \\
          echo 'DEEPSEEK_API_KEY={key}' >> {APP_DIR}/.env
        grep -q '^DEEPSEEK_MODEL=' {APP_DIR}/.env || echo 'DEEPSEEK_MODEL=deepseek-chat' >> {APP_DIR}/.env

        python3 - <<'PY'
from pathlib import Path
import re
p = Path('/etc/nginx/sites-available/radeski.uz')
text = p.read_text()
# Replace broken chat proxy blocks
chat_block = '''    location = /api/chat {{
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
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }}'''
text = re.sub(
    r'\\s*location(?: =)? /api/chat\\s*\\{{[\\s\\S]*?\\}}\\s*\\n\\s*location(?: =)? /api/chat-health\\s*\\{{[\\s\\S]*?\\}}',
    '\\n' + chat_block + '\\n',
    text,
    count=1,
)
p.write_text(text)
PY

        nginx -t
        systemctl reload nginx
        systemctl restart radeski-chat
        sleep 2
        curl -sk https://radeski.uz/api/chat-health
        echo
        curl -sk -X POST https://radeski.uz/api/chat -H 'Content-Type: application/json' \\
          -d '{{"locale":"uz","messages":[{{"role":"user","content":"Salom"}}]}}'
        echo
        """
    ).strip()

    _, stdout, stderr = client.exec_command(script, get_pty=True, timeout=120)
    out = stdout.read().decode("utf-8", errors="replace")
    err = stderr.read().decode("utf-8", errors="replace")
    try:
        print(out)
    except UnicodeEncodeError:
        print(out.encode("ascii", errors="replace").decode("ascii"))
    if err.strip():
        print(err)
    client.close()


if __name__ == "__main__":
    main()
