'use client'
import  { useEffect, useRef } from "react";
import { gsap } from "gsap";

// import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";


const OtherCMS = () => {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".otherCMS", {
      opacity: 0,
      y: 100,
      x: -50,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".otherCMS",
        start: "top 80%",
        end: "bottom 20%",
        // toggleActions: "play none none reverse",
        // scrub: true
      }
    })
  }, [])

  const carouselRef = useRef(null);


    const projects = [
        {
          name: 'Tech gear',
          Platform: 'Other CMS',
          img:"./images/WP1.avif",
          link:'/tech-gear'
        },
        {
          name: 'Health First',
          Platform: 'Other CMS',
          img:"./images/WP2.avif",
          link:'/heath-first'
        },
        {
            name: 'Artistic Corner',
            Platform: 'Other CMS',
            img:"./images/WP3.avif",
            link:'/artistic-corner'
        },
        {
            name: 'Green Thumb',
            Platform: 'Other CMS',
            img:"./images/CMS4.avif",
            link:'/green-thumb'
        },
       ]




  useEffect(() => {
    const carousel = carouselRef.current;

    // Duplicate the cards for infinite scrolling
    carousel.innerHTML += carousel.innerHTML;

    // Calculate the total width of the carousel
    const totalWidth = carousel.scrollWidth / 2;

    // GSAP animation for infinite scrolling
    const tl = gsap.timeline({ repeat: -1 }); // Infinite repeat

    tl.to(carousel, {
      x: -totalWidth, // Move the carousel to the left
      duration: 90, // Adjust duration for speed
      ease: "none", // Linear animation
    });

    // Reset the carousel position when the animation repeats
    tl.eventCallback("onRepeat", () => {
      gsap.set(carousel, { x: 0 }); // Reset to the start
    });
  }, []);

  return (
    <div className="relative overflow-hidden py-12">
    <div
      ref={carouselRef}
      className="flex gap-10 w-max wordPressSection"
    >
      {/* Cards */}
      {projects.map((card, index) => (
        <Link href={card.link} >
        <div
          key={index}
          className=" card   rounded-2xl shadow-sm flex flex-col items-center justify-center text-2xl font-bold object-cover overflow-hidden">
          <img src={card.img} alt="Hero 1" className="w-[300px] h-[250px]  object-contain -mb-0 " />
          <h2 className="text-white ">{card.name}</h2>
          <h5 className="text-white/90 font-light">{card.Platform}</h5>
        </div>
        </Link>


      ))}
    </div>

  </div>
  );
};

export default OtherCMS;