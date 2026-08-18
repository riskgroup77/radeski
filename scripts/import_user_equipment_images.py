#!/usr/bin/env python3
"""Import user-provided HQ equipment images into public/daavlin/."""
from __future__ import annotations

import shutil
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCES = ROOT / "public" / "daavlin" / "sources"
OUT = ROOT / "public" / "daavlin"

# Canonical source filenames in public/daavlin/sources/
SOURCE_FILES: dict[str, str] = {
    "model-dermapal.webp": "dermapal.png",
    "model-m-series.webp": "m-series.png",
    "model-deka-co2-laser.webp": "deka-co2-laser.png",
    "model-deka-alexandrite-laser.webp": "deka-alexandrite-laser.jpg",
    "model-surgitron-radiofrequency.webp": "surgitron.png",
    "model-neolux.webp": "neolux.webp",
    "model-aquex.webp": "aquex.webp",
}

# Legacy paths at repo root (bootstrap once if sources/ empty)
LEGACY: dict[str, Path] = {
    "dermapal.png": ROOT / "dermapal.png",
    "m-series.png": ROOT / "mseries.png",
    "deka-co2-laser.png": ROOT / "DEKACOLaser.png",
    "deka-alexandrite-laser.jpg": ROOT / "DEKAAlexandriteLaser.jpg",
    "surgitron.png": ROOT / "surgitron.png",
    "neolux.webp": ROOT / "NeoLux Daavlin.webp",
    "aquex.webp": ROOT / "Aquex Daavlin.webp",
}


def ensure_sources() -> None:
    SOURCES.mkdir(parents=True, exist_ok=True)
    for name, legacy in LEGACY.items():
        dest = SOURCES / name
        if dest.exists():
            continue
        if legacy.exists():
            shutil.copy2(legacy, dest)
            print(f"Copied legacy -> sources/{name}")


def to_webp(src: Path, dest: Path, max_width: int = 1600) -> None:
    with Image.open(src) as im:
        if im.mode in ("RGBA", "LA", "P"):
            im = im.convert("RGBA")
        else:
            im = im.convert("RGB")
        if im.width > max_width:
            ratio = max_width / im.width
            im = im.resize((max_width, int(im.height * ratio)), Image.Resampling.LANCZOS)
        dest.parent.mkdir(parents=True, exist_ok=True)
        im.save(dest, "WEBP", quality=90, method=6)
        print(f"{src.name} -> {dest.name} ({dest.stat().st_size // 1024} KB)")


def main() -> None:
    ensure_sources()
    for dest_name, src_name in SOURCE_FILES.items():
        src = SOURCES / src_name
        if not src.exists():
            raise SystemExit(f"Missing source: {src}")
        to_webp(src, OUT / dest_name)


if __name__ == "__main__":
    main()
