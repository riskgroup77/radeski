#!/usr/bin/env python3
import os
import sys
from pathlib import Path

import paramiko

ROOT = Path(__file__).resolve().parents[1]
HOST = os.environ.get("RADESKI_DEPLOY_HOST", "161.35.107.0")
USER = os.environ.get("RADESKI_DEPLOY_USER", "root")
PWD = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
APP = "/var/www/radeski"
FILES = [
    "src/data/sitePagesContent.ts",
    "src/utils/treatmentResults.ts",
]


def connect(client: paramiko.SSHClient) -> None:
    if PWD:
        try:
            client.connect(HOST, username=USER, password=PWD, timeout=30)
            return
        except paramiko.ssh_exception.AuthenticationException:
            pass
    fallback = os.environ.get("RADESKI_DEPLOY_PASSWORD_FALLBACK", "")
    if fallback:
        client.connect(HOST, username=USER, password=fallback, timeout=30)
        return
    sys.exit(1)


def main() -> None:
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    connect(client)
    sftp = client.open_sftp()
    for rel in FILES:
        sftp.put(str(ROOT / rel), f"{APP}/{rel.replace(chr(92), '/')}")
        print(f"Uploaded {rel}")
    sftp.close()
    _, stdout, _ = client.exec_command(
        f"cd {APP} && export VITE_API_URL=https://api.radeski.uz && npm run build && nginx -t && systemctl reload nginx && echo REMOVE_THREE_OK",
        timeout=600,
    )
    print(stdout.read().decode("utf-8", errors="replace")[-2500:])
    client.close()


if __name__ == "__main__":
    main()
