
"use client";
import React, { useRef, useCallback, useEffect, useMemo } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Section7 = () => {
  // Refs
  const section7Ref = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);
  const mobileCardRefs = useRef([]);
  const scrollTriggersRef = useRef([]);

  // Memoized constants
  const rotations = useMemo(() => [-15, 15, -15, 15, -15, 15], []);
  const cardCount = 6;

  // Optimized mobile animation creation
  const createMobileAnimationS7 = useCallback((mobileCardRef, isEven, index) => {
    if (!mobileCardRef) return null;

    const tl = gsap.timeline({
      defaults: {
        duration: 0.6,
        ease: "power2.out",
      },
    });

    const st = ScrollTrigger.create({
      trigger: mobileCardRef,
      start: "top 90%",
      toggleActions: "play none none none",
      once: true,
      animation: tl.fromTo(
        mobileCardRef,
        {
          x: isEven ? -80 : 80,
          y: 30,
          opacity: 0,
          scale: 0.9,
          rotation: isEven ? -15 : 15, // Added rotation for mobile
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0, // Added rotation reset for mobile
          delay: index * 0.05,
        }
      ),
      fastScrollEnd: true,
    });

    scrollTriggersRef.current.push(st);
    return st;
  }, []);

  // Optimized ref initialization
  const initRefs = useCallback((el, index, refArray) => {
    if (el && !refArray.current[index]) {
      refArray.current[index] = el;
    }
  }, []);

  // Main animation setup
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Clear existing ScrollTriggers
    scrollTriggersRef.current.forEach((st) => st.kill());
    scrollTriggersRef.current = [];

    if (window.innerWidth >= 768) {
      // Desktop animations
      const screenWidth = window.innerWidth;
      const baseX = Math.min(screenWidth * 0.75, 1200);

      const masterTl = gsap.timeline({
        defaults: {
          duration: 2,
          ease: "power1.inOut",
        },
      });

      const masterST = ScrollTrigger.create({
        trigger: section7Ref.current,
        start: "top top",
        end: "+=200%",
        scrub: 0.8,
        animation: masterTl,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        refreshPriority: 1,
      });

      scrollTriggersRef.current.push(masterST);

      // Text animation
      masterTl.from(
        textRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 3,
        },
        0
      );

      // Card animations
      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;

        masterTl.addLabel(`card${index}Enter`, 2 + index * 3);

        masterTl.from(
          cardRef,
          {
            rotationZ: rotations[index],
            rotationY: rotations[index], // Added Y rotation
            rotationX: rotations[index], // Added X rotation
            x: baseX,
            y: -150,
            opacity: 0,
          },
          `card${index}Enter`
        );
      });

      // Exit animations
      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;

        masterTl.addLabel(`card${index}Exit`, 2 + cardCount * 3 + 8 + index * 3);

        masterTl.to(
          cardRef,
          {
            rotationZ: rotations[index] * -1,
            rotationY: rotations[index] * -3, // Added Y rotation
            rotationX: rotations[index] * -1, // Added X rotation
            x: -baseX,
            y: 150,
            opacity: 0,
          },
          `card${index}Exit`
        );
      });
    } else {
      // Mobile animations
      mobileCardRefs.current.forEach((ref, index) => {
        if (ref) {
          createMobileAnimationS7(ref, index % 2 === 0, index);
        }
      });
    }

    // Cleanup
    return () => {
      scrollTriggersRef.current.forEach((st) => st.kill());
      scrollTriggersRef.current = [];
    };
  }, [createMobileAnimationS7, rotations, cardCount]);

  // Image preloading
  useEffect(() => {
    [1, 2, 3, 4, 5, 6].forEach(num => {
      const img = new Image();
      img.src = `/images/card${num}.svg`;
    });
  }, []);

  return (
    <>
      <div
        ref={section7Ref}
        className="w-full lg:h-[120vh] md:h-[70vh] py-20 max-sm:hidden overflow-hidden bg-white"
      >
        <div className="w-full">
          <h1
            ref={textRef}
            className="text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-center uppercase font-bold text-black px-4"
          >
            Our Services & Certifications
          </h1>
        </div>

        <div className="w-full px-20 mt-20">
          <div className="flex justify-start items-center mt-30">
            {Array.from({ length: cardCount }).map((_, index) => (
              <div
                key={index}
                ref={(el) => initRefs(el, index, cardRefs)}
                className={`card w-90 z-[${index + 1}] ${index > 0 ? '-ml-20' : ''}`}
              >
                <img
                  src={`/images/card${index + 1}.svg`}
                  alt={`BPO Challenge Card ${index + 1}`}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full h-full overflow-hidden lg:hidden md:hidden max-sm:block bg-white">
        <div className="h-full w-full py-8 px-10 overflow-hidden">
          <div className="flex flex-col justify-center gap-6">
            <div className="w-full flex flex-col justify-center mb-8">
              <h2 className="text-center text-3xl font-bold text-black">SERVICES & CERTIFICATIONS</h2>
            </div>
            <div className="w-full">
              <div className="flex flex-col justify-center items-center gap-6">
                {Array.from({ length: cardCount }).map((_, index) => (
                  <div
                    key={index}
                    ref={(el) => initRefs(el, index, mobileCardRefs)}
                    className="card w-90"
                  >
                    <img
                      src={`/images/card${index + 1}.svg`}
                      alt={`BPO Challenge Card ${index + 1}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section7