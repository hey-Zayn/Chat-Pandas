"use client";
import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import NavbarContent from "./NavbarContent";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import Link from "next/link";

const MenuBar = () => {
  const menuBtnRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);
  const ulRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  });

  // Update responsive dimensions when window resizes
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const responsiveWidth = dimensions.width > 768 ? dimensions.width * 0.28 : dimensions.width * 0.9;
  const responsiveHeight = dimensions.height * 0.95;
  const responsiveScale = 1;

  const openMenu = () => {
    setIsVisible(true);
  };

  const closeMenu = () => {
    if (ulRef.current) {
      gsap.to(ulRef.current.children, {
        opacity: 0,
        scale: 0.8,
        duration: 0.2,
        ease: "power3.in",
      });
    }

    gsap.to(".close", {
      opacity: 0,
      scale: 0.8,
      duration: 0.4,
      ease: "power2.in",
    });

    gsap.to(circleRef.current, {
      scale: 0,
      borderRadius: "50%",
      width: responsiveWidth,
      height: responsiveHeight,
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => setIsVisible(false),
    });
  };

  useLayoutEffect(() => {
    if (isVisible) {
      gsap.set([circleRef.current, ulRef.current?.children, ".close"], {
        opacity: 0,
        scale: 0.8,
        zIndex: 10,
      });

      gsap.to(circleRef.current, {
        scale: responsiveScale,
        borderRadius: "10px",
        width: responsiveWidth,
        height: responsiveHeight,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });

      if (ulRef.current) {
        gsap.to(ulRef.current.children, {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      gsap.to(".close", {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: "back.out",
        delay: 0.3,
      });
    }
  }, [isVisible, responsiveWidth, responsiveHeight]);

  return (
    <div className="w-full top-0 left-0 absolute flex justify-between items-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 text-white z-50">
      <Link href="/"><img
        src="/images/660e8ed8eb1804501de1d733_Group 1.svg"
        alt="Logo"
        className="w-[120px] sm:w-[150px] md:w-[180px]"
      /></Link>

      <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
        <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-[#E73C5F] border-none rounded-md hidden sm:block">
          Book a Demo
        </button>

        <button
          ref={menuBtnRef}
          className="p-3 sm:p-4 bg-[#E8E0CD] font-bold text-black border-none rounded-full cursor-pointer"
          onClick={openMenu}
          aria-label="Open menu"
        >
          <Menu className="text-black" size={20} />
        </button>

        <div
          ref={circleRef}
          className="fixed top-[10px] right-[10px] sm:top-[20px] sm:right-[20px] bg-[#E8E0CD] z-[1000] transform scale-0 origin-top-right opacity-0"
        ></div>

        {isVisible && (
          <div className="fixed inset-0 flex justify-end items-start z-[1000] p- sm:p-10 pointer-events-auto">
            <div className="relative  sm:w-[90%] md:w-[70%] lg:w-[40%] xl:w-[28%]">
              <button
                className="absolute top-0 right-0 sm:-mt-2 sm:-mr-2 p-3 sm:p-4 text-sm sm:text-md font-bold text-white bg-[#111111] border-none cursor-pointer rounded-full close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={20} className="sm:size-[25px]" />
              </button>
              <NavbarContent ulRef={ulRef} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuBar;