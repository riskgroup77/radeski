#!/usr/bin/env python3
"""Extract official Daavlin catalog product photos from Price in Uzbekistan docx."""
from __future__ import annotations

from pathlib import Path

from PIL import Image

MEDIA = Path(__file__).resolve().parent / "_price_uz_docx_extract" / "word" / "media"
OUT = Path(__file__).resolve().parent.parent / "public" / "daavlin"

# Second image per catalog section = product photo (first is series logo).
MODEL_SOURCE: dict[str, str] = {
    "model-7-series.webp": "image13.jpeg",
    "model-dermapal.webp": "image19.jpeg",
    "model-m-series.webp": "image15.jpeg",
    "model-neolux.webp": "image11.jpeg",
    "model-aquex.webp": "image21.jpeg",
}


def to_webp(src: Path, dest: Path, max_width: int = 1400) -> None:
    with Image.open(src) as im:
        im = im.convert("RGBA") if im.mode in ("P", "LA") else im.convert("RGB")
        if im.width > max_width:
            ratio = max_width / im.width
            im = im.resize((max_width, int(im.height * ratio)), Image.Resampling.LANCZOS)
        dest.parent.mkdir(parents=True, exist_ok=True)
        im.save(dest, "WEBP", quality=88, method=6)
        print(f"{src.name} -> {dest.name} ({dest.stat().st_size // 1024} KB)")


def main() -> None:
    if not MEDIA.exists():
        raise SystemExit(f"Missing media dir: {MEDIA}. Run analyze_price_docx_images.py first.")

    for dest_name, src_name in MODEL_SOURCE.items():
        src = MEDIA / src_name
        if not src.exists():
            raise SystemExit(f"Missing source image: {src}")
        to_webp(src, OUT / dest_name)


if __name__ == "__main__":
    main()
