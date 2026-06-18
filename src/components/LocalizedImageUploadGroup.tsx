import ImageUploadField from './ImageUploadField';
import type { Locale } from '../types';
import type { LocalizedImageFiles, LocalizedImages } from '../utils/localizedImage';
import { EMPTY_LOCALIZED_IMAGE_FILES } from '../utils/localizedImage';

const LOCALE_LABELS: Record<Locale, string> = {
  uz: "O'zbekcha rasm (UZ)",
  ru: 'Русское изображение (RU)',
  en: 'English image (EN)',
};

interface LocalizedImageUploadGroupProps {
  title?: string;
  images?: LocalizedImages | null;
  files?: LocalizedImageFiles;
  onFilesChange: (files: LocalizedImageFiles) => void;
  helperText?: string;
}

export default function LocalizedImageUploadGroup({
  title,
  images,
  files = EMPTY_LOCALIZED_IMAGE_FILES,
  onFilesChange,
  helperText,
}: LocalizedImageUploadGroupProps) {
  const locales: Locale[] = ['uz', 'ru', 'en'];

  const setFile = (locale: Locale, file: File | null) => {
    onFilesChange({ ...files, [locale]: file });
  };

  return (
    <div className="space-y-3">
      {title ? (
        <p className="text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">{title}</p>
      ) : null}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {locales.map((locale) => (
          <ImageUploadField
            key={locale}
            label={LOCALE_LABELS[locale]}
            currentImageUrl={images?.[locale]}
            file={files[locale]}
            onFileChange={(file) => setFile(locale, file)}
            helperText={locale === 'uz' ? helperText : undefined}
          />
        ))}
      </div>
    </div>
  );
}
