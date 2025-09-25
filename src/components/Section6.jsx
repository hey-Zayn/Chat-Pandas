"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect } from "react";

const Section6 = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const imgs = document.querySelectorAll(".Scard img");
    const cards = document.querySelectorAll(".Scard");

    const cardSticky = document.querySelectorAll(".card_sticky");
    const stickytitle = document.getElementById("sticky");

    const lastCard = cardSticky[cardSticky.length - 1];

    const endPosition = () => {
      const lastCardOffset = lastCard.offsetTop;

      const totalStackHeight = 0.6 - cardSticky.length * 30;

      return Math.min(
        lastCardOffset + totalStackHeight,
        document.body.scrollHeight - 200
      );
    };

    gsap.to(stickytitle, {
      scrollTrigger: {
        trigger: stickytitle,
        start: window.innerWidth < 640 ? "top top-=80" : "top top+=100",
        end: endPosition(),
        pin: true,
        pinSpacing: false,
        scrub: true,
      },
      y: (cardSticky.length - 1) * 30,
      zIndex: cardSticky.length + 1,
    });

    cardSticky.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top top+=100",
          end: endPosition(),
          pin: true,
          pinSpacing: false,
          scrub: true,
        },
        y: index === cardSticky.length - 1 ? (index * 0) : (index * 30),
        rotation: index === cardSticky.length - 1 ? 0 : (index % 2 === 0 ? -5 : 5),
        zIndex: index + 1,
      });
    });

    window.addEventListener("resize", () => ScrollTrigger.refresh());
    cards.forEach((card, index) => {
      const img = imgs[index];

      const handleMouseEnter = () => {
        gsap.to(img, {
          opacity: 1,
          scale: 1.2,
          rotate: index % 2 === 0 ? 10 : -10,
          y: -20,
          x: -10,
        });
        if (card) {
          gsap.to(card, {
            backgroundColor:
              index % 2 === 0 ? "rgb(24, 4, 181)" : "rgb(222, 31, 98)",
            borderColor: "black",
            color: "white",
            rotate: index % 2 === 0 ? 5 : -5,
          });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(img, { scale: 1, opacity: 0, rotate: 0, x: 0 });
        if (card) {
          gsap.to(card, {
            backgroundColor: "rgb(238,228,210)",
            borderColor: "black",
            color: "black",
            rotate: index % 2 === 0 ? 4 : -4,
          });
        }
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);
  return (
    <>
      <div className="pb-[3%] w-full pt-[10%] overflow-hidden bg-[rgb(238,228,210)]">
        <div className=" flex flex-col  sm:flex-col md:flex-row xl:flex-row  lg:flex-row  gap-[2%] max-sm:gap-4">
          <div className="w-[30%] h-20 m-[4%] mr-0">
            <h1
              id="sticky"
              className="z-20 p-4 pt-0 pb-0 mt-6 outline-none border-none 
              text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 
              font-bold text-black"
            >
              Our Services
            </h1>
          </div>
          <div className="flex flex-col h-full w-[80%] m-[4%]  text-black">
          
            {/* Card 1 */}
            <div className="Scard flex-grow-1 card_sticky border-solid border-[1px] bg-[rgb(238,228,210)] border-black rounded-lg m-6 w-[100%] h-full sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] 
            2xl:w-[95%] z-[1]">
              <div className="flex justify-between">
                <div className="w-full">
                  <h6 className="p-6 pb-1">01</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                    VOICE SUPPORT
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/headphones.svg"
                    alt="headphones"
                    width={150}
                    height={150}
                    className="-mt-[20%] will-change-transform opacity-0"
                  />
                </div>
              </div>
              <p className="p-6 pt-5 max-sm:pt-0 pb-3 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
                Help your clients understand their problems and provide
                effective solutions. problems and provide effective solutions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="Scard flex-grow-1 card_sticky border-solid border-[1px] bg-[rgb(238,228,210)] border-black rounded-lg m-6 w-[100%] h-full sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] 
            2xl:w-[95%] z-[1]">
              <div className="flex justify-between">
                <div className="w-full">
                  <h6 className="p-6 pb-1">01</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                  CHAT SUPPORT
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/headphones.svg"
                    alt="headphones"
                    width={150}
                    height={150}
                    className="-mt-[20%] will-change-transform opacity-0"
                  />
                </div>
              </div>
              <p className="p-6 pt-5 max-sm:pt-0 pb-3 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
              Simplify complaint resolution, boost customer support, generate
              leads , and enhance sales through our live chat assistance.
              </p>
            </div>

           
               {/* Card 3 */}
            <div className="Scard flex-grow-1 card_sticky border-solid border-[1px] bg-[rgb(238,228,210)] border-black rounded-lg m-6 w-[100%] h-full sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] 
            2xl:w-[95%] z-[1]">
              <div className="flex justify-between">
                <div className="w-full">
                  <h6 className="p-6 pb-1">01</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                  EMAIL & TICKETING
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/headphones.svg"
                    alt="headphones"
                    width={150}
                    height={150}
                    className="-mt-[20%] will-change-transform opacity-0"
                  />
                </div>
              </div>
              <p className="p-6 pt-5 max-sm:pt-0 pb-3 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
              Help your clients understand their problems and provide
                effective solutions. problems and provide effective solutions.
              </p>
            </div>

            
            
            {/* Card 4 */}
            <div className="Scard flex-grow-1 card_sticky border-solid border-[1px] bg-[rgb(238,228,210)] border-black rounded-lg m-6 w-[100%] h-full sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] 
            2xl:w-[95%] z-[1]">
              <div className="flex justify-between">
                <div className="w-full">
                  <h6 className="p-6 pb-1">01</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                  TECHNICAL SUPPORT
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/headphones.svg"
                    alt="headphones"
                    width={150}
                    height={150}
                    className="-mt-[20%] will-change-transform opacity-0"
                  />
                </div>
              </div>
              <p className="p-6 pt-5 max-sm:pt-0 pb-3 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
              Our top tier technical expertise in BPO outsourcing helps you
                tackle tough problems, improve efficiency and expand customer
                base.
              </p>
            </div>

            

             {/* Card 5 */}
             <div className="Scard flex-grow-1 card_sticky border-solid border-[1px] bg-[rgb(238,228,210)] border-black rounded-lg m-6 w-[100%] h-full sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] 
            2xl:w-[95%] z-[1]">
              <div className="flex justify-between">
                <div className="w-full">
                  <h6 className="p-6 pb-1">01</h6>
                  <h1 className="pt-0 w-full p-6 max-sm:pr-0 max-sm:pb-3 text-3xl sm:text-3xl 2xl:text-5xl md:text-3xl lg:text-3xl font-medium">
                  LEAD GENERATION
                  </h1>
                </div>
                <div className="w-[60%]">
                  <Image
                    src="/images/headphones.svg"
                    alt="headphones"
                    width={150}
                    height={150}
                    className="-mt-[20%] will-change-transform opacity-0"
                  />
                </div>
              </div>
              <p className="p-6 pt-5 max-sm:pt-0 pb-3 text-justify text-sm sm:text-base md:text-lg lg:text-1xl xl:text-1xl 2xl:text-4xl">
              Drive business growth by expanding your customer base through
                targeted strategies that effectively connect you with
                potentional clients, unloacking new opportunities for success.
              </p>
            </div>

           
          </div>
        </div>
      </div>
    </>
  );
};

export default Section6;