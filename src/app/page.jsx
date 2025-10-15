'use client';



import AboutHome from '@/components/AboutHome';
import ClientsSlider from '@/components/ClientsSlider';
import Hero from '@/components/Hero';
import PandaScroll from '@/components/PangaScroll';
import Section2 from '@/components/Section2';
import Section3 from '@/components/Section3';
import Section3Dnew from '@/components/Section3Dnew'
import Section6 from '@/components/Section6';
import Section7 from '@/components/Section7';
import Section8 from '@/components/Section8';
import Section9_Form from '@/components/Section9_Form';
import { useEffect, useCallback, lazy, Suspense } from 'react';

// Define breakpoints as constants for maintainability
const BREAKPOINTS = [640, 1024];

// Lazy load all components


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
    if (typeof window === 'undefined') return;

    let previousWidth = window.innerWidth;
    let rafId = null;

    const handleResize = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const currentWidth = window.innerWidth;
        const crossedBreakpoint = BREAKPOINTS.some(bp =>
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
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);
}

export default function Home() {
  useScreenSizeReload();

  return (
    <>

      <Hero />


      <Section2 />



      <Section3 />



      <Section3Dnew />




      <Section7 />





      <ClientsSlider />

      {/* Eror */}

      <Section6 />


      <AboutHome />



      <Section8 />



      <Section9_Form />



      <PandaScroll />

    </>
  );
}