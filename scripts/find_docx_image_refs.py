#!/usr/bin/env python3
import re
from pathlib import Path

base = Path(__file__).resolve().parent / "_price_uz_docx_extract"
xml = (base / "word" / "document.xml").read_text(encoding="utf-8")
rels_text = (base / "word" / "_rels" / "document.xml.rels").read_text(encoding="utf-8")
rels = {
    m.group(1): m.group(2)
    for m in re.finditer(r'Id="(rId\d+)"[^>]+Target="media/([^"]+)"', rels_text)
}

for pat in [r'r:id="(rId\d+)"', r'r:embed="(rId\d+)"', r'r:link="(rId\d+)"']:
    ids = re.findall(pat, xml)
    print(pat, "count", len(ids))
    mapped = [rels.get(i, i) for i in ids]
    for i, fname in zip(ids, mapped):
        print(" ", i, "->", fname)

# Show unique image refs in order of first appearance
seen = set()
print("\nORDER:")
for m in re.finditer(r'r:(?:id|embed|link)="(rId\d+)"', xml):
    rid = m.group(1)
    if rid in seen:
        continue
    seen.add(rid)
    if rid in rels:
        print(rels[rid])
