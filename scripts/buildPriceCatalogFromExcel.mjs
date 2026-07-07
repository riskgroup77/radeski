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

  let openpyxl;
  try {
    const { execSync } = await import("child_process");
    execSync("python -c \"import openpyxl\"", { stdio: "ignore" });
  } catch {
    throw new Error("openpyxl required: pip install openpyxl");
  }

  const pyScript = `
import json, openpyxl
wb = openpyxl.load_workbook(r'''${xlsxPath.replace(/\\/g, "\\\\")}''', data_only=True)
ws = wb.active
rows = []
for row in ws.iter_rows(min_row=1, max_row=ws.max_row, values_only=True):
    cells = [None if c is None else str(c).strip() for c in row]
    if any(c for c in cells if c):
        rows.append(cells)
with open(r'''${parsedJsonPath.replace(/\\/g, "\\\\")}''', 'w', encoding='utf-8') as f:
    json.dump(rows, f, ensure_ascii=False, indent=2)
print(len(rows))
`;
  const { execSync } = await import("child_process");
  execSync(`python -c ${JSON.stringify(pyScript)}`, { stdio: "inherit", cwd: root });
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

  return { categories: categories.filter((c) => c.items.length > 0), errors };
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
