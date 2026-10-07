#!/usr/bin/env python3
"""Pull latest main and rebuild radeski.uz on the VPS (code deploy only).

Authentication: SSH key (see setup_ssh_key_vps.py), RADESKI_DEPLOY_PASSWORD, or a hidden
password prompt. Server-side edits are backed up before the hard reset (see vps_common).

For the one-time server upgrade (nginx cache, security headers, cron) use
vps_upgrade_radeski.py instead.
"""
from __future__ import annotations

from vps_common import DEPLOY_SCRIPT, connect, run


def main() -> None:
    client = connect()
    try:
        run(client, DEPLOY_SCRIPT, timeout=1800)
        # The Express app (AI chat, review publishing) runs from the same checkout.
        run(client, "systemctl restart radeski-chat && sleep 2 && systemctl is-active radeski-chat", check=False)
    finally:
        client.close()
    print("Done.")


if __name__ == "__main__":
    main()
