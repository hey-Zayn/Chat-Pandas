"use client";


import React, { lazy, Suspense } from "react";

// Lazy load components
const BusinessOperations = lazy(() => import("@/components/Business-operations"));
const ServiceForm = lazy(() => import("@/components/ServiceForm"));
const ProjectFilterComponent = lazy(() => import("@/components/ProjectFilterComponent"));
const PortfolioHero = lazy(() => import("@/components/PortolioHero"));
const HaloHeroSection = lazy(() => import("@/components/HaloHeroSection"));
const InteractiveTimeline = lazy(() => import("@/components/InteractiveTimeline"));
const ClientsSlider = lazy(() => import("@/components/ClientsSlider"));

const Page = () => {
  return (
    <div className="w-full h-full bg-[#191919]">
      {/* Wrap each lazy-loaded component with Suspense and fallback */}
      <Suspense fallback={<div className="text-white text-center py-10">Loading hero...</div>}>
        <PortfolioHero />
      </Suspense>


      <Suspense fallback={<div className="text-white text-center py-10">Loading timeline...</div>}>
        <InteractiveTimeline />
      </Suspense>

      <section className="w-full h-full bg-black">
        <Suspense fallback={<div className="text-white text-center py-10">Loading projects...</div>}>
          <ProjectFilterComponent />
        </Suspense>
      </section>


       
      <Suspense fallback={<div className="text-white text-center py-10">Loading clients...</div>}>
        <ClientsSlider />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center py-10">Loading halo section...</div>}>
        <HaloHeroSection />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center py-10">Loading service form...</div>}>
        <ServiceForm />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center py-10">Loading business operations...</div>}>
        <BusinessOperations />
      </Suspense>
    </div>
  );
};

export default Page;
