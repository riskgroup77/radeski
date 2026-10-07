import type { Locale } from '../types';
import {
  APPARATLI_KOSMETOLOGIYA_EQUIPMENT_IDS,
  CLINIC_EQUIPMENT_CATALOG,
  type ClinicEquipmentEntry,
  type ClinicEquipmentId,
} from '../data/clinicEquipmentCatalog';
import { APPARATNAYA_KOSMETOLOGIYA_ID } from './serviceNavFlyout';
import { serviceEquipmentPath } from '../routing/paths';

export { serviceEquipmentPath };

export type { ClinicEquipmentId };

export function isClinicEquipmentId(id: string | null | undefined): id is ClinicEquipmentId {
  if (!id) return false;
  return (APPARATLI_KOSMETOLOGIYA_EQUIPMENT_IDS as readonly string[]).includes(id);
}

export function resolveClinicEquipment(
  segment: string | null | undefined,
): ClinicEquipmentEntry | null {
  if (!isClinicEquipmentId(segment)) return null;
  return CLINIC_EQUIPMENT_CATALOG[segment];
}

export function getClinicEquipmentIdFromPathname(pathname: string): ClinicEquipmentId | null {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length < 4 || segments[1] !== 'services') return null;
  if (segments[2] !== APPARATNAYA_KOSMETOLOGIYA_ID) return null;
  try {
    const id = decodeURIComponent(segments[3]);
    return isClinicEquipmentId(id) ? id : null;
  } catch {
    return isClinicEquipmentId(segments[3]) ? segments[3] : null;
  }
}
