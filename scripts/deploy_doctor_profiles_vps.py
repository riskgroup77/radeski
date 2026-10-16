#!/usr/bin/env python3
"""Deploy the six detailed doctor profiles (commit a83fb35) to the VPS.

Before uploading, each existing server file is compared with its version from the
previous commit; if the server copy was changed separately, nothing is uploaded.

Usage (PowerShell):
  $env:RADESKI_DEPLOY_PASSWORD = "<parol>"
  python scripts/deploy_doctor_profiles_vps.py
"""
import hashlib
import os
import subprocess
import sys
from pathlib import Path

import paramiko

ROOT = Path(__file__).resolve().parents[1]
HOST = os.environ.get("RADESKI_DEPLOY_HOST", "161.35.107.0")
USER = os.environ.get("RADESKI_DEPLOY_USER", "root")
PWD = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
APP = "/var/www/radeski"
BASE_COMMIT = "a83fb35~1"

CHANGED = [
    "src/components/DoctorPage.tsx",
    "src/data/doctorProfiles.ts",
    "src/prerender/entry.tsx",
    "src/types.ts",
]
NEW = [
    "src/data/doctors/mangasaryanLorenaProfile.ts",
    "src/data/doctors/abduvaliyevBegaliProfile.ts",
    "src/data/doctors/yoqubovFarruxProfile.ts",
    "src/data/doctors/kamolovaBarnoProfile.ts",
    "src/data/doctors/karimovaIrodaProfile.ts",
    "src/data/doctors/baxriddinovZuxriddinProfile.ts",
]


def normalized_md5(data: bytes) -> str:
    return hashlib.md5(data.replace(b"\r\n", b"\n")).hexdigest()


def base_md5(rel: str) -> str:
    data = subprocess.run(
        ["git", "show", f"{BASE_COMMIT}:{rel}"], cwd=ROOT, capture_output=True, check=True
    ).stdout
    return normalized_md5(data)


def main() -> None:
    if not PWD:
        print("Set RADESKI_DEPLOY_PASSWORD", file=sys.stderr)
        sys.exit(1)

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    client.connect(HOST, username=USER, password=PWD, timeout=30)
    sftp = client.open_sftp()

    drifted = []
    for rel in CHANGED:
        with sftp.open(f"{APP}/{rel}", "rb") as remote:
            if normalized_md5(remote.read()) != base_md5(rel):
                drifted.append(rel)
    if drifted:
        print("Server copies differ from the previous commit — not uploading:", file=sys.stderr)
        for rel in drifted:
            print(f"  {rel}", file=sys.stderr)
        sftp.close()
        client.close()
        sys.exit(2)

    try:
        sftp.stat(f"{APP}/src/data/doctors")
    except FileNotFoundError:
        sftp.mkdir(f"{APP}/src/data/doctors")

    for rel in CHANGED + NEW:
        sftp.put(str(ROOT / rel), f"{APP}/{rel}")
        print(f"Uploaded {rel}")
    sftp.close()

    _, stdout, _ = client.exec_command(
        f"cd {APP} && export VITE_API_URL=https://api.radeski.uz && npm run build && nginx -t && systemctl reload nginx && echo DOCTOR_PROFILES_OK",
        get_pty=True,
        timeout=900,
    )
    out = stdout.read().decode("utf-8", errors="replace")
    print(out.encode("ascii", errors="replace").decode("ascii")[-3500:])
    code = stdout.channel.recv_exit_status()
    client.close()
    if code != 0:
        sys.exit(code)


if __name__ == "__main__":
    main()
