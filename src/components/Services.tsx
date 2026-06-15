import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { Locale, ServiceCategory } from '../types';
import { DICTIONARY, SERVICE_CATEGORIES } from '../data';

interface ServicesProps {
  locale: Locale;
  onOpenAppointment: (serviceId?: string) => void;
  serviceCategories?: ServiceCategory[];
  dictionary?: any;
}

export default function Services({ locale, onOpenAppointment, serviceCategories, dictionary }: ServicesProps) {
  const d = dictionary || DICTIONARY[locale];
  const dynamicCategories = serviceCategories || SERVICE_CATEGORIES;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeDetailId, setActiveDetailId] = useState<string | null>(null);

  // Helper dynamic icon renderer
  const renderIcon = (iconName: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[iconName] || Icons.Activity;
    return <IconComponent className="w-6 h-6 text-brand-gold" />;
  };

  const filteredCategories = useMemo(() => {
    return dynamicCategories.map(category => {
      // Filter sub-services based on search query
      const filteredSubs = category.subServices.filter(sub => {
        const query = searchQuery.toLowerCase();
        return (
          sub.name[locale].toLowerCase().includes(query) ||
          sub.description[locale].toLowerCase().includes(query) ||
          category.title[locale].toLowerCase().includes(query)
        );
      });

      // If category title matches query, keep all sub-services, else keep filtered
      const matchesCategoryTitle = category.title[locale].toLowerCase().includes(searchQuery.toLowerCase());
      const subServicesToDisplay = matchesCategoryTitle ? category.subServices : filteredSubs;

      if (subServicesToDisplay.length > 0 || matchesCategoryTitle) {
        return {
          ...category,
          subServices: subServicesToDisplay
        };
      }
      return null;
    }).filter(Boolean) as typeof SERVICE_CATEGORIES;
  }, [searchQuery, locale, dynamicCategories]);

  // Find active sub-service for detailed modal info
  const activeDetailSubService = useMemo(() => {
    if (!activeDetailId) return null;
    for (const cat of dynamicCategories) {
      const found = cat.subServices.find(s => s.id === activeDetailId);
      if (found) return found;
    }
    return null;
  }, [activeDetailId, dynamicCategories]);

  return (
    <section id="services-page" className="py-16 bg-brand-offwhite min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
            {d.navServices}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary tracking-tight mt-3">
            {locale === 'uz' ? "Bizning ixtisoslashtirilgan yo'nalishlarimiz" : 
             locale === 'ru' ? "Наши специализированные направления" : 
                               "Our Specialized Medical Departments"}
          </h2>
          <p className="text-brand-text-muted mt-4 text-sm sm:text-base">
            {locale === 'uz' ? "Klinikamizda teri muammolarini 100% xavfsiz davolovchi 12 ta asosiy strategik va zamonaviy darslik tibbiy yo'nalishlari faoliyat ko'rsatmoqda." : 
             locale === 'ru' ? "Наша клиника работает по 12 ключевым дерматологическим направлениям, решая широчайший спектр медицинских задач." : 
                               "Our center specializes in 12 separate clinical spheres to secure absolute safety and healthy skin results."}
          </p>
        </div>

        {/* Search and Category Quick Filters */}
        <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:max-w-md">
            <Icons.Search className="absolute left-3 top-3.5 w-4.5 h-4.5 text-brand-text-muted" />
            <input
              id="service-search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={d.searchPlaceholder}
              className="w-full pl-10 pr-4 py-3 bg-brand-white border border-brand-sectiongray rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-gold/25 focus:border-brand-gold shadow-sm transition-all text-sm text-brand-text-primary"
            />
          </div>

          <div className="flex gap-2 flex-wrap justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                selectedCategory === null
                  ? 'bg-brand-dark-navy text-white shadow-sm'
                  : 'bg-brand-white text-brand-text-secondary border border-brand-sectiongray hover:bg-brand-offwhite'
              }`}
            >
              {d.allServices}
            </button>
            {dynamicCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-gold text-white shadow-sm shadow-brand-gold/10'
                    : 'bg-brand-white text-brand-text-secondary border border-brand-sectiongray hover:bg-brand-offwhite'
                }`}
              >
                {cat.title[locale]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories
            .filter(cat => selectedCategory === null ? true : cat.id === selectedCategory)
            .map((category) => (
              <motion.div
                key={category.id}
                id={`cat-card-${category.id}`}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-brand-white rounded-2xl border border-brand-sectiongray p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {category.image ? (
                    <div className="relative h-36 w-full overflow-hidden rounded-xl mb-4 border border-brand-sectiongray">
                      <img
                        src={category.image}
                        alt={category.title[locale]}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : null}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-brand-gold-light/10 rounded-xl flex items-center justify-center border border-brand-gold-light/20 shadow-xs">
                      {renderIcon(category.icon)}
                    </div>
                    <h3 className="font-bold text-brand-text-primary text-lg leading-tight">
                      {category.title[locale]}
                    </h3>
                  </div>

                  <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {category.description[locale]}
                  </p>

                  {/* Subservices list */}
                  <div className="space-y-3 border-t border-brand-offwhite pt-5">
                    {category.subServices.map((sub) => (
                      <div
                        key={sub.id}
                        onClick={() => setActiveDetailId(sub.id)}
                        className="p-3 bg-brand-offwhite/50 hover:bg-brand-gold-light/5 rounded-xl border border-transparent hover:border-brand-gold-light/30 flex items-center gap-3 cursor-pointer group transition-all"
                      >
                        {sub.image ? (
                          <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 border border-brand-sectiongray">
                            <img src={sub.image} alt={sub.name[locale]} className="w-full h-full object-cover" />
                          </div>
                        ) : null}
                        <span className="text-brand-text-secondary text-xs font-medium pr-2 group-hover:text-brand-gold leading-tight flex-1">
                          {sub.name[locale]}
                        </span>
                        <Icons.ChevronRight className="w-4 h-4 text-brand-text-muted group-hover:text-brand-gold group-hover:translate-x-0.5 transition-all shrink-0" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4">
                  <button
                    onClick={() => onOpenAppointment(category.id)}
                    className="w-full py-2.5 bg-brand-gold-light/10 hover:bg-brand-gold-light/20 text-brand-gold font-bold text-xs rounded-xl active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1"
                  >
                    <span>{d.appointmentBtn}</span>
                    <Icons.ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Simple Fallback */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16 bg-brand-white rounded-2xl border border-brand-sectiongray">
            <Icons.SearchX className="w-12 h-12 text-brand-text-muted mx-auto mb-4" />
            <p className="text-brand-text-muted text-sm">
              {locale === 'uz' ? "Hech qanday xizmat topilmadi." : 
               locale === 'ru' ? "Услуги не найдены." : 
                                 "No matching medical services found."}
            </p>
          </div>
        )}
      </div>

      {/* Subservice detailed information dialog */}
      <AnimatePresence>
        {activeDetailSubService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveDetailId(null)}
              className="fixed inset-0 bg-[#0c1424]/65 backdrop-blur-xs"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-brand-white rounded-2xl shadow-xl z-10 overflow-hidden border border-brand-sectiongray"
            >
              <div className="p-6 sm:p-8">
                <button
                  onClick={() => setActiveDetailId(null)}
                  className="absolute top-4 right-4 text-brand-text-muted hover:text-brand-text-primary p-1.5 hover:bg-brand-offwhite rounded-full transition-all"
                >
                  <Icons.X className="w-5 h-5" />
                </button>

                <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase font-mono py-1 px-2.5 bg-brand-gold-light/10 rounded-md">
                  {locale === 'uz' ? "Xizmat tafsiloti" : locale === 'ru' ? "Детали услуги" : "Therapeutic Details"}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tracking-tight mt-3 leading-tight">
                  {activeDetailSubService.name[locale]}
                </h3>

                {activeDetailSubService.image ? (
                  <div className="mt-4 h-44 w-full rounded-xl overflow-hidden border border-brand-sectiongray">
                    <img
                      src={activeDetailSubService.image}
                      alt={activeDetailSubService.name[locale]}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null}

                <p className="text-brand-text-muted mt-4 leading-relaxed text-sm font-light">
                  {activeDetailSubService.description[locale]}
                </p>

                {/* Simulated list of medical benefits inside modal for premium looks */}
                <div className="mt-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-brand-text-secondary font-light">
                    <Icons.CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{locale === 'uz' ? "Sertifikatlangan tibbiy uskunalar" : locale === 'ru' ? "Сертифицированное медоборудование" : "100% US & EU Clinical-Grade Devices"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-text-secondary font-light">
                    <Icons.CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{locale === 'uz' ? "Steril sharoit va ishonchlilik" : locale === 'ru' ? "Стерильные условия и безопасность" : "Sterile Clinical Environments"}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-brand-text-secondary font-light">
                    <Icons.CheckCircle2 className="w-4 h-4 text-brand-gold shrink-0" />
                    <span>{locale === 'uz' ? "Tajribali dermatolog konsultasiyasi" : locale === 'ru' ? "Консультация опытного специалиста" : "Individual Dermatological Oversight"}</span>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <button
                      onClick={() => {
                        const id = activeDetailSubService.id;
                        setActiveDetailId(null);
                        onOpenAppointment(id);
                      }}
                    className="flex-1 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl active:scale-98 transition-all cursor-pointer shadow-md text-center"
                  >
                    {d.appointmentBtn}
                  </button>
                  <button
                    onClick={() => setActiveDetailId(null)}
                    className="px-5 py-3 bg-brand-offwhite hover:bg-brand-sectiongray text-brand-text-secondary font-semibold text-xs rounded-xl active:scale-98 transition-all cursor-pointer text-center"
                  >
                    {d.closeBtn}
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
