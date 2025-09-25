"use client";

import React, { useRef } from "react";

import BusinessOperations from "@/components/Business-operations";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from "@gsap/react";
import Link from "next/link";

const page = () => {
  const sectionRef = useRef(null);
  const mainHeading = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(mainHeading.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: mainHeading.current,
          start: "top 60%", // More precise start point
          toggleActions: "play none none none", // More interactive toggle actions
        },
      });
    },
    { scope: sectionRef }
  );

  const Staff = [
    {
      name: "Awais Sheikh",
      position: "CEO",
      img: "/images/sirAwais.jpg",
      link: "meet-out-leader",
    },
    {
      name: "Ali Ashraf",
      position: "COO",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/662b93b7df3d9ecf75ac360d_Group%20435.avif",
      link: "#",
    },
    {
      name: "Kashif Khan",
      position: "CTO",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/664dbb6404ee49eeadbc40fb_Group%2039938.avif",
      link: "#",
    },
    {
      name: "Hassan Iqbal",
      position: "President Finace",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/66b61d3c906a507514e61f7b_Rectangle%203101.avif",
      link: "#",
    },
    {
      name: "Wasil Faiz",
      position: "CFO",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/66b61d31588faa87bf9b6994_Rectangle%203099.avif",
      link: "#",
    },
    {
      name: "Daroshaam Shehzad",
      position: "Head of Audit and Project Management",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/664dbb3455b759a6b1b6a7ac_Group%2039939.avif",
      link: "#",
    },
    {
      name: "Waleed Shah",
      position: "Head of Growth & Engagment",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/662b94c7d580be985accb2dc_Group%20438%20(2).avif",
      link: "#",
    },
    {
      name: "Ayesha Fayyaz",
      position: "Onboarding & Implementation",
      img: "https://cdn.prod.website-files.com/6628a435985c172f7c75ff88/662b94e17e5e98b8da5168b2_Group%20439.avif",
      link: "#",
    },
  ];

  return (
    <>
      <div ref={sectionRef} className="w-full h-full bg-[#191919]">
        {/* --------------------------------  { Hero }  ------------------------------------------ */}
        <div className="w-full h-full">
          <div
            id="seo-hero"
            className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
          >
            <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
            <h1
              ref={mainHeading}
              className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
            >
              Our Team
            </h1>
          </div>
        </div>

        <section className="w-full px-10 flex flex-wrap gap-10">
        
          {Staff?.map((card, index) => (
            <Link href={card.link} key={index}>
              <div className="p-0 w-[280px]">
                <div className={`bg-transparent`}>
                  <div className="w-full ">
                    <div className="w-full h-full object-cover border-2 border-black/50 rounded-xl overflow-hidden">
                      <img
                        src={card.img}
                        alt="team"
                        className="w-full"
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="text-2xl font-bold text-white">
                        {card.name}
                      </h2>
                      <p className="text-base font-medium text-white/90">{card.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <BusinessOperations />
      </div>
    </>
  );
};

export default page;
