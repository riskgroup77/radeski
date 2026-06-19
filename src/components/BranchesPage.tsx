import { motion } from 'motion/react';
import { Building2, MapPin, Phone, Clock, Star, Navigation } from 'lucide-react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import { CLINIC_BRANCHES } from '../data/sitePagesContent';
import MediaImage from './MediaImage';

interface BranchesPageProps {
  locale: Locale;
  dictionary?: Record<string, string>;
  onOpenAppointment?: () => void;
}

export default function BranchesPage({ locale, dictionary, onOpenAppointment }: BranchesPageProps) {
  const d = dictionary || DICTIONARY[locale];

  return (
    <section id="branches-page" className="py-16 bg-brand-offwhite min-h-screen">
      <div className="site-container">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
            {d.navBranches}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text-primary mt-3 tracking-tight">
            {d.branchesTitle}
          </h1>
          <p className="text-brand-text-muted mt-4 text-sm sm:text-base leading-relaxed">
            {d.branchesDesc}
          </p>
        </div>

        <div className="space-y-8">
          {CLINIC_BRANCHES.map((branch, index) => (
            <motion.article
              key={branch.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-brand-white rounded-2xl border border-brand-sectiongray overflow-hidden shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative min-h-[240px] lg:min-h-[360px] bg-brand-offwhite">
                  <MediaImage
                    src={branch.image}
                    alt={branch.name[locale]}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-950/50 to-transparent pointer-events-none" />
                  {branch.isMain && (
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold text-white text-[10px] font-bold uppercase tracking-wide shadow-md">
                      <Star className="w-3.5 h-3.5" fill="currentColor" />
                      {locale === 'uz' ? 'Bosh filial' : locale === 'ru' ? 'Главный филиал' : 'Main branch'}
                    </span>
                  )}
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Building2 className="w-5 h-5 text-brand-gold" />
                      <h2 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary leading-tight">
                        {branch.name[locale]}
                      </h2>
                    </div>

                    <ul className="space-y-4 text-sm">
                      <li className="flex gap-3">
                        <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span className="text-brand-text-secondary leading-relaxed">{branch.address[locale]}</span>
                      </li>
                      <li className="flex gap-3">
                        <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <a href="tel:+998732007373" className="text-brand-text-primary font-semibold font-mono hover:text-brand-gold transition-colors">
                          {branch.phone}
                        </a>
                      </li>
                      <li className="flex gap-3">
                        <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                        <span className="text-brand-text-secondary">{branch.hours[locale]}</span>
                      </li>
                    </ul>

                    <p className="mt-5 text-xs sm:text-sm text-brand-text-muted leading-relaxed border-t border-brand-sectiongray pt-4">
                      <span className="font-bold text-brand-text-primary block mb-1">
                        {locale === 'uz' ? 'Xizmatlar:' : locale === 'ru' ? 'Услуги:' : 'Services:'}
                      </span>
                      {branch.services[locale]}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    {onOpenAppointment && (
                      <button
                        type="button"
                        onClick={onOpenAppointment}
                        className="flex-1 py-3 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
                      >
                        {d.appointmentBtn}
                      </button>
                    )}
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address[locale])}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-brand-offwhite hover:bg-brand-sectiongray text-brand-text-secondary font-semibold text-xs rounded-xl transition-colors text-center inline-flex items-center justify-center gap-2"
                    >
                      <Navigation className="w-4 h-4" />
                      {locale === 'uz' ? 'Xaritada ochish' : locale === 'ru' ? 'Открыть на карте' : 'Open in maps'}
                    </a>
                  </div>
                </div>
              </div>

              <div className="h-48 sm:h-56 border-t border-brand-sectiongray">
                <iframe
                  src={branch.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={branch.name[locale]}
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
