import {
  useLayoutEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from 'react';
import { createPortal } from 'react-dom';

interface NavSideFlyoutProps {
  isOpen: boolean;
  anchorRef: RefObject<HTMLElement | null>;
  title: string;
  children: ReactNode;
  panelClassName?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: (event: MouseEvent) => void;
}

interface FlyoutLayout {
  panelTop: number;
  panelLeft: number;
  opensLeft: boolean;
  bridgeTop: number;
  bridgeLeft: number;
  bridgeWidth: number;
  bridgeHeight: number;
}

/** Yon panel — portal + keng ko'prik (asosiy dropdown bilan uzluksiz hover). */
export default function NavSideFlyout({
  isOpen,
  anchorRef,
  title,
  children,
  panelClassName = '',
  onMouseEnter,
  onMouseLeave,
}: NavSideFlyoutProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState<FlyoutLayout | null>(null);

  useLayoutEffect(() => {
    if (!isOpen || !anchorRef.current) {
      setLayout(null);
      return;
    }

    const updatePlacement = () => {
      if (!anchorRef.current) return;

      const anchor = anchorRef.current.getBoundingClientRect();
      const panelWidth = panelRef.current?.offsetWidth ?? 280;
      const panelHeight = panelRef.current?.offsetHeight ?? 360;
      const margin = 12;
      const overlap = 16;

      const viewportWidth = document.documentElement.clientWidth;
      const opensLeft = anchor.right + panelWidth + margin > viewportWidth;
      const rawLeft = opensLeft ? anchor.left - panelWidth + overlap : anchor.right - overlap;
      const panelLeft = Math.min(Math.max(margin, rawLeft), viewportWidth - panelWidth - margin);
      let panelTop = anchor.top;

      if (panelTop + panelHeight + margin > window.innerHeight) {
        panelTop = Math.max(margin, window.innerHeight - panelHeight - margin);
      }

      let bridgeLeft: number;
      let bridgeWidth: number;

      if (opensLeft) {
        bridgeLeft = panelLeft + panelWidth - overlap;
        bridgeWidth = Math.max(36, anchor.left - bridgeLeft + overlap);
      } else {
        bridgeLeft = anchor.right - overlap;
        bridgeWidth = Math.max(36, panelLeft - bridgeLeft + overlap);
      }

      const panelBottom = panelTop + panelHeight;
      const bridgeTop = Math.min(anchor.top, panelTop);
      const bridgeBottom = Math.max(anchor.bottom, panelBottom);
      const bridgeHeight = Math.max(anchor.height, bridgeBottom - bridgeTop);

      setLayout({
        panelTop,
        panelLeft,
        opensLeft,
        bridgeTop,
        bridgeLeft,
        bridgeWidth,
        bridgeHeight,
      });
    };

    updatePlacement();

    window.addEventListener('resize', updatePlacement);
    window.addEventListener('scroll', updatePlacement, true);
    return () => {
      window.removeEventListener('resize', updatePlacement);
      window.removeEventListener('scroll', updatePlacement, true);
    };
  }, [isOpen, anchorRef, children]);

  if (!isOpen || typeof document === 'undefined') return null;

  const anchorRect = anchorRef.current?.getBoundingClientRect() ?? null;
  const panelTop = layout?.panelTop ?? anchorRect?.top ?? 0;
  const panelLeft = layout?.panelLeft ?? (anchorRect ? anchorRect.right - 16 : 0);

  const bridgeTop = layout?.bridgeTop ?? anchorRect?.top ?? 0;
  const bridgeLeft = layout?.bridgeLeft ?? (anchorRect ? anchorRect.right - 16 : 0);
  const bridgeWidth = layout?.bridgeWidth ?? 36;
  const bridgeHeight = layout?.bridgeHeight ?? anchorRect?.height ?? 40;

  return createPortal(
    <div data-nav-side-flyout className="contents">
      {anchorRect && (
        <div
          className="fixed z-[299]"
          style={{
            top: bridgeTop,
            left: bridgeLeft,
            width: bridgeWidth,
            height: bridgeHeight,
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          aria-hidden="true"
        />
      )}
      <div
        ref={panelRef}
        data-nav-side-flyout
        className={`fixed z-[300] min-w-[220px] sm:min-w-[250px] max-w-[min(320px,calc(100vw-1.5rem))] max-h-[min(70vh,420px)] overflow-y-auto overscroll-contain bg-white border border-slate-150 rounded-xl shadow-2xl py-2 ${panelClassName}`}
        style={{ top: panelTop, left: panelLeft }}
        role="menu"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <p className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-brand-gold border-b border-brand-sectiongray/60 mb-1 sticky top-0 bg-white z-[1]">
          {title}
        </p>
        {children}
      </div>
    </div>,
    document.body,
  );
}
