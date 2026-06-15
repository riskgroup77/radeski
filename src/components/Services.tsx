import { useState, useMemo, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { Locale, ServiceCategory } from '../types';
import { DICTIONARY, SERVICE_CATEGORIES } from '../data';
import MediaImage from './MediaImage';

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
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  // Helper dynamic icon renderer
  const renderIcon = (iconName: string, className = 'w-6 h-6 text-brand-gold') => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const IconComponent = (Icons as any)[iconName] || Icons.Activity;
    return <IconComponent className={className} />;
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

  const categoriesWithImages = useMemo(
    () => filteredCategories.filter((cat) => cat.image),
    [filteredCategories]
  );

  useEffect(() => {
    if (expandedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedImage(null);
      } else if (event.key === 'ArrowLeft' && categoriesWithImages.length > 1) {
        const currentIdx = categoriesWithImages.findIndex(
          (cat) => cat.image === expandedImage.src
        );
        if (currentIdx >= 0) {
          const prev = categoriesWithImages[
            (currentIdx - 1 + categoriesWithImages.length) % categoriesWithImages.length
          ];
          setExpandedImage({ src: prev.image!, alt: prev.title[locale] });
        }
      } else if (event.key === 'ArrowRight' && categoriesWithImages.length > 1) {
        const currentIdx = categoriesWithImages.findIndex(
          (cat) => cat.image === expandedImage.src
        );
        if (currentIdx >= 0) {
          const next = categoriesWithImages[(currentIdx + 1) % categoriesWithImages.length];
          setExpandedImage({ src: next.image!, alt: next.title[locale] });
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expandedImage, categoriesWithImages, locale]);

  const openImageLightbox = (src: string, alt: string, event?: MouseEvent) => {
    event?.stopPropagation();
    setExpandedImage({ src, alt });
  };

  const navigateLightbox = (direction: 'prev' | 'next', event: MouseEvent) => {
    event.stopPropagation();
    if (!expandedImage || categoriesWithImages.length === 0) return;
    const currentIdx = categoriesWithImages.findIndex((cat) => cat.image === expandedImage.src);
    if (currentIdx < 0) return;
    const nextIdx =
      direction === 'prev'
        ? (currentIdx - 1 + categoriesWithImages.length) % categoriesWithImages.length
        : (currentIdx + 1) % categoriesWithImages.length;
    const next = categoriesWithImages[nextIdx];
    setExpandedImage({ src: next.image!, alt: next.title[locale] });
  };

  const lightboxIndex =
    expandedImage && categoriesWithImages.length > 0
      ? categoriesWithImages.findIndex((cat) => cat.image === expandedImage.src)
      : -1;

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
                className="bg-brand-white rounded-2xl border border-brand-sectiongray overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col h-full group"
              >
                {category.image ? (
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-brand-offwhite shrink-0">
                    <MediaImage
                      src={category.image}
                      alt={category.title[locale]}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/90 via-brand-dark-navy/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end gap-3">
                      <button
                        type="button"
                        onClick={(e) => openImageLightbox(category.image!, category.title[locale], e)}
                        className="w-10 h-10 bg-white/15 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20 shrink-0 hover:bg-white/25 transition-all cursor-pointer"
                        aria-label={locale === 'uz' ? 'Rasmni kattalashtirish' : locale === 'ru' ? 'Увеличить изображение' : 'Expand image'}
                      >
                        <Icons.Maximize2 className="w-5 h-5 text-white" />
                      </button>
                      <h3 className="font-bold text-white text-lg leading-tight drop-shadow-sm">
                        {category.title[locale]}
                      </h3>
                    </div>
                  </div>
                ) : (
                  <div className="p-5 pb-0 flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-gold-light/10 rounded-xl flex items-center justify-center border border-brand-gold-light/20 shadow-xs">
                      {renderIcon(category.icon)}
                    </div>
                    <h3 className="font-bold text-brand-text-primary text-lg leading-tight">
                      {category.title[locale]}
                    </h3>
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed mb-5 font-light">
                    {category.description[locale]}
                  </p>

                  <div className="space-y-2.5 border-t border-brand-offwhite pt-4 flex-1">
                    {category.subServices.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => setActiveDetailId(sub.id)}
                        className="w-full p-2.5 sm:p-3 bg-brand-offwhite/60 hover:bg-brand-gold-light/10 rounded-xl border border-transparent hover:border-brand-gold-light/30 flex items-center gap-3 cursor-pointer group/sub transition-all text-left"
                      >
                        {sub.image ? (
                          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-brand-sectiongray bg-brand-white shadow-xs group/thumb">
                            <MediaImage
                              src={sub.image}
                              alt={sub.name[locale]}
                              loading="lazy"
                              className="w-full h-full object-cover object-center"
                            />
                            <button
                              type="button"
                              onClick={(e) => openImageLightbox(sub.image!, sub.name[locale], e)}
                              className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-all cursor-pointer"
                              aria-label={locale === 'uz' ? 'Rasmni kattalashtirish' : locale === 'ru' ? 'Увеличить' : 'Expand'}
                            >
                              <Icons.Maximize2 className="w-4 h-4 text-white drop-shadow-md" />
                            </button>
                          </div>
                        ) : (
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl shrink-0 bg-brand-gold-light/10 border border-brand-gold-light/20 flex items-center justify-center">
                            {renderIcon(category.icon, 'w-4 h-4 text-brand-gold')}
                          </div>
                        )}
                        <span className="text-brand-text-secondary text-xs font-medium group-hover/sub:text-brand-gold leading-tight flex-1">
                          {sub.name[locale]}
                        </span>
                        <Icons.ChevronRight className="w-4 h-4 text-brand-text-muted group-hover/sub:text-brand-gold group-hover/sub:translate-x-0.5 transition-all shrink-0" />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenAppointment(category.id)}
                    className="mt-5 w-full py-2.5 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-sm shadow-brand-gold/15"
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
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-brand-white rounded-2xl shadow-xl z-10 overflow-hidden border border-brand-sectiongray"
            >
              {activeDetailSubService.image ? (
                <div className="relative h-52 sm:h-56 overflow-hidden bg-brand-offwhite">
                  <MediaImage
                    src={activeDetailSubService.image}
                    alt={activeDetailSubService.name[locale]}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-navy/80 via-transparent to-transparent" />
                  <button
                    type="button"
                    onClick={(e) => openImageLightbox(activeDetailSubService.image!, activeDetailSubService.name[locale], e)}
                    className="absolute top-4 left-4 p-2 bg-black/40 hover:bg-black/55 text-white rounded-lg backdrop-blur-sm transition-all"
                    aria-label={locale === 'uz' ? 'Rasmni kattalashtirish' : locale === 'ru' ? 'Увеличить' : 'Expand'}
                  >
                    <Icons.Maximize2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveDetailId(null)}
                    className="absolute top-4 right-4 text-white hover:text-slate-200 p-2 bg-black/30 hover:bg-black/45 rounded-full transition-all backdrop-blur-sm"
                  >
                    <Icons.X className="w-5 h-5" />
                  </button>
                </div>
              ) : null}

              <div className={`p-6 sm:p-8${!activeDetailSubService.image ? ' relative' : ''}`}>
                {!activeDetailSubService.image && (
                  <button
                    onClick={() => setActiveDetailId(null)}
                    className="absolute top-4 right-4 text-brand-text-muted hover:text-brand-text-primary p-1.5 hover:bg-brand-offwhite rounded-full transition-all"
                  >
                    <Icons.X className="w-5 h-5" />
                  </button>
                )}

                <span className="text-[10px] font-bold text-brand-gold tracking-widest uppercase font-mono py-1 px-2.5 bg-brand-gold-light/10 rounded-md">
                  {locale === 'uz' ? "Xizmat tafsiloti" : locale === 'ru' ? "Детали услуги" : "Therapeutic Details"}
                </span>

                <h3 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary tracking-tight mt-3 leading-tight">
                  {activeDetailSubService.name[locale]}
                </h3>

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

      {/* Image lightbox */}
      <AnimatePresence>
        {expandedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpandedImage(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#0a121e]/92 backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
              }}
              className="absolute top-4 right-4 text-white hover:text-slate-300 p-2.5 hover:bg-white/10 rounded-full transition-all z-10"
              aria-label={locale === 'uz' ? 'Yopish' : locale === 'ru' ? 'Закрыть' : 'Close'}
            >
              <Icons.X className="w-6 h-6" />
            </button>

            {lightboxIndex >= 0 && categoriesWithImages.length > 1 && (
              <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/80 text-xs font-mono tracking-wider">
                {lightboxIndex + 1} / {categoriesWithImages.length}
              </span>
            )}

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={expandedImage.src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-full max-h-[80vh] flex items-center justify-center"
                >
                  <MediaImage
                    src={expandedImage.src}
                    alt={expandedImage.alt}
                    className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
                  />
                </motion.div>
              </AnimatePresence>

              {categoriesWithImages.length > 1 && lightboxIndex >= 0 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => navigateLightbox('prev', e)}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                    aria-label={locale === 'uz' ? 'Oldingi rasm' : locale === 'ru' ? 'Предыдущее' : 'Previous'}
                  >
                    <Icons.ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => navigateLightbox('next', e)}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                    aria-label={locale === 'uz' ? 'Keyingi rasm' : locale === 'ru' ? 'Следующее' : 'Next'}
                  >
                    <Icons.ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/90 text-sm font-medium text-center px-4">
              {expandedImage.alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
