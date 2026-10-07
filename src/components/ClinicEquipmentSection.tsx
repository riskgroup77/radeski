import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronRight, Cpu } from 'lucide-react';
import type { Locale, PriceItem, ServiceCategory } from '../types';
import {
  getCategoryEquipmentList,
  getLocalizedEquipmentText,
} from '../data/clinicEquipmentCatalog';
import { getEquipmentSectionLabels } from '../utils/clinicEquipment';
import { isClinicEquipmentId, serviceEquipmentPath } from '../utils/clinicEquipmentRoutes';
import MediaImage from './MediaImage';
import EquipmentDetailPanel from './EquipmentDetailPanel';

interface ClinicEquipmentSectionProps {
  locale: Locale;
  category: ServiceCategory;
  prices?: PriceItem[];
  embedded?: boolean;
}

export default function ClinicEquipmentSection({
  locale,
  category,
  prices,
  embedded = false,
}: ClinicEquipmentSectionProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const labels = getEquipmentSectionLabels(locale);
  const equipmentList = getCategoryEquipmentList(category.id);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const hashId = location.hash.replace('#', '').trim();
    if (!hashId || !isClinicEquipmentId(hashId)) return;
    navigate(serviceEquipmentPath(locale, hashId), { replace: true });
  }, [location.hash, locale, navigate]);

  if (equipmentList.length === 0) return null;

  const detailLabel =
    locale === 'uz' ? 'To\'liq sahifa' : locale === 'ru' ? 'Подробная страница' : 'Full page';

  const list = (
    <div className="space-y-3">
      {equipmentList.map((entry) => {
        const isOpen = openId === entry.id;
        const title = getLocalizedEquipmentText(entry.title, locale);
        const summary = getLocalizedEquipmentText(entry.shortDescription, locale);
        const pagePath = serviceEquipmentPath(locale, entry.id);

        return (
          <article
            key={entry.id}
            id={entry.id}
            className={`scroll-mt-2 overflow-hidden rounded-xl border bg-brand-offwhite/70 transition-colors ${
              isOpen ? 'border-brand-gold/40 shadow-sm' : 'border-brand-sectiongray'
            }`}
          >
            <div className="flex items-start gap-3 p-4 sm:p-5">
              <div className="hidden h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-brand-sectiongray bg-brand-white sm:block">
                <MediaImage src={entry.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <Link
                    to={pagePath}
                    className="text-sm font-bold leading-snug text-brand-text-primary no-underline transition-colors hover:text-brand-gold sm:text-base"
                  >
                    {title}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : entry.id)}
                    className="cursor-pointer shrink-0 rounded-lg p-1 hover:bg-brand-white"
                    aria-expanded={isOpen}
                    aria-label={isOpen ? 'Collapse' : 'Expand'}
                  >
                    <ChevronDown
                      className={`h-5 w-5 text-brand-gold transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
                {!isOpen ? (
                  <p className="mt-1.5 line-clamp-2 text-sm font-light leading-relaxed text-brand-text-secondary">
                    {summary}
                  </p>
                ) : null}
                <Link
                  to={pagePath}
                  className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-brand-gold px-3 py-2 text-xs font-bold text-white no-underline transition-colors hover:bg-brand-gold-dark"
                >
                  {detailLabel}
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <div key={`${entry.id}-panel`} className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <EquipmentDetailPanel
                    entry={entry}
                    locale={locale}
                    category={category}
                    prices={prices}
                    showImage={false}
                  />
                </div>
              ) : null}
            </AnimatePresence>
          </article>
        );
      })}
    </div>
  );

  if (embedded) return list;

  return (
    <section className="mt-6">
      <h4 className="mb-1 flex items-center gap-2 text-sm font-bold text-brand-text-primary">
        <Cpu className="h-4 w-4 shrink-0 text-brand-gold" />
        {labels.sectionTitle}
      </h4>
      <p className="mb-3 max-w-3xl text-xs font-light text-brand-text-muted">{labels.hint}</p>
      {list}
    </section>
  );
}
