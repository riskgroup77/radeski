import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ServiceDetail } from '../types';

/** Ma'lum sub-xizmat IDlari uchun aniq ikonkalar */
export const SUB_SERVICE_ICON_BY_ID: Record<string, string> = {
  'det-derm': 'Baby',
  fototerapiya: 'Sun',
  immunobiologicheskaya: 'ShieldPlus',
  'bbl-foto': 'Sparkles',
  mikrotoki: 'Waves',
  konturnaya: 'Syringe',
  botulino: 'SmilePlus',
  biorev: 'Droplets',
  'alex-lazer': 'Zap',
  trixoskop: 'ScanSearch',
  'photofinder-scan': 'ScanEye',
  biopsiya: 'Microscope',
  'moh-surgery': 'ScalpelLine',
  'consult-group': 'Users',
  'dermatosc-lessons': 'GraduationCap',
  'podolog-dermatolog': 'Footprints',
  gistolog: 'Microscope',
  'fy-protocols': 'SunMedium',
};

const KEYWORD_ICON_RULES: { keywords: string[]; icon: string }[] = [
  { keywords: ['bolalar', 'bolaga', 'детск', 'pediatric', 'child', 'infant'], icon: 'Baby' },
  { keywords: ['fototerapi', 'фототера', 'photother', 'uvb', 'ultrabinafsha'], icon: 'Sun' },
  { keywords: ['immunobiolog', 'иммунобиolog', 'immunobiolog', 'biologik', 'biopreparat'], icon: 'ShieldPlus' },
  { keywords: ['radioto', 'radio', 'radioto\'lqin', 'радио', 'lazer dermat', 'лазер дермат', 'wave dermat'], icon: 'Zap' },
  { keywords: ['bbl', 'fotoomolaj', 'фотоомолож', 'forever young', 'gen daraja', 'генн'], icon: 'Sparkles' },
  { keywords: ['mikrotok', 'микроток', 'microcurrent'], icon: 'Waves' },
  { keywords: ['kontur', 'контур', 'filler', 'gialuron', 'гиалурон', 'plastika'], icon: 'Syringe' },
  { keywords: ['botulin', 'botoks', 'ботул', 'dysport'], icon: 'SmilePlus' },
  { keywords: ['biorev', 'биорев'], icon: 'Droplets' },
  { keywords: ['epilyats', 'эпиля', 'lazer ep', 'aleksandrit', 'alexandrite'], icon: 'Zap' },
  { keywords: ['trixoskop', 'трихоскоп', 'trichosc', 'soch', 'volos', 'волос', 'alopec'], icon: 'ScanSearch' },
  { keywords: ['photofinder', 'skaner', 'сканер', 'scan', 'dermatoskop', 'дерматоскоп'], icon: 'ScanEye' },
  { keywords: ['biopsiya', 'биопс', 'gistolog', 'гистолог', 'patolog', 'patology'], icon: 'Microscope' },
  { keywords: ['mohs', 'jarroh', 'хирург', 'surgery', 'operats'], icon: 'ScalpelLine' },
  { keywords: ['maktab', 'школ', 'school', 'o\'quv', 'kurs', 'seminar', 'guruh'], icon: 'GraduationCap' },
  { keywords: ['tirnoq', 'nogte', 'ногт', 'nail', 'oyoq', 'stop', 'podolog', 'подолог'], icon: 'Footprints' },
  { keywords: ['psoriaz', 'псориаз', 'psoriasis'], icon: 'BookOpen' },
  { keywords: ['lazer', 'лазер', 'laser'], icon: 'Zap' },
  { keywords: ['kosmetolog', 'косметолог', 'estetik', 'aesthetic'], icon: 'Sparkles' },
  { keywords: ['konsult', 'консульт', 'consult'], icon: 'MessageCircle' },
];

export function resolveSubServiceIcon(sub: ServiceDetail, categoryIcon = 'Activity'): string {
  if (sub.icon) return sub.icon;
  if (SUB_SERVICE_ICON_BY_ID[sub.id]) return SUB_SERVICE_ICON_BY_ID[sub.id];

  const haystack = `${sub.id} ${sub.name.uz} ${sub.name.ru} ${sub.name.en}`.toLowerCase();
  for (const rule of KEYWORD_ICON_RULES) {
    if (rule.keywords.some((keyword) => haystack.includes(keyword))) {
      return rule.icon;
    }
  }

  return categoryIcon;
}

export function getServiceLucideIcon(iconName: string): LucideIcon {
  const icons = Icons as unknown as Record<string, LucideIcon>;
  return icons[iconName] || Icons.ClipboardList;
}
