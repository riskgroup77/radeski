#!/usr/bin/env python3
"""Point radeski.uz nginx /api/ + /uploads/ at the local API backend, then rebuild."""
import os
import re
import sys
import textwrap

import paramiko

HOST = "161.35.107.0"
USER = "root"
APP_DIR = "/var/www/radeski"
# Backend that serves api.radeski.uz on this same VPS
API_UPSTREAM = "http://127.0.0.1:8003"

NGINX_PATCH = textwrap.dedent(
    f"""
    from pathlib import Path
    import re
    import shutil

    p = Path('/etc/nginx/sites-available/radeski.uz')
    text = p.read_text()
    shutil.copy(p, str(p) + '.bak')

    api_block = '''    location ^~ /api/ {{
            proxy_pass {API_UPSTREAM};
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto https;
            proxy_set_header Connection "";
            proxy_read_timeout 300s;
            proxy_send_timeout 300s;
            client_max_body_size 200M;
        }}
    '''

    uploads_block = '''    location ^~ /uploads/ {{
            proxy_pass {API_UPSTREAM};
            proxy_http_version 1.1;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto https;
            proxy_set_header Connection "";
            proxy_read_timeout 300s;
            expires 7d;
            add_header Cache-Control "public";
        }}
    '''

    # Replace the whole existing /api/ prefix block (keeps the exact-match chat blocks intact)
    text, n = re.subn(
        r'[ \\t]*location \\^?~?[ \\t]*/api/ \\{{[^}}]*\\}}\\n',
        api_block,
        text,
        count=1,
    )
    if n == 0:
        raise SystemExit('ERROR: /api/ location block not found')

    if '/uploads/' not in text:
        text = text.replace(api_block, api_block + '\\n' + uploads_block, 1)

    p.write_text(text)
    print('nginx patched -> {API_UPSTREAM}')
    """
).strip()


def main() -> None:
    pwd = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
    if not pwd:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=pwd, timeout=30)

    remote = "\n".join(
        [
            "set -e",
            "python3 - <<'PYEOF'",
            NGINX_PATCH,
            "PYEOF",
            "nginx -t",
            "systemctl reload nginx",
            'echo "=== TEST ==="',
            'for ep in doctors services prices articles partners site-texts branches videos '
            'treatment-results clinic-ratings "reviews?published=true" stats/client-count; do '
            'code=$(curl -sk -o /dev/null -w "%{http_code}" --max-time 20 '
            '"https://radeski.uz/api/$ep"); echo "$ep -> $code"; done',
            'curl -sk -o /dev/null -w "chat-health -> %{http_code}\\n" https://radeski.uz/api/chat-health',
            "echo FIX_OK",
        ]
    )

    _, stdout, stderr = client.exec_command(remote, get_pty=True, timeout=300)
    out = stdout.read().decode("utf-8", errors="replace")
    err = stderr.read().decode("utf-8", errors="replace")
    print(out.encode("ascii", errors="replace").decode("ascii"))
    if err.strip():
        print(err.encode("ascii", errors="replace").decode("ascii"))
    client.close()


if __name__ == "__main__":
    main()
