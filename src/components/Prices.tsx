import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, Info, CalendarClock, ListFilter, HelpCircle } from 'lucide-react';
import { Locale } from '../types';
import { DICTIONARY, PRICES, SERVICE_CATEGORIES } from '../data';

interface PricesProps {
  locale: Locale;
  onOpenAppointment: (serviceId?: string) => void;
}

export default function Prices({ locale, onOpenAppointment }: PricesProps) {
  const d = DICTIONARY[locale];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredPrices = useMemo(() => {
    return PRICES.filter(item => {
      const matchesSearch = item.name[locale].toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, locale]);

  const categories = useMemo(() => {
    const list = SERVICE_CATEGORIES.map(c => ({ id: c.id, title: c.title[locale] }));
    return [{ id: 'all', title: d.allServices }, ...list];
  }, [locale, d]);

  return (
    <section id="prices-page" className="py-16 bg-brand-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Block */}
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
        </div>

        {/* Search & Filter section */}
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
              className="w-full md:w-64 px-3 py-3 bg-brand-offwhite border border-brand-sectiongray rounded-xl focus:bg-brand-white focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold transition-all text-sm text-brand-text-primary cursor-pointer text-ellipsis overflow-hidden"
            >
              {categories.map(c => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Pricing Grid / List Table */}
        <div className="bg-brand-white rounded-2xl border border-brand-sectiongray shadow-sm overflow-hidden mb-12">
          <div className="hidden md:grid grid-cols-12 gap-4 bg-brand-offwhite px-6 py-4 border-b border-brand-sectiongray text-xs font-bold text-brand-text-muted uppercase tracking-wider">
            <div className="col-span-7">{locale === 'uz' ? "Xizmat nomi" : locale === 'ru' ? "Наименование услуги" : "Service Description"}</div>
            <div className="col-span-2 text-right">{locale === 'uz' ? "Narxi" : locale === 'ru' ? "Стоимость" : "Standard Price"}</div>
            <div className="col-span-3 text-right">{locale === 'uz' ? "Amal" : locale === 'ru' ? "Действие" : "Booking Options"}</div>
          </div>

          <div className="divide-y divide-brand-sectiongray">
            {filteredPrices.map((item) => (
              <div
                key={item.id}
                id={`price-item-${item.id}`}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center px-6 py-5 hover:bg-brand-offwhite/50 transition-colors"
              >
                {/* Mobile / Name */}
                <div className="col-span-1 md:col-span-7">
                  <span className="text-[9px] font-bold text-brand-text-muted uppercase tracking-widest block md:hidden mb-1 leading-none">
                    {SERVICE_CATEGORIES.find(c => c.id === item.category)?.title[locale]}
                  </span>
                  <h4 className="text-brand-text-primary font-semibold text-sm sm:text-base leading-snug">
                    {item.name[locale]}
                  </h4>
                </div>

                {/* Mobile Price and Action layout */}
                <div className="col-span-1 md:col-span-2 md:text-right mt-2 md:mt-0 flex items-center justify-between md:block">
                  <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-widest block md:hidden">
                    {locale === 'uz' ? "Narxi:" : locale === 'ru' ? "Цена:" : "Price:"}
                  </span>
                  <span className="text-brand-gold-dark font-extrabold text-sm sm:text-base">
                    {item.price === "Kelishilgan holda" && locale === 'en' ? "On agreement" : 
                     item.price === "Kelishilgan holda" && locale === 'ru' ? "По договору" : 
                     item.price}
                  </span>
                </div>

                <div className="col-span-1 md:col-span-3 md:text-right flex items-center justify-between md:justify-end gap-2 mt-4 md:mt-0">
                  <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-widest block md:hidden">
                    {locale === 'uz' ? "Har qabul:" : locale === 'ru' ? "Назначить:" : "Book:"}
                  </span>
                  <button
                    onClick={() => onOpenAppointment(item.category)}
                    className="py-2.5 px-4 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl transition-all cursor-pointer shadow-md shadow-brand-gold/5 hover:shadow-brand-gold/15 flex items-center gap-1.5"
                  >
                    <CalendarClock className="w-3.5 h-3.5" />
                    <span>{d.appointmentBtn}</span>
                  </button>
                </div>
              </div>
            ))}

            {filteredPrices.length === 0 && (
              <div className="text-center py-16">
                <HelpCircle className="w-12 h-12 text-brand-text-muted mx-auto mb-4" />
                <p className="text-brand-text-muted text-sm">
                  {locale === 'uz' ? "Ushbu filtr va kalit so'z bo'yicha hech qanday narx topilmadi." : 
                   locale === 'ru' ? "По данному запросу цены не найдены." : 
                                     "No pricing items matched your filter or search."}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Pricing disclaimer / FAQ info */}
        <div className="p-6 bg-brand-gold-light/5 rounded-2xl border border-brand-gold-light/20 flex gap-4 text-xs sm:text-sm text-brand-text-secondary line-normal leading-relaxed">
          <Info className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-brand-text-primary">{locale === 'uz' ? "Muhim eslatma!" : locale === 'ru' ? "Важная информация!" : "Important Notice!"}</span>
            <p className="mt-1 font-light">
              {locale === 'uz' ? "Preyskurantda ko'rsatilgan narxlar yakuniy emas va klinikamizda terining zararlanish darajasiga qarab o'zgarishi mumkin. Asosiy va aniq narxingiz mutaxassis dermatolog klinik ko'rigidan o'tib to'liq konsultatsiya olganingizdan so'ng individual belgilanadi." : 
               locale === 'ru' ? "Указанные в прайс-листе цены носят ознакомительный характер и не являются публичной офертой. Полная и точная калькуляция лечебного плана формируется индивидуально на приеме у дерматолога в зависимости от степени поражения тканей и площади лазерного воздействия." : 
                                 "The prices listed are of baseline introductory parameters. The final clinical quotation is personally optimized by the consulting physician according to biopsy, lesion scope, or parameters of required pulse lasers."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
