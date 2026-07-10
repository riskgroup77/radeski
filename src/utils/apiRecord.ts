/** API (UUID) yozuvi — mahalliy statik ID emas */
export function isApiRecordId(id: string | null | undefined): boolean {
  return Boolean(id && /^[0-9a-f-]{36}$/i.test(id));
}
