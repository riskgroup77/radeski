import type { Doctor } from '../types';
import { SHOHRUZ_TURGUNOV_PROFILE } from './doctors/shohruzTurgunovProfile';
import { USMONOVA_MOHINABONU_PROFILE } from './doctors/usmonovaMohinabonuProfile';
import { MANGASARYAN_LORENA_PROFILE } from './doctors/mangasaryanLorenaProfile';
import { ABDUVALIYEV_BEGALI_PROFILE } from './doctors/abduvaliyevBegaliProfile';
import { YOQUBOV_FARRUX_PROFILE } from './doctors/yoqubovFarruxProfile';
import { KAMOLOVA_BARNO_PROFILE } from './doctors/kamolovaBarnoProfile';
import { KARIMOVA_IRODA_PROFILE } from './doctors/karimovaIrodaProfile';
import { BAXRIDDINOV_ZUXRIDDIN_PROFILE } from './doctors/baxriddinovZuxriddinProfile';

function normalizeDoctorName(value: string): string {
  return value
    .toLowerCase()
    .replace(/[''`ʻʼ]/g, '')
    .replace(/\b(dr|doctor|doktor|врач)\b/g, '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Each entry matches when every group has at least one hit in the doctor's id + names
 * (uz/ru/en). Groups hold the spellings the CMS has used, e.g. "Abdvaliyev" / "Abduvaliyev".
 */
const PROFILE_MATCHERS: { groups: string[][]; profile: NonNullable<Doctor['profile']> }[] = [
  { groups: [['turgunov'], ['shohruz']], profile: SHOHRUZ_TURGUNOV_PROFILE },
  { groups: [['usmanova', 'usmonova'], ['mohinabonu']], profile: USMONOVA_MOHINABONU_PROFILE },
  { groups: [['mangasaryan', 'мангасарян']], profile: MANGASARYAN_LORENA_PROFILE },
  { groups: [['abdvaliyev', 'abduvaliyev', 'абдвалиев', 'абдувалиев'], ['begali', 'бегали']], profile: ABDUVALIYEV_BEGALI_PROFILE },
  { groups: [['yoqubov', 'yakubov', 'якубов', 'ёкубов'], ['farrux', 'farrukh', 'фаррух']], profile: YOQUBOV_FARRUX_PROFILE },
  { groups: [['kamolova', 'камолова'], ['barno', 'барно']], profile: KAMOLOVA_BARNO_PROFILE },
  { groups: [['karimova', 'каримова'], ['iroda', 'ирода']], profile: KARIMOVA_IRODA_PROFILE },
  { groups: [['baxriddinov', 'bakhriddinov', 'бахриддинов'], ['zuxriddin', 'zukhriddin', 'зухриддин']], profile: BAXRIDDINOV_ZUXRIDDIN_PROFILE },
];

export function getDoctorProfileOverlay(doctor: Doctor): Doctor['profile'] | undefined {
  const haystack = normalizeDoctorName(
    [doctor.id, doctor.name.uz, doctor.name.ru, doctor.name.en].join(' '),
  );
  return PROFILE_MATCHERS.find(({ groups }) =>
    groups.every((spellings) => spellings.some((spelling) => haystack.includes(spelling))),
  )?.profile;
}
