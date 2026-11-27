import type { Locale } from '../types';

/**
 * Real photos of the two branches (taken 23–24.11.2026; the branch is from each photo's GPS).
 * Cropped to 4:5, 1200×1500, metadata removed. Only rooms and equipment: no patients, no staff faces.
 */
export type ClinicBranchKey = 'fargona' | 'qoqon';

export interface ClinicPhoto {
  src: string;
  branch: ClinicBranchKey;
  alt: Record<Locale, string>;
  /** Equipment page (clinicEquipmentCatalog id) that shows this photo. */
  equipmentId?: string;
}

const P = (
  file: string,
  branch: ClinicBranchKey,
  uz: string,
  ru: string,
  en: string,
  equipmentId?: string,
): ClinicPhoto => ({ src: `/gallery/clinic/${file}.webp`, branch, alt: { uz, ru, en }, equipmentId });

export const CLINIC_PHOTOS: ClinicPhoto[] = [
  P('qoqon-tashqi', 'qoqon', "Radeski Skin Clinic Qo'qon filiali binosi va to'xtash joyi", 'Здание филиала Radeski Skin Clinic в Коканде и парковка', 'Radeski Skin Clinic Kokand branch building and parking'),
  P('qoqon-kirish', 'qoqon', "Qo'qon filialiga kirish: zinapoya va pandus", 'Вход в филиал в Коканде: лестница и пандус', 'Kokand branch entrance with steps and ramp'),
  P('fargona-yolak', 'fargona', "Farg'ona klinikasi: muolaja xonalariga yo'lak", 'Клиника в Фергане: коридор к процедурным кабинетам', 'Fergana clinic: corridor to the treatment rooms'),
  P('fargona-lazer-xonasi', 'fargona', "LaseMD Ultra tuliy lazeri xonasi — Farg'ona klinikasi", 'Кабинет тулиевого лазера LaseMD Ultra — клиника в Фергане', 'LaseMD Ultra thulium laser room at the Fergana clinic', 'lasemd-ultra-lutronic'),
  P('fargona-lutronic-derma-v', 'fargona', "Lutronic Derma V lazeri — Farg'ona klinikasi", 'Лазер Lutronic Derma V — клиника в Фергане', 'Lutronic Derma V laser at the Fergana clinic', 'derma-v-lutronic'),
  P('fargona-shifokor-kabineti', 'fargona', "Farg'ona klinikasi: dermatolog kabineti, sertifikatlar va mikroskop", 'Клиника в Фергане: кабинет дерматолога, сертификаты и микроскоп', "Fergana clinic: dermatologist's office with certificates and microscope"),
  P('qoqon-deka-smartxide-punto', 'qoqon', "DEKA SmartXide Punto CO₂ lazeri — Qo'qon filiali", 'CO₂-лазер DEKA SmartXide Punto — филиал в Коканде', 'DEKA SmartXide Punto CO₂ laser at the Kokand branch', 'deka-co2-laser'),
  P('qoqon-podologiya-deka-motus-pro', 'qoqon', "Podologiya kresli va DEKA Motus PRO lazeri — Qo'qon filiali", 'Подологическое кресло и лазер DEKA Motus PRO — филиал в Коканде', 'Podology chair and DEKA Motus PRO laser at the Kokand branch', 'deka-alexandrite-laser'),
  P('qoqon-fototerapiya-kabina', 'qoqon', "Daavlin fototerapiya kabinasi — Qo'qon filiali", 'Кабина фототерапии Daavlin — филиал в Коканде', 'Daavlin phototherapy cabin at the Kokand branch'),
  P('qoqon-fototerapiya-qol-oyoq', 'qoqon', "Qo'l va oyoq uchun fototerapiya apparati — Qo'qon filiali", 'Аппарат фототерапии для кистей и стоп — филиал в Коканде', 'Hand and foot phototherapy unit at the Kokand branch'),
  P('qoqon-plazmaferez-xonasi', 'qoqon', "Plazmaferez xonasi (Nigale apparati) — Qo'qon filiali", 'Кабинет плазмафереза (аппарат Nigale) — филиал в Коканде', 'Plasmapheresis room (Nigale unit) at the Kokand branch', 'plazmoforez'),
  P('qoqon-konsultatsiya-xonasi', 'qoqon', "Qo'qon filiali: shifokor konsultatsiyasi xonasi", 'Филиал в Коканде: кабинет консультации врача', 'Kokand branch: doctor consultation room'),
];

export function photosForBranch(branch: ClinicBranchKey): ClinicPhoto[] {
  return CLINIC_PHOTOS.filter((p) => p.branch === branch);
}

export function photosForEquipment(equipmentId: string): ClinicPhoto[] {
  return CLINIC_PHOTOS.filter((p) => p.equipmentId === equipmentId);
}

/** Directions videos to the Fergana clinic (24.11.2026, sound removed). */
export const FERGANA_DIRECTION_VIDEOS = [
  { src: '/video/fargona-yol-1.mp4', poster: '/video/fargona-yol-1.jpg' },
  { src: '/video/fargona-yol-2.mp4', poster: '/video/fargona-yol-2.jpg' },
] as const;
