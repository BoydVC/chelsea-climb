#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
PORT="${CHELSEA_CLIMB_PORT:-4294}"
CHROME="$(command -v google-chrome || command -v chromium || command -v chromium-browser)"
mkdir -p screenshots dist
# ensure server up for localhost shots
if ! ss -ltn | grep -q "127.0.0.1:$PORT "; then
  nohup python3 server.py > /tmp/chelsea-climb-$PORT.log 2>&1 &
  sleep 1
fi
# ensure dist exists
python3 build.py >/dev/null
shot() {
  local url="$1" out="$2" size="$3"; shift 3 || true
  local prof; prof="$(mktemp -d /tmp/cclimbshot.XXXX)"
  "$CHROME" --headless=new --no-sandbox --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --run-all-compositor-stages-before-draw --virtual-time-budget=20000 \
    --window-size="$size" --user-data-dir="$prof" --screenshot="$out" "$@" "$url" >/dev/null 2>&1
  rm -rf "$prof"; echo "  $out ($(wc -c < "$out") bytes)"
}
U="http://127.0.0.1:$PORT"
shot "file://$PWD/dist/chelsea-climb.html" screenshots/00-best-home.png 1440,1100
shot "$U/" screenshots/00-best-desktop-top.png 1440,1000
shot "$U/#table" screenshots/01-table.png 1440,1200
shot "$U/#matchday" screenshots/02-matchday.png 1440,1200
shot "$U/" screenshots/03-phone-top.png 390,844 --user-agent="Mozilla/5.0 (iPhone)"
echo "screenshots done"
