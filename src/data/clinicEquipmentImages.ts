import type { ClinicEquipmentId } from './clinicEquipmentCatalog';

/**
 * Har bir klinika apparati uchun yagona rasm.
 * Daavlin/DEKA/Surgitron — rasmiy model rasmlari; IPL, Derma V, Hollywood Spectra — alohida promo.
 */
export const CLINIC_EQUIPMENT_IMAGES: Record<ClinicEquipmentId, string> = {
  plazmoforez: '/services/apparatnaya/plazmoforez.webp',
  'daavlin-neolux': '/daavlin/model-neolux.webp',
  'daavlin-m-series': '/daavlin/model-m-series.webp',
  'daavlin-aquex': '/daavlin/model-aquex.webp',
  'deka-co2-laser': '/daavlin/model-deka-co2-laser.webp',
  'deka-alexandrite-laser': '/daavlin/model-deka-alexandrite-laser.webp',
  'surgitron-radiofrequency': '/daavlin/model-surgitron-radiofrequency.webp',
  'ipl-inmode': '/services/apparatnaya/ipl-inmode.jpg',
  'derma-v-lutronic': '/articles/derma-v-promo.png',
  'hollywood-spectra-lutronic': '/articles/hollywood-spectra-pores-promo.png',
};
