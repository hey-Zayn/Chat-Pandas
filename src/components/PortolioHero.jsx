"use client";
import React, { memo } from "react";
import dynamic from 'next/dynamic';

// Dynamically import SplineModel with no SSR
const SplineModel = dynamic(() => import("./SplineModel"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-white/70">
      Loading 3D Model...
    </div>
  )
});

// Memoize text components for better performance
const TopText = memo(() => (
  <div className="absolute top-10 md:top-20 lg:top-30 right-5 md:right-10 lg:right-20 flex flex-col">
    <div className="overflow-hidden">
      <h3 className="text-white text-left uppercase text-xl sm:text-2xl md:text-3xl leading-none">
        Redefining CX
      </h3>
    </div>
    <div className="overflow-hidden">
      <h3 className="text-white uppercase text-xl sm:text-2xl md:text-3xl leading-none">
        standards through our
      </h3>
    </div>
    <div className="overflow-hidden">
      <h3 className="text-white uppercase font-extrabold text-xl sm:text-2xl md:text-3xl leading-none">
        Top-Tier BPO compANY
      </h3>
    </div>
  </div>
));

const BottomText = memo(() => (
  <div className="absolute bottom-10 md:bottom-20 left-5 md:left-10 lg:left-20 flex flex-col z-10">
    <div className="overflow-hidden">
      <h3 className="text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none text-right ml-10 sm:ml-15 md:ml-20">
        Building
      </h3>
    </div>
    <div className="overflow-hidden">
      <h3 className="text-white uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-none">
        Meaningful
      </h3>
    </div>
    <div className="overflow-hidden">
      <h3 className="text-white uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none text-right ml-10 sm:ml-15 md:ml-20">
        Connections
      </h3>
    </div>
  </div>
));

const PortfolioHero = memo(() => {
  return (
    <div className="relative w-full h-screen bg-black">
      <TopText />
      <BottomText />
      
      {/* 3D Model - only loaded on larger screens */}
      <div className="absolute inset-0 z-0 max-sm:hidden">
        <SplineModel />
      </div>
    </div>
  );
});

export default PortfolioHero;
