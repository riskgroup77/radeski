import { motion } from 'motion/react';
import { Building2, MapPin, Phone, Clock, Star, Navigation, Globe, Mail } from 'lucide-react';
import type { Locale } from '../types';
import { DICTIONARY } from '../data';
import type { ClinicBranch } from '../data/sitePagesContent';
import { CLINIC_BRANCHES } from '../data/sitePagesContent';
import { CLINIC_MAP_EMBED_URL, getClinicMapOpenUrl } from '../config/links';
import MediaImage from './MediaImage';

function resolveBranchMapEmbed(branch: ClinicBranch): string {
  const embed = branch.mapEmbed?.trim();
  if (!embed || embed.includes('0x38bb83461413146b')) return CLINIC_MAP_EMBED_URL;
  return embed;
}

function resolveBranchMapOpenUrl(branch: ClinicBranch): string {
  if (branch.mapUrl?.trim()) return branch.mapUrl.trim();
  const address = branch.address.uz || branch.address.en || '';
  if (address) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }
  return getClinicMapOpenUrl();
}

function resolveBranchTelHref(branch: ClinicBranch): string {
  if (branch.phoneTel?.trim()) return `tel:${branch.phoneTel.trim()}`;
  const digits = branch.phone.replace(/[^\d+]/g, '');
  return digits ? `tel:${digits}` : '#';
}

interface BranchesPageProps {
  locale: Locale;
  dictionary?: Record<string, string>;
  branches?: ClinicBranch[];
  onOpenAppointment?: () => void;
}

export default function BranchesPage({
  locale,
  dictionary,
  branches = CLINIC_BRANCHES,
  onOpenAppointment,
}: BranchesPageProps) {
  const d = dictionary || DICTIONARY[locale];

  return (
    <section id="branches-page" className="py-12 bg-brand-offwhite">
      <div className="site-container">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-brand-gold tracking-widest uppercase py-1 px-3 bg-brand-gold-light/10 rounded-full">
            {d.navBranches}
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-text-primary mt-3 tracking-tight">
            {d.branchesTitle}
          </h1>
          <p className="text-brand-text-muted mt-3 text-sm leading-relaxed">
            {d.branchesDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {branches.map((branch, index) => (
            <motion.article
              key={branch.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              className="bg-brand-white rounded-xl border border-brand-sectiongray overflow-hidden shadow-sm flex flex-col"
            >
              <div className="relative aspect-[16/10] sm:aspect-[5/3] bg-brand-offwhite shrink-0 overflow-hidden">
                <MediaImage
                  src={branch.image}
                  alt={branch.name[locale]}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  style={
                    branch.id === 'fergana-main'
                      ? { objectPosition: 'center 42%' }
                      : { objectPosition: 'center center' }
                  }
                />
                {branch.isMain && (
                  <span className="absolute top-2.5 left-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-gold text-white text-[8px] font-bold uppercase tracking-wide shadow-md">
                    <Star className="w-2.5 h-2.5" fill="currentColor" />
                    {locale === 'uz' ? 'Bosh filial' : locale === 'ru' ? 'Главный филиал' : 'Main branch'}
                  </span>
                )}
              </div>

              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-start gap-2 mb-2.5">
                  <Building2 className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                  <h2 className="text-base sm:text-lg font-extrabold text-brand-text-primary leading-tight">
                    {branch.name[locale]}
                  </h2>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm">
                  <li className="flex gap-2">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-brand-text-secondary leading-relaxed">{branch.address[locale]}</span>
                  </li>
                  <li className="flex gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                    <a
                      href={resolveBranchTelHref(branch)}
                      className="text-brand-text-primary font-semibold font-mono hover:text-brand-gold transition-colors"
                    >
                      {branch.phone}
                    </a>
                  </li>
                  {branch.email && (
                    <li className="flex gap-2">
                      <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                      <a
                        href={`mailto:${branch.email}`}
                        className="text-brand-text-secondary hover:text-brand-gold transition-colors break-all"
                      >
                        {branch.email}
                      </a>
                    </li>
                  )}
                  {branch.website && (
                    <li className="flex gap-2">
                      <Globe className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                      <a
                        href={branch.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-gold font-semibold hover:text-brand-gold-dark transition-colors break-all"
                      >
                        {branch.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      </a>
                    </li>
                  )}
                  <li className="flex gap-2">
                    <Clock className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                    <span className="text-brand-text-secondary">{branch.hours[locale]}</span>
                  </li>
                </ul>

                <p className="mt-3 text-[11px] sm:text-xs text-brand-text-muted leading-relaxed border-t border-brand-sectiongray pt-2.5 line-clamp-2">
                  <span className="font-bold text-brand-text-primary">
                    {locale === 'uz' ? 'Xizmatlar: ' : locale === 'ru' ? 'Услуги: ' : 'Services: '}
                  </span>
                  {branch.services[locale]}
                </p>

                <div className="mt-3 flex gap-2">
                  {onOpenAppointment && (
                    <button
                      type="button"
                      onClick={onOpenAppointment}
                      className="flex-1 py-2 bg-brand-gold hover:bg-brand-gold-dark text-white font-bold text-[11px] rounded-lg transition-colors cursor-pointer"
                    >
                      {d.appointmentBtn}
                    </button>
                  )}
                  <a
                    href={resolveBranchMapOpenUrl(branch)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-brand-offwhite hover:bg-brand-sectiongray text-brand-text-secondary font-semibold text-[11px] rounded-lg transition-colors text-center inline-flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    {locale === 'uz' ? 'Xaritada ochish' : locale === 'ru' ? 'На карте' : 'Open map'}
                  </a>
                </div>
              </div>

              <div className="h-40 sm:h-44 border-t border-brand-sectiongray bg-brand-sectiongray/30 shrink-0">
                <iframe
                  src={resolveBranchMapEmbed(branch)}
                  width="100%"
                  height="100%"
                  className="block w-full h-full"
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
