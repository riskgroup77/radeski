#!/usr/bin/env python3
"""Monthly SEO KPI report from Google Search Console (+ Yandex Webmaster when configured).

What it measures (the plan's KPIs): clicks, impressions, CTR, average position and their
change vs the previous period; how many queries are in TOP-3 / TOP-10 / TOP-20; Fergana and
Kokand queries separately; each service (position, its queries, and pages competing for the
same query); pages that earn traffic; sitemap pages with no impressions at all.

Setup (once):
  1. Google Cloud console -> create a project -> enable "Google Search Console API".
  2. Create a service account, download its JSON key, save it as gsc-service-account.json
     in the project folder (it is git-ignored; never commit it).
  3. Search Console -> Settings -> Users and permissions -> add the service account e-mail
     (Restricted access is enough).
  4. pip install google-api-python-client google-auth requests
  Optional Yandex: create an OAuth token with the "webmaster:hostinfo" scope and set
  YANDEX_WEBMASTER_TOKEN.

Usage:
  python scripts/seo_report.py                # last 28 days vs the 28 days before
  python scripts/seo_report.py --days 90
Writes reports/seo-<date>.md and reports/seo-<date>-queries.csv
"""
from __future__ import annotations

import argparse
import csv
import datetime as dt
import os
import re
import sys
import urllib.request
from pathlib import Path

# Domain property by default; resolve_site() switches to the property the key can actually see
# (the site is also verified with an HTML file, i.e. possibly as "https://radeski.uz/").
SITE = os.environ.get("GSC_SITE", "sc-domain:radeski.uz")
CREDENTIALS = Path(os.environ.get("GSC_CREDENTIALS", "gsc-service-account.json"))
SITEMAP_URL = "https://radeski.uz/sitemap.xml"
FERGANA = re.compile(r"farg|ferg|фергон|фергана|фергане", re.I)
KOKAND = re.compile(r"qo.?qon|kokand|qoqon|коканд|кукон|куқон", re.I)
BRAND = re.compile(r"radeski|радески|rade skin", re.I)

# Services the clinic wants found — a query belongs to the first service whose pattern matches
# (specific ones before "Dermatolog"). Latin Uzbek, Cyrillic Uzbek and Russian spellings.
SERVICES: list[tuple[str, re.Pattern[str]]] = [
    (name, re.compile(pattern, re.I))
    for name, pattern in [
        ("Soch ekish", r"soch ekish|soch ko.?chir|соч экиш|пересадк\w* волос|трансплантац\w* волос|hair transplant"),
        ("Botoks", r"botoks|botox|ботокс|botulin|ботулин|диспорт|dysport"),
        ("Biorevitalizatsiya", r"biorev|биорев"),
        ("Kontur plastika", r"kontur|контурн|filler|филлер|lab katt|увеличени\w* губ"),
        ("Lazer epilyatsiya", r"epilya|эпиляц"),
        ("Bolalar dermatologi", r"bolalar|болалар|детск\w* дерматолог|дерматолог\w* для детей|у детей|у ребен"),
        ("Psoriaz", r"psoria|псориа"),
        ("Vitiligo", r"vitiligo|витилиго"),
        ("Akne", r"akne|акне|husnbuzar|ugri|прыщ|угр"),
        ("Pigmentatsiya", r"pigment|пигмент|melazm|мелазм"),
        ("Rozatsea va tomirlar", r"rozas|розац|kuperoz|купероз|tomir|сосуд"),
        ("IPL", r"\bipl\b|фотоомолож"),
        ("Dermatoskopiya va xollar", r"dermatoskop|дерматоскоп|\bxol\b|xollar|родинк|nevus|невус"),
        ("So'gal va o'smalar", r"so.?g.?al|бородав|papillom|папиллом|o.?sma|новообраз"),
        ("Podolog va tirnoq", r"podolog|подолог|tirnoq|тирноқ|ногот|ногт"),
        ("Trixolog va soch to'kilishi", r"trixolog|трихолог|soch to.?kil|соч тўкил|выпаден\w* волос|alopes|алопец|trixoskop|трихоскоп"),
        ("Kosmetolog", r"kosmetolog|косметолог"),
        ("Dermatolog", r"dermatolog|дерматолог|teri shifokor|кожн\w* врач"),
    ]
]


def service_for(query_text: str) -> str | None:
    return next((name for name, pattern in SERVICES if pattern.search(query_text)), None)


def service_section(page_queries: list[dict]) -> list[str]:
    """Per service: how it ranks, which queries, and which pages Google shows for them.

    More than one page shown for the same query means the pages compete (cannibalization).
    """
    by_service: dict[str, dict[str, dict]] = {}
    for row in page_queries:
        page, text = row["keys"]
        name = service_for(text)
        if not name:
            continue
        entry = by_service.setdefault(name, {}).setdefault(text, {"clicks": 0, "impressions": 0, "weighted": 0.0, "pages": {}})
        entry["clicks"] += row["clicks"]
        entry["impressions"] += row["impressions"]
        entry["weighted"] += row["position"] * row["impressions"]
        entry["pages"][page] = entry["pages"].get(page, 0) + row["impressions"]

    lines = [
        "## Xizmatlar bo'yicha pozitsiyalar",
        "",
        "| Xizmat | Ko'rsatish | Klik | O'rtacha pozitsiya | TOP-10 so'rovlar | Asosiy sahifa |",
        "|---|---:|---:|---:|---:|---|",
    ]
    details: list[str] = []
    for name, _ in SERVICES:
        queries = by_service.get(name)
        if not queries:
            lines.append(f"| {name} | 0 | 0 | — | 0 | — |")
            continue
        impressions = sum(q["impressions"] for q in queries.values())
        clicks = sum(q["clicks"] for q in queries.values())
        position = sum(q["weighted"] for q in queries.values()) / impressions if impressions else 0
        top10 = sum(1 for q in queries.values() if q["impressions"] and q["weighted"] / q["impressions"] <= 10)
        page_totals: dict[str, float] = {}
        for q in queries.values():
            for page, shown in q["pages"].items():
                page_totals[page] = page_totals.get(page, 0) + shown
        main_page = max(page_totals, key=page_totals.get).replace("https://radeski.uz", "")
        lines.append(f"| {name} | {impressions:.0f} | {clicks:.0f} | {position:.1f} | {top10} | {main_page} |")

        details += [
            "",
            f"### {name}",
            "| So'rov | Ko'rsatish | Klik | Pozitsiya | Ko'rsatilgan sahifa(lar) |",
            "|---|---:|---:|---:|---|",
        ]
        for text, q in sorted(queries.items(), key=lambda item: -item[1]["impressions"])[:12]:
            pages = sorted(q["pages"].items(), key=lambda item: -item[1])
            shown = ", ".join(page.replace("https://radeski.uz", "") for page, _ in pages[:3])
            flag = " ⚠️ raqobat" if len(pages) > 1 else ""
            lines_pos = q["weighted"] / q["impressions"] if q["impressions"] else 0
            details.append(f"| {text} | {q['impressions']:.0f} | {q['clicks']:.0f} | {lines_pos:.1f} | {shown}{flag} |")
    return lines + [
        "",
        "⚠️ raqobat — bitta so'rov uchun Google bir nechta sahifani ko'rsatgan: ular bir-biri bilan raqobatlashadi.",
        *details,
    ]


def gsc_service():
    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
    except ImportError:
        sys.exit("pip install google-api-python-client google-auth")
    if not CREDENTIALS.is_file():
        sys.exit(f"Service account key not found: {CREDENTIALS} (see the setup notes at the top of this file)")
    creds = service_account.Credentials.from_service_account_file(
        str(CREDENTIALS), scopes=["https://www.googleapis.com/auth/webmasters.readonly"]
    )
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)


def resolve_site(service) -> str:
    """The radeski.uz property this key has access to (GSC_SITE when it is among them)."""
    sites = [s["siteUrl"] for s in service.sites().list().execute().get("siteEntry", [])]
    if SITE in sites:
        return SITE
    match = next((s for s in sites if "radeski.uz" in s and "api." not in s), None)
    if not match:
        sys.exit(
            "The service account sees no radeski.uz property. Add its e-mail in Search Console ->"
            f" Settings -> Users and permissions. Properties it can see: {sites or 'none'}"
        )
    return match


def query(service, start: dt.date, end: dt.date, dimensions: list[str], limit: int = 25000) -> list[dict]:
    rows: list[dict] = []
    start_row = 0
    while True:
        body = {
            "startDate": start.isoformat(),
            "endDate": end.isoformat(),
            "dimensions": dimensions,
            "rowLimit": min(limit, 25000),
            "startRow": start_row,
        }
        chunk = service.searchanalytics().query(siteUrl=SITE, body=body).execute().get("rows", [])
        rows.extend(chunk)
        if len(chunk) < 25000 or len(rows) >= limit:
            return rows
        start_row += 25000


def totals(rows: list[dict]) -> dict:
    clicks = sum(r["clicks"] for r in rows)
    impressions = sum(r["impressions"] for r in rows)
    position = sum(r["position"] * r["impressions"] for r in rows) / impressions if impressions else 0
    return {"clicks": clicks, "impressions": impressions, "ctr": clicks / impressions if impressions else 0, "position": position}


def change(now: float, before: float, pct: bool = True) -> str:
    if not before:
        return "—"
    delta = (now - before) / before * 100 if pct else now - before
    return f"{delta:+.0f}%" if pct else f"{delta:+.1f}"


def bucket_counts(rows: list[dict]) -> dict:
    return {
        "TOP-3": sum(1 for r in rows if r["position"] <= 3),
        "TOP-10": sum(1 for r in rows if r["position"] <= 10),
        "TOP-20": sum(1 for r in rows if r["position"] <= 20),
    }


def sitemap_urls() -> list[str]:
    try:
        with urllib.request.urlopen(SITEMAP_URL, timeout=30) as response:
            return re.findall(r"<loc>([^<]+)</loc>", response.read().decode("utf-8"))
    except OSError:
        return []


def yandex_section() -> list[str]:
    token = os.environ.get("YANDEX_WEBMASTER_TOKEN")
    if not token:
        return ["_Yandex Webmaster: set YANDEX_WEBMASTER_TOKEN to include it._"]
    try:
        import requests
    except ImportError:
        return ["_Yandex Webmaster: pip install requests_"]
    api = "https://api.webmaster.yandex.net/v4"
    headers = {"Authorization": f"OAuth {token}"}
    try:
        user_id = requests.get(f"{api}/user", headers=headers, timeout=30).json()["user_id"]
        hosts = requests.get(f"{api}/user/{user_id}/hosts", headers=headers, timeout=30).json().get("hosts", [])
        host = next((h for h in hosts if "radeski.uz" in h.get("ascii_host_url", "")), None)
        if not host:
            return ["_Yandex Webmaster: radeski.uz is not added to this account._"]
        data = requests.get(
            f"{api}/user/{user_id}/hosts/{host['host_id']}/search-queries/popular",
            headers=headers,
            params=[("order_by", "TOTAL_SHOWS"), ("query_indicator", "TOTAL_SHOWS"), ("query_indicator", "TOTAL_CLICKS"), ("query_indicator", "AVG_SHOW_POSITION")],
            timeout=30,
        ).json()
    except Exception as error:  # noqa: BLE001 — report, do not crash the Google part
        return [f"_Yandex Webmaster request failed: {error}_"]
    lines = ["| So'rov | Ko'rsatish | Klik | Pozitsiya |", "|---|---:|---:|---:|"]
    for item in data.get("queries", [])[:25]:
        ind = item.get("indicators", {})
        lines.append(f"| {item.get('query_text')} | {ind.get('TOTAL_SHOWS', 0):.0f} | {ind.get('TOTAL_CLICKS', 0):.0f} | {ind.get('AVG_SHOW_POSITION', 0):.1f} |")
    return lines


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__.split("\n")[0])
    parser.add_argument("--days", type=int, default=28)
    args = parser.parse_args()

    end = dt.date.today() - dt.timedelta(days=3)  # Search Console data lags ~2-3 days
    start = end - dt.timedelta(days=args.days - 1)
    prev_end = start - dt.timedelta(days=1)
    prev_start = prev_end - dt.timedelta(days=args.days - 1)

    global SITE
    service = gsc_service()
    SITE = resolve_site(service)
    queries = query(service, start, end, ["query"])
    prev_queries = query(service, prev_start, prev_end, ["query"])
    pages = query(service, start, end, ["page"])
    page_queries = query(service, start, end, ["page", "query"])

    now, before = totals(queries), totals(prev_queries)
    buckets_now, buckets_before = bucket_counts(queries), bucket_counts(prev_queries)
    fergana = [r for r in queries if FERGANA.search(r["keys"][0])]
    kokand = [r for r in queries if KOKAND.search(r["keys"][0])]
    non_brand = [r for r in queries if not BRAND.search(r["keys"][0])]
    seen_pages = {r["keys"][0] for r in pages}
    invisible = [url for url in sitemap_urls() if url not in seen_pages]

    out_dir = Path("reports")
    out_dir.mkdir(exist_ok=True)
    stamp = end.isoformat()
    md: list[str] = [
        f"# Radeski SEO hisoboti — {start} … {end}",
        "",
        f"Oldingi davr bilan solishtiruv: {prev_start} … {prev_end}. Manba: Google Search Console ({SITE}).",
        "",
        "## Umumiy ko'rsatkichlar",
        "| Ko'rsatkich | Hozir | Oldin | O'zgarish |",
        "|---|---:|---:|---:|",
        f"| Kliklar | {now['clicks']:.0f} | {before['clicks']:.0f} | {change(now['clicks'], before['clicks'])} |",
        f"| Ko'rsatishlar | {now['impressions']:.0f} | {before['impressions']:.0f} | {change(now['impressions'], before['impressions'])} |",
        f"| CTR | {now['ctr']:.1%} | {before['ctr']:.1%} | {change(now['ctr'], before['ctr'])} |",
        f"| O'rtacha pozitsiya | {now['position']:.1f} | {before['position']:.1f} | {change(now['position'], before['position'], pct=False)} |",
        "",
        "## Pozitsiyalar (so'rovlar soni)",
        "| Guruh | Hozir | Oldin |",
        "|---|---:|---:|",
        *[f"| {k} | {buckets_now[k]} | {buckets_before[k]} |" for k in buckets_now],
        "",
        "## Shaharlar bo'yicha so'rovlar",
        f"- Farg'ona: {len(fergana)} ta so'rov, {totals(fergana)['clicks']:.0f} klik, {totals(fergana)['impressions']:.0f} ko'rsatish",
        f"- Qo'qon: {len(kokand)} ta so'rov, {totals(kokand)['clicks']:.0f} klik, {totals(kokand)['impressions']:.0f} ko'rsatish",
        f"- Brendsiz so'rovlar (Radeski so'zisiz): {totals(non_brand)['clicks']:.0f} klik",
        "",
        "### Qo'qon — eng ko'p ko'rsatilgan so'rovlar",
        "| So'rov | Klik | Ko'rsatish | Pozitsiya |",
        "|---|---:|---:|---:|",
        *[f"| {r['keys'][0]} | {r['clicks']:.0f} | {r['impressions']:.0f} | {r['position']:.1f} |" for r in sorted(kokand, key=lambda r: -r["impressions"])[:20]],
        "",
        "### Farg'ona — eng ko'p ko'rsatilgan so'rovlar",
        "| So'rov | Klik | Ko'rsatish | Pozitsiya |",
        "|---|---:|---:|---:|",
        *[f"| {r['keys'][0]} | {r['clicks']:.0f} | {r['impressions']:.0f} | {r['position']:.1f} |" for r in sorted(fergana, key=lambda r: -r["impressions"])[:20]],
        "",
        *service_section(page_queries),
        "",
        "## Trafik olayotgan sahifalar (TOP-20)",
        "| Sahifa | Klik | Ko'rsatish | Pozitsiya |",
        "|---|---:|---:|---:|",
        *[f"| {r['keys'][0]} | {r['clicks']:.0f} | {r['impressions']:.0f} | {r['position']:.1f} |" for r in sorted(pages, key=lambda r: -r["clicks"])[:20]],
        "",
        "## Pozitsiya 4–20, ko'p ko'rsatilgan — tezroq TOP-3 ga chiqarish mumkin",
        "| So'rov | Ko'rsatish | Pozitsiya |",
        "|---|---:|---:|",
        *[f"| {r['keys'][0]} | {r['impressions']:.0f} | {r['position']:.1f} |" for r in sorted((r for r in queries if 3 < r["position"] <= 20), key=lambda r: -r["impressions"])[:25]],
        "",
        f"## Sitemap'dagi, lekin bu davrda hech ko'rsatilmagan sahifalar: {len(invisible)}",
        *[f"- {url}" for url in invisible[:40]],
        "",
        "## Yandex Webmaster",
        *yandex_section(),
        "",
    ]
    report = out_dir / f"seo-{stamp}.md"
    report.write_text("\n".join(md), encoding="utf-8")
    with (out_dir / f"seo-{stamp}-queries.csv").open("w", newline="", encoding="utf-8") as fh:
        writer = csv.writer(fh)
        writer.writerow(["query", "clicks", "impressions", "ctr", "position", "city"])
        for r in sorted(queries, key=lambda r: -r["impressions"]):
            q = r["keys"][0]
            city = "qoqon" if KOKAND.search(q) else "fargona" if FERGANA.search(q) else ""
            writer.writerow([q, int(r["clicks"]), int(r["impressions"]), f"{r['ctr']:.4f}", f"{r['position']:.1f}", city])
    print(f"Report: {report}")


if __name__ == "__main__":
    main()
