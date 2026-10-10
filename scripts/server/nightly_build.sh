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

exec 9>"$LOCK"
if ! flock -n 9; then
  echo "[nightly] another build/deploy is running — skipped"
  exit 0
fi

echo "[nightly] $(date -Is) start"
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
rsync -a --delete --exclude videos --exclude video-namuna "$BUILD_DIR/dist/" "$APP_DIR/dist/"
echo "[nightly] $(date -Is) done"
