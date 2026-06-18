import { useState, useMemo, useEffect, type MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { Locale, ServiceCategory } from '../types';
import { DICTIONARY, SERVICE_CATEGORIES } from '../data';
import MediaImage from './MediaImage';
import { getLocalizedImage } from '../utils/localizedImage';
import { getServiceLucideIcon, resolveCategoryIcon, resolveSubServiceIcon } from '../utils/serviceIcons';

interface ServicesProps {
  locale: Locale;
  onOpenAppointment: (serviceId?: string) => void;
  onOpenCategory?: (categoryId: string) => void;
  onOpenSubService?: (categoryId: string, subId: string) => void;
  serviceCategories?: ServiceCategory[];
  dictionary?: any;
}

export default function Services({ locale, onOpenAppointment, onOpenCategory, onOpenSubService, serviceCategories, dictionary }: ServicesProps) {
  const d = dictionary || DICTIONARY[locale];
  const dynamicCategories = serviceCategories || SERVICE_CATEGORIES;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

  const renderIcon = (iconName: string, className = 'w-6 h-6 text-brand-gold') => {
    const IconComponent = getServiceLucideIcon(iconName);
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

  const getCategoryImage = (category: ServiceCategory) =>
    getLocalizedImage(category.images, locale) ?? category.image ?? null;

  const getSubImage = (sub: ServiceCategory['subServices'][number]) =>
    getLocalizedImage(sub.images, locale) ?? sub.image ?? null;

  const categoriesWithImages = useMemo(
    () => filteredCategories.filter((cat) => getCategoryImage(cat)),
    [filteredCategories, locale],
  );

  useEffect(() => {
    if (expandedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpandedImage(null);
      } else if (event.key === 'ArrowLeft' && categoriesWithImages.length > 1) {
        const currentIdx = categoriesWithImages.findIndex(
          (cat) => getCategoryImage(cat) === expandedImage.src
        );
        if (currentIdx >= 0) {
          const prev = categoriesWithImages[
            (currentIdx - 1 + categoriesWithImages.length) % categoriesWithImages.length
          ];
          setExpandedImage({ src: getCategoryImage(prev)!, alt: prev.title[locale] });
        }
      } else if (event.key === 'ArrowRight' && categoriesWithImages.length > 1) {
        const currentIdx = categoriesWithImages.findIndex(
          (cat) => getCategoryImage(cat) === expandedImage.src
        );
        if (currentIdx >= 0) {
          const next = categoriesWithImages[(currentIdx + 1) % categoriesWithImages.length];
          setExpandedImage({ src: getCategoryImage(next)!, alt: next.title[locale] });
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
    const currentIdx = categoriesWithImages.findIndex((cat) => getCategoryImage(cat) === expandedImage.src);
    if (currentIdx < 0) return;
    const nextIdx =
      direction === 'prev'
        ? (currentIdx - 1 + categoriesWithImages.length) % categoriesWithImages.length
        : (currentIdx + 1) % categoriesWithImages.length;
    const next = categoriesWithImages[nextIdx];
    setExpandedImage({ src: getCategoryImage(next)!, alt: next.title[locale] });
  };

  const lightboxIndex =
    expandedImage && categoriesWithImages.length > 0
      ? categoriesWithImages.findIndex((cat) => getCategoryImage(cat) === expandedImage.src)
      : -1;

  return (
    <section id="services-page" className="py-16 bg-brand-offwhite min-h-screen">
      <div className="site-container">
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
                {getCategoryImage(category) ? (
                  <div className="relative aspect-[16/11] sm:aspect-[5/3] min-h-[200px] overflow-hidden bg-brand-offwhite shrink-0">
                    <MediaImage
                      src={getCategoryImage(category)!}
                      alt={category.title[locale]}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <button
                      type="button"
                      onClick={(e) => openImageLightbox(getCategoryImage(category)!, category.title[locale], e)}
                      className="absolute top-3 right-3 p-2 bg-black/35 hover:bg-black/50 text-white rounded-lg backdrop-blur-sm transition-all cursor-pointer"
                      aria-label={locale === 'uz' ? 'Rasmni kattalashtirish' : locale === 'ru' ? 'Увеличить изображение' : 'Expand image'}
                    >
                      <Icons.Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="p-5 pb-0 flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-gold-light/10 rounded-xl flex items-center justify-center border border-brand-gold-light/20 shadow-xs">
                      {renderIcon(resolveCategoryIcon(category))}
                    </div>
                  </div>
                )}

                <div className="p-5 flex flex-col flex-1">
                  <button
                    type="button"
                    onClick={() => onOpenCategory?.(category.id)}
                    className="text-left font-bold text-brand-text-primary text-lg leading-tight hover:text-brand-gold transition-colors cursor-pointer"
                  >
                    {category.title[locale]}
                  </button>
                  <p className="text-brand-text-secondary text-xs sm:text-sm leading-relaxed mb-4 mt-3 font-light">
                    {category.description[locale]}
                  </p>

                  {onOpenCategory && (
                    <button
                      type="button"
                      onClick={() => onOpenCategory(category.id)}
                      className="mb-4 text-xs text-brand-gold hover:text-brand-gold-dark font-bold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{d.viewDetails}</span>
                      <Icons.ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}

                  <div className="space-y-2.5 border-t border-brand-offwhite pt-4 flex-1">
                    {category.subServices.map((sub) => (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => onOpenSubService?.(category.id, sub.id)}
                        className="w-full p-2.5 sm:p-3 bg-brand-offwhite/60 hover:bg-brand-gold-light/10 rounded-xl border border-transparent hover:border-brand-gold-light/30 flex items-start gap-3 cursor-pointer group/sub transition-all text-left"
                      >
                        {getSubImage(sub) ? (
                          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden shrink-0 border border-brand-sectiongray bg-brand-white shadow-xs group/thumb mt-0.5">
                            <MediaImage
                              src={getSubImage(sub)!}
                              alt={sub.name[locale]}
                              loading="lazy"
                              className="w-full h-full object-cover object-center"
                            />
                            <button
                              type="button"
                              onClick={(e) => openImageLightbox(getSubImage(sub)!, sub.name[locale], e)}
                              className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-all cursor-pointer"
                              aria-label={locale === 'uz' ? 'Rasmni kattalashtirish' : locale === 'ru' ? 'Увеличить' : 'Expand'}
                            >
                              <Icons.Maximize2 className="w-4 h-4 text-white drop-shadow-md" />
                            </button>
                          </div>
                        ) : (
                          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl shrink-0 bg-brand-gold-light/10 border border-brand-gold-light/25 flex items-center justify-center shadow-xs mt-0.5">
                            {renderIcon(resolveSubServiceIcon(sub, category), 'w-5 h-5 text-brand-gold')}
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <span className="text-brand-text-primary text-xs sm:text-sm font-semibold group-hover/sub:text-brand-gold leading-tight block">
                            {sub.name[locale]}
                          </span>
                          <span className="text-brand-text-muted text-[11px] sm:text-xs font-light leading-snug mt-1 line-clamp-2 block">
                            {sub.description[locale]}
                          </span>
                        </div>
                        <Icons.ChevronRight className="w-4 h-4 text-brand-text-muted group-hover/sub:text-brand-gold group-hover/sub:translate-x-0.5 transition-all shrink-0 mt-1" />
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
