#!/usr/bin/env python3
"""Upload changed source file(s) and rebuild on VPS."""
import os
import sys

import paramiko

HOST = "161.35.107.0"
USER = "root"
APP_DIR = "/var/www/radeski"
API_URL = "https://api.radeski.uz"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

DEFAULT_FILES = ["src/components/ClinicAdvantagesCards.tsx"]


def main() -> None:
    pwd = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
    key = os.environ.get("RADESKI_DEEPSEEK_KEY", "")
    if not pwd:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    rel_paths = sys.argv[1:] if len(sys.argv) > 1 else DEFAULT_FILES

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=pwd, timeout=30)

    sftp = client.open_sftp()
    for rel in rel_paths:
        local_file = os.path.join(ROOT, rel.replace("/", os.sep))
        remote_file = f"{APP_DIR}/{rel.replace(chr(92), '/')}"
        remote_dir = remote_file.rsplit("/", 1)[0]
        client.exec_command(f"mkdir -p {remote_dir}")
        sftp.put(local_file, remote_file)
        print(f"Uploaded {rel}")
    if key:
        env = (
            f"VITE_API_URL=\n"
            f"CHAT_SERVER_PORT=8787\n"
            f"PORT=8787\n"
            f"APP_URL=https://radeski.uz\n"
            f"DEEPSEEK_API_KEY={key}\n"
            f"DEEPSEEK_MODEL=deepseek-chat\n"
        )
        with sftp.file(f"{APP_DIR}/.env", "w") as f:
            f.write(env)
    sftp.close()

    _, stdout, stderr = client.exec_command(
        f"cd {APP_DIR} && export VITE_API_URL= && npm run build",
        get_pty=True,
        timeout=300,
    )
    out = stdout.read().decode("utf-8", errors="replace")
    err = stderr.read().decode("utf-8", errors="replace")
    try:
        print(out[-3000:])
    except UnicodeEncodeError:
        print(out[-3000:].encode("ascii", errors="replace").decode("ascii"))
    if err.strip():
        print(err)
    code = stdout.channel.recv_exit_status()
    client.close()
    if code != 0:
        sys.exit(code)
    print("DEPLOY_OK")


if __name__ == "__main__":
    main()
