#!/usr/bin/env python3
"""Nightly backup of the CMS (runs ON the VPS as root, from cron; safe to run by hand).

Finds the API backend from the process listening on 127.0.0.1:8003 (or CMS_DIR), then
  * database: SQLite file -> consistent copy via the sqlite backup API (gzip),
              DATABASE_URL=postgres… -> pg_dump (gzip);
  * uploads:  mirrored to /root/radeski-backups/uploads (incremental, nothing deleted);
  * keeps the last 14 daily database copies.

Usage: python3 scripts/server/backup_cms.py
"""
from __future__ import annotations

import datetime as dt
import gzip
import os
import re
import shutil
import sqlite3
import subprocess
import sys
from pathlib import Path

BACKUP_ROOT = Path(os.environ.get("RADESKI_BACKUP_DIR", "/root/radeski-backups"))
KEEP_DAYS = 14
API_PORT = os.environ.get("CMS_PORT", "8003")


def backend_dir() -> Path | None:
    configured = os.environ.get("CMS_DIR")
    if configured:
        return Path(configured)
    out = subprocess.run(["ss", "-ltnpH", f"sport = :{API_PORT}"], capture_output=True, text=True).stdout
    pid = re.search(r"pid=(\d+)", out)
    if not pid:
        return None
    try:
        return Path(os.readlink(f"/proc/{pid.group(1)}/cwd"))
    except OSError:
        return None


def read_env(directory: Path) -> dict[str, str]:
    values: dict[str, str] = {}
    for candidate in (directory / ".env", directory.parent / ".env"):
        if candidate.is_file():
            for line in candidate.read_text(errors="replace").splitlines():
                match = re.match(r"\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)", line)
                if match:
                    values.setdefault(match.group(1), match.group(2).strip().strip("'\""))
    return values


def find_sqlite(directory: Path) -> list[Path]:
    found = []
    for pattern in ("*.db", "*.sqlite", "*.sqlite3"):
        for path in directory.rglob(pattern):
            if any(part in {"node_modules", ".venv", "venv", "site-packages", "__pycache__"} for part in path.parts):
                continue
            if path.is_file() and path.stat().st_size > 0:
                found.append(path)
    return found


def backup_sqlite(source: Path, target_dir: Path) -> Path:
    raw = target_dir / f"{source.stem}.sqlite3"
    src = sqlite3.connect(f"file:{source}?mode=ro", uri=True)
    dst = sqlite3.connect(raw)
    try:
        src.backup(dst)  # consistent even while the API is writing
    finally:
        dst.close()
        src.close()
    packed = raw.with_suffix(".sqlite3.gz")
    with raw.open("rb") as fin, gzip.open(packed, "wb") as fout:
        shutil.copyfileobj(fin, fout)
    raw.unlink()
    return packed


def backup_postgres(url: str, target_dir: Path) -> Path:
    packed = target_dir / "cms.sql.gz"
    url = re.sub(r"^postgresql\+\w+://", "postgresql://", url)
    with gzip.open(packed, "wb") as fout:
        proc = subprocess.Popen(["pg_dump", "--no-owner", url], stdout=subprocess.PIPE)
        assert proc.stdout
        shutil.copyfileobj(proc.stdout, fout)
        if proc.wait() != 0:
            raise RuntimeError("pg_dump failed")
    return packed


def prune(keep_days: int) -> None:
    cutoff = dt.date.today() - dt.timedelta(days=keep_days)
    for entry in BACKUP_ROOT.iterdir():
        try:
            day = dt.date.fromisoformat(entry.name)
        except ValueError:
            continue
        if day < cutoff:
            shutil.rmtree(entry, ignore_errors=True)


def main() -> int:
    directory = backend_dir()
    if directory is None or not directory.is_dir():
        print(f"[backup] API backend on port {API_PORT} not found — set CMS_DIR", file=sys.stderr)
        return 1
    print(f"[backup] backend: {directory}")
    target = BACKUP_ROOT / dt.date.today().isoformat()
    target.mkdir(parents=True, exist_ok=True)

    env = read_env(directory)
    url = env.get("DATABASE_URL", "")
    saved = []
    if url.startswith("postgres"):
        saved.append(backup_postgres(url, target))
    else:
        sqlite_from_url = re.match(r"sqlite(?:\+\w+)?:///(.+)", url)
        sources = [Path(sqlite_from_url.group(1)) if sqlite_from_url.group(1).startswith("/") else directory / sqlite_from_url.group(1)] if sqlite_from_url else find_sqlite(directory)
        for source in sources:
            if source.is_file():
                saved.append(backup_sqlite(source, target))
    if not saved:
        print("[backup] no database found (DATABASE_URL / *.db) — nothing saved", file=sys.stderr)

    uploads = next((p for p in (directory / "uploads", directory / "static" / "uploads", directory.parent / "uploads") if p.is_dir()), None)
    if uploads:
        mirror = BACKUP_ROOT / "uploads"
        mirror.mkdir(parents=True, exist_ok=True)
        if shutil.which("rsync"):
            subprocess.run(["rsync", "-a", f"{uploads}/", f"{mirror}/"], check=False)
        else:
            shutil.copytree(uploads, mirror, dirs_exist_ok=True)
        print(f"[backup] uploads mirrored: {uploads} -> {mirror}")

    prune(KEEP_DAYS)
    for path in saved:
        print(f"[backup] database: {path} ({path.stat().st_size // 1024} KB)")
    return 0 if saved else 2


if __name__ == "__main__":
    sys.exit(main())
