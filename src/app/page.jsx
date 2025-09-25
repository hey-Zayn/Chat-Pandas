"use client";

import Section6 from "@/components/Section6";
import { useEffect, useCallback, lazy, Suspense } from "react";

// Define breakpoints as constants for maintainability
const BREAKPOINTS = [640, 1024];

// Lazy load all components
const Hero = lazy(() => import("@/components/Hero"));
const PandaScroll = lazy(() => import("@/components/PangaScroll"));
const Section2 = lazy(() => import("@/components/Section2"));
const Section3 = lazy(() => import("@/components/Section3"));
const Section7 = lazy(() => import("@/components/Section7"));
const Section8 = lazy(() => import("@/components/Section8"));
const Section9_Form = lazy(() => import("@/components/Section9_Form"));

const ClientsSlider = lazy(() => import("@/components/ClientsSlider"));
const Section3Dnew = lazy(() => import("@/components/Section3Dnew"));
const AboutHome = lazy(() => import("@/components/AboutHome"));

// Loading fallback UI
const LoadingPlaceholder = () => (
  <div className="min-h-[50vh] bg-gray-100 animate-pulse" />
);

// Custom hook to reload page on breakpoint cross
function useScreenSizeReload() {
  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    let previousWidth = window.innerWidth;
    let rafId = null;

    const handleResize = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const currentWidth = window.innerWidth;
        const crossedBreakpoint = BREAKPOINTS.some(
          (bp) =>
            (previousWidth < bp && currentWidth >= bp) ||
            (previousWidth >= bp && currentWidth < bp)
        );

        if (crossedBreakpoint) {
          window.location.reload();
        }

        previousWidth = currentWidth;
        rafId = null;
      });
    };

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedResize);

    return () => {
      window.removeEventListener("resize", debouncedResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}

export default function Home() {
  useScreenSizeReload();

  return (
    <>
      <Suspense fallback={<LoadingPlaceholder />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Section2 />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Section3 />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Section3Dnew />
      </Suspense>

     
      <Section6 />
        <Section7 />
     
      <Suspense fallback={<LoadingPlaceholder />}>
        <ClientsSlider />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <AboutHome />
      </Suspense>

      {/* Eror */}

      <Suspense fallback={<LoadingPlaceholder />}>
        <Section8 />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <Section9_Form />
      </Suspense>

      <Suspense fallback={<LoadingPlaceholder />}>
        <PandaScroll />
      </Suspense>
    </>
  );
}
