#!/usr/bin/env python3
"""One-time (re-runnable) upgrade of the radeski.uz server after the October 2026 audit.

  1. Deploys the latest main (backs up server-side edits, installs deps if needed, builds:
     data snapshot + article index + client + prerendered pages).
  2. Restarts the Node app (AI chat limits, server-side review publishing).
  3. nginx: API response cache, security headers, HTML no-cache, prerender try_files,
     /api/reviews/submit route, API docs hidden (scripts/server/nginx_upgrade.py — rolls
     itself back if `nginx -t` fails).
  4. Cron: refresh /data/site-snapshot.json every 5 minutes.
  5. Checks .env for the admin credentials review publishing needs (values never printed).
  6. Smoke tests the live site.

Usage:  python scripts/vps_upgrade_radeski.py
Auth:   SSH key (setup_ssh_key_vps.py), RADESKI_DEPLOY_PASSWORD, or a hidden prompt.
"""
from __future__ import annotations

from vps_common import APP_DIR, DEPLOY_SCRIPT, connect, run

CRON_FILE = "/etc/cron.d/radeski-snapshot"
CRON_TEXT = (
    "# Managed by scripts/vps_upgrade_radeski.py — refreshes the site data snapshot\\n"
    "SHELL=/bin/sh\\n"
    "PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\\n"
    f"*/5 * * * * root cd {APP_DIR} && node scripts/buildSiteSnapshot.mjs --out dist/data "
    ">> /var/log/radeski-snapshot.log 2>&1\\n"
)

SMOKE_TESTS = r"""
fail=0
check() { if [ "$2" = "$3" ]; then echo "  OK   $1"; else echo "  FAIL $1 (got '$2', want '$3')"; fail=1; fi; }
code() { curl -s -o /dev/null -w '%{http_code}' --max-time 20 "$@"; }

check "home page"                "$(code https://radeski.uz/uz)" 200
check "prerendered RU page"      "$(curl -s --max-time 20 https://radeski.uz/ru/articles | grep -c '<html lang="ru">')" 1
check "site snapshot"            "$(code https://radeski.uz/data/site-snapshot.json)" 200
check "API via cache"            "$(code https://radeski.uz/api/doctors)" 200
check "API via cache (repeat)"   "$(code https://radeski.uz/api/doctors)" 200
check "HSTS header"              "$(curl -sI --max-time 20 https://radeski.uz/uz | grep -ci '^strict-transport-security')" 1
check "nosniff header"           "$(curl -sI --max-time 20 https://radeski.uz/uz | grep -ci '^x-content-type-options')" 1
check "HTML no-cache"            "$(curl -sI --max-time 20 https://radeski.uz/uz | grep -ci '^cache-control: no-cache')" 1
check "API docs hidden"          "$(code https://api.radeski.uz/docs)" 404
check "openapi hidden"           "$(code https://api.radeski.uz/openapi.json)" 404
check "chat health"              "$(code https://radeski.uz/api/chat-health)" 200
check "review endpoint (node)"   "$(code -X POST -H 'Content-Type: application/json' -d '{}' https://radeski.uz/api/reviews/submit)" 400
exit $fail
"""


def main() -> None:
    client = connect()
    try:
        print("\n=== 1/6 Deploy latest code ===")
        run(client, DEPLOY_SCRIPT, timeout=2400)

        print("\n=== 2/6 Restart Node app ===")
        run(client, "systemctl restart radeski-chat && sleep 3 && systemctl is-active radeski-chat")

        print("\n=== 3/6 nginx upgrade ===")
        run(client, f"python3 {APP_DIR}/scripts/server/nginx_upgrade.py")

        print("\n=== 4/6 Snapshot cron ===")
        run(
            client,
            f"printf '{CRON_TEXT}' > {CRON_FILE} && chmod 644 {CRON_FILE} && "
            f"cd {APP_DIR} && node scripts/buildSiteSnapshot.mjs --out dist/data && echo CRON_OK",
        )

        print("\n=== 5/6 .env check (values are not shown) ===")
        run(
            client,
            f"cd {APP_DIR} && for k in ADMIN_USERNAME ADMIN_PASSWORD DEEPSEEK_API_KEY; do "
            "if grep -q \"^$k=..*\" .env 2>/dev/null; then echo \"  $k: set\"; "
            "else echo \"  $k: MISSING\"; fi; done",
            check=False,
        )

        print("\n=== 6/6 Smoke tests ===")
        code, _ = run(client, f"cd {APP_DIR} && bash -s <<'SMOKE'\n{SMOKE_TESTS}\nSMOKE", check=False)
        print("\nAll checks passed." if code == 0 else "\nSome checks failed — see FAIL lines above.")
    finally:
        client.close()


if __name__ == "__main__":
    main()
