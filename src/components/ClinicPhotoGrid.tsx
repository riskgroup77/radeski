import type { Locale } from '../types';
import type { ClinicPhoto } from '../data/clinicPhotos';
import MediaImage from './MediaImage';

interface Props {
  locale: Locale;
  photos: ClinicPhoto[];
  title: string;
  intro?: string;
}

/** Real clinic photos with captions (city pages and equipment pages). */
export default function ClinicPhotoGrid({ locale, photos, title, intro }: Props) {
  if (photos.length === 0) return null;
  return (
    <section className="mt-12" aria-label={title}>
      <h2 className="text-xl sm:text-2xl font-extrabold text-brand-text-primary">{title}</h2>
      {intro ? <p className="mt-2 text-sm text-brand-text-muted leading-relaxed max-w-3xl">{intro}</p> : null}
      <div className={`mt-5 grid gap-4 ${photos.length === 1 ? 'grid-cols-1 max-w-sm' : 'grid-cols-2 lg:grid-cols-4'}`}>
        {photos.map((photo) => (
          <figure key={photo.src} className="m-0">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-brand-sectiongray bg-brand-white">
              <MediaImage
                src={photo.src}
                alt={photo.alt[locale]}
                width={1200}
                height={1500}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs text-brand-text-muted leading-snug">{photo.alt[locale]}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
