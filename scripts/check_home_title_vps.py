#!/usr/bin/env python3
import os
import sys

import paramiko

pwd = os.environ.get("RADESKI_DEPLOY_PASSWORD", "")
if not pwd:
    sys.exit("Set RADESKI_DEPLOY_PASSWORD")

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
c = paramiko.SSHClient()
c.set_missing_host_key_policy(paramiko.AutoAddPolicy())
c.connect("161.35.107.0", username="root", password=pwd, timeout=30)
_, o, e = c.exec_command(
    "cd /var/www/radeski && git log -1 --oneline && "
    "rg -l \"Radeski Skin Clinic — kosmetologiya\" dist/assets 2>/dev/null | head -3 || "
    "grep -l \"Radeski Skin Clinic\" dist/assets/*.js | head -3"
)
print(o.read().decode("utf-8", "replace"))
err = e.read().decode("utf-8", "replace")
if err.strip():
    print(err)
c.close()
