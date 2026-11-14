# CTR tajribasi — 14-noyabr 2026

Search Console'da ko'rinishlari ko'p, lekin bosilishi kam bo'lgan 11 ta sahifaning Google'dagi
sarlavhasi (title) va tavsifi (description) qayta yozildi. Sahifa matni o'zgarmadi. Maqsad —
pozitsiya o'zgarmagan holda CTR'ni oshirish.

**Taqqoslash:** deploy'dan kamida 14 kun o'tgach (≈ 1-dekabr), Search Console → Natijalar →
Sahifalar, oxirgi 28 kun, quyidagi baseline bilan solishtiriladi. Pozitsiya ham yozib olinadi:
CTR pozitsiya o'zgarsa ham o'zgaradi.

Baseline: Search Console eksporti 11.08–10.11.2026 (3 oy), veb-qidiruv.

| Sahifa | Ko'rinish | CTR | Pozitsiya | Asosiy so'rovlar | Yangi title |
|---|---|---|---|---|---|
| /uz/articles/art-atopic-dermatitis | 2 436 | 0,74% | 6,95 | atopik dermatit (935), … nima, … bolalarda davolash | Atopik dermatit nima: belgilari, bolalarda davolash |
| /uz/articles/art-til-yassi-hujayrali-rak | 1 134 | 0,97% | 6,99 | til raki, … alomatlari, … rasmi, … belgilari | Til raki: alomatlari, belgilari va qanday ko‘rinadi |
| /en/articles/art-prp-terapiya-oldidan-tahlillar | 909 | 1,43% | 4,09 | prp test, prp blood test | Blood Tests Before PRP: The Full Checklist |
| /uz/articles/art-trixolog-trixoskopiya | 873 | 1,95% | 4,13 | trixolog kim (398), trixolog, trixoskopiya | Trixolog kim, trixoskopiya nima va qachon kerak |
| /uz/conditions/yuz-qizarishi | 470 | 0,43% | 6,32 | kuperoz nima, yuz qizarishi sabablari | Yuz qizarishi sabablari: rozasea, kuperoz, sezgir teri |
| /uz/articles/art-akne | 356 | 0,28% | 7,20 | akne nima (122), akne | Akne nima: sabablari, belgilari va davolash |
| /uz/conditions/teri-qichishi | 338 | 0,30% | 7,57 | teri qichishi davolash, … dori | Teri qichishi: dermatolog tashxisi va davolash |
| /uz/articles/art-prp-terapiya-oldidan-tahlillar | 314 | 1,27% | 6,96 | prp terapiya nima | PRP oldidan tahlillar: to‘liq ro‘yxat va tayyorgarlik |
| /uz/articles/art-plazmaferez-teri-kasalliklari | 251 | 0,40% | 8,33 | plazmaferez nima (103), plazmaferez | Plazmaferez nima: teri kasalliklarida qachon kerak |
| /uz/conditions/seboreyali-dermatit | 242 | 0,41% | 8,11 | seboreyali dermatit, … nima | Seboreyali dermatit nima: belgilari va davolash |
| /uz/articles/art-teri-qichishi | 234 | 0,00% | 5,84 | teri/bosh/badan qichishi sabablari | Teri va badan qichishi sabablari: qachon xavfli |

Jami: 7 556 ko'rinish, ≈ 55 klik (CTR ≈ 0,7%).

## Nima o'zgardi

- Sarlavha odamlar yozayotgan so'z bilan boshlanadi: "… nima", "… alomatlari", "trixolog kim",
  "… sabablari".
- Tavsiflar endi o'rtasidan "…" bilan uzilmaydi: 139–156 belgi, to'liq gap.
- "Teri qichishi" bo'yicha ikki sahifa vazifasi ajratildi: maqola → *sabablari*, kasallik
  sahifasi → *dermatolog tashxisi va davolash*.
- Kod: maqolalar `src/seo/articleSeoTitles.ts` va `ARTICLE_SEO_OVERRIDES` (`src/seo/pageMeta.ts`);
  kasallik sahifalari uchun yangi `CONDITION_SEO_OVERRIDES`.

## Natija (to'ldiriladi)

| Sahifa | Ko'rinish | CTR | Pozitsiya | Izoh |
|---|---|---|---|---|
| | | | | |
