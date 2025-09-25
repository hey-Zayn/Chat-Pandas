'use client'; // Required for GSAP animations

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HaloHeroSection = () => {
  const containerRef = useRef();
  const haloRef = useRef();
  const contentRef = useRef();
  const textRef = useRef();

  useGSAP(() => {
    // Register ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Initial setup
    gsap.set([haloRef.current, contentRef.current], { opacity: 0, y: 20 });
    gsap.set(textRef.current, { opacity: 0, y: 20 });

    // Animation timeline with ScrollTrigger
    const tl = gsap.timeline({
      defaults: { ease: 'bounce.out'},
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%', 
        end: 'top 20%',   
       
        toggleActions: 'play none none none' 
      }
    });

    // Halo animation
    tl.to(haloRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    })
    // Text reveal animation
    .to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.5')
    // Content fade in
    .to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
    }, '-=0.3');
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#181818]"
    >
      {/* Large background text */}
      <h1 
        ref={haloRef}
        className="absolute text-[20vw] md:text-[15vw] lg:text-[20vw] font-bold tracking-tighter text-white/5 z-0 pointer-events-none select-none"
      >
        FORWORD
      </h1>
      
      {/* Centered content */}
      <div 
        ref={contentRef}
        className="relative z-10 text-center flex flex-col justify-center items-center px-4 max-w-4xl mx-auto"
      >
        <div className="w-25 h-25 rounded-full p-[2px] bg-gradient-to-r from-[#5209DE] to-[#9719FF] mb-6 relative">
          <img 
            src="/images/sirAwais.jpg" 
            alt="CEO" 
            className="w-full h-full rounded-full object-cover relative z-10"
            loading="lazy"
          />
          <div className="absolute inset-0 z-0">
            <div 
              className="absolute inset-0 rounded-full border-4 border-[#5209DE]/30 animate-[radar-wave_2s_linear_infinite]"
              style={{ willChange: 'transform, opacity' }}
            ></div>
            <div 
              className="absolute inset-0 rounded-full border-4 border-[#5209DE]/30 animate-[radar-wave_2s_0.66s_linear_infinite]"
              style={{ willChange: 'transform, opacity' }}
            ></div>
            <div 
              className="absolute inset-0 rounded-full border-4 border-[#5209DE]/30 animate-[radar-wave_2s_1.33s_linear_infinite]"
              style={{ willChange: 'transform, opacity' }}
            ></div>
          </div>
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
          @media (prefers-reduced-motion: reduce) {
            .animate-radar-wave {
              animation: none;
            }
          }
        `}</style>
        <p ref={textRef} className="text-lg md:text-xl lg:text-4xl font-medium text-white">
          We're Forword Sols. We specialize in cutting-edge web development, mobile app solutions, and digital transformation services to propel businesses forward.
        </p>
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-[#5209DE] to-[#8A2BE2] text-white font-medium rounded-full hover:shadow-[0_0_20px_5px_rgba(82,9,222,0.3)] transition-all duration-300 transform hover:scale-105">
          View More →
        </button>
      </div>
    </section>
  );
};

export default HaloHeroSection;