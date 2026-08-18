#!/usr/bin/env python3
from __future__ import annotations

import html
import re
import zipfile
from pathlib import Path

DOCX = Path(r"C:\Users\User\Downloads\Telegram Desktop\1 Price in Uzbekistan  (2).docx")
OUT = Path(__file__).resolve().parent / "_price_uz_docx_extract"
REPORT = Path(__file__).resolve().parent / "_price_uz_docx_images.txt"

SECTION_HEADERS = [
    "NeoLux",
    "ML2400",
    "UV Series",
    "7 Series",
    "M Series",
    "1 Series",
    "DermaPal",
    "Aquex",
]


def ensure_extract() -> None:
    if OUT.exists():
        return
    OUT.mkdir(parents=True)
    with zipfile.ZipFile(DOCX) as z:
        z.extractall(OUT)


def load_rels() -> dict[str, str]:
    text = (OUT / "word" / "_rels" / "document.xml.rels").read_text(encoding="utf-8")
    return {
        m.group(1): m.group(2).replace("media/", "")
        for m in re.finditer(r'Id="(rId\d+)"[^>]+Target="media/([^"]+)"', text)
    }


def section_for_text(text: str, current: str) -> str:
    for h in SECTION_HEADERS:
        if h.lower() in text.lower() and len(text) < 100:
            return h
    return current


def paragraph_items(p_xml: str, rels: dict[str, str]) -> list[tuple[str, str]]:
    items: list[tuple[str, str]] = []
    for part in re.split(r"(<w:drawing[\s\S]*?</w:drawing>)", p_xml):
        if part.startswith("<w:drawing"):
            m = re.search(r'r:embed="(rId\d+)"', part)
            if m:
                items.append(("IMAGE", rels.get(m.group(1), m.group(1))))
        else:
            text = re.sub(r"<[^>]+>", "", part)
            text = html.unescape(re.sub(r"\s+", " ", text).strip())
            if text:
                items.append(("TEXT", text))
    return items


def main() -> None:
    ensure_extract()
    rels = load_rels()
    xml = (OUT / "word" / "document.xml").read_text(encoding="utf-8")

    section = ""
    lines: list[str] = []
    section_images: dict[str, list[str]] = {h: [] for h in SECTION_HEADERS}

    for p_xml in re.findall(r"<w:p[\s\S]*?</w:p>", xml):
        for kind, val in paragraph_items(p_xml, rels):
            if kind == "TEXT":
                section = section_for_text(val, section)
                lines.append(f"TEXT [{section}] {val[:120]}")
            else:
                lines.append(f"IMAGE [{section}] {val}")
                if section and val not in section_images[section]:
                    section_images[section].append(val)

    mapping = {
        "7 Series": "7-series",
        "DermaPal": "dermapal",
        "M Series": "m-series",
        "NeoLux": "neolux",
        "Aquex": "aquex",
        "UV Series": "uv-series",
        "ML2400": "ml24000",
        "1 Series": "1-series",
    }

    lines.append("\n=== PRIMARY IMAGE PER SECTION ===")
    primary_map: dict[str, str] = {}
    for header, imgs in section_images.items():
        primary = imgs[0] if imgs else ""
        site_id = mapping.get(header, header)
        if primary:
            primary_map[site_id] = primary
        lines.append(f"{header} -> {site_id}: {primary or '(none)'} | all: {', '.join(imgs) or 'none'}")

    lines.append("\n=== SITE MODEL MAP ===")
    for site_id, fname in primary_map.items():
        lines.append(f"{site_id}={fname}")

    REPORT.write_text("\n".join(lines), encoding="utf-8")
    print(REPORT)


if __name__ == "__main__":
    main()
