import type { Locale } from '../types';
import type { PageId } from '../routing/paths';
import { pagePath } from '../routing/paths';

type L = Record<Locale, string>;

const L = (uz: string, ru: string, en: string): L => ({ uz, ru, en });

export type InstitutionalNavId =
  | 'obrazovaniya'
  | 'malaka-oshirish'
  | 'science'
  | 'tele-dermatology'
  | 'skin-pathology-center';

export type InstitutionalNavTopic = {
  id: string;
  label: L;
  /** Optional anchor on the section landing page */
  hash?: string;
  /** Link to another site page instead of the parent section */
  targetPageId?: PageId;
};

export type InstitutionalNavSection = {
  id: InstitutionalNavId;
  pageId: PageId;
  label: L;
  /** Compact label for top navbar (optional) */
  navShort?: L;
  /** Second line under navShort (optional) */
  navSubtitle?: L;
  dropdownTitle: L;
  dropdownHint: L;
  topics: InstitutionalNavTopic[];
};

export const INSTITUTIONAL_NAV_SECTIONS: InstitutionalNavSection[] = [
  {
    id: 'obrazovaniya',
    pageId: 'obrazovaniya',
    label: L("Ta'lim", 'Образование', 'Education'),
    dropdownTitle: L("Ta'lim yo'nalishlari", 'Направления образования', 'Education programs'),
    dropdownHint: L(
      "Dermatologiya va estetik tibbiyot bo'yicha malaka oshirish dasturlari",
      'Программы профессионального развития в дерматологии и эстетической медицине',
      'Professional development programs in dermatology and aesthetic medicine',
    ),
    topics: [
      {
        id: 'certification-courses',
        label: L('Sertifikatsiya kurslari', 'Сертификационные курсы', 'Certification programs'),
      },
      {
        id: 'residency',
        label: L('Ordinatura', 'Ординатура', 'Dermatology residency'),
      },
      {
        id: 'continuing-education',
        label: L('Malaka oshirish', 'Повышение квалификации', 'Continuing medical education'),
        targetPageId: 'malaka-oshirish',
      },
      {
        id: 'masterclasses',
        label: L('Master-klasslar', 'Мастер-классы', 'Masterclasses'),
      },
      {
        id: 'hands-on-training',
        label: L('Amaliy treninglar', 'Практические тренинги', 'Hands-on training'),
      },
      {
        id: 'young-specialists',
        label: L(
          'Yosh mutaxassislarni tayyorlash',
          'Подготовка молодых специалистов',
          'Training early-career specialists',
        ),
      },
      {
        id: 'hair-transplant-training',
        label: L(
          "Soch transplantatsiyasi bo'yicha o'qitish",
          'Обучение пересадке волос',
          'Hair transplant training',
        ),
      },
      {
        id: 'laser-training',
        label: L(
          "Lazer texnologiyalari bo'yicha o'qitish",
          'Обучение лазерным технологиям',
          'Laser technology training',
        ),
      },
      {
        id: 'international-programs',
        label: L(
          "Xalqaro ta'lim dasturlari",
          'Международные образовательные программы',
          'International education programs',
        ),
      },
    ],
  },
  {
    id: 'malaka-oshirish',
    pageId: 'malaka-oshirish',
    label: L('Malaka oshirish', 'Повышение квалификации', 'Professional development'),
    navShort: L('Malaka oshirish', 'Повышение квалиф.', 'CME'),
    dropdownTitle: L('Malaka oshirish yo‘nalishlari', 'Направления повышения квалификации', 'Development tracks'),
    dropdownHint: L(
      'Sertifikatsiya, master-klass, amaliy trening va lazer kurslari',
      'Сертификация, мастер-классы, практические тренинги и лазерные курсы',
      'Certification, masterclasses, hands-on training, and laser courses',
    ),
    topics: [
      {
        id: 'certification-courses',
        label: L('Sertifikatsiya kurslari', 'Сертификационные курсы', 'Certification programs'),
        hash: 'certification-courses',
      },
      {
        id: 'residency',
        label: L('Ordinatura va stajirovka', 'Ординатура и стажировка', 'Residency and internships'),
        hash: 'residency',
      },
      {
        id: 'masterclasses',
        label: L('Master-klasslar', 'Мастер-классы', 'Masterclasses'),
        hash: 'masterclasses',
      },
      {
        id: 'hands-on-training',
        label: L('Amaliy treninglar', 'Практические тренинги', 'Hands-on training'),
        hash: 'hands-on-training',
      },
      {
        id: 'laser-training',
        label: L('Lazer texnologiyalari', 'Лазерные технологии', 'Laser technology training'),
        hash: 'laser-training',
      },
      {
        id: 'international-programs',
        label: L('Xalqaro dasturlar', 'Международные программы', 'International programs'),
        hash: 'international-programs',
      },
    ],
  },
  {
    id: 'science',
    pageId: 'science',
    label: L('Ilm-fan', 'Наука', 'Science'),
    dropdownTitle: L('Ilmiy yo\'nalishlar', 'Научные направления', 'Research areas'),
    dropdownHint: L(
      'Klinik amaliyot, tadqiqot va bilim yaratish',
      'Клиническая практика, исследования и создание знаний',
      'Clinical practice, research, and knowledge creation',
    ),
    topics: [
      {
        id: 'clinical-research',
        label: L('Klinik tadqiqotlar', 'Клинические исследования', 'Clinical research'),
        hash: 'clinical-research',
      },
      {
        id: 'publications',
        label: L('Ilmiy nashrlar', 'Публикации', 'Publications'),
        hash: 'publications',
      },
      {
        id: 'clinical-database',
        label: L('Klinik ma\'lumotlar bazasi', 'Клиническая база данных', 'Clinical database'),
        hash: 'clinical-database',
      },
      {
        id: 'research-projects',
        label: L('Ilmiy loyihalar', 'Научные проекты', 'Research projects'),
        hash: 'research-projects',
      },
      {
        id: 'international-research',
        label: L('Xalqaro tadqiqotlar', 'Международные исследования', 'International research'),
        hash: 'international-research',
      },
      {
        id: 'protocol-development',
        label: L(
          'Klinik protokollarni ishlab chiqish',
          'Разработка протоколов',
          'Clinical protocol development',
        ),
        hash: 'protocol-development',
      },
      {
        id: 'patents-ip',
        label: L(
          'Patentlar va intellektual mulk',
          'Патенты и интеллектуальная собственность',
          'Patents and intellectual property',
        ),
        hash: 'patents-ip',
      },
      {
        id: 'real-world-data',
        label: L(
          'Real-world ma\'lumotlarni tahlil qilish',
          'Анализ real-world data',
          'Real-world data analysis',
        ),
        hash: 'real-world-data',
      },
    ],
  },
  {
    id: 'tele-dermatology',
    pageId: 'tele-dermatology',
    label: L('TeleDermatolog', 'TeleDermatolog', 'TeleDermatolog'),
    navShort: L('TeleDermatolog', 'TeleDermatolog', 'TeleDermatolog'),
    dropdownTitle: L('TeleDermatolog', 'TeleDermatolog', 'TeleDermatolog'),
    dropdownHint: L(
      'Masofaviy dermatolog maslahati va onlayn teri kuzatuvi',
      'Дистанционная консультация и онлайн-сопровождение пациентов с заболеваниями кожи',
      'Remote dermatology consultations and online skin care follow-up',
    ),
    topics: [],
  },
  {
    id: 'skin-pathology-center',
    pageId: 'skin-pathology-center',
    label: L(
      'Teri patologiyasi milliy markazi',
      'Национальный центр патологии кожи',
      'National Center of Skin Pathology',
    ),
    navShort: L('Patologiya', 'Патология', 'Pathology'),
    navSubtitle: L(
      'Teri patologiyasi milliy markazi',
      'Национальный центр патологии кожи',
      'National Center of Skin Pathology',
    ),
    dropdownTitle: L(
      'Teri patologiyasi markazi',
      'Центр патологии кожи',
      'Skin pathology center',
    ),
    dropdownHint: L(
      'Gistologik va morfologik tashxis, ilmiy-tadqiqot va standartlar',
      'Гистологическая и морфологическая диагностика, исследования и стандарты',
      'Histologic and morphologic diagnosis, research, and standards',
    ),
    topics: [],
  },
];

export function getInstitutionalNavSection(id: InstitutionalNavId): InstitutionalNavSection {
  const section = INSTITUTIONAL_NAV_SECTIONS.find((item) => item.id === id);
  if (!section) throw new Error(`Unknown institutional nav section: ${id}`);
  return section;
}

export function institutionalTopicHref(
  locale: Locale,
  section: InstitutionalNavSection,
  topic?: InstitutionalNavTopic,
): string {
  if (topic?.targetPageId) {
    const base = pagePath(locale, topic.targetPageId);
    if (topic.hash) return `${base}#${topic.hash}`;
    return base;
  }
  const base = pagePath(locale, section.pageId);
  if (!topic) return base;
  return `${base}#${topic.hash ?? topic.id}`;
}

export function isInstitutionalNavPage(page: PageId): page is InstitutionalNavSection['pageId'] {
  return INSTITUTIONAL_NAV_SECTIONS.some((section) => section.pageId === page);
}
