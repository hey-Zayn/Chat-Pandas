"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const section3Ref = useRef(null);
  const textRefs = useRef({
    text1: null,
    text2: null,
  });

  const desktopCardRefs = useRef([]);
  const mobileCardRefs = useRef([]);
  const scrollTriggersRef = useRef([]);

  useGSAP(() => {
    // Kill existing ScrollTriggers
    scrollTriggersRef.current.forEach((st) => st.kill());
    scrollTriggersRef.current = [];

    // Animate header text
    const textTl = gsap.timeline({
      scrollTrigger: {
        trigger: section3Ref.current,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none none none",
        once: true,
      },
    });

    textTl.from([textRefs.current.text1, textRefs.current.text2], {
      y: -50,
      opacity: 0,
      duration: 0.4,
      stagger: 0.15,
      ease: "power2.out",
      clearProps: "transform",
    });

    // Animate desktop cards
    const desktopRotations = [-15, 15];
    desktopCardRefs.current.forEach((card, index) => {
      if (!card) return;

      const rotation = desktopRotations[index % desktopRotations.length];
      const st = ScrollTrigger.create({
        trigger: card,
        start: "top 60%",
        scrub: 1.5,
        toggleActions: "play none none reverse",
        animation: gsap.fromTo(
          card,
          {
            rotationX: -25,
            rotationY: -10,
            rotationZ: rotation,
            translateY: 100,
          },
          {
            rotationX: 0,
            rotationY: 0,
            rotationZ: -rotation,
            translateY: 50,
            duration: 0.8,
            ease: "power2.out",
          }
        ),
      });
      scrollTriggersRef.current.push(st);
    });

    // Animate mobile cards
    mobileCardRefs.current.forEach((card, index) => {
      if (!card) return;

      const isEven = index % 2 === 0;
      const st = ScrollTrigger.create({
        trigger: card,
        start: "top 70%",
        toggleActions: "play none none reverse",
        once: true,
        animation: gsap.fromTo(
          card,
          {
            x: isEven ? -150 : 150,
            y: 80,
            opacity: 0,
            scale: 0.7,
            rotation: isEven ? -20 : 20,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.2,
            ease: "back.out(1.5)",
          }
        ),
      });
      scrollTriggersRef.current.push(st);
    });

    return () => {
      scrollTriggersRef.current.forEach((st) => st.kill());
      scrollTriggersRef.current = [];
    };
  }, []);

  return (
    <>
      <div
        ref={section3Ref}
        className="h-full w-full py-[100px] px-[70px] max-sm:hidden lg:block"
      >
        <div className="px-2">
          <div className="sticky top-[40%] flex flex-col justify-center z-20">
            <h2
              ref={(el) => (textRefs.current.text1 = el)}
              className="text-center text-6xl"
            >
              BPO OUTSOURCING?
            </h2>
            <h2
              ref={(el) => (textRefs.current.text2 = el)}
              className="text-center text-6xl font-bold uppercase"
            >
              Let's tackle your challenges
            </h2>
          </div>

          {[1, 2, 3, 4, 5, 6].map((num, index) => (
            <div
              key={`card-${num}`}
              ref={(el) => (desktopCardRefs.current[index] = el)}
              id={`card${num}`}
              className={`w-full flex ${
                index % 2 === 0 ? "justify-end" : "justify-start"
              } items-center ${
                index === 0
                  ? "mt-60"
                  : index % 2 === 0
                  ? "mt-30"
                  : ""
              } transform rotate-x-0 rotate-y-0 ${
                index % 2 === 0 ? "rotate-z-25" : "-rotate-z-15"
              } ${index === 5 ? "mb-40" : ""}`}
            >
              <div className="card w-80">
                <img
                  src={`/images/card${num}.svg`}
                  alt={`BPO Challenge Card ${num}`}
                  className="w-full h-auto"
                  loading={index < 2 ? "eager" : "lazy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full h-full overflow-hidden lg:hidden md:hidden max-sm:block">
        <div className="h-full w-full py-4 px-4 overflow-hidden">
          <div className="flex flex-col justify-center gap-6">
            <div className="w-full flex flex-col justify-center mb-8">
              <h2 className="text-center text-3xl">BPO OUTSOURCING?</h2>
              <h2 className="text-center text-3xl font-bold uppercase">
                Let's tackle your <br /> challenges
              </h2>
            </div>

            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <div
                key={`mobile-card-${num}`}
                ref={(el) => (mobileCardRefs.current[index] = el)}
                id={index === 0 ? "mobileCard1section3" : undefined}
                className="w-full flex justify-center items-center"
              >
                <div className="card w-80">
                  <img
                    src={`/images/card${num}.svg`}
                    alt="Portfolio Projects"
                    className="w-full h-auto"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
