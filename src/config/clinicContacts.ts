import type { Locale } from '../types';
import { CLINIC_BRANCHES } from '../data/sitePagesContent';
import { getClinicMapOpenUrl, KOKAND_BRANCH_MAP_OPEN_URL } from '../config/links';

/** Navbar tepasi va umumiy aloqa — the values live in clinicNap.ts. */
export { CLINIC_PHONE_FERGANA_MOBILE, CLINIC_PHONE_KOKAND, CLINIC_PHONE_PRIMARY } from './clinicNap';
import { CLINIC_PHONE_KOKAND, CLINIC_PHONE_PRIMARY } from './clinicNap';

export function getHeaderTopBarContacts(locale: Locale) {
  const fergana = CLINIC_BRANCHES.find((b) => b.id === 'fergana-main');
  const kokand = CLINIC_BRANCHES.find((b) => b.id === 'kokand-branch');

  return {
    ferganaAddress:
      fergana?.address[locale] ||
      fergana?.address.uz ||
      "Farg'ona sh., O'zbekiston Ovozi ko'chasi, 1B-bino",
    kokandAddress:
      kokand?.address[locale] ||
      kokand?.address.uz ||
      "Qo'qon sh., 47-MFY, Huqandiy mavzesi, 144A",
    primaryPhone: CLINIC_PHONE_PRIMARY,
    kokandPhone: CLINIC_PHONE_KOKAND,
    ferganaMapUrl: fergana?.mapUrl ?? getClinicMapOpenUrl(),
    kokandMapUrl: kokand?.mapUrl ?? KOKAND_BRANCH_MAP_OPEN_URL,
  };
}
