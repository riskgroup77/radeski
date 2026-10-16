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
    "src/data/articles/photoFinderDiagnostikaRadeskiArticle.ts",
    "src/data/articles/dnevnojStacionarRadeskiArticle.ts",
    "src/data/articles/immunobiologiyaTerapiyaRadeskiArticle.ts",
    "src/data/articles/konturnayaGubyRadeskiArticle.ts",
    "src/data/articles/sochTokilishiProfilaktikaRadeskiArticle.ts",
    "src/data.ts",
    "src/data/articleRichCatalog.ts",
    "src/seo/sitemapArticles.ts",
    "src/utils/serviceRelatedArticles.ts",
    "public/sitemap.xml",
    "public/services/in-ekcionnaya/konturnaya.jpg",
    "public/karusel/soch-mezoterapiya.jpg",
    "public/services/dermatologiya/immunobiologicheskaya.jpg",
    "public/services/dermatoskopiya/skin-passport.jpg",
    "public/brand/brand-medical.webp",
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
        f"cd {APP} && export VITE_API_URL=https://api.radeski.uz && npm run build && nginx -t && systemctl reload nginx && echo FIVE_ARTICLES_OK",
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
