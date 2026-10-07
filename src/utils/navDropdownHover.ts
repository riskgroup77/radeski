import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from 'react';

export const NAV_SIDE_FLYOUT_SELECTOR = '[data-nav-side-flyout]';

export function isPointerOverNavZone(
  x: number,
  y: number,
  root: HTMLElement | null,
  extraSelector = NAV_SIDE_FLYOUT_SELECTOR,
): boolean {
  if (typeof document === 'undefined') return false;

  const target = document.elementFromPoint(x, y);
  if (!target) return false;
  if (root?.contains(target)) return true;
  if (extraSelector && target.closest(extraSelector)) return true;
  return false;
}

/** Debounced navbar dropdown hover — safe with portaled side flyouts. */
export function useNavDropdownHoverZone(
  onOpen: () => void,
  onClose: () => void,
  rootRef: RefObject<HTMLElement | null>,
  active: boolean,
  delayMs = 560,
) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const onOpenRef = useRef(onOpen);
  const onCloseRef = useRef(onClose);

  onOpenRef.current = onOpen;
  onCloseRef.current = onClose;

  const cancelClose = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const rememberPointer = useCallback((x: number, y: number) => {
    pointerRef.current = { x, y };
  }, []);

  const keepOpen = useCallback(() => {
    cancelClose();
    onOpenRef.current();
  }, [cancelClose]);

  const scheduleClose = useCallback(
    (event?: React.MouseEvent) => {
      if (event) {
        rememberPointer(event.clientX, event.clientY);
      }
      cancelClose();
      timerRef.current = setTimeout(() => {
        const { x, y } = pointerRef.current;
        if (isPointerOverNavZone(x, y, rootRef.current)) return;
        onCloseRef.current();
      }, delayMs);
    },
    [cancelClose, delayMs, rememberPointer, rootRef],
  );

  useEffect(() => () => cancelClose(), [cancelClose]);

  useEffect(() => {
    if (!active) return;

    const trackPointer = (event: MouseEvent) => {
      rememberPointer(event.clientX, event.clientY);
    };

    window.addEventListener('mousemove', trackPointer, { passive: true });
    return () => window.removeEventListener('mousemove', trackPointer);
  }, [active, rememberPointer]);

  return useMemo(
    () => ({
      keepOpen,
      scheduleClose,
      cancelClose,
      rememberPointer,
    }),
    [keepOpen, scheduleClose, cancelClose, rememberPointer],
  );
}

/**
 * Single side-flyout controller — prevents row A's close timer from killing row B's flyout.
 */
export function useNavSideFlyoutController(
  menuRef: RefObject<HTMLElement | null>,
  setActiveId: Dispatch<SetStateAction<string | null>>,
  delayMs = 300,
) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  const cancelClose = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const enter = useCallback(
    (id: string) => {
      cancelClose();
      setActiveId(id);
    },
    [cancelClose, setActiveId],
  );

  const leave = useCallback(
    (id: string, event?: React.MouseEvent) => {
      if (event) {
        pointerRef.current = { x: event.clientX, y: event.clientY };
      }
      cancelClose();
      timerRef.current = setTimeout(() => {
        setActiveId((current) => {
          if (current !== id) return current;
          const { x, y } = pointerRef.current;
          if (isPointerOverNavZone(x, y, menuRef.current)) return current;
          return null;
        });
      }, delayMs);
    },
    [cancelClose, delayMs, menuRef, setActiveId],
  );

  useEffect(() => () => cancelClose(), [cancelClose]);

  return useMemo(
    () => ({
      enter,
      leave,
      cancelClose,
    }),
    [enter, leave, cancelClose],
  );
}
