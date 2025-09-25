import ScrollSpySection from "@/components/ScrollSpySection";
import React from "react";
import {
  Code2, Boxes, FileType, FileBadge, Database, Flame,  
  Laptop, Globe, MonitorSmartphone, Coffee, Hexagon, Binary, Smartphone,
  PenTool, Layout, ShoppingBag, Clock, ShirtIcon, CreditCard, FileText
} from "lucide-react";
import BusinessOperations from "@/components/Business-operations";

const page = () => {
  const categories = [
    {
      title: "Development",
      items: [
        { name: "React", icon: <Code2 size={20} /> },
        { name: "Vue", icon: <Boxes size={20} /> },
        { name: "Angular", icon: <Hexagon size={20} /> },
        { name: "JavaScript", icon: <FileType size={20} /> },
        { name: "TypeScript", icon: <FileBadge size={20} /> },
        { name: "Node.js", icon: <Binary size={20} /> },
        { name: "MongoDB", icon: <Database size={20} /> },
        { name: "Firebase", icon: <Flame size={20} /> },
      ]
    },
    {
      title: "Mobile Dev",
      items: [
        { name: "Hybrid/Native app", icon: <MonitorSmartphone size={20} /> },
        { name: "Java", icon: <Coffee size={20} /> },
        { name: "Kotlin", icon: <Smartphone size={20} /> },
        { name: "Swift", icon: <Laptop size={20} /> },
        { name: "React Native", icon: <Code2 size={20} /> },
        { name: "Android", icon: <Smartphone size={20} /> },
        { name: "Flutter", icon: <Boxes size={20} /> },
        { name: "Web app", icon: <Globe size={20} /> },
      ]
    },
    {
      title: "Designing",
      items: [
        { name: "UI/UX", icon: <Layout size={20} /> },
        { name: "Prototype", icon: <PenTool size={20} /> },
        { name: "Logo", icon: <Hexagon size={20} /> },
        { name: "Letterhead", icon: <FileText size={20} /> },
        { name: "T-Shirt/Uniform", icon: <ShirtIcon size={20} /> },
        { name: "Business Card", icon: <CreditCard size={20} /> },
        { name: "Mug/Clock/File", icon: <Clock size={20} /> },
        { name: "Shopping bag", icon: <ShoppingBag size={20} /> },
      ]
    }
  ];
  return (
    <div className="w-full h-full bg-[#191919]">
      <div className="w-full h-full">
        <div
          id="seo-hero"
          className="w-full h-screen relative flex flex-col justify-center items-center bg-gradient-to-b from-[#520ADE] via-[#520ADE] to-[#191919] overflow-hidden"
        >
          <span className="size-200 absolute -top-50 -left-50  rounded-full bg-[radial-gradient(circle_at_center,#a8288f_20%,transparent_70%)] blur-[90px]"></span>
          <h1
            // ref={mainHeading}
            className="text-white text-center text-8xl max-sm:text-4xl font-bold z-10"
          >
            How It Works
          </h1>
        </div>
      </div>

      <section id="section2-img-left" className="w-full text-white body-font">
        <div className="container mx-auto flex gap-10 max-sm:gap-10 px-5 max-sm:px-2  py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <video
              src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3956e49d8a96e28ec7e12_111-transcode.mp4"
              className="object-cover object-center rounded w-full h-full"
              muted
              autoPlay
              loop
              playsInline
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
            <h1 className="max-sm:text-2xl text-3xl mb-4 font-bold text-white">
              Get to the Top Page of Search Engines
              {/* <br className="hidden lg:inline-block" /> */}
              With Targeted Revenue Growth
            </h1>
            <p className="mb-8 leading-relaxed">
              In the fast-paced digital marketplace, visibility is everything.
              Corecentrix Business Solutions stands at the forefront of SEO
              excellence, empowering businesses across the USA to dominate
              search engine rankings and achieve unparalleled revenue growth.
              Our expert SEO strategies are not just about climbing to the top
              page—they're about driving measurable results that translate into
              tangible profits for your business.
            </p>

            <div className="flex justify-center">
              <button className="inline-flex text-white border border-white px-6 py-3 rounded-lg text-lg hover:bg-white hover:text-black transition-colors duration-300">
                Connect Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[20vh] max-sm:h-[10vh] flex justify-center items-center">
        <h1 className="text-white text-5xl max-sm:text-3xl text-center">
          {" "}
          Unmatch Technical <span className="font-bold">Experties</span>
        </h1>
      </section>
    {/* Litel chaning */}
      <section className="w-full text-white body-font">
        <div className="container mx-auto flex  max-sm:flex-col-reverse gap-10 max-sm:gap-10  px-5 max-sm:px-2 py-15 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center max-sm:text-left max-sm:px-8">
            <h1 className=" max-sm:text-2xl text-3xl mb-4 font-bold text-white">
              Get to the Top Page of Search Engines:
              {/* <br className="hidden lg:inline-block" /> */}
              With targeted Revenue growth
            </h1>
            <p className=" leading-relaxed mb-4">
              In the fast-paced digital marketplace, visibility is everything.
              Corecentrix Business Solutions stands at the forefront of SEO
              excellence.
            </p>
            <ul className="list-disc [&>li]:[&::marker]:text-pink-700 [&>li]:[&::marker]:text-xl  space-y-3">
              <li className="text-white/80 text-base">
                Screen Mirroring and Remote Assistance: Real-time guidance and
                problem-solving via screen sharing tools.
              </li>
              <li className="text-white/80 text-base">
                Screen Mirroring and Remote Assistance: Real-time guidance and
                problem-solving via screen sharing tools.
              </li>
              <li className="text-white/80 text-base">
                Screen Mirroring and Remote Assistance: Real-time guidance and
                problem-solving via screen sharing tools.
              </li>
              <li className="text-white/80 text-base">
                Screen Mirroring and Remote Assistance: Real-time guidance and
                problem-solving via screen sharing tools.
              </li>
            </ul>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <video
              src="https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a39584ddade41b9a8d626c_222-transcode.mp4"
              className="object-cover object-center rounded"
              muted
              autoPlay
              loop
              playsInline
            ></video>
          </div>
        </div>
      </section>

      <ScrollSpySection/>



      <section className=" text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-6">{category.title}</h3>
              <div className="space-y-4 w-full">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center justify-center  space-x-3 pl-4 p-4 rounded-xl bg-gradient-to-r from-[#191919] via-[#520ADE] to-[#191919]">
                    <span className="bg-pink-800 text-white  p-1 rounded-full">
                      {item.icon}
                    </span>
                    <span className="">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <BusinessOperations />
      
    </div>
  );
};

export default page;
// https://cdn.prod.website-files.com/660b9ff56cc1437adb553c40%2F66a3b5eee61f4c0be515133e_1-9-1_1-transcode.mp4
