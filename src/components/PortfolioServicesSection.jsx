"use client";
import React, { useRef, useCallback, useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const PortfolioServicesSection = () => {
  const section7Ref = useRef(null);
  const textRef = useRef(null);
  const cardRefs = useRef([]);
  const mobileCardRefs = useRef([]);
  const scrollTriggersRef = useRef([]);

  // Memoize the mobile animation creation function
  const createMobileAnimationS7 = useCallback((mobileCardRef, isEven, index) => {
    if (!mobileCardRef) return null;

    const tl = gsap.timeline({
      defaults: {
        duration: 0.8,
        ease: "power2.out",
      },
    });

    const st = ScrollTrigger.create({
      trigger: mobileCardRef,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true, // Only trigger once for better performance
      animation: tl.fromTo(
        mobileCardRef,
        {
          x: isEven ? -100 : 100,
          y: 50,
          opacity: 0,
          scale: 0.8,
        },
        {
          x: 0,
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1, // Stagger effect with minimal delay
        }
      ),
      fastScrollEnd: true,
    });

    scrollTriggersRef.current.push(st);
    return st;
  }, []);

  // Initialize card refs
  const initCardRefs = useCallback((el, index) => {
    if (el && !cardRefs.current[index]) {
      cardRefs.current[index] = el;
    }
  }, []);

  // Initialize mobile card refs
  const initMobileCardRefs = useCallback((el, index) => {
    if (el && !mobileCardRefs.current[index]) {
      mobileCardRefs.current[index] = el;
    }
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Clear any existing ScrollTriggers
    scrollTriggersRef.current.forEach((st) => st.kill());
    scrollTriggersRef.current = [];

    // Only run desktop animations if viewport is large enough
    if (window.innerWidth >= 768) {
      // Calculate base values once
      const screenWidth = window.innerWidth;
      const baseX = screenWidth > 1600 ? 1200 : screenWidth > 1200 ? 1000 : 800;

      // Create a single timeline for better performance
      const masterTl = gsap.timeline();

      // Create ScrollTrigger with optimized settings
      const masterST = ScrollTrigger.create({
        trigger: section7Ref.current,
        start: "top top",
        end: "+=250%", // Reduced scroll distance for better performance
        scrub: 1, // Lower scrub value for better performance
        animation: masterTl,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        fastScrollEnd: true,
        preventOverlaps: true,
        refreshPriority: 1,
      });

      scrollTriggersRef.current.push(masterST);

      // Text animation with optimized settings
      masterTl.from(
        textRef.current,
        {
          opacity: 0,
          y: 30,
          duration: 5,
          ease: "power1.out",
        },
        0
      );

      const rotations = [-15, 15, -15, 15, -15, 15]; // Reduced rotation values

      // Add a shorter delay before first card appears
      masterTl.to({}, { duration: 3 }, 0);

      // Batch card animations for better performance
      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;

        // Add a label for each card entry point with optimized spacing
        masterTl.addLabel(`card${index}Enter`, 3 + index * 4);

        // Animate card entry with optimized settings
        masterTl.from(
          cardRef,
          {
            rotationZ: rotations[index],
            x: baseX,
            opacity: 0,
            duration: 4,
            ease: "power1.inOut",
          },
          `card${index}Enter`
        );
      });

      // Optimized pause in the middle
      masterTl.to({}, { duration: 10 }, 3 + cardRefs.current.length * 4);

      // Exit animations with optimized timing
      cardRefs.current.forEach((cardRef, index) => {
        if (!cardRef) return;

        // Add a label for each card exit point
        masterTl.addLabel(`card${index}Exit`, 3 + cardRefs.current.length * 4 + 10 + index * 4);

        // Animate card exit with optimized settings
        masterTl.to(
          cardRef,
          {
            rotationZ: rotations[index] * -1,
            x: -baseX,
            opacity: 0,
            duration: 4,
            ease: "power1.inOut",
          },
          `card${index}Exit`
        );
      });
    } else {
      // Mobile animations - use batch processing for better performance
      // Mobile animations with staggered entry for better visual appeal
      mobileCardRefs.current.forEach((ref, index) => {
        if (ref) {
          // Alternate animation direction based on card position
          const isEven = index % 2 === 0;
          
          // Create individual animations with optimized parameters
          const tl = gsap.timeline({
            defaults: { duration: 0.7, ease: "power3.out" }
          });
          
          const st = ScrollTrigger.create({
            trigger: ref,
            start: "top 80%",
            toggleActions: "play none none none",
            once: true,
            animation: tl.fromTo(
              ref,
              {
                x: isEven ? -80 : 80,
                y: 30,
                opacity: 0,
                scale: 0.9,
              },
              {
                x: 0,
                y: 0,
                opacity: 1,
                scale: 1,
                delay: index * 0.08, // Reduced delay for faster appearance
              }
            ),
            fastScrollEnd: true,
          });
          
          scrollTriggersRef.current.push(st);
        }
      });
    }

    // Clean up on component unmount
    return () => {
      scrollTriggersRef.current.forEach((st) => st.kill());
      scrollTriggersRef.current = [];
    };
  }, [createMobileAnimationS7]);

  // Clean up all animations on unmount
  useEffect(() => {
    return () => {
      scrollTriggersRef.current.forEach((st) => st.kill());
      scrollTriggersRef.current = [];
    };
  }, []);

  return (
    <>
      <div
        ref={section7Ref}
        className="w-full lg:h-[120vh] md:h-[70vh] py-20 max-sm:hidden overflow-hidden bg-black"
      >
        <div className="w-full">
          <h1
            ref={textRef}
            className="text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-center uppercase font-bold text-white px-4"
          >
            Our Services & Certifications
          </h1>
        </div>

        <div className="w-full px-20 mt-20">
          <div className="flex justify-start items-center mt-30">
            <div 
              ref={(el) => initCardRefs(el, 0)} 
              className="card w-90 z-[1] bg-gradient-to-br from-purple-900 to-indigo-800 rounded-xl shadow-xl p-6 text-white"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3">ISO 9001</h3>
                <p className="text-sm mb-4">Quality Management System certification ensuring consistent quality standards across all our development processes. Our rigorous quality control measures guarantee reliable software solutions.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Process Documentation</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Continuous Improvement</span>
                </div>
                <div className="mt-auto">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Quality Assurance</span>
                </div>
              </div>
            </div>
            <div
              ref={(el) => initCardRefs(el, 1)}
              className="card w-90 z-[2] -ml-20 transform rotate-x-0 rotate-y-0 -rotate-z-10 bg-gradient-to-br from-blue-900 to-cyan-800 rounded-xl shadow-xl p-6 text-white"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3">HIPAA Compliance</h3>
                <p className="text-sm mb-4">Healthcare data protection standards for secure patient information handling. We implement end-to-end encryption, access controls, and audit trails to protect sensitive medical data.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Medical Software</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Patient Portals</span>
                </div>
                <div className="mt-auto">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Healthcare</span>
                </div>
              </div>
            </div>
            <div
              ref={(el) => initCardRefs(el, 2)}
              className="card w-90 z-[3] -ml-20 transform rotate-x-0 rotate-y-0 rotate-z-10 bg-gradient-to-br from-teal-900 to-emerald-800 rounded-xl shadow-xl p-6 text-white"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3">PCI DSS</h3>
                <p className="text-sm mb-4">Payment Card Industry Data Security Standard for secure payment processing. Our e-commerce solutions feature tokenization, secure payment gateways, and comprehensive vulnerability management.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">E-commerce</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Payment Systems</span>
                </div>
                <div className="mt-auto">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Financial Security</span>
                </div>
              </div>
            </div>
            <div
              ref={(el) => initCardRefs(el, 3)}
              className="card w-90 z-[4] -ml-20 bg-gradient-to-br from-red-900 to-rose-800 rounded-xl shadow-xl p-6 text-white"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3">ISO 27001</h3>
                <p className="text-sm mb-4">Information Security Management System certification for data protection. Our comprehensive security framework includes risk assessment, incident response, and regular security audits to safeguard your data.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Enterprise Solutions</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Cloud Security</span>
                </div>
                <div className="mt-auto">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Data Security</span>
                </div>
              </div>
            </div>
            <div
              ref={(el) => initCardRefs(el, 4)}
              className="card w-90 z-[5] -ml-20 transform rotate-x-0 rotate-y-0 rotate-z-10 bg-gradient-to-br from-amber-900 to-yellow-800 rounded-xl shadow-xl p-6 text-white"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3">GDPR Compliance</h3>
                <p className="text-sm mb-4">European data protection regulations for privacy and data security. We implement privacy by design, consent management, and data minimization principles in all our European market solutions.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Consent Management</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">Data Portability</span>
                </div>
                <div className="mt-auto">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Privacy</span>
                </div>
              </div>
            </div>
            <div
              ref={(el) => initCardRefs(el, 5)}
              className="card w-90 z-[6] -ml-20 transform-3d bg-gradient-to-br from-pink-900 to-fuchsia-800 rounded-xl shadow-xl p-6 text-white"
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3">SOC 2 Type II</h3>
                <p className="text-sm mb-4">Service Organization Control certification for security, availability, and confidentiality. Our cloud services and SaaS solutions undergo rigorous auditing to ensure they meet the highest trust standards.</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">SaaS Solutions</span>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">API Services</span>
                </div>
                <div className="mt-auto">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">Trust Services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full h-full overflow-hidden lg:hidden md:hidden max-sm:block bg-black">
        <div className="h-full w-full py-4 px-4 overflow-hidden">
          <div className="flex flex-col justify-center gap-6">
            
            <div className="w-full flex flex-col justify-center mb-8">
              <h2 className="text-center text-3xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white transition-all duration-300">SERVICES & CERTIFICATIONS</h2>
              
            </div>
            {[
              {
                title: "ISO 9001",
                desc: "Quality Management System certification ensuring consistent quality standards across all our development processes. Our rigorous quality control measures guarantee reliable software solutions.",
                tags: ["Process Documentation", "Continuous Improvement"],
                mainTag: "Quality Assurance",
                gradient: "from-purple-900 to-indigo-800"
              },
              {
                title: "HIPAA Compliance",
                desc: "Healthcare data protection standards for secure patient information handling. We implement end-to-end encryption, access controls, and audit trails to protect sensitive medical data.",
                tags: ["Medical Software", "Patient Portals"],
                mainTag: "Healthcare",
                gradient: "from-blue-900 to-cyan-800"
              },
              {
                title: "PCI DSS",
                desc: "Payment Card Industry Data Security Standard for secure payment processing. Our e-commerce solutions feature tokenization, secure payment gateways, and comprehensive vulnerability management.",
                tags: ["E-commerce", "Payment Systems"],
                mainTag: "Financial Security",
                gradient: "from-teal-900 to-emerald-800"
              },
              {
                title: "ISO 27001",
                desc: "Information Security Management System certification for data protection. Our comprehensive security framework includes risk assessment, incident response, and regular security audits to safeguard your data.",
                tags: ["Enterprise Solutions", "Cloud Security"],
                mainTag: "Data Security",
                gradient: "from-red-900 to-rose-800"
              },
              {
                title: "GDPR Compliance",
                desc: "European data protection regulations for privacy and data security. We implement privacy by design, consent management, and data minimization principles in all our European market solutions.",
                tags: ["Consent Management", "Data Portability"],
                mainTag: "Privacy",
                gradient: "from-amber-900 to-yellow-800"
              },
              {
                title: "SOC 2 Type II",
                desc: "Service Organization Control certification for security, availability, and confidentiality. Our cloud services and SaaS solutions undergo rigorous auditing to ensure they meet the highest trust standards.",
                tags: ["SaaS Solutions", "API Services"],
                mainTag: "Trust Services",
                gradient: "from-pink-900 to-fuchsia-800"
              }
            ].map((card, index) => (
              <div
                key={index}
                ref={(el) => initMobileCardRefs(el, index)}
                className="w-full flex justify-center items-center"
              >
                <div className={`card w-full bg-gradient-to-br ${card.gradient} rounded-xl shadow-xl p-6 text-white`}>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                    <p className="text-sm mb-4">{card.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {card.tags.map((tag, i) => (
                        <span key={i} className="text-xs bg-white/20 px-2 py-1 rounded-full">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-2">
                      <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{card.mainTag}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default PortfolioServicesSection