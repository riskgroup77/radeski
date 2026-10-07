import { useLayoutEffect, useRef, useState } from 'react';

/** Safety buffer so sub-pixel rounding never pushes the last item into the CTA. */
const FIT_BUFFER_PX = 4;

/**
 * Priority+ navigation: shows as many nav items as fit the container and moves the rest
 * into a "More" menu. Widths come from an invisible measurement row that renders every
 * trigger (plus the More trigger, marked with `data-nav-more`) with the real styles, so
 * the result follows font loading, locale changes and any viewport width.
 */
export function usePriorityNav(itemCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(itemCount);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const compute = () => {
      const available = container.clientWidth - FIT_BUFFER_PX;
      // Container is display:none below the desktop breakpoint — keep the last value.
      if (available <= 0) return;

      const nodes = Array.from(measure.children) as HTMLElement[];
      const moreNode = nodes.find((node) => node.dataset.navMore !== undefined);
      const itemNodes = nodes.filter((node) => node !== moreNode);
      if (itemNodes.length === 0) return;

      const originLeft = measure.getBoundingClientRect().left;
      const rightEdges = itemNodes.map((node) => node.getBoundingClientRect().right - originLeft);
      const gap = parseFloat(getComputedStyle(measure).columnGap) || 0;
      const moreWidth = moreNode?.getBoundingClientRect().width ?? 0;

      if (rightEdges[rightEdges.length - 1] <= available) {
        setVisibleCount(itemNodes.length);
        return;
      }

      let count = 0;
      for (const right of rightEdges) {
        if (right + gap + moreWidth > available) break;
        count += 1;
      }
      setVisibleCount(count);
    };

    compute();
    const observer = new ResizeObserver(compute);
    observer.observe(container);
    observer.observe(measure);
    return () => observer.disconnect();
  }, [itemCount]);

  return { containerRef, measureRef, visibleCount };
}
