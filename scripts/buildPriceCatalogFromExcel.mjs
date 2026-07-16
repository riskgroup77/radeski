/**
 * Builds priceCatalog.json + price-list-raw.txt from Excel export (112211.xlsx).
 * Usage: node scripts/buildPriceCatalogFromExcel.mjs [path-to-xlsx]
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const defaultXlsx = path.resolve(process.env.USERPROFILE || "", "Desktop", "112211.xlsx");
const xlsxPath = process.argv[2] ? path.resolve(process.argv[2]) : defaultXlsx;
const parsedJsonPath = path.join(root, "scripts", "excel-prices-parsed.json");
const outCatalogPath = path.join(root, "src", "data", "priceCatalog.json");
const outRawPath = path.join(root, "scripts", "price-list-raw.txt");
const outOrderPath = path.join(root, "scripts", "price-category-order.json");

const CYRILLIC_TO_LATIN = {
  а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z",
  и: "i", й: "y", к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r",
  с: "s", т: "t", у: "u", ф: "f", х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch",
  ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya",
};

function transliterate(text) {
  return text
    .split("")
    .map((ch) => {
      const lower = ch.toLowerCase();
      if (CYRILLIC_TO_LATIN[lower] !== undefined) return CYRILLIC_TO_LATIN[lower];
      return ch;
    })
    .join("");
}

function slugify(name) {
  const base = transliterate(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
  return base || "category";
}

function parsePrice(raw) {
  if (raw === null || raw === undefined) return null;
  const s = String(raw).trim().replace(/\s/g, "");
  if (!s) return null;
  if (s === "0,00" || s === "0") return 0;
  if (s.includes(",")) {
    const [intPart, frac = ""] = s.split(",");
    if (frac === "00" || frac === "0" || frac === "") {
      return Number(intPart.replace(/,/g, ""));
    }
    return Number(`${intPart}.${frac}`);
  }
  return Number(s.replace(/,/g, ""));
}

function formatPriceRaw(value) {
  if (!Number.isFinite(value)) return "0,00";
  if (Number.isInteger(value)) return `${value},00`;
  return String(value).replace(".", ",");
}

const LAB_CATEGORY_DEFS = [
  {
    id: "laboratoriya-umumiy-klinik",
    nameRu: "Лаборатория — общеклинические исследования",
    match: (text) =>
      /(общий анализ крови|общий анализ мочи|соэ|лейкоформул|тромбоцит|резус|группа крови|гемоглобин|нечипоренко|зимницкому|стаканная проба|моча по|хг в моче)/i.test(text),
  },
  {
    id: "laboratoriya-siydik-va-najas",
    nameRu: "Лаборатория — моча и кал",
    match: (text) =>
      /(копролог|копрограмм|кал |кала|скрытую кровь|моча|мочи|моче|осадка мочи|желчные пигменты|ацетон|микроальбумин|белок в моче|глюкоза в моче)/i.test(text),
  },
  {
    id: "laboratoriya-koagulatsiya",
    nameRu: "Лаборатория — коагулограмма и гемостаз",
    match: (text) =>
      /(коагул|свертываем|кровотеч|протромбин|тромбо динамика|коалиновое|ачтв|мно|пти|тромбиновое|д[ -]?димер|антитромбин|волчаноч)/i.test(text),
  },
  {
    id: "laboratoriya-biokimyo",
    nameRu: "Лаборатория — биохимия и микроэлементы",
    match: (text) =>
      /(алт|аст|альбумин|билирубин|глюкоз|инсулин|креатинин|мочевина|холестерин|триглицерид|аполипопротеин|железо|ферритин|трансферрин|эритропоэтин|амилаз|липаза|фосфатаза|лдг|ldg|ггт|ggt|холинэстераза|кфк|цистатин|эластаза|кальпротектин|мочевая кислота|калий|натрий|хлорид|магний|кальций|фосфор|цинк|медь|витамин|фолиевая|гомоцистеин|миоглобин|прокальцитонин|остеокальцин|кальцитонин|натрийуретический пептид|фруктозамин|индекс нома|глики|гликози|гликолизи|глюкоматдекарбоксилаза|реактивный белок|тропонин)/i.test(text),
  },
  {
    id: "laboratoriya-gormonal",
    nameRu: "Лаборатория — гормоны и репродуктивное здоровье",
    match: (text) =>
      /(прогестерон|dhea|дгэа|актг|кортизол|пролактин|тестостерон|ттг|тире|трийод|тироксин|т4|т3|хгч|фсг|лг|эстрадиол|эстриол|антимюллер|амг|ингибин|соматотроп|igf|igfbp|адренокортикотроп|ренин|альдостерон|паратгормон|shbg|глобулин, связывающий половые гормоны|свобод\. хорионич|гонадотропин)/i.test(text),
  },
  {
    id: "laboratoriya-infektsiyalar",
    nameRu: "Лаборатория — инфекции и серология",
    match: (text) =>
      /(cytomegalovirus|цмв|герпес|herpes|hiv|вич|спид|hbsag|hcv|hvc|гепатит|rw|сифилис|sars-cov|covid|rose bengal|бруцел|helicobacter|toxoplas|токсоплаз|эпштейн|ebv|igg|igm|igg\/igm|antigen|ифа|torch)/i.test(text),
  },
  {
    id: "laboratoriya-immunologiya-allergiya",
    nameRu: "Лаборатория — иммунология и аллергология",
    match: (text) =>
      /(антител|ана|антинуклеар|антинейтрофил|цитруллин|ревматоидный|антистрептолизин|асло|ige|iga|igm|igg$|общий ige|аллергопанел|аллерго|целиакия|аутоиммун|интерлейкин|ama m2|lkm1|lc1|cenp-b|gbm|pr3|mpo|sla\/lp|анти[- ]?тпо|анти[- ]?тг|rh-фактору)/i.test(text),
  },
  {
    id: "laboratoriya-mikrobiologiya-pcr",
    nameRu: "Лаборатория — ПЦР, бактериология и мазки",
    match: (text) =>
      /(пцр|рт-пцр|бак |бактериол|бакпосев|мазок|соскоб|уретр|цитолог|pap-тест|впч|секрет простаты|спермограмма|нативный мазок|лептотрихоз|мокрот|назальный секрет|совместимость|курцрока|шуварского|симса|гунера|антисперм|mar - тест|neisseria|trichomonas|gardnerella|candida|уреаплаз|микоплаз|хламид)/i.test(text),
  },
  {
    id: "laboratoriya-parazitologiya-mikologiya",
    nameRu: "Лаборатория — паразитология и микология",
    match: (text) =>
      /(аскарида|лямбли|простейш|гельминт|энтеробиоз|остриц|демодек|чесоточ|клещ|лейшманиоз|гриб|микоз)/i.test(text),
  },
  {
    id: "laboratoriya-onkomarkerlar",
    nameRu: "Лаборатория — онкомаркеры",
    match: (text) =>
      /(онкомаркер|раковый|cea|са-|\bca[- ]?\d+|cyfra|he-4|roma|scc|s 100|psa|альфа-фетопротеин|afp|эмбриональный антиген|нейрон специфическая енолаза|nse)/i.test(text),
  },
  {
    id: "laboratoriya-patomorfologiya",
    nameRu: "Лаборатория — гистология и биопсия",
    match: (text) => /(биопсия|гистолог)/i.test(text),
  },
];

function splitLaboratoryCategory(category) {
  const grouped = new Map(
    LAB_CATEGORY_DEFS.map((def) => [def.id, { id: def.id, nameRu: def.nameRu, items: [] }]),
  );
  const fallbackId = "laboratoriya-biokimyo";

  for (const item of category.items) {
    const match = LAB_CATEGORY_DEFS.find((def) => def.match(item.nameRu));
    const targetId = match?.id ?? fallbackId;
    grouped.get(targetId).items.push(item);
  }

  return LAB_CATEGORY_DEFS
    .map((def) => grouped.get(def.id))
    .filter((group) => group.items.length > 0);
}

async function loadRows() {
  if (fs.existsSync(parsedJsonPath)) {
    const statJson = fs.statSync(parsedJsonPath);
    if (fs.existsSync(xlsxPath)) {
      const statXlsx = fs.statSync(xlsxPath);
      if (statJson.mtimeMs >= statXlsx.mtimeMs) {
        return JSON.parse(fs.readFileSync(parsedJsonPath, "utf8"));
      }
    } else {
      return JSON.parse(fs.readFileSync(parsedJsonPath, "utf8"));
    }
  }

  const { execSync } = await import("child_process");
  execSync(`python "${path.join(__dirname, "parse_excel.py")}" "${xlsxPath}" "${parsedJsonPath}"`, {
    stdio: "inherit",
    cwd: root,
  });
  return JSON.parse(fs.readFileSync(parsedJsonPath, "utf8"));
}

function parseRows(rows) {
  const categories = [];
  const usedIds = new Map();
  let current = null;
  const errors = [];

  const ensureUniqueId = (nameRu) => {
    let id = slugify(nameRu);
    const count = usedIds.get(id) ?? 0;
    if (count > 0) id = `${id}-${count + 1}`;
    usedIds.set(slugify(nameRu), count + 1);
    return id;
  };

  const startCategory = (nameRu) => {
    current = { id: ensureUniqueId(nameRu), nameRu, items: [] };
    categories.push(current);
  };

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const name = (row[0] || "").trim();
    const priceValue = parsePrice(row[4]);

    if (!name) continue;
    if (/^услуга$/i.test(name)) continue;

    if (priceValue !== null && Number.isFinite(priceValue)) {
      if (!current) {
        errors.push({ row: i + 1, reason: "item before category", name });
        startCategory("Прочее");
      }
      current.items.push({ nameRu: name, priceValue });
      continue;
    }

    startCategory(name);
  }

  const normalized = categories
    .filter((c) => c.items.length > 0)
    .flatMap((category) =>
      category.id === "laboratoriya" || /лаборатор/i.test(category.nameRu)
        ? splitLaboratoryCategory(category)
        : [category],
    );

  return { categories: normalized, errors };
}

function toRawText(categories) {
  const lines = [];
  for (const cat of categories) {
    lines.push(cat.nameRu);
    for (const item of cat.items) {
      lines.push(`${item.nameRu}\t${formatPriceRaw(item.priceValue)}`);
    }
    lines.push("");
  }
  return lines.join("\n").trimEnd() + "\n";
}

const rows = await loadRows();
const { categories, errors } = parseRows(rows);

fs.mkdirSync(path.dirname(outCatalogPath), { recursive: true });
fs.writeFileSync(outCatalogPath, JSON.stringify({ categories }, null, 2) + "\n", "utf8");
fs.writeFileSync(outRawPath, toRawText(categories), "utf8");
fs.writeFileSync(
  outOrderPath,
  JSON.stringify(
    categories.map((c) => ({ id: c.id, nameRu: c.nameRu, itemCount: c.items.length })),
    null,
    2,
  ) + "\n",
  "utf8",
);

const itemCount = categories.reduce((n, c) => n + c.items.length, 0);
console.log(`Source: ${fs.existsSync(xlsxPath) ? xlsxPath : parsedJsonPath}`);
console.log(`Categories: ${categories.length}`);
console.log(`Items: ${itemCount}`);
console.log(`Wrote: ${outCatalogPath}`);
console.log(`Wrote: ${outRawPath}`);
console.log(`Wrote: ${outOrderPath}`);
if (errors.length) {
  console.log(`Warnings: ${errors.length}`);
  for (const err of errors.slice(0, 10)) {
    console.log(`  row ${err.row}: ${err.reason} — ${err.name}`);
  }
}
