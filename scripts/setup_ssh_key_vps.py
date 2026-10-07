#!/usr/bin/env python3
"""Switch radeski.uz deploys from the root password to an SSH key.

1. Creates ~/.ssh/radeski_deploy_ed25519 (if missing) with ssh-keygen.
2. Logs in once with the password and adds the public key to root's authorized_keys.
3. Verifies that a key-only login works.
4. With --disable-password-login: turns off SSH password logins (root may still log in with
   the key). Done only after step 3 succeeds, checked with `sshd -t`, verified again with
   the key, and rolled back automatically if anything fails — so you cannot lock yourself out.

Usage:
    python scripts/setup_ssh_key_vps.py
    python scripts/setup_ssh_key_vps.py --disable-password-login
"""
from __future__ import annotations

import argparse
import shutil
import subprocess
import sys

from vps_common import DEFAULT_KEY, ask_password, connect_with_key, connect_with_password, run

# sshd uses the FIRST value it reads and includes sshd_config.d/*.conf in name order, so
# "00-" makes this win over e.g. 50-cloud-init.conf (which often enables password logins).
HARDENING_FILE = "/etc/ssh/sshd_config.d/00-radeski-hardening.conf"


def ensure_local_key() -> str:
    if not DEFAULT_KEY.exists():
        if not shutil.which("ssh-keygen"):
            sys.exit("ssh-keygen not found — install OpenSSH Client (Windows: Settings → Optional features).")
        DEFAULT_KEY.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(
            ["ssh-keygen", "-t", "ed25519", "-N", "", "-C", "radeski-deploy", "-f", str(DEFAULT_KEY)],
            check=True,
        )
        print(f"Created {DEFAULT_KEY}")
    return DEFAULT_KEY.with_suffix(".pub").read_text().strip()


def verify_key_login() -> bool:
    try:
        client = connect_with_key(DEFAULT_KEY)
        code, _ = run(client, "echo KEY_LOGIN_OK", check=False)
        client.close()
        return code == 0
    except Exception as error:  # noqa: BLE001
        print(f"Key login failed: {error}", file=sys.stderr)
        return False


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--disable-password-login", action="store_true")
    args = parser.parse_args()

    public_key = ensure_local_key()
    client = connect_with_password(ask_password())
    try:
        run(
            client,
            "mkdir -p /root/.ssh && chmod 700 /root/.ssh && touch /root/.ssh/authorized_keys && "
            "chmod 600 /root/.ssh/authorized_keys && "
            f"(grep -qxF '{public_key}' /root/.ssh/authorized_keys || echo '{public_key}' >> /root/.ssh/authorized_keys) && "
            "echo KEY_INSTALLED",
        )

        if not verify_key_login():
            sys.exit("The key was installed but key login does not work — password login left enabled.")
        print("\nKey login works. Future deploys will use it automatically.")

        if args.disable_password_login:
            # Keep this password session open while switching, as a safety net.
            run(
                client,
                f"printf 'PasswordAuthentication no\\nKbdInteractiveAuthentication no\\nPermitRootLogin prohibit-password\\n' > {HARDENING_FILE} && "
                "sshd -t && (systemctl reload ssh || systemctl reload sshd)",
            )
            if verify_key_login():
                print("\nSSH password login is now disabled; root logs in with the key only.")
            else:
                run(client, f"rm -f {HARDENING_FILE} && (systemctl reload ssh || systemctl reload sshd)", check=False)
                sys.exit("Key login failed after hardening — change rolled back, password login still enabled.")
    finally:
        client.close()


if __name__ == "__main__":
    main()
