#!/usr/bin/env python3
"""Pediatrik natija rasmlarida bolalar ko'zlarini yashirish (blur + qorong'u to'siq)."""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parents[1] / "public" / "results"

# Normalized (x1, y1, x2, y2) — rasm o'lchamining ulushi
EYE_MASKS: dict[str, tuple[float, float, float, float]] = {
    "alopecia-areata-child-before.jpg": (0.16, 0.34, 0.84, 0.51),
    "alopecia-areata-child-after.jpg": (0.18, 0.30, 0.82, 0.47),
    "alopecia-areata-child-step-2.jpg": (0.22, 0.76, 0.78, 0.93),
    "alopecia-areata-boy-before.jpg": (0.48, 0.38, 0.99, 0.55),
    "alopecia-areata-boy-after.jpg": (0.42, 0.36, 0.98, 0.53),
    "alopecia-areata-boy-step-3.jpg": (0.12, 0.78, 0.88, 0.97),
    "alopecia-areata-boy-step-4.jpg": (0.08, 0.66, 0.92, 0.89),
}


def apply_eye_mask(path: Path, region_norm: tuple[float, float, float, float]) -> None:
    image = Image.open(path).convert("RGB")
    width, height = image.size
    x1 = max(0, int(region_norm[0] * width))
    y1 = max(0, int(region_norm[1] * height))
    x2 = min(width, int(region_norm[2] * width))
    y2 = min(height, int(region_norm[3] * height))

    if x2 <= x1 or y2 <= y1:
        raise ValueError(f"Invalid mask box for {path.name}: {(x1, y1, x2, y2)}")

    region = image.crop((x1, y1, x2, y2))
    blur_radius = max(14, min(width, height) // 35)
    blurred = region.filter(ImageFilter.GaussianBlur(radius=blur_radius))

    overlay = Image.new("RGB", (x2 - x1, y2 - y1), (24, 24, 24))
    masked = Image.blend(blurred, overlay, alpha=0.62)

    image.paste(masked, (x1, y1))
    image.save(path, quality=90, optimize=True)
    print(f"Masked {path.name}: ({x1}, {y1}) -> ({x2}, {y2})")


def main() -> None:
    for filename, region in EYE_MASKS.items():
        path = ROOT / filename
        if not path.exists():
            print(f"Skip missing: {path}")
            continue
        apply_eye_mask(path, region)


if __name__ == "__main__":
    main()
