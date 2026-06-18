import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Info, CalendarClock, ListFilter, HelpCircle } from 'lucide-react';
import { Locale, PriceItem } from '../types';
import { DICTIONARY } from '../data';
import {
  PRICE_CATEGORY_ORDER,
} from '../data/priceCategoryLabels';
import { getCatalogCategoryNameRu } from '../utils/priceCatalog';
import { resolvePriceName } from '../utils/priceDisplay';
import { resolvePriceCategoryLabel } from '../utils/priceCategoryDisplay';

interface PricesProps {
  locale: Locale;
  onOpenAppointment: (serviceId?: string) => void;
  prices?: PriceItem[];
  dictionary?: Record<string, string>;
}

export default function Prices({ locale, onOpenAppointment, prices, dictionary }: PricesProps) {
  const d = dictionary || DICTIONARY[locale];
  const dynamicPrices = prices || [];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPrices = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return dynamicPrices.filter((item) => {
      const displayName = resolvePriceName(item, locale).toLowerCase();
      const matchesSearch =
        !query ||
        displayName.includes(query) ||
        item.name.uz.toLowerCase().includes(query) ||
        item.name.ru.toLowerCase().includes(query) ||
        item.name.en.toLowerCase().includes(query);
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, dynamicPrices, locale]);

  const pricesByCategory = useMemo(() => {
    const grouped = new Map<string, PriceItem[]>();
    filteredPrices.forEach((item) => {
      const catId = item.category || 'other';
      if (!grouped.has(catId)) grouped.set(catId, []);
      grouped.get(catId)!.push(item);
    });

    const sections: { categoryId: string; title: string; items: PriceItem[] }[] = [];

    const order =
      selectedCategory === 'all'
        ? PRICE_CATEGORY_ORDER
        : [selectedCategory];

    order.forEach((catId) => {
      const items = grouped.get(catId);
      if (!items?.length) return;
      sections.push({
        categoryId: catId,
        title: resolvePriceCategoryLabel(catId, locale, getCatalogCategoryNameRu(catId)),
        items: [...items].sort((a, b) => (a.priceValue ?? 0) - (b.priceValue ?? 0)),
      });
      grouped.delete(catId);
    });

    grouped.forEach((items, catId) => {
      sections.push({
        categoryId: catId,
        title: resolvePriceCategoryLabel(catId, locale, getCatalogCategoryNameRu(catId)),
        items: [...items].sort((a, b) => (a.priceValue ?? 0) - (b.priceValue ?? 0)),
      });
    });

    return sections;
  }, [filteredPrices, selectedCategory, locale]);

  const categories = useMemo(() => {
    const usedIds = new Set(dynamicPrices.map((p) => p.category));
    const list = PRICE_CATEGORY_ORDER.filter((id) => usedIds.has(id)).map((id) => ({
      id,
      title: resolvePriceCategoryLabel(id, locale, getCatalogCategoryNameRu(id)),
    }));
    return [{ id: 'all', title: d.allServices }, ...list];
  }, [locale, d, dynamicPrices]);

  const totalItems = dynamicPrices.length;
  const totalCategories = new Set(dynamicPrices.map((p) => p.category)).size;

  return (
    <section id="prices-page" className="py-16 bg-brand-offwhite min-h-screen">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
            {d.navPrices}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-3">
            {d.pricesTitle}
          </h2>
          <p className="text-brand-text-muted mt-4 text-sm sm:text-base">
            {d.pricesDesc}
          </p>
          {totalItems > 0 && (
            <p className="text-xs text-brand-text-muted mt-3 font-mono">
              {totalCategories} {d.priceMetaSections}
              {' · '}
              {totalItems} {d.priceMetaItems}
            </p>
          )}
        </div>

        <div className="bg-brand-white rounded-2xl border border-brand-sectiongray p-6 shadow-sm mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-3.5 w-4.5 h-4.5 text-brand-text-muted" />
            <input
              id="price-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={d.searchPlaceholder}
              className="w-full pl-10 pr-4 py-3 bg-brand-offwhite border border-brand-sectiongray focus:bg-brand-white rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold transition-all text-sm text-brand-text-primary"
            />
          </div>

          <div className="w-full md:w-auto flex items-center gap-2">
            <ListFilter className="w-4 h-4 text-brand-text-muted shrink-0 hidden sm:block" />
            <select
              id="price-category-filter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-72 px-3 py-3 bg-brand-offwhite border border-brand-sectiongray rounded-xl focus:bg-brand-white focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold transition-all text-sm text-brand-text-primary cursor-pointer text-ellipsis overflow-hidden"
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-8 mb-12">
          {pricesByCategory.map((section, sectionIndex) => (
            <motion.div
              key={section.categoryId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: Math.min(sectionIndex * 0.03, 0.5) }}
              className="bg-brand-white rounded-2xl border border-brand-sectiongray shadow-sm overflow-hidden"
            >
              <div className="px-6 py-4 bg-brand-offwhite border-b border-brand-sectiongray flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">
                    {d.priceSectionLabel}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold text-brand-text-primary tracking-tight mt-0.5">
                    {section.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-brand-text-muted bg-brand-white px-3 py-1 rounded-full border border-brand-sectiongray">
                  {section.items.length} {d.priceItemsShort}
                </span>
              </div>

              <div className="hidden md:grid grid-cols-12 gap-4 bg-brand-white px-6 py-3 border-b border-brand-offwhite text-xs font-bold text-brand-text-muted uppercase tracking-wider">
                <div className="col-span-7">{d.priceColService}</div>
                <div className="col-span-2 text-right">{d.priceColPrice}</div>
                <div className="col-span-3 text-right">{d.priceColBooking}</div>
              </div>

              <div className="divide-y divide-brand-sectiongray">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    id={`price-item-${item.id}`}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-4 hover:bg-brand-offwhite/50 transition-colors"
                  >
                    <div className="col-span-1 md:col-span-7">
                      <h4 className="text-brand-text-primary font-semibold text-sm sm:text-base leading-snug">
                        {resolvePriceName(item, locale)}
                      </h4>
                    </div>

                    <div className="col-span-1 md:col-span-2 md:text-right mt-2 md:mt-0 flex items-center justify-between md:block">
                      <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-widest block md:hidden">
                        {d.priceMobilePrice}
                      </span>
                      <span className="text-brand-gold-dark font-extrabold text-sm sm:text-base whitespace-nowrap">
                        {item.priceValue === 0 ? d.priceFree : item.price}
                      </span>
                    </div>

                    <div className="col-span-1 md:col-span-3 md:text-right flex items-center justify-between md:justify-end gap-2 mt-3 md:mt-0">
                      <button
                        type="button"
                        onClick={() => onOpenAppointment(item.category)}
                        className="py-2.5 px-4 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md shadow-brand-gold/5 hover:shadow-brand-gold/15 flex items-center gap-1.5"
                      >
                        <CalendarClock className="w-3.5 h-3.5" />
                        <span>{d.appointmentBtn}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {pricesByCategory.length === 0 && (
            <div className="bg-brand-white rounded-2xl border border-brand-sectiongray shadow-sm text-center py-16">
              <HelpCircle className="w-12 h-12 text-brand-text-muted mx-auto mb-4" />
              <p className="text-brand-text-muted text-sm">{d.priceEmpty}</p>
            </div>
          )}
        </div>

        <div className="p-6 bg-brand-gold-light/5 rounded-2xl border border-brand-gold-light/20 flex gap-4 text-xs sm:text-sm text-brand-text-secondary leading-relaxed">
          <Info className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-brand-text-primary">{d.priceNoticeTitle}</span>
            <p className="mt-1 font-light">{d.priceNoticeBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
