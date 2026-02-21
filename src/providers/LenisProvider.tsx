import { createContext, useEffect, useRef, ReactNode } from "react";
import Lenis from "@studio-freight/lenis";
import { useLocation } from "react-router-dom";

// ─── Context (exported for useLenis hook) ───────────────────────────────────
export const LenisContext = createContext<Lenis | null>(null);

// ─── Provider ──────────────────────────────────────────────────────────────
interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number>(0);
  const location = useLocation();

  useEffect(() => {
    // Init Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    // Expose on window for debugging (optional)
    // (window as any).__lenis__ = lenis;

    // RAF animation loop
    function raf(time: number) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }
    rafRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Scroll back to top + stop Lenis momentum on every route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return <LenisContext.Provider value={lenisRef.current}>{children}</LenisContext.Provider>;
}
