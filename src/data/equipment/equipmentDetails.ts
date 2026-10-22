import type { ClinicEquipmentDetails } from '../clinicEquipmentCatalog';
import { LASEMD_ULTRA_DETAILS } from './lasemdUltraLutronicDetails';

/**
 * Rich device-page sections by equipment id. Kept out of clinicEquipmentCatalog (which the
 * header menu and routing load on every page) so only the device page pays for the text.
 */
const EQUIPMENT_DETAILS: Record<string, ClinicEquipmentDetails> = {
  'lasemd-ultra-lutronic': LASEMD_ULTRA_DETAILS,
};

export function getEquipmentDetails(equipmentId: string): ClinicEquipmentDetails | undefined {
  return EQUIPMENT_DETAILS[equipmentId];
}
