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
    "src/data/articles/normalVsPathologicalHairLossRadeskiArticle.ts",
    "src/data.ts",
    "src/data/articleRichCatalog.ts",
    "src/seo/sitemapArticles.ts",
    "src/seo/pageMeta.ts",
    "src/utils/serviceRelatedArticles.ts",
    "public/sitemap.xml",
    "public/articles/normal-vs-pathological-hair-loss-radeski.webp",
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
    print("Set RADESKI_DEPLOY_PASSWORD or RADESKI_DEPLOY_PASSWORD_FALLBACK", file=sys.stderr)
    sys.exit(1)


def main() -> None:
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    connect(client)

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
        f"cd {APP} && export VITE_API_URL=https://api.radeski.uz && npm run build && nginx -t && systemctl reload nginx && echo HAIR_LOSS_ARTICLE_OK",
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
