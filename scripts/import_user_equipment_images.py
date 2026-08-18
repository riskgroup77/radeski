#!/usr/bin/env python3
"""Import user-provided HQ equipment images into public/daavlin/."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "daavlin"

SOURCES: dict[str, Path] = {
    "model-dermapal.webp": ROOT / "dermapal.png",
    "model-m-series.webp": ROOT / "mseries.png",
    "model-deka-co2-laser.webp": ROOT / "DEKACOLaser.png",
    "model-deka-alexandrite-laser.webp": ROOT / "DEKAAlexandriteLaser.jpg",
    "model-surgitron-radiofrequency.webp": ROOT / "surgitron.png",
    "model-neolux.webp": ROOT / "NeoLux Daavlin.webp",
    "model-aquex.webp": ROOT / "Aquex Daavlin.webp",
}


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
    for dest_name, src in SOURCES.items():
        if not src.exists():
            raise SystemExit(f"Missing: {src}")
        to_webp(src, OUT / dest_name)


if __name__ == "__main__":
    main()
