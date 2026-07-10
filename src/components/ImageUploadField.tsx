import { useEffect, useRef, useState } from 'react';
import { ImagePlus, Trash2 } from 'lucide-react';
import { useMediaUrl } from '../hooks/useMediaUrl';

interface ImageUploadFieldProps {
  label: string;
  currentImageUrl?: string | null;
  file: File | null;
  onFileChange: (file: File | null) => void;
  /** Mavjud (API/statik) rasmni olib tashlash */
  onClearCurrent?: () => void;
  helperText?: string;
  /** Keng birlashgan rasm uchun */
  variant?: 'default' | 'wide';
}

export default function ImageUploadField({
  label,
  currentImageUrl,
  file,
  onFileChange,
  onClearCurrent,
  helperText,
  variant = 'default',
}: ImageUploadFieldProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resolvedCurrentUrl = useMediaUrl(currentImageUrl);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const displaySrc = preview || resolvedCurrentUrl || null;
  const canClear = Boolean(displaySrc);
  const previewClass =
    variant === 'wide'
      ? 'relative w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden border border-brand-sectiongray bg-brand-offwhite'
      : 'group relative w-36 h-36 rounded-xl overflow-hidden border border-brand-sectiongray bg-brand-offwhite';
  const emptyClass =
    variant === 'wide'
      ? 'w-full max-w-sm aspect-[4/3] rounded-xl border border-dashed border-brand-sectiongray bg-brand-offwhite flex items-center justify-center text-brand-text-muted'
      : 'w-36 h-36 rounded-xl border border-dashed border-brand-sectiongray bg-brand-offwhite flex items-center justify-center text-brand-text-muted';

  const handleClear = () => {
    onFileChange(null);
    onClearCurrent?.();
    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <div className="space-y-2">
      {label ? (
        <label className="block text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">
          {label}
        </label>
      ) : null}

      {displaySrc ? (
        <div className={`group ${previewClass}`}>
          <img src={displaySrc} alt="Preview" className="w-full h-full object-cover" />
          {canClear && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/0 group-hover:bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-all cursor-pointer"
              title="Rasmni olib tashlash"
            >
              <Trash2 className="w-6 h-6" />
              <span className="text-[9px] font-bold uppercase tracking-wide">O&apos;chirish</span>
            </button>
          )}
        </div>
      ) : (
        <div className={emptyClass}>
          <ImagePlus className="w-8 h-8 opacity-40" />
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
        className="block w-full text-xs text-brand-text-secondary file:mr-3 file:py-2 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-brand-gold-light/15 file:text-brand-gold-dark hover:file:bg-brand-gold-light/25 cursor-pointer"
      />

      {helperText && (
        <p className="text-[10px] text-brand-text-muted font-light">{helperText}</p>
      )}
    </div>
  );
}
