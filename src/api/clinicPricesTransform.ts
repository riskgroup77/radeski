/**
 * Price list: CMS rows merged onto the built-in catalog and translated (enrichPrices).
 * Kept out of clinicDataTransform so the translation tables (~250 KB) load as a separate
 * chunk — only pages that show prices wait for them; the home page does not.
 */
import type { PriceItem } from '../types';
import type { ApiPrice } from './types';
import { mapPriceFromApi } from './mappers';
import { enrichPrices } from '../utils/enrichPrices';
import { buildCatalogPriceItems } from '../utils/priceCatalog';

export function transformClinicPrices(apiPrices: ApiPrice[]): PriceItem[] {
  return enrichPrices(apiPrices.length > 0 ? apiPrices.map(mapPriceFromApi) : buildCatalogPriceItems());
}
