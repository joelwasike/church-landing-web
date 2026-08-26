import { useEffect, useRef } from "react";

/**
 * Returns a ref to attach to an element; translates it vertically by a
 * fraction of however far the page has scrolled past its own top offset,
 * for a subtle depth effect on hero imagery. rAF-throttled, passive
 * listener, cleans up on unmount.
 */
export function useParallax<T extends HTMLElement>(strength = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const rect = node.getBoundingClientRect();
      const offset = rect.top * strength;
      node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [strength]);

  return ref;
}
