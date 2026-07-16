import type { Locale } from '../types';
import { CLINIC_BRANCHES } from '../data/sitePagesContent';
import { getClinicMapOpenUrl, KOKAND_BRANCH_MAP_OPEN_URL } from '../config/links';

/** Navbar tepasi va umumiy aloqa */
export const CLINIC_PHONE_PRIMARY = {
  display: '+998 (73) 200-73-73',
  tel: '+998732007373',
} as const;

export const CLINIC_PHONE_KOKAND = {
  display: '+998 95 210 73 73',
  tel: '+998952107373',
} as const;

export function getHeaderTopBarContacts(locale: Locale) {
  const fergana = CLINIC_BRANCHES.find((b) => b.id === 'fergana-main');
  const kokand = CLINIC_BRANCHES.find((b) => b.id === 'kokand-branch');

  return {
    ferganaAddress:
      fergana?.address[locale] ||
      fergana?.address.uz ||
      "Farg'ona sh., O'zbekiston Ovozi ko'chasi, 1A-bino",
    kokandAddress:
      kokand?.address[locale] ||
      kokand?.address.uz ||
      "Qo'qon sh., 47-MFI, Huqandiy mavzesi, 144A",
    primaryPhone: CLINIC_PHONE_PRIMARY,
    kokandPhone: CLINIC_PHONE_KOKAND,
    ferganaMapUrl: fergana?.mapUrl ?? getClinicMapOpenUrl(),
    kokandMapUrl: kokand?.mapUrl ?? KOKAND_BRANCH_MAP_OPEN_URL,
  };
}
