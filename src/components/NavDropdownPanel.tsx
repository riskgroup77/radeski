import { useLayoutEffect, useRef, type ReactNode } from 'react';

const VIEWPORT_MARGIN_PX = 12;

interface NavDropdownPanelProps {
  align?: 'left' | 'right';
  className?: string;
  children: ReactNode;
}

/**
 * Absolute dropdown under a nav trigger that nudges itself horizontally so it never
 * leaves the viewport — nav items move around as the priority+ nav adapts to width.
 */
export default function NavDropdownPanel({ align = 'left', className = '', children }: NavDropdownPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shiftRef = useRef(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const baseLeft = rect.left - shiftRef.current;
      const viewportWidth = document.documentElement.clientWidth;
      let shift = 0;
      if (baseLeft + rect.width > viewportWidth - VIEWPORT_MARGIN_PX) {
        shift = viewportWidth - VIEWPORT_MARGIN_PX - (baseLeft + rect.width);
      }
      if (baseLeft + shift < VIEWPORT_MARGIN_PX) {
        shift = VIEWPORT_MARGIN_PX - baseLeft;
      }
      shiftRef.current = shift;
      el.style.translate = shift ? `${shift}px 0` : '';
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div
      ref={ref}
      className={`absolute top-full z-[200] pt-2 ${align === 'right' ? 'right-0' : 'left-0'} ${className}`}
    >
      {children}
    </div>
  );
}
