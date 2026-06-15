import { useEffect, useState } from 'react';
import { ImagePlus, X } from 'lucide-react';

interface ImageUploadFieldProps {
  label: string;
  currentImageUrl?: string | null;
  file: File | null;
  onFileChange: (file: File | null) => void;
  helperText?: string;
}

export default function ImageUploadField({
  label,
  currentImageUrl,
  file,
  onFileChange,
  helperText,
}: ImageUploadFieldProps) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  const displaySrc = preview || currentImageUrl || null;

  return (
    <div className="space-y-2">
      <label className="block text-[10px] font-bold text-brand-text-muted uppercase tracking-wider">
        {label}
      </label>

      {displaySrc ? (
        <div className="relative w-36 h-36 rounded-xl overflow-hidden border border-brand-sectiongray bg-brand-offwhite">
          <img src={displaySrc} alt="Preview" className="w-full h-full object-cover" />
          {file && (
            <button
              type="button"
              onClick={() => onFileChange(null)}
              className="absolute top-1.5 right-1.5 p-1 bg-black/50 hover:bg-black/70 text-white rounded-full cursor-pointer"
              title="Remove selected file"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      ) : (
        <div className="w-36 h-36 rounded-xl border border-dashed border-brand-sectiongray bg-brand-offwhite flex items-center justify-center text-brand-text-muted">
          <ImagePlus className="w-8 h-8 opacity-40" />
        </div>
      )}

      <input
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
