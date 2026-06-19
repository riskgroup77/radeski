import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ServiceCategory, ServiceDetail } from '../types';

/** 12 ta asosiy xizmat yo'nalishi ikonkalari */
export const CATEGORY_ICON_BY_ID: Record<string, string> = {
  dermatologiya: 'ScanFace',
  'apparatnaya-kosmetologiya': 'WandSparkles',
  'in-ekcionnaya-kosmetologiya': 'Syringe',
  'lazernaya-epilyaciya': 'Zap',
  'trihologiya-centr-lechenie-volos': 'ScanSearch',
  dermatoonkologiya: 'ScanEye',
  'hirurgicheskaya-dermatologiya': 'ScalpelLine',
  'shkola-psoriaza': 'BookHeart',
  'shkola-dermatoskopii': 'GraduationCap',
  'clinika-patologii-nogtej': 'Footprints',
  dermatopatologiya: 'Microscope',
  'gen-revo': 'Dna',
};

/** Sub-xizmat ID bo'yicha aniq ikonkalar */
export const SUB_SERVICE_ICON_BY_ID: Record<string, string> = {
  'det-derm': 'Baby',
  fototerapiya: 'Sun',
  immunobiologicheskaya: 'Pill',
  'bbl-foto': 'SunMedium',
  mikrotoki: 'Waves',
  konturnaya: 'CircleDot',
  botulino: 'SmilePlus',
  biorev: 'Droplets',
  'alex-lazer': 'Zap',
  trixoskop: 'ScanSearch',
  'photofinder-scan': 'ScanEye',
  biopsiya: 'Microscope',
  'moh-surgery': 'ScalpelLine',
  'consult-group': 'UsersRound',
  'dermatosc-lessons': 'Presentation',
  'podolog-dermatolog': 'Footprints',
  gistolog: 'FlaskConical',
  'fy-protocols': 'Sparkles',
};

const CATEGORY_KEYWORD_RULES: { keywords: string[]; icon: string }[] = [
  { keywords: ['dermatoonkolog', 'дерматоонкolog', 'onco', 'melanom', 'меланом'], icon: 'ScanEye' },
  { keywords: ['dermatopatolog', 'дерматопатolog', 'patolog', 'патolog'], icon: 'Microscope' },
  { keywords: ['trixolog', 'трихolog', 'soch', 'volos', 'волос', 'hair'], icon: 'ScanSearch' },
  { keywords: ['epilyats', 'эпиля', 'aleksandrit', 'alexandrite'], icon: 'Zap' },
  { keywords: ['inyeksion', 'инъек', 'inject', 'botoks', 'botulin', 'kontur', 'контур', 'biorev', 'биорев'], icon: 'Syringe' },
  { keywords: ['apparat', 'аппарат', 'hardware', 'bbl', 'ipl', 'mikrotok', 'микроток'], icon: 'WandSparkles' },
  { keywords: ['psoriaz maktab', 'школа псориаз', 'psoriasis school'], icon: 'BookHeart' },
  { keywords: ['dermatoskop', 'дерматоскоп', 'maktab', 'школ', 'school'], icon: 'GraduationCap' },
  { keywords: ['tirnoq', 'nogte', 'ногт', 'nail', 'oyoq', 'stop', 'podolog', 'подолог'], icon: 'Footprints' },
  { keywords: ['jarroh', 'хирург', 'surgery', 'mohs', 'mikrograf'], icon: 'ScalpelLine' },
  { keywords: ['gen', 'forever young', 'fotoomolaj', 'фотоомолож'], icon: 'Dna' },
  { keywords: ['dermatolog', 'дерматolog', 'teri kasall', 'кож'], icon: 'ScanFace' },
  { keywords: ['kosmetolog', 'косметolog', 'estetik', 'aesthetic'], icon: 'WandSparkles' },
  { keywords: ['lazer', 'лазер', 'laser'], icon: 'Zap' },
];

const SUB_SERVICE_KEYWORD_RULES: { keywords: string[]; icon: string }[] = [
  { keywords: ['bolalar', 'bolaga', 'детск', 'pediatric', 'child', 'infant', 'go\'dak'], icon: 'Baby' },
  { keywords: ['fototerapi', 'фототера', 'photother', 'uvb', 'ultrabinafsha', 'vitiligo', 'витилиго'], icon: 'Sun' },
  { keywords: ['immunobiolog', 'иммунобиolog', 'biologik', 'biopreparat', 'биопрепарат', 'target'], icon: 'Pill' },
  { keywords: ['radioto', 'radio', 'radioto\'lqin', 'радио', 'радиовол', 'to\'lqin'], icon: 'Radio' },
  { keywords: ['bbl', 'ipl', 'fotoomolaj', 'forever young', 'gen daraja', 'генн', 'sciton'], icon: 'SunMedium' },
  { keywords: ['mikrotok', 'микроток', 'microcurrent', 'limfodrenaj'], icon: 'Waves' },
  { keywords: ['kontur', 'контур', 'filler', 'gialuron', 'гиалурон', 'plastika', 'lab ', 'gub'], icon: 'CircleDot' },
  { keywords: ['botulin', 'botoks', 'ботул', 'dysport', 'mimik'], icon: 'SmilePlus' },
  { keywords: ['biorev', 'биорев', 'namlantir', 'увлаж'], icon: 'Droplets' },
  { keywords: ['mezoterapi', 'мезотера', 'mesother'], icon: 'Syringe' },
  { keywords: ['plazmoterapi', 'plazma', 'плазм'], icon: 'Droplets' },
  { keywords: ['epilyats', 'эпиля', 'lazer ep', 'aleksandrit', 'alexandrite', 'diod'], icon: 'Zap' },
  { keywords: ['trixoskop', 'трихоскоп', 'trichosc', 'alopec', 'alopets', 'to\'kilish', 'выпаден'], icon: 'ScanSearch' },
  { keywords: ['transplant', 'transplantats', 'трансплант'], icon: 'Sparkles' },
  { keywords: ['photofinder', 'photo finder', 'skanerlash', 'сканер', 'body mapping', 'xaritalash'], icon: 'ScanEye' },
  { keywords: ['dermatoskop', 'дерматоскоп', 'dermoscop'], icon: 'ScanEye' },
  { keywords: ['gistolog', 'гистолог', 'histolog', 'patolog', 'patology', 'biomarker'], icon: 'FlaskConical' },
  { keywords: ['biopsiya', 'биопс', 'namuna olish'], icon: 'Microscope' },
  { keywords: ['mohs', 'mikrografik', 'mikrograf', 'микрохирург'], icon: 'ScalpelLine' },
  { keywords: ['jarroh', 'хирург', 'operats', 'surgery', 'olib tashlash', 'удален'], icon: 'ScalpelLine' },
  { keywords: ['papilloma', 'papillom', 'папиллом', 'borma', 'борма', 'condylom'], icon: 'CircleDot' },
  { keywords: ['gemangioma', 'gemang', 'гемангиом', 'angioma'], icon: 'HeartPulse' },
  { keywords: ['psoriaz', 'псориаз', 'psoriasis'], icon: 'Hand' },
  { keywords: ['akne', 'акне', 'acne', 'ugri', 'угр'], icon: 'ScanFace' },
  { keywords: ['ekzema', 'экзем', 'eczema', 'dermatit', 'дерматит'], icon: 'Hand' },
  { keywords: ['xol', 'родинк', 'nevus', 'nevusa', 'melanom'], icon: 'ScanEye' },
  { keywords: ['tirnoq', 'nogte', 'ногт', 'nail', 'vrosl', 'вросш', 'podolog', 'подолог', 'oyoq', 'stop'], icon: 'Footprints' },
  { keywords: ['zamburug', 'gribok', 'грибок', 'fungus', 'mikoz'], icon: 'Footprints' },
  { keywords: ['maktab', 'школ', 'school', 'o\'quv', 'kurs', 'seminar', 'dars', 'trening'], icon: 'GraduationCap' },
  { keywords: ['guruh', 'групп', 'group consult', 'maslahat'], icon: 'UsersRound' },
  { keywords: ['konsult', 'консульт', 'consult'], icon: 'MessageCircle' },
  { keywords: ['lazer', 'лазер', 'laser'], icon: 'Zap' },
  { keywords: ['kosmetolog', 'косметolog', 'estetik', 'yoshartir', 'омолож'], icon: 'Sparkles' },
];

function matchIconByKeywords(
  haystack: string,
  rules: { keywords: string[]; icon: string }[],
): string | null {
  for (const rule of rules) {
    if (rule.keywords.some((keyword) => haystack.includes(keyword))) {
      return rule.icon;
    }
  }
  return null;
}

export function resolveCategoryIcon(category: Pick<ServiceCategory, 'id' | 'icon' | 'title'>): string {
  if (CATEGORY_ICON_BY_ID[category.id]) {
    return CATEGORY_ICON_BY_ID[category.id];
  }

  const haystack = `${category.id} ${category.title.uz} ${category.title.ru} ${category.title.en}`.toLowerCase();
  const byKeyword = matchIconByKeywords(haystack, CATEGORY_KEYWORD_RULES);
  if (byKeyword) return byKeyword;

  if (category.icon && category.icon !== 'Activity') {
    return category.icon;
  }

  return 'ClipboardList';
}

export function resolveSubServiceIcon(
  sub: ServiceDetail,
  category: Pick<ServiceCategory, 'id' | 'icon' | 'title'>,
): string {
  if (sub.icon) return sub.icon;
  if (SUB_SERVICE_ICON_BY_ID[sub.id]) return SUB_SERVICE_ICON_BY_ID[sub.id];

  const haystack = `${sub.id} ${sub.name.uz} ${sub.name.ru} ${sub.name.en} ${sub.description.uz} ${sub.description.ru}`.toLowerCase();
  const byKeyword = matchIconByKeywords(haystack, SUB_SERVICE_KEYWORD_RULES);
  if (byKeyword) return byKeyword;

  return resolveCategoryIcon(category);
}

export function getServiceLucideIcon(iconName: string): LucideIcon {
  const icons = Icons as unknown as Record<string, LucideIcon>;
  return icons[iconName] || Icons.ClipboardList;
}
