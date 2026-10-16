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
PUBLIC_DIRS = ["public/services/apparatnaya", "public/daavlin", "public/articles"]

FILES = [
    "src/data/clinicEquipmentCatalog.ts",
    "src/data/clinicEquipmentImages.ts",
    "src/utils/clinicEquipmentRoutes.ts",
    "src/utils/equipmentRelatedContent.ts",
    "src/utils/serviceNavFlyout.ts",
    "src/components/EquipmentDetailPanel.tsx",
    "src/components/EquipmentDetailContent.tsx",
    "src/components/ClinicEquipmentPage.tsx",
    "src/components/ClinicEquipmentSection.tsx",
    "src/components/ServiceRelatedResultsSection.tsx",
    "src/components/ServiceRelatedVideosSection.tsx",
    "src/components/ServiceRelatedArticlesSection.tsx",
    "src/App.tsx",
    "src/data/clinicEquipmentCatalog.ts",
    "src/data/clinicEquipmentImages.ts",
    "src/routing/paths.ts",
    "src/seo/sitemapRedirectRules.ts",
    "public/sitemap.xml",
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
        remote = f"{APP}/{rel.replace(chr(92), '/')}"
        sftp.put(str(local), remote)
        print(f"Uploaded {rel}")
    def ensure_remote_dir(path: str) -> None:
        parts = path.strip("/").split("/")
        current = ""
        for part in parts:
            current = f"{current}/{part}"
            try:
                sftp.stat(current)
            except OSError:
                sftp.mkdir(current)

    for rel_dir in PUBLIC_DIRS:
        local_dir = ROOT / rel_dir
        remote_dir = f"{APP}/{rel_dir.replace(chr(92), '/')}"
        ensure_remote_dir(remote_dir)
        for local_file in local_dir.glob("*"):
            if local_file.is_file():
                remote = f"{remote_dir}/{local_file.name}"
                sftp.put(str(local_file), remote)
                print(f"Uploaded {rel_dir}/{local_file.name}")

    sftp.close()

    _, stdout, _ = client.exec_command(
        f"cd {APP} && export VITE_API_URL=https://api.radeski.uz && npm run build && nginx -t && systemctl reload nginx && echo EQUIPMENT_PAGES_OK",
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
