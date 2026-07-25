#!/usr/bin/env python3
"""Pull, build, restart — preserve DeepSeek key."""
import os
import sys

import paramiko

HOST = "161.35.107.0"
USER = "root"
APP_DIR = "/var/www/radeski"
API_URL = "https://api.radeski.uz"
DEEPSEEK_KEY = os.environ.get("RADESKI_DEEPSEEK_KEY", "")


def run(client, cmd, timeout=900):
    _, stdout, stderr = client.exec_command(cmd, get_pty=True, timeout=timeout)
    out = stdout.read().decode("utf-8", errors="replace")
    err = stderr.read().decode("utf-8", errors="replace")
    code = stdout.channel.recv_exit_status()
    try:
        print(out)
    except UnicodeEncodeError:
        print(out.encode("ascii", errors="replace").decode("ascii"))
    if err.strip():
        print(err)
    if code != 0:
        raise RuntimeError(f"exit {code}: {cmd[:120]}")
    return out


def main() -> None:
    pwd = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
    key = DEEPSEEK_KEY
    if not pwd or not key:
        print("Set RADESKI_DEPLOY_PASSWORD and RADESKI_DEEPSEEK_KEY", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=pwd, timeout=30)

    env_content = (
        f"VITE_API_URL={API_URL}\n"
        f"CHAT_SERVER_PORT=8787\n"
        f"PORT=8787\n"
        f"APP_URL=https://radeski.uz\n"
        f"DEEPSEEK_API_KEY={key}\n"
        f"DEEPSEEK_MODEL=deepseek-chat\n"
    )

    sftp = client.open_sftp()
    with sftp.file(f"{APP_DIR}/.env", "w") as f:
        f.write(env_content)
    sftp.close()

    run(client, f"cd {APP_DIR} && git fetch origin main && git reset --hard origin/main")
    run(client, f"cd {APP_DIR} && export VITE_API_URL={API_URL} && npm ci --no-audit --no-fund && npm run build")
    run(client, "nginx -t && systemctl reload nginx && systemctl restart radeski-chat")
    run(
        client,
        "sleep 2; curl -sk https://radeski.uz/api/chat-health; echo; "
        "curl -sk -X POST https://radeski.uz/api/chat -H 'Content-Type: application/json' "
        "-d '{\"locale\":\"uz\",\"messages\":[{\"role\":\"user\",\"content\":\"Salom\"}]}'; echo; "
        f"cd {APP_DIR} && git log -1 --oneline",
    )
    client.close()
    print("UPDATE_OK")


if __name__ == "__main__":
    main()
