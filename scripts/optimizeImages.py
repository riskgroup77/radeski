#!/usr/bin/env python3
"""Shrink oversized site images in place (same file name and format, so no code changes).

- Downscales anything wider/taller than MAX_SIDE (default 1920 px) — nothing on the site is
  shown larger than that, even on retina laptops.
- Re-encodes JPEG (progressive, q=82) and WebP (q=80); optimizes PNG losslessly.
- Applies EXIF rotation, then drops metadata.
- Keeps the original unless the result is at least 10% smaller.

Usage:
    python scripts/optimizeImages.py [--min-kb 300] [--max-side 1920] [--dry-run] public src/assets
"""
from __future__ import annotations

import argparse
import io
from pathlib import Path

from PIL import Image, ImageOps

EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def encode(image: Image.Image, suffix: str) -> bytes:
    buffer = io.BytesIO()
    if suffix in (".jpg", ".jpeg"):
        if image.mode not in ("RGB", "L"):
            image = image.convert("RGB")
        image.save(buffer, "JPEG", quality=82, optimize=True, progressive=True)
    elif suffix == ".webp":
        image.save(buffer, "WEBP", quality=80, method=6)
    else:
        image.save(buffer, "PNG", optimize=True)
    return buffer.getvalue()


def process(path: Path, max_side: int, dry_run: bool) -> tuple[int, int] | None:
    original = path.read_bytes()
    with Image.open(io.BytesIO(original)) as source:
        if getattr(source, "is_animated", False):
            return None  # leave animations alone
        image = ImageOps.exif_transpose(source)
        image.load()
    if max(image.size) > max_side:
        image.thumbnail((max_side, max_side), Image.Resampling.LANCZOS)
    optimized = encode(image, path.suffix.lower())
    if len(optimized) > len(original) * 0.9:
        return None
    if not dry_run:
        path.write_bytes(optimized)
    return len(original), len(optimized)


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("roots", nargs="+")
    parser.add_argument("--min-kb", type=int, default=300)
    parser.add_argument("--max-side", type=int, default=1920)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    before = after = 0
    changed = 0
    for root in args.roots:
        for path in sorted(Path(root).rglob("*")):
            if path.suffix.lower() not in EXTENSIONS or path.stat().st_size < args.min_kb * 1024:
                continue
            try:
                result = process(path, args.max_side, args.dry_run)
            except Exception as error:  # noqa: BLE001 — report and keep going
                print(f"skip {path}: {error}")
                continue
            if result:
                changed += 1
                before += result[0]
                after += result[1]
                print(f"{result[0] // 1024:6d} KB -> {result[1] // 1024:5d} KB  {path}")
    print(f"\n{changed} files: {before / 1048576:.1f} MB -> {after / 1048576:.1f} MB"
          f"{' (dry run)' if args.dry_run else ''}")


if __name__ == "__main__":
    main()
