"use client";

import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scene = lazy(() => import("./Scene"));

const ContentSection = ({ align = "center", topPosition = "50%" }) => {
  const alignment =
    align === "left"
      ? "text-left"
      : align === "right"
      ? "text-right"
      : "text-center";

  return (
    <div
      className={`absolute w-full z-10 px-10 pt-30 ${alignment}`}
      style={{ top: topPosition }}
    >
      <h1 className="text-8xl text-white font-bold leading-tight">
        Bridging <br />
        Cultural Gaps
      </h1>
      <h3 className="text-white text-2xl mt-4">
        As the top BPO agency, we bridge cultural <br />
        gaps, making every interaction feel native.
      </h3>
    </div>
  );
};

const Section3Dnew = () => {
  const mainRef = useRef(null);
  const sceneRef = useRef(null);
  const modelRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!mainRef.current || !sceneRef.current) return;

    // Wait until section enters viewport to register scroll animation
    const triggerOnce = ScrollTrigger.create({
      trigger: mainRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
              setProgress(self.progress);
            },
            // markers: true, // uncomment to debug
          },
        });

        tl.to(sceneRef.current, { ease: "none", x: "25vw", y: "100vh" })
          .to(sceneRef.current, { ease: "none", x: "-25vw", y: "200vh" })
          .to(sceneRef.current, { ease: "none", x: "0vw", y: "300vh" });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="w-full h-[400vh] overflow-hidden bg-[#30087D] z-10">
      <section className="relative w-full h-screen">
        <ContentSection />
        <div ref={sceneRef} className="w-full h-full">
          <Suspense fallback={<div className="w-full h-full bg-gray-800" />}>
            <Canvas
              style={{ width: "100%", height: "100%" }}
              frameloop="demand"
              camera={{ position: [0, 0, 20], fov: 45 }}
            >
              <Scene progress={progress} modelRef={modelRef} scale={[1, 1, 1]} />
            </Canvas>
          </Suspense>
        </div>
      </section>

      <section className="relative flex justify-center items-center h-screen">
        <ContentSection align="left" topPosition="40%" />
      </section>

      <section className="relative flex justify-center items-center h-screen">
        <ContentSection align="right" topPosition="40%" />
      </section>

      <section className="w-full relative flex justify-center items-center h-[110vh]">
        <ContentSection topPosition="30%" />
      </section>
    </div>
  );
};

export default Section3Dnew;
