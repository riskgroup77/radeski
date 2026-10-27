import type { ClinicEquipmentDetails } from '../clinicEquipmentCatalog';

/**
 * Rich device-page sections by equipment id (~35 KB of text per device). Each device is its own
 * chunk, so a device page downloads only its own text: loadEquipmentDetails() fetches it (route
 * prefetch starts it at boot), getEquipmentDetails() reads what is already loaded. The
 * prerender loads all of them up front (loadAllEquipmentDetails).
 */
const EQUIPMENT_DETAIL_LOADERS: Record<string, () => Promise<ClinicEquipmentDetails>> = {
  'lasemd-ultra-lutronic': () => import('./lasemdUltraLutronicDetails').then((m) => m.LASEMD_ULTRA_DETAILS),
  plazmoforez: () => import('./plazmoforezDetails').then((m) => m.PLAZMOFOREZ_DETAILS),
  'daavlin-neolux': () => import('./daavlinNeoluxDetails').then((m) => m.DAAVLIN_NEOLUX_DETAILS),
  'daavlin-m-series': () => import('./daavlinMSeriesDetails').then((m) => m.DAAVLIN_M_SERIES_DETAILS),
  'daavlin-aquex': () => import('./daavlinAquexDetails').then((m) => m.DAAVLIN_AQUEX_DETAILS),
  'deka-co2-laser': () => import('./dekaCo2LaserDetails').then((m) => m.DEKA_CO2_LASER_DETAILS),
  'deka-alexandrite-laser': () => import('./dekaAlexandriteLaserDetails').then((m) => m.DEKA_ALEXANDRITE_LASER_DETAILS),
  'surgitron-radiofrequency': () => import('./surgitronRadiofrequencyDetails').then((m) => m.SURGITRON_RADIOFREQUENCY_DETAILS),
  'ipl-inmode': () => import('./iplInmodeDetails').then((m) => m.IPL_INMODE_DETAILS),
  'derma-v-lutronic': () => import('./dermaVLutronicDetails').then((m) => m.DERMA_V_LUTRONIC_DETAILS),
  'hollywood-spectra-lutronic': () => import('./hollywoodSpectraLutronicDetails').then((m) => m.HOLLYWOOD_SPECTRA_LUTRONIC_DETAILS),
};

const loaded: Record<string, ClinicEquipmentDetails> = {};
const pending: Record<string, Promise<ClinicEquipmentDetails | undefined>> = {};

export function hasEquipmentDetails(equipmentId: string): boolean {
  return equipmentId in EQUIPMENT_DETAIL_LOADERS;
}

/** Details already loaded for this device (undefined until loadEquipmentDetails resolves). */
export function getEquipmentDetails(equipmentId: string): ClinicEquipmentDetails | undefined {
  return loaded[equipmentId];
}

export function loadEquipmentDetails(equipmentId: string): Promise<ClinicEquipmentDetails | undefined> {
  if (loaded[equipmentId]) return Promise.resolve(loaded[equipmentId]);
  const load = EQUIPMENT_DETAIL_LOADERS[equipmentId];
  if (!load) return Promise.resolve(undefined);
  pending[equipmentId] ??= load().then((details) => (loaded[equipmentId] = details));
  return pending[equipmentId];
}

export async function loadAllEquipmentDetails(): Promise<void> {
  await Promise.all(Object.keys(EQUIPMENT_DETAIL_LOADERS).map(loadEquipmentDetails));
}
