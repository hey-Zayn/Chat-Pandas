'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

// Lazy load the image component
const LazyImage = dynamic(() => import('next/image'), { ssr: false });

const AboutHome = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    
    const handleChange = (e) => {
      setIsReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Large background text - lazy render if in viewport */}
      <h1 
        className="absolute text-[20vw] md:text-[15vw] lg:text-[20vw] font-bold tracking-tighter text-black/5 z-0 pointer-events-none select-none"
        aria-hidden="true"
      >
        FORWORD
      </h1>
      
      {/* Centered content */}
      <div className="relative z-10 text-center flex flex-col justify-center items-center px-4 max-w-4xl mx-auto">
        <div className="w-25 h-25 rounded-full p-[2px] bg-gradient-to-r from-[#5209DE] to-[#9719FF] mb-6 relative">
          <LazyImage
            src="/images/sirAwais.jpg"
            alt="CEO"
            width={100}
            height={100}
            className="w-full h-full rounded-full object-cover relative z-10"
            loading="lazy"
            quality={85}
            priority={false}
          />
          {!isReducedMotion && (
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 rounded-full border-4 border-[#5209DE]/30 animate-[radar-wave_2s_linear_infinite]"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#5209DE]/30 animate-[radar-wave_2s_0.66s_linear_infinite]"></div>
              <div className="absolute inset-0 rounded-full border-4 border-[#5209DE]/30 animate-[radar-wave_2s_1.33s_linear_infinite]"></div>
            </div>
          )}
        </div>
        
        <style jsx>{`
          @keyframes radar-wave {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              transform: scale(1.5);
              opacity: 0;
            }
          }
        `}</style>
        
        <p className="text-lg md:text-xl lg:text-4xl font-medium text-black">
          We're Forword Sols. We specialize in cutting-edge web development, mobile app solutions, and digital transformation services to propel businesses forward.
        </p>
        
        <button 
          className="mt-8 px-8 py-3 bg-gradient-to-r from-[#5209DE] to-[#8A2BE2] text-white font-medium rounded-full hover:shadow-[0_0_20px_5px_rgba(82,9,222,0.3)] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5209DE] focus:ring-offset-2"
          aria-label="View more about Forword Sols"
        >
          View More →
        </button>
      </div>
    </section>
  );
};

export default React.memo(AboutHome);