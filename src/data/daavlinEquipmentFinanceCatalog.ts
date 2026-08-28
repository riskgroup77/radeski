import type { DaavlinModelId } from '../routing/paths';
import type { Locale } from '../types';

type L = Record<Locale, string>;
const t = (uz: string, ru: string, en: string): L => ({ uz, ru, en });

export type FinanceVariant = {
  id: string;
  label: L;
  catalogSku?: string;
  /** Admin / ichki ma’lumot — saytda ko‘rsatilmaydi */
  purchaseUsd: number;
  /** Saytda ko‘rsatiladigan yagona narx (so‘m) */
  purchaseUzs: number;
  rentalMonthlyUzs: number;
};

export type ModelFinanceConfig = {
  modelId: DaavlinModelId;
  catalogModel: L;
  variants: FinanceVariant[];
  leaseAnnualRate: number;
  leaseMinDownPct: number;
  leaseMaxDownPct: number;
  leaseTermsMonths: number[];
  notes: L;
};

export const USD_UZS_REFERENCE = 12_800;

function financeVariant(
  id: string,
  label: L,
  purchaseUsd: number,
  rentalMonthlyUzs: number,
  catalogSku?: string,
): FinanceVariant {
  return {
    id,
    label,
    catalogSku,
    purchaseUsd,
    purchaseUzs: Math.round(purchaseUsd * USD_UZS_REFERENCE),
    rentalMonthlyUzs,
  };
}

export function resolvePurchaseUzs(variant: FinanceVariant): number {
  return variant.purchaseUzs;
}

export const DAAVLIN_FINANCE_UI: Record<
  Locale,
  {
    sectionTitle: string;
    sectionDesc: string;
    tabRent: string;
    tabLease: string;
    variantLabel: string;
    purchaseLabel: string;
    purchaseNote: string;
    rentMonthly: string;
    rentDuration: string;
    rentTotal: string;
    rentMonths: string;
    leaseDown: string;
    leaseTerm: string;
    leaseRate: string;
    leaseMonthly: string;
    leaseTotal: string;
    disclaimer: string;
    cta: string;
    monthUnit: string;
  }
> = {
  uz: {
    sectionTitle: 'Ijara va lizing kalkulyatori',
    sectionDesc:
      'Radeski distributor preyskurantidagi narx va ijara stavkalari asosida taxminiy hisob-kitob. Aniq shartlar — shaxsiy konsultatsiyada.',
    tabRent: 'Ijara (arenda)',
    tabLease: 'Lizing',
    variantLabel: 'Konfiguratsiya',
    purchaseLabel: 'Uskuna narxi',
    purchaseNote: 'Narx ma’lumot xarakterida; yakuniy shartlar shartnomada',
    rentMonthly: 'Oylik ijara',
    rentDuration: 'Ijara muddati (oy)',
    rentTotal: 'Jami to‘lov',
    rentMonths: 'oy',
    leaseDown: 'Boshlang‘ich to‘lov (%)',
    leaseTerm: 'Lizing muddati',
    leaseRate: 'Yillik stavka (%)',
    leaseMonthly: 'Oylik lizing to‘lovi',
    leaseTotal: 'Jami lizing bo‘yicha',
    disclaimer:
      'Kalkulyator ma’lumot xarakterida. DEKA va Surgitron narxlari bozor bahosi bo‘yicha taxminiy. Yakuniy shartlar shartnomada belgilanadi.',
    cta: 'Aniq hisob-kitob uchun murojaat qiling',
    monthUnit: 'oy',
  },
  ru: {
    sectionTitle: 'Калькулятор аренды и лизинга',
    sectionDesc:
      'Ориентировочный расчёт на основе прайса дистрибьютора Radeski и ставок аренды. Точные условия — на индивидуальной консультации.',
    tabRent: 'Аренда',
    tabLease: 'Лизинг',
    variantLabel: 'Конфигурация',
    purchaseLabel: 'Стоимость оборудования',
    purchaseNote: 'Цена носит информационный характер; итог — в договоре',
    rentMonthly: 'Аренда в месяц',
    rentDuration: 'Срок аренды (мес.)',
    rentTotal: 'Итого к оплате',
    rentMonths: 'мес.',
    leaseDown: 'Первоначальный взнос (%)',
    leaseTerm: 'Срок лизинга',
    leaseRate: 'Годовая ставка (%)',
    leaseMonthly: 'Ежемесячный платёж',
    leaseTotal: 'Итого по лизингу',
    disclaimer:
      'Калькулятор носит информационный характер. Цены DEKA и Surgitron ориентировочные. Финальные условия — в договоре.',
    cta: 'Запросить точный расчёт',
    monthUnit: 'мес.',
  },
  en: {
    sectionTitle: 'Rental & leasing calculator',
    sectionDesc:
      'Estimate based on Radeski distributor list prices and rental rates. Final terms on individual consultation.',
    tabRent: 'Rental',
    tabLease: 'Leasing',
    variantLabel: 'Configuration',
    purchaseLabel: 'Equipment price',
    purchaseNote: 'Price is indicative; final terms in contract',
    rentMonthly: 'Monthly rental',
    rentDuration: 'Rental period (months)',
    rentTotal: 'Total payment',
    rentMonths: 'mo',
    leaseDown: 'Down payment (%)',
    leaseTerm: 'Lease term',
    leaseRate: 'Annual rate (%)',
    leaseMonthly: 'Monthly lease payment',
    leaseTotal: 'Total under lease',
    disclaimer:
      'Calculator is for guidance only. DEKA and Surgitron prices are market estimates. Final terms in contract.',
    cta: 'Request an exact quote',
    monthUnit: 'mo',
  },
};

export const DAAVLIN_MODEL_FINANCE: Record<DaavlinModelId, ModelFinanceConfig> = {
  '7-series': {
    modelId: '7-series',
    catalogModel: t('7 Series', '7 Series', '7 Series'),
    variants: [
      financeVariant(
        '7-cx-311-8',
        t('7 Series CX 311-8 (8 lampa)', '7 Series CX 311-8 (8 ламп)', '7 Series CX 311-8 (8 lamps)'),
        15_600,
        8_200_000,
        '808HO0008CX5',
      ),
      financeVariant(
        '7-cx-311-12',
        t('7 Series CX 311-12 (12 lampa)', '7 Series CX 311-12 (12 ламп)', '7 Series CX 311-12 (12 lamps)'),
        16_120,
        8_500_000,
        '808HO0012CX5',
      ),
      financeVariant(
        '7-cx-350-12',
        t('7 Series CX 350-12 (UVA, 12 lampa)', '7 Series CX 350-12 (UVA, 12 ламп)', '7 Series CX 350-12 (UVA, 12 lamps)'),
        16_120,
        8_500_000,
        '809HO1200CX5',
      ),
    ],
    leaseAnnualRate: 0.2,
    leaseMinDownPct: 15,
    leaseMaxDownPct: 50,
    leaseTermsMonths: [12, 24, 36, 48],
    notes: t(
      'Uy yoki tor klinika uchun to‘liq tana paneli. Qo‘shimcha: devorga osish to‘plami $190, g‘ildirak $158.',
      'Панель на всё тело для дома или компактного кабинета. Опции: настенный комплект $190, колёса $158.',
      'Full-body panel for home or compact clinic. Options: wall mount kit $190, castors $158.',
    ),
  },
  '1-series': {
    modelId: '1-series',
    catalogModel: t('1 Series', '1 Series', '1 Series'),
    variants: [
      financeVariant(
        '1-cx-311-4',
        t('1 Series CX 311-4 (4 lampa, NB-UVB)', '1 Series CX 311-4 (4 лампы, NB-UVB)', '1 Series CX 311-4 (4 lamps, NB-UVB)'),
        4_452,
        900_000,
        '807OS0004CX5',
      ),
      financeVariant(
        '1-cx-uva1-4',
        t('1 Series CX UVA1-4', '1 Series CX UVA1-4', '1 Series CX UVA1-4'),
        4_452,
        900_000,
        '807OS0400CX5A1',
      ),
      financeVariant(
        '1-cx-350-4',
        t('1 Series CX 350-4 (UVA)', '1 Series CX 350-4 (UVA)', '1 Series CX 350-4 (UVA)'),
        4_240,
        850_000,
        '807OS0400CX5',
      ),
    ],
    leaseAnnualRate: 0.22,
    leaseMinDownPct: 10,
    leaseMaxDownPct: 40,
    leaseTermsMonths: [6, 12, 18, 24],
    notes: t(
      'Portativ lokal panel. Ixtiyoriy stend (1011STAND) alohida. Uy va kichik klinika uchun.',
      'Портативная локальная панель. Опциональная стойка (1011STAND) отдельно. Для дома и небольшой клиники.',
      'Portable local panel. Optional stand (1011STAND) separate. For home and small clinic use.',
    ),
  },
  'uv-series': {
    modelId: 'uv-series',
    catalogModel: t('UV Series', 'UV Series', 'UV Series'),
    variants: [
      financeVariant(
        'uv-cxe-311-24',
        t('UV Series CXE 311-24 (24 lampa)', 'UV Series CXE 311-24 (24 лампы)', 'UV Series CXE 311-24 (24 lamps)'),
        31_620,
        18_500_000,
        '811UV0024CX6E',
      ),
      financeVariant(
        'uv-cxe-311-350-12-12',
        t('UV Series CXE 311/350 12+12', 'UV Series CXE 311/350 12+12', 'UV Series CXE 311/350 12+12'),
        31_620,
        18_500_000,
        '811UV1212CX6E',
      ),
      financeVariant(
        'uv-cxe-350-24',
        t('UV Series CXE 350-24 (UVA, 24 lampa)', 'UV Series CXE 350-24 (UVA, 24 лампы)', 'UV Series CXE 350-24 (UVA, 24 lamps)'),
        31_620,
        18_500_000,
        '811UV2400CX6E',
      ),
    ],
    leaseAnnualRate: 0.18,
    leaseMinDownPct: 20,
    leaseMaxDownPct: 50,
    leaseTermsMonths: [24, 36, 48, 60],
    notes: t(
      'Ixcham to‘liq tana kabina. Fan Kit (930FANKIT220) ixtiyoriy. Klinik kurslar uchun.',
      'Компактная кабина на всё тело. Fan Kit (930FANKIT220) опционально. Для клинических курсов.',
      'Compact full-body cabin. Fan Kit (930FANKIT220) optional. For clinical courses.',
    ),
  },
  dermapal: {
    modelId: 'dermapal',
    catalogModel: t('DermaPal', 'DermaPal', 'DermaPal'),
    variants: [
      financeVariant(
        'dp-nb-uvb',
        t('DermaPal Digital NB/UVB', 'DermaPal Digital NB/UVB', 'DermaPal Digital NB/UVB'),
        1_536,
        1_000_000,
        '935DPNBDT50CE',
      ),
      financeVariant(
        'dp-uva',
        t('DermaPal Digital UVA', 'DermaPal Digital UVA', 'DermaPal Digital UVA'),
        1_536,
        1_000_000,
        '935DPADT50CE',
      ),
    ],
    leaseAnnualRate: 0.22,
    leaseMinDownPct: 10,
    leaseMaxDownPct: 40,
    leaseTermsMonths: [6, 12, 18, 24],
    notes: t(
      'Radeski preyskurant: apparat ijarasi 1 000 000 so‘m/oy. Bosh terisi va lokal zonalar uchun portativ tizim.',
      'Прейскурант Radeski: аренда аппарата 1 000 000 сум/мес. Портативная система для кожи головы и локальных зон.',
      'Radeski price list: device rental 1,000,000 UZS/month. Portable system for scalp and local areas.',
    ),
  },
  'm-series': {
    modelId: 'm-series',
    catalogModel: t('M Series', 'M Series', 'M Series'),
    variants: [
      financeVariant(
        'm-cx-311-10',
        t('M Series CX 311-10 (10 lampa)', 'M Series CX 311-10 (10 ламп)', 'M Series CX 311-10 (10 lamps)'),
        12_272,
        6_800_000,
        '801MI0010CX5',
      ),
      financeVariant(
        'm-cx-350-10',
        t('M Series CX 350-10 (UVA)', 'M Series CX 350-10 (UVA)', 'M Series CX 350-10 (UVA)'),
        12_064,
        6_700_000,
        '801MI1000CX5',
      ),
      financeVariant(
        'm-cx-mix-4-6',
        t('M Series CX 311/350 (4+6 lampa)', 'M Series CX 311/350 (4+6 ламп)', 'M Series CX 311/350 (4+6 lamps)'),
        14_144,
        7_800_000,
        '801MI0604CX5',
      ),
    ],
    leaseAnnualRate: 0.2,
    leaseMinDownPct: 15,
    leaseMaxDownPct: 50,
    leaseTermsMonths: [12, 24, 36, 48],
    notes: t(
      'Qo‘l va oyoq fototerapiyasi. M Series stol aksessuari katalogda $1 488.',
      'Фототерапия кистей и стоп. Стол M Series в каталоге $1 488.',
      'Hand and foot phototherapy. M Series table accessory $1,488 in catalog.',
    ),
  },
  'deka-co2-laser': {
    modelId: 'deka-co2-laser',
    catalogModel: t('DEKA CO₂ Laser SmartXide Punto', 'DEKA CO₂ Laser SmartXide Punto', 'DEKA CO₂ Laser SmartXide Punto'),
    variants: [
      financeVariant(
        'deka-co2-punto',
        t('SmartXide Punto CO₂ (klinik)', 'SmartXide Punto CO₂ (клиника)', 'SmartXide Punto CO₂ (clinical)'),
        95_000,
        52_000_000,
      ),
    ],
    leaseAnnualRate: 0.18,
    leaseMinDownPct: 20,
    leaseMaxDownPct: 50,
    leaseTermsMonths: [24, 36, 48, 60],
    notes: t(
      'DEKA narxi bozor bahosi bo‘yicha taxminiy (Daavlin katalogida yo‘q). Fraksion CO₂ va PinPoint rejimlari.',
      'Цена DEKA ориентировочная (нет в каталоге Daavlin). Фракционный CO₂ и режим PinPoint.',
      'DEKA price is an estimate (not in Daavlin catalog). Fractional CO₂ and PinPoint modes.',
    ),
  },
  'deka-alexandrite-laser': {
    modelId: 'deka-alexandrite-laser',
    catalogModel: t('DEKA Alexandrite 755 nm', 'DEKA Alexandrite 755 nm', 'DEKA Alexandrite 755 nm'),
    variants: [
      financeVariant(
        'deka-alex-755',
        t('Aleksandrit 755 nm (epilyatsiya / pigment)', 'Александрит 755 нм (эпиляция / пигмент)', 'Alexandrite 755 nm (hair / pigment)'),
        115_000,
        62_000_000,
      ),
    ],
    leaseAnnualRate: 0.18,
    leaseMinDownPct: 20,
    leaseMaxDownPct: 50,
    leaseTermsMonths: [24, 36, 48, 60],
    notes: t(
      'DEKA aleksandrit liniyasi — taxminiy USD qiymat. Radeski klinikasida shifokor protokoli bilan.',
      'Линия DEKA александрит — ориентировочная стоимость в USD. В клинике Radeski — по протоколу врача.',
      'DEKA alexandrite line — estimated USD value. At Radeski Clinic under physician protocol.',
    ),
  },
  'surgitron-radiofrequency': {
    modelId: 'surgitron-radiofrequency',
    catalogModel: t('Surgitron Radiofrequency', 'Surgitron Radiofrequency', 'Surgitron Radiofrequency'),
    variants: [
      financeVariant(
        'surgitron-std',
        t('Surgitron RF (4 MHz, klinik)', 'Surgitron RF (4 МГц, клиника)', 'Surgitron RF (4 MHz, clinical)'),
        28_000,
        16_500_000,
      ),
    ],
    leaseAnnualRate: 0.2,
    leaseMinDownPct: 15,
    leaseMaxDownPct: 45,
    leaseTermsMonths: [12, 24, 36, 48],
    notes: t(
      'Ellman Surgitron — radioto‘lqin jarrohligi. Narx bozor bo‘yicha taxminiy.',
      'Ellman Surgitron — радиоволновая хирургия. Цена ориентировочная.',
      'Ellman Surgitron — radiofrequency surgery. Price is estimated.',
    ),
  },
  neolux: {
    modelId: 'neolux',
    catalogModel: t('NeoLux', 'NeoLux', 'NeoLux'),
    variants: [
      financeVariant(
        'neolux-cx-311-48',
        t('NeoLux CX 311-48 (48 lampa, 6 ft)', 'NeoLux CX 311-48 (48 ламп, 6 ft)', 'NeoLux CX 311-48 (48 lamps, 6 ft)'),
        66_300,
        38_000_000,
        '864NL0048CX',
      ),
      financeVariant(
        'neolux-cx-2424',
        t('NeoLux CX 311/350 24+24', 'NeoLux CX 311/350 24+24', 'NeoLux CX 311/350 24+24'),
        63_240,
        36_500_000,
        '864NL2424CX',
      ),
      financeVariant(
        'neolux-plus-311-40',
        t('NeoLux Plus CX 311-40 (2 m)', 'NeoLux Plus CX 311-40 (2 m)', 'NeoLux Plus CX 311-40 (2 m)'),
        67_116,
        39_000_000,
        '862NL0040CX',
      ),
    ],
    leaseAnnualRate: 0.18,
    leaseMinDownPct: 20,
    leaseMaxDownPct: 50,
    leaseTermsMonths: [24, 36, 48, 60],
    notes: t(
      'Klinik to‘liq tana kabina. SmartTouch, Crystal Cool™, ikki eshikli ixcham konstruksiya.',
      'Клиническая кабина на всё тело. SmartTouch, Crystal Cool™, компактная двухдверная конструкция.',
      'Clinical full-body cabin. SmartTouch, Crystal Cool™, compact two-door design.',
    ),
  },
  aquex: {
    modelId: 'aquex',
    catalogModel: t('Aquex', 'Aquex', 'Aquex'),
    variants: [
      financeVariant(
        'aquex-base',
        t('Aquex ionoforez tizimi', 'Aquex — система ионофореза', 'Aquex iontophoresis system'),
        3_570,
        2_200_000,
        '101960AQUEX',
      ),
    ],
    leaseAnnualRate: 0.22,
    leaseMinDownPct: 10,
    leaseMaxDownPct: 40,
    leaseTermsMonths: [12, 24, 36],
    notes: t(
      'Aquex uchun katalogda chegirmalar qo‘llanmaydi. Padlar va elektrodlar alohida (katalog $154–552).',
      'На Aquex скидки в каталоге не распространяются. Подушки и электроды отдельно ($154–552).',
      'Catalog discounts do not apply to Aquex. Pads and electrodes sold separately ($154–552).',
    ),
  },
};

export function formatUzs(amount: number, locale: Locale): string {
  const rounded = Math.round(amount);
  const formatted = new Intl.NumberFormat(locale === 'ru' ? 'ru-RU' : 'uz-UZ', {
    maximumFractionDigits: 0,
  }).format(rounded);
  if (locale === 'en') return `${formatted} UZS`;
  if (locale === 'ru') return `${formatted} сум`;
  return `${formatted} so'm`;
}

export function formatUsd(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function calcLeaseMonthly(principalUzs: number, annualRate: number, months: number): number {
  if (months <= 0 || principalUzs <= 0) return 0;
  const r = annualRate / 12;
  if (r === 0) return principalUzs / months;
  const factor = Math.pow(1 + r, months);
  return (principalUzs * r * factor) / (factor - 1);
}

export function getModelFinance(modelId: DaavlinModelId): ModelFinanceConfig | undefined {
  return DAAVLIN_MODEL_FINANCE[modelId];
}
