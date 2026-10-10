import type { LocalSeoCity } from './localCommercialSeoCatalog';

/**
 * Which branch each doctor sees patients in, keyed by the doctor's URL slug
 * (/uz/doctors/<slug>). Only facts confirmed in the clinic's own materials are listed —
 * a doctor missing here is simply not tied to a city page. Add or correct entries when
 * the schedule changes (e.g. 'murodov-muhammadsolih-azamat-ogli': ['qoqon']).
 */
export const DOCTOR_BRANCHES: Record<string, LocalSeoCity[]> = {
  // "Radeski Skin Clinic, Fergana" in their CMS profiles
  'ashurov-dilshod-davlatovich': ['fargona'],
  'mangasaryan-lorena-georgievna': ['fargona'],
  'yoqubov-farrux-farhodjonovich': ['fargona'],
  'kodirova-dilafruzxon': ['fargona'],
  // Profile: "Radeski Skin Clinic — Qo'qon filiali"
  'turgunov-shohruz-ilxomjon-ogli': ['qoqon'],
  // Clinical case published from the Kokand branch
  'baxriddinov-zuxriddin-muxiddinovich': ['qoqon'],
  // Profile: "Farg'ona va Qo'qon filiallari"
  'usmanova-mohinabonu-anvarovna': ['fargona', 'qoqon'],
};
