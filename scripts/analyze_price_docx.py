#!/usr/bin/env python3
"""Analyze Price in Uzbekistan docx: map images to equipment sections."""
from __future__ import annotations

import html
import re
import shutil
import zipfile
from pathlib import Path

DOCX = Path(r"C:\Users\User\Downloads\Telegram Desktop\1 Price in Uzbekistan  (2).docx")
OUT = Path(__file__).resolve().parent / "_price_uz_docx_extract"
REPORT = Path(__file__).resolve().parent / "_price_uz_docx_report.txt"

MODEL_MARKERS = [
    "NeoLux",
    "ML2400",
    "UV Series",
    "7 Series",
    "M Series",
    "1 Series",
    "DermaPal",
    "Aquex",
]


def extract() -> None:
    if OUT.exists():
        shutil.rmtree(OUT)
    OUT.mkdir(parents=True)
    with zipfile.ZipFile(DOCX) as z:
        z.extractall(OUT)


def load_rels() -> dict[str, str]:
    text = (OUT / "word" / "_rels" / "document.xml.rels").read_text(encoding="utf-8")
    mapping: dict[str, str] = {}
    for m in re.finditer(r'Id="([^"]+)"[^>]+Target="media/([^"]+)"', text):
        mapping[m.group(1)] = m.group(2)
    return mapping


def parse_document() -> list[tuple[str, str]]:
    xml = (OUT / "word" / "document.xml").read_text(encoding="utf-8")
    rels = load_rels()
    items: list[tuple[str, str]] = []
    for block in re.findall(r"<w:p[\s\S]*?</w:p>|<w:drawing[\s\S]*?</w:drawing>", xml):
        if block.startswith("<w:drawing"):
            m = re.search(r'r:embed="([^"]+)"', block)
            if m:
                items.append(("IMAGE", rels.get(m.group(1), m.group(1))))
            continue
        text = re.sub(r"<[^>]+>", "", block)
        text = html.unescape(re.sub(r"\s+", " ", text).strip())
        if text:
            items.append(("TEXT", text))
    return items


def detect_section(text: str, current: str) -> str:
    for marker in MODEL_MARKERS:
        if marker.lower() in text.lower() and len(text) < 120:
            return marker
    return current


def main() -> None:
    extract()
    items = parse_document()
    lines: list[str] = []
    section = ""
    image_map: dict[str, list[str]] = {m: [] for m in MODEL_MARKERS}

    for i, (kind, val) in enumerate(items):
        if kind == "TEXT":
            section = detect_section(val, section)
            lines.append(f"{i:4} TEXT  [{section}] {val[:140]}")
        else:
            lines.append(f"{i:4} IMAGE [{section}] {val}")
            if section and val not in image_map[section]:
                image_map[section].append(val)

    lines.append("\n=== IMAGE MAP BY SECTION ===")
    for marker in MODEL_MARKERS:
        imgs = image_map[marker]
        lines.append(f"{marker}: {', '.join(imgs) if imgs else '(none)'}")

    lines.append("\n=== ALL MEDIA ===")
    media = OUT / "word" / "media"
    for f in sorted(media.iterdir()):
        lines.append(f"{f.name}\t{f.stat().st_size}")

    REPORT.write_text("\n".join(lines), encoding="utf-8")
    print(f"Wrote {REPORT}")


if __name__ == "__main__":
    main()
