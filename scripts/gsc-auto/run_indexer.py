#!/usr/bin/env python3
"""
GSC indexer — riskavan@gmail.com (Chrome Profile 7).

Bir oyna: Profile 7 sessiyasi. AccountChooser qayta ochilmaydi.
GSC ochiq bo'lsa — shu tabda URL Inspection qilinadi.

Risk: GSC UI avtomatlashuvi Google ToS'ga zid bo'lishi mumkin.
"""
from __future__ import annotations

import json
import os
import re
import time
from datetime import date, datetime
from pathlib import Path
from urllib.parse import quote

from playwright.sync_api import TimeoutError as PlaywrightTimeout
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent
URLS_FILE = ROOT / "urls.txt"
CONFIG_FILE = ROOT / "config.json"
STATE_FILE = ROOT / "state.json"
LOG_FILE = ROOT / "indexer.log"

REQUEST_RE = re.compile(r"Запросить индексирование|Request indexing", re.I)
CLOSE_RE = re.compile(r"Закрыть|Close", re.I)
QUOTA_RE = re.compile(r"квота|quota|исчерпан|limit", re.I)


def log(msg: str) -> None:
    line = f"{datetime.now().isoformat(timespec='seconds')}  {msg}"
    try:
        print(line, flush=True)
    except UnicodeEncodeError:
        print(line.encode("ascii", "replace").decode("ascii"), flush=True)
    try:
        with LOG_FILE.open("a", encoding="utf-8") as f:
            f.write(line + "\n")
    except OSError:
        pass


def load_config() -> dict:
    cfg = {
        "google_email": "riskavan@gmail.com",
        "account_hint": "riskavan",
        "chrome_profile_directory": "Profile 7",
        "resource_id": "https://radeski.uz/",
        "delay_sec": 45,
        "cycle_sec": 21600,
        "max_per_day": 15,
        "once": False,
        "chrome_user_data": "",
    }
    if CONFIG_FILE.exists():
        try:
            cfg.update(json.loads(CONFIG_FILE.read_text(encoding="utf-8")))
        except Exception as e:
            log(f"config.json: {e}")
    return cfg


def load_urls() -> list[str]:
    if not URLS_FILE.exists():
        return []
    seen: set[str] = set()
    out: list[str] = []
    for raw in URLS_FILE.read_text(encoding="utf-8").splitlines():
        line = raw.strip()
        if line.startswith("http") and line not in seen:
            seen.add(line)
            out.append(line)
    return out


def chrome_user_data_root(cfg: dict) -> Path:
    if cfg.get("chrome_user_data"):
        return Path(cfg["chrome_user_data"])
    return Path(os.environ.get("LOCALAPPDATA", "")) / "Google" / "Chrome" / "User Data"


def gsc_home(resource_id: str) -> str:
    return "https://search.google.com/search-console?resource_id=" + quote(resource_id, safe="")


def inspect_url(resource_id: str, page_url: str) -> str:
    return (
        "https://search.google.com/search-console/inspect"
        f"?resource_id={quote(resource_id, safe='')}"
        f"&id={quote(page_url, safe='')}"
    )


def load_day_count() -> tuple[str, int]:
    today = date.today().isoformat()
    if STATE_FILE.exists():
        try:
            data = json.loads(STATE_FILE.read_text(encoding="utf-8"))
            if data.get("day") == today:
                return today, int(data.get("requests", 0))
        except Exception:
            pass
    return today, 0


def save_day_count(day: str, count: int) -> None:
    STATE_FILE.write_text(
        json.dumps({"day": day, "requests": count}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def clear_locks(paths: list[Path]) -> None:
    for base in paths:
        for name in ("SingletonLock", "SingletonCookie", "SingletonSocket"):
            lock = base / name
            try:
                if lock.exists():
                    lock.unlink()
            except OSError:
                pass


def pick_gsc_page(context, page, resource_id: str):
    for p in list(context.pages):
        try:
            if "search.google.com/search-console" in (p.url or ""):
                log("GSC tab topildi — yangi login ochilmaydi.")
                try:
                    p.bring_to_front()
                except Exception:
                    pass
                return p
        except Exception:
            continue

    log("GSC'ga o'tiladi (shu oynada).")
    page.goto(gsc_home(resource_id), wait_until="domcontentloaded", timeout=120000)
    time.sleep(2)
    # If Google account picker appears — click riskavan only then
    email = "riskavan@gmail.com"
    try:
        if "accounts.google.com" in (page.url or ""):
            loc = page.locator(f'[data-identifier="{email}"], text="{email}"').first
            if loc.count() and loc.is_visible(timeout=2000):
                loc.click()
                time.sleep(2)
                page.goto(gsc_home(resource_id), wait_until="domcontentloaded", timeout=90000)
    except Exception:
        pass
    return page


def launch_browser(p, cfg: dict):
    user_data = chrome_user_data_root(cfg)
    profile_name = cfg.get("chrome_profile_directory") or "Profile 7"
    profile_path = user_data / profile_name
    if not profile_path.exists():
        raise RuntimeError(f"Profil yo'q: {profile_path}")

    log(f"Ochiladi: {profile_path} (riskavan)")
    clear_locks([user_data, profile_path])

    try:
        context = p.chromium.launch_persistent_context(
            user_data_dir=str(profile_path),
            channel="chrome",
            headless=False,
            viewport={"width": 1400, "height": 900},
            args=["--disable-blink-features=AutomationControlled"],
            ignore_default_args=["--enable-automation"],
        )
    except Exception as e:
        log(f"Chrome channel xato ({e}) — chromium.")
        context = p.chromium.launch_persistent_context(
            user_data_dir=str(profile_path),
            headless=False,
            viewport={"width": 1400, "height": 900},
            args=["--disable-blink-features=AutomationControlled"],
            ignore_default_args=["--enable-automation"],
        )

    page = context.pages[0] if context.pages else context.new_page()
    return context, page


def try_request_indexing(page, resource_id: str, url: str) -> str:
    page.goto(inspect_url(resource_id, url), wait_until="domcontentloaded", timeout=120000)
    time.sleep(2.5)

    body = ""
    try:
        body = page.inner_text("body", timeout=12000)
    except Exception:
        pass
    if QUOTA_RE.search(body or ""):
        return "quota"

    try:
        page.wait_for_selector("text=/индекс|index|URL/i", timeout=60000)
    except PlaywrightTimeout:
        return "timeout_load"

    low = (body or "").lower()
    status = "unknown"
    if "нет в индексе" in low or "not on google" in low:
        status = "not_indexed"
    elif "есть в индексе" in low or "url is on google" in low or "проиндексирован" in low:
        status = "indexed"

    try:
        btn = page.get_by_role("button", name=REQUEST_RE)
        if btn.count() == 0:
            btn = page.locator("text=/Запросить индексирование|Request indexing/i")
            if btn.count() == 0:
                return f"{status}:no_button"
        btn.first.click(timeout=10000)
        time.sleep(1.5)
        confirm = page.get_by_role("button", name=REQUEST_RE)
        if confirm.count() > 0:
            try:
                confirm.last.click(timeout=4000)
                time.sleep(1.2)
            except Exception:
                pass
        close_btn = page.get_by_role("button", name=CLOSE_RE)
        if close_btn.count() > 0:
            try:
                close_btn.first.click(timeout=2500)
            except Exception:
                pass
        return f"{status}:requested"
    except Exception as e:
        return f"{status}:click_fail:{e.__class__.__name__}"


def run_cycle(page, cfg: dict) -> bool:
    day, count = load_day_count()
    urls = load_urls()
    max_per_day = int(cfg["max_per_day"])
    delay = float(cfg["delay_sec"])
    log(f"Cycle: {len(urls)} URL, bugun {count}/{max_per_day}")

    for url in urls:
        day, count = load_day_count()
        if count >= max_per_day:
            log("Kunlik limit yetdi.")
            return True
        log(f"-> {url}")
        result = try_request_indexing(page, cfg["resource_id"], url)
        log(f"  {result}")
        if result == "quota":
            return False
        if result.endswith(":requested"):
            count += 1
            save_day_count(day, count)
        time.sleep(delay)
    return True


def main() -> int:
    cfg = load_config()
    log("=== GSC indexer (riskavan / Profile 7) ===")
    log(f"Delay={cfg['delay_sec']}s Max/day={cfg['max_per_day']} Once={cfg['once']}")

    with sync_playwright() as p:
        context, page = launch_browser(p, cfg)
        page = pick_gsc_page(context, page, cfg["resource_id"])

        while True:
            run_cycle(page, cfg)
            if cfg.get("once"):
                break
            log(f"Keyingi cycle: {int(cfg['cycle_sec'])}s")
            time.sleep(float(cfg["cycle_sec"]))

        log("To'xtadi. Oynani o'zingiz yopishingiz mumkin.")
        try:
            context.close()
        except Exception:
            pass
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except KeyboardInterrupt:
        log("Stopped.")
        raise SystemExit(0)
