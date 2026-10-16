#!/usr/bin/env python3
"""VPS da Google sharxlar sinxronizatsiyasi uchun cron qo'shish."""
import os
import sys

import paramiko

HOST = os.environ.get("RADESKI_DEPLOY_HOST", "161.35.107.0")
USER = os.environ.get("RADESKI_DEPLOY_USER", "root")
PWD = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
CRON_LINE = (
    "0 */6 * * * cd /var/www/radeski && "
    "/usr/bin/npm run sync:google-reviews >> /var/log/radeski-google-reviews.log 2>&1"
)
MARKER = "radeski-google-reviews-sync"


def main() -> None:
    if not PWD:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=PWD, timeout=30)

    _, stdout, _ = client.exec_command("crontab -l 2>/dev/null || true", timeout=30)
    current = stdout.read().decode("utf-8", errors="replace")

    lines = [line for line in current.splitlines() if MARKER not in line and line.strip()]
    lines.append(f"{CRON_LINE} # {MARKER}")
    new_crontab = "\n".join(lines) + "\n"

    remote_tmp = "/tmp/radeski-crontab.txt"
    sftp = client.open_sftp()
    with sftp.file(remote_tmp, "w") as fh:
        fh.write(new_crontab)
    sftp.close()

    _, stdout, stderr = client.exec_command(f"crontab {remote_tmp} && rm -f {remote_tmp}", timeout=30)
    err = stderr.read().decode("utf-8", errors="replace")
    if err.strip():
        print(err, file=sys.stderr)

    _, stdout, _ = client.exec_command("crontab -l | grep radeski-google-reviews-sync || true", timeout=30)
    verify = stdout.read().decode("utf-8", errors="replace").strip()
    client.close()

    if verify:
        print("Cron installed:")
        print(verify)
    else:
        print("Cron install verification failed", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
