"use client"
import React, { useRef, useCallback, useMemo, useEffect, useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register plugins once at module level
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP)
}

const Hero = React.memo(() => {
  const heroRef = useRef(null)
  const headingRefs = useRef({})
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => {
      // Clean up any lingering ScrollTriggers when component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Memoized heading data
  const headingContent = useMemo(
    () => [
      { key: "heading1", text: "Redefining CX" },
      { key: "heading2", text: "standards through our" },
      { key: "heading3", text: "Top-Tier BPO compANY" },
    ],
    [],
  )

  const subHeadingContent = useMemo(
    () => [
      { key: "subHeading1", text: "Building", align: "right" },
      { key: "subHeading2", text: "Meaningful", align: "left" },
      { key: "subHeading3", text: "Connections", align: "right" },
    ],
    [],
  )

  // Memoized animation setup
  const setupAnimations = useCallback(() => {
    if (!isMounted || !heroRef.current) return

    const elements = [
      ...headingContent.map((item) => headingRefs.current[item.key]),
      ...subHeadingContent.map((item) => headingRefs.current[item.key]),
    ].filter(Boolean)

    if (!elements.length) return

    // Create a context for GSAP to properly clean up
    const ctx = gsap.context(() => {
      gsap.from(elements, {
        y: -100,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom bottom",
          toggleActions: "play none none none",
          once: true,
          markers: process.env.NODE_ENV === "development",
        },
        clearProps: "transform",
      })
    }, heroRef)

    return () => ctx.revert() // Properly clean up the context
  }, [headingContent, subHeadingContent, isMounted])

  useGSAP(setupAnimations, {
    scope: heroRef,
    dependencies: [isMounted],
    revertOnUpdate: true, // Ensure previous animations are cleaned up
  })

  const setHeadingRef = useCallback(
    (key) => (el) => {
      headingRefs.current[key] = el
    },
    [],
  )

  return (
    <div ref={heroRef} className="w-full h-screen relative pt-10">
      <div className="w-full h-screen flex flex-col justify-between relative z-10 py-20">
        {/* Headings Section */}
        <div className="w-full px-20 py-4 max-sm:py-2 max-sm:px-6 flex justify-end max-sm:justify-start gap-0">
          <div className="flex flex-col">
            {headingContent.map((item) => (
              <div key={item.key} className="overflow-hidden">
                <h3
                  ref={setHeadingRef(item.key)}
                  className="text-white text-left uppercase text-3xl max-sm:text-[22px] leading-none"
                >
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Subheadings Section */}
        <div className="w-full px-40 max-sm:px-10 py-4 flex justify-start gap-0 max-sm:mt-50">
          <div className="flex flex-col">
            {subHeadingContent.map((item) => (
              <div key={item.key} className="overflow-hidden">
                <h3
                  ref={setHeadingRef(item.key)}
                  className={`text-white uppercase font-bold text-6xl max-md:text-4xl max-sm:text-3xl leading-none ${
                    item.align === "right" ? "text-right ml-20 max-sm:ml-10" : ""
                  }`}
                >
                  {item.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client-side only video element */}
      {isMounted && (
        <video
          src="/videos/my.mp4"
          className="absolute top-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          fetchPriority="high"
          aria-label="Background video"
          disablePictureInPicture
          disableRemotePlayback
          // poster="/images/video-poster.jpg"
          onLoadStart={(e) => e.target.play().catch(() => {})}
        />
      )}
    </div>
  )
})

Hero.displayName = "Hero"
export default Hero