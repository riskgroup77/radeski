#!/usr/bin/env python3
"""Clear the nginx warnings printed on every deploy (radeski.uz VPS).

    could not build optimal map_hash ...            -> raise map_hash_max_size
    conflicting server name "www.radeski.uz" on :80 -> www stays only in its redirect blocks
    protocol options redefined for [::]:443          -> same listen options in every 443 block

The whole /etc/nginx directory is copied to /root/nginx-backup-<time> first. If `nginx -t`
fails after the edits, that copy is put back automatically and nginx is not reloaded.

Usage (PowerShell, from the project folder; asks for the server password):
    python scripts/fix_nginx_warnings_vps.py
"""
from __future__ import annotations

from vps_common import connect, run

REMOTE = r"""
set -euo pipefail
TS=$(date +%s)
BACKUP=/root/nginx-backup-$TS
cp -a /etc/nginx "$BACKUP"
echo "Backup: $BACKUP"
nginx -v 2>&1
echo "--- warnings before ---"
nginx -t 2>&1 | grep -i warn || echo "(none)"

python3 - <<'PY'
import glob, re, subprocess
from pathlib import Path

def files():
    out = [Path('/etc/nginx/nginx.conf')]
    for pattern in ('/etc/nginx/conf.d/*.conf', '/etc/nginx/sites-enabled/*'):
        out += [Path(p).resolve() for p in glob.glob(pattern)]
    return [p for p in dict.fromkeys(out) if p.is_file()]

all_text = '\n'.join(p.read_text() for p in files())
nginx_conf = Path('/etc/nginx/nginx.conf').read_text()

# 1. map hash size (conf.d is included inside the http block)
if 'include /etc/nginx/conf.d/*.conf' not in nginx_conf:
    print('SKIP map_hash: conf.d is not included in nginx.conf')
else:
    lines = []
    if 'map_hash_max_size' not in all_text:
        lines.append('map_hash_max_size 8192;')
    if 'map_hash_bucket_size' not in all_text:
        lines.append('map_hash_bucket_size 128;')
    if lines:
        Path('/etc/nginx/conf.d/00-radeski-map-hash.conf').write_text(
            '# Room for the SEO redirect maps (radeski-*-redirects.map.conf)\n' + '\n'.join(lines) + '\n')
        print('ADDED', lines)
    else:
        print('map_hash already configured')

# 2. www.radeski.uz only in the dedicated redirect blocks
site = Path('/etc/nginx/sites-available/radeski.uz')
text = site.read_text()
if 'www_redirect_ok' in text:
    fixed = re.sub(r'server_name\s+radeski\.uz\s+www\.radeski\.uz\s*;', 'server_name radeski.uz;', text)
    fixed = re.sub(r'server_name\s+www\.radeski\.uz\s+radeski\.uz\s*;', 'server_name radeski.uz;', fixed)
    if fixed != text:
        site.write_text(fixed)
        print('REMOVED www.radeski.uz from apex server blocks')
    text = fixed
else:
    print('SKIP www: dedicated www redirect blocks not found')

# 3. identical listen options for 443 (nginx < 1.25.1 still takes http2 on listen)
version = subprocess.run(['nginx', '-v'], capture_output=True, text=True).stderr
m = re.search(r'nginx/(\d+)\.(\d+)\.(\d+)', version)
if m and tuple(map(int, m.groups())) >= (1, 25, 1):
    print('SKIP listen: nginx >= 1.25.1 uses the http2 directive; fix by hand')
else:
    def norm(match):
        indent, addr, opts = match.group(1), match.group(2), match.group(3)
        if 'ssl' not in opts.split():
            return match.group(0)
        default = ' default_server' if 'default_server' in opts.split() else ''
        return f'{indent}listen {addr} ssl http2{default};'
    pattern = re.compile(r'^([ \t]*)listen[ \t]+(\[::\]:443|443)\b([^;#]*);', re.M)
    for path in files():
        if not str(path).startswith('/etc/nginx/sites-'):
            continue
        before = path.read_text()
        after = pattern.sub(norm, before)
        if after != before:
            path.write_text(after)
            print('NORMALIZED 443 listen options in', path)
PY

if nginx -t 2>/tmp/nginx-test.log; then
  echo "--- warnings after ---"
  grep -i warn /tmp/nginx-test.log || echo "(none)"
  systemctl reload nginx
  echo "NGINX_FIX_OK"
else
  cat /tmp/nginx-test.log
  rm -rf /etc/nginx && cp -a "$BACKUP" /etc/nginx
  nginx -t
  echo "NGINX_FIX_ROLLED_BACK"
  exit 1
fi
curl -sI https://radeski.uz/ | head -1
curl -sI https://www.radeski.uz/ | grep -iE '^(HTTP|location)'
curl -sI http://radeski.uz/ | grep -iE '^(HTTP|location)'
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
