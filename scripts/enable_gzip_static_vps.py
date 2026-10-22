#!/usr/bin/env python3
"""Serve the build's precompressed .gz files (radeski.uz VPS).

`npm run build` writes a maximum-level .gz next to every text file in dist/ except data/,
which a cron rewrites every 5 minutes (scripts/precompressAssets.mjs). This turns on nginx
`gzip_static` so those files are sent as they are, and raises the on-the-fly level for
everything without a .gz (default is 1).

/etc/nginx is copied to /root/nginx-backup-<time> first; if `nginx -t` fails the copy is
restored and nginx is not reloaded. Idempotent.

Usage (PowerShell, from the project folder; asks for the server password):
    python scripts/enable_gzip_static_vps.py
"""
from __future__ import annotations

from vps_common import connect, run

REMOTE = r"""
set -euo pipefail
TS=$(date +%s)
BACKUP=/root/nginx-backup-$TS
cp -a /etc/nginx "$BACKUP"
echo "Backup: $BACKUP"
JS=$(ls -S /var/www/radeski/dist/assets/index-*.js | head -1 | xargs -n1 basename)
echo "--- before ---"
curl -s -o /dev/null -H 'Accept-Encoding: gzip' -w "main JS ($JS) gzip bytes: %{size_download}\n" "https://radeski.uz/assets/$JS"
ls /var/www/radeski/dist/assets/$JS.gz >/dev/null 2>&1 && echo "precompressed file present" || echo "WARNING: no $JS.gz yet - deploy the latest build first"

python3 - <<'PY'
import glob
from pathlib import Path
conf = Path('/etc/nginx/conf.d/01-radeski-compression.conf')
texts = [Path('/etc/nginx/nginx.conf')] + [Path(p) for p in glob.glob('/etc/nginx/conf.d/*.conf') if Path(p) != conf]
active = '\n'.join(line for p in texts for line in p.read_text().splitlines() if not line.strip().startswith('#'))
lines = []
if 'gzip_static' not in active:
    lines.append('gzip_static on;')
if 'gzip_comp_level' not in active:
    lines.append('gzip_comp_level 5;')
conf.write_text('# Precompressed .gz from the build (scripts/precompressAssets.mjs); level for the rest\n' + '\n'.join(lines) + '\n')
print('WROTE', conf, lines)
PY

if nginx -t 2>/tmp/nginx-test.log; then
  grep -i warn /tmp/nginx-test.log || echo "nginx -t: no warnings"
  systemctl reload nginx
  sleep 1
  echo "--- after ---"
  curl -s -o /dev/null -H 'Accept-Encoding: gzip' -w "main JS ($JS) gzip bytes: %{size_download}\n" "https://radeski.uz/assets/$JS"
  curl -s -o /dev/null -H 'Accept-Encoding: gzip' -w "snapshot JSON gzip bytes: %{size_download}\n" "https://radeski.uz/data/site-snapshot-core.json"
  curl -sI -H 'Accept-Encoding: gzip' https://radeski.uz/uz/services/dermatologiya | grep -iE '^(HTTP|content-encoding)'
  echo "GZIP_STATIC_OK"
else
  cat /tmp/nginx-test.log
  rm -rf /etc/nginx && cp -a "$BACKUP" /etc/nginx
  nginx -t
  echo "GZIP_STATIC_ROLLED_BACK"
  exit 1
fi
"""


def main() -> None:
    client = connect()
    try:
        run(client, REMOTE, timeout=300)
    finally:
        client.close()
    print("Done.")


if __name__ == "__main__":
    main()
