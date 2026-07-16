import { useEffect, useRef, useState } from 'react';
import { Instagram } from 'lucide-react';
import type { Locale } from '../types';
import { CLINIC_SOCIAL_LINKS } from '../config/links';

const BRANCH_LABELS: Record<
  Locale,
  { fergana: string; kokand: string; title: string; ferganaHandle: string; kokandHandle: string }
> = {
  uz: {
    fergana: "Farg'ona",
    kokand: "Qo'qon",
    title: 'Instagram filialini tanlang',
    ferganaHandle: '@radeski_skin_clinic',
    kokandHandle: '@radeski.clinic.kokand',
  },
  ru: {
    fergana: 'Фергана',
    kokand: 'Коканд',
    title: 'Выберите филиал Instagram',
    ferganaHandle: '@radeski_skin_clinic',
    kokandHandle: '@radeski.clinic.kokand',
  },
  en: {
    fergana: 'Fergana',
    kokand: 'Kokand',
    title: 'Choose Instagram branch',
    ferganaHandle: '@radeski_skin_clinic',
    kokandHandle: '@radeski.clinic.kokand',
  },
};

interface InstagramBranchPickerProps {
  locale: Locale;
  buttonClassName?: string;
}

export default function InstagramBranchPicker({
  locale,
  buttonClassName = 'w-8 h-8 rounded-lg bg-slate-850 hover:bg-brand-gold hover:text-white flex items-center justify-center transition-all text-slate-300',
}: InstagramBranchPickerProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const labels = BRANCH_LABELS[locale];

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onEscape);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onEscape);
    };
  }, [open]);

  const openBranch = (url: string) => {
    setOpen(false);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className={buttonClassName}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Instagram"
      >
        <Instagram className="w-4 h-4" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={labels.title}
          className="absolute bottom-full left-0 mb-2 min-w-[13.5rem] rounded-xl border border-slate-700 bg-slate-900 shadow-xl overflow-hidden z-50"
        >
          <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800">
            {labels.title}
          </p>
          <button
            type="button"
            role="menuitem"
            onClick={() => openBranch(CLINIC_SOCIAL_LINKS.instagram.fergana)}
            className="w-full px-3 py-2.5 text-left hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <span className="block text-sm font-semibold text-white">{labels.fergana}</span>
            <span className="block text-[11px] text-slate-400 mt-0.5">{labels.ferganaHandle}</span>
          </button>
          <button
            type="button"
            role="menuitem"
            onClick={() => openBranch(CLINIC_SOCIAL_LINKS.instagram.kokand)}
            className="w-full px-3 py-2.5 text-left hover:bg-slate-800 transition-colors cursor-pointer border-t border-slate-800"
          >
            <span className="block text-sm font-semibold text-white">{labels.kokand}</span>
            <span className="block text-[11px] text-slate-400 mt-0.5">{labels.kokandHandle}</span>
          </button>
        </div>
      )}
    </div>
  );
}
