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
    "src/config/googleReviews.ts",
    "src/utils/googleReviewMeta.ts",
    "src/data/sitePagesContent.ts",
    "src/api/cmsMappers.ts",
    "src/components/CustomerReviewsSection.tsx",
    "src/components/AdminPanel.tsx",
    "server/googlePlacesClient.ts",
    "server/syncGoogleReviews.ts",
    "server/googleReviewsSyncHandler.ts",
    "server/expressServer.ts",
    "scripts/syncGoogleReviewsToApi.ts",
    "scripts/setup_google_reviews_cron_vps.py",
    "package.json",
    ".env.example",
]


def main() -> None:
    if not PWD:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=PWD, timeout=30)

    sftp = client.open_sftp()
    for rel in FILES:
        local = ROOT / rel
        if not local.exists():
            print(f"Skip missing {rel}")
            continue
        remote = f"{APP}/{rel.replace(chr(92), '/')}"
        sftp.put(str(local), remote)
        print(f"Uploaded {rel}")
    sftp.close()

    _, stdout, _ = client.exec_command(
        f"cd {APP} && export VITE_API_URL=https://api.radeski.uz && npm run build && nginx -t && systemctl reload nginx && echo GOOGLE_REVIEWS_SYNC_DEPLOY_OK",
        get_pty=True,
        timeout=600,
    )
    out = stdout.read().decode("utf-8", errors="replace")
    print(out.encode("ascii", errors="replace").decode("ascii")[-3500:])
    code = stdout.channel.recv_exit_status()
    client.close()
    if code != 0:
        sys.exit(code)


if __name__ == "__main__":
    main()
