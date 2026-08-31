import { useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from 'react';

interface NavSideFlyoutProps {
  isOpen: boolean;
  anchorRef: RefObject<HTMLElement | null>;
  title: string;
  children: ReactNode;
  panelClassName?: string;
}

/** Xizmatlar / Maqolalar kabi yon ochiladigan submenu — viewport chetida avtomatik flip qiladi. */
export default function NavSideFlyout({
  isOpen,
  anchorRef,
  title,
  children,
  panelClassName = '',
}: NavSideFlyoutProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [flipX, setFlipX] = useState(false);
  const [flipY, setFlipY] = useState(false);

  useLayoutEffect(() => {
    if (!isOpen || !anchorRef.current) return;

    const updatePlacement = () => {
      const anchor = anchorRef.current!.getBoundingClientRect();
      const panelWidth = panelRef.current?.offsetWidth ?? 280;
      const panelHeight = panelRef.current?.offsetHeight ?? 360;
      const margin = 16;

      setFlipX(anchor.right + panelWidth + margin > window.innerWidth);
      setFlipY(anchor.top + panelHeight + margin > window.innerHeight);
    };

    updatePlacement();

    window.addEventListener('resize', updatePlacement);
    window.addEventListener('scroll', updatePlacement, true);
    return () => {
      window.removeEventListener('resize', updatePlacement);
      window.removeEventListener('scroll', updatePlacement, true);
    };
  }, [isOpen, anchorRef, children]);

  if (!isOpen) return null;

  return (
    <div
      className={`absolute z-[210] flex items-stretch ${
        flipX ? 'right-full flex-row-reverse' : 'left-full'
      } ${flipY ? 'bottom-0 top-auto' : 'top-0'}`}
    >
      <div className="w-2 shrink-0" aria-hidden="true" />
      <div
        ref={panelRef}
        className={`min-w-[220px] sm:min-w-[250px] max-w-[min(320px,calc(100vw-1.5rem))] max-h-[min(70vh,420px)] overflow-y-auto overscroll-contain bg-white border border-slate-150 rounded-xl shadow-2xl py-2 animate-in fade-in duration-200 ${
          flipX ? 'slide-in-from-right-2' : 'slide-in-from-left-2'
        } ${panelClassName}`}
        role="menu"
      >
        <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-gold border-b border-brand-sectiongray/60 mb-1 sticky top-0 bg-white z-[1]">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
}
