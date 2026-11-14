#!/bin/bash
# Nightly rebuild (runs ON the VPS from cron). Content added in the admin panel — articles,
# videos, doctors, prices — gets prerendered pages, sitemap entries, covers and image
# variants without waiting for the next deploy; IndexNow is pinged for changed pages.
#
# Builds in a separate copy (/var/www/radeski-build) and swaps the result into the live
# dist/ only when the build succeeded, so visitors never see a half-built site. Shares a
# lock with the deploy script, so the two never run at the same time.
set -euo pipefail

APP_DIR=/var/www/radeski
BUILD_DIR=/var/www/radeski-build
LOCK=/var/lock/radeski-build.lock
LOG=/var/log/radeski-nightly.log
# Public status of the last nightly run (https://radeski.uz/build-status.json). The daily site
# check (scripts/dailySiteCheck.mjs) reads it and raises an alarm when the last run failed or
# the last success is older than ~30 hours.
STATUS_FILE="$APP_DIR/dist/build-status.json"
STARTED_AT="$(date -Is)"
PUBLISH_DATE="$(TZ=Asia/Tashkent date +%F)"

# Optional Telegram alert on failure: NOTIFY_TELEGRAM_BOT_TOKEN and NOTIFY_TELEGRAM_CHAT_ID in .env.
if [ -f "$APP_DIR/.env" ]; then set -a; . "$APP_DIR/.env"; set +a; fi

write_status() { # $1 = ok | failed
  local last_success="$STARTED_AT"
  if [ "$1" != ok ]; then
    last_success="$(grep -o '"lastSuccess": *"[^"]*"' "$STATUS_FILE" 2>/dev/null | sed 's/.*"\([^"]*\)"$/\1/' || true)"
  fi
  mkdir -p "$(dirname "$STATUS_FILE")"
  printf '{\n  "job": "nightly-build",\n  "result": "%s",\n  "startedAt": "%s",\n  "finishedAt": "%s",\n  "publishDate": "%s",\n  "lastSuccess": "%s"\n}\n' \
    "$1" "$STARTED_AT" "$(date -Is)" "$PUBLISH_DATE" "$last_success" > "$STATUS_FILE"
}

on_fail() {
  local line="$1"
  echo "[nightly] $(date -Is) FAILED at line $line"
  write_status failed || true
  if [ -n "${NOTIFY_TELEGRAM_BOT_TOKEN:-}" ] && [ -n "${NOTIFY_TELEGRAM_CHAT_ID:-}" ]; then
    local text
    text="radeski.uz: nightly build FAILED ($(date -Is), line $line). The live site keeps the previous build. Last log lines:
$(tail -n 12 "$LOG" 2>/dev/null)"
    curl -s -m 20 -o /dev/null "https://api.telegram.org/bot${NOTIFY_TELEGRAM_BOT_TOKEN}/sendMessage" \
      --data-urlencode "chat_id=${NOTIFY_TELEGRAM_CHAT_ID}" --data-urlencode "text=${text}" || true
  fi
}
trap 'on_fail $LINENO' ERR

exec 9>"$LOCK"
if ! flock -n 9; then
  echo "[nightly] another build/deploy is running — skipped"
  exit 0
fi

echo "[nightly] $(date -Is) start (publish date $PUBLISH_DATE)"
mkdir -p "$BUILD_DIR"
# Source tree only; generated folders (img-cache, video-thumbs) persist in BUILD_DIR between nights.
rsync -a --delete \
  --exclude .git --exclude node_modules --exclude dist --exclude dist-ssr \
  --exclude public/videos --exclude public/video-namuna \
  --exclude public/img-cache --exclude public/video-thumbs \
  "$APP_DIR/" "$BUILD_DIR/"
# Committed covers are the starting point; the build adds covers for new videos.
mkdir -p "$BUILD_DIR/public/video-thumbs"
rsync -a --ignore-existing "$APP_DIR/public/video-thumbs/" "$BUILD_DIR/public/video-thumbs/"
ln -sfn "$APP_DIR/node_modules" "$BUILD_DIR/node_modules"

cd "$BUILD_DIR"
if [ -f .env ]; then set -a; . ./.env; set +a; fi
export VITE_API_URL="${VITE_API_URL:-https://api.radeski.uz}"
export SEO_STATE_FILE="$APP_DIR/.seo-state.json"
export INDEXNOW=1
nice -n 10 npm run build

# Swap in: everything except the large static video folders, which only deploys manage.
rsync -a --delete --exclude videos --exclude video-namuna --exclude build-status.json "$BUILD_DIR/dist/" "$APP_DIR/dist/"
write_status ok
echo "[nightly] $(date -Is) done"
