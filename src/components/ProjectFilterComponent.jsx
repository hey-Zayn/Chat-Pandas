'use client'
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import gsap from 'gsap';
import Link from 'next/link';
import Image from 'next/image';

const ProjectsSection = () => {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('web');
  const [isMounted, setIsMounted] = useState(false);
  const projectRefs = useRef([]);
  const filtersRef = useRef(null);

  // Memoize static data to prevent unnecessary re-renders
  const categories = useMemo(() => [
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'wordpress', label: 'WordPress' },
    { id: 'mern', label: 'Mern' },
    { id: 'mean', label: 'Mean' },
    { id: 'cms', label: 'CMS' },
    { id: 'uiux', label: 'UIUX' },
  ], []);

  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Business Boost',
      categories: ['wordpress'],
      image: '/images/Wordpress1.png',
      description: 'A powerful WordPress solution to boost your business growth and online presence',
      link: '/business-boost'
    },
    {
      id: 2,
      title: 'Creative Studio',
      categories: ['wordpress'],
      image: '/images/Wordpress2.png',
      description: 'A creative WordPress portfolio for design studios',
      link: '/creative-studio'
    },
    {
      id: 3,
      title: 'Eco-Shop',
      categories: ['wordpress'],
      image: '/images/Wordpress3.png',
      description: 'An eco-friendly WordPress e-commerce solution',
      link: '/eco-shop'
    },
    {
      id: 4,
      title: 'Travel Vibes',
      categories: ['wordpress'],
      image: '/images/Wordpress4.png',
      description: 'A travel-themed WordPress blog and booking platform',
      link: '/travel-shop'
    },
    {
      id: 5,
      title: 'Code Academy',
      categories: ['mern'],
      image: '/images/Mern1.png',
      description: 'An interactive learning platform for coding education',
      link: '/code-academy'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      categories: ['mern'],
      image: '/images/Mern2.png',
      description: 'A comprehensive fitness tracking and workout management system',
      link: '/fitness-tracker'
    },
    {
      id: 7,
      title: 'E-Libary',
      categories: ['mern'],
      image: '/images/Mern3.png',
      description: 'A digital library platform for managing and accessing e-books',
      link: '/e-libary'
    },
    {
      id: 8,
      title: 'Travel Log',
      categories: ['mern'],
      image: '/images/Mern4.png',
      description: 'A travel journal and itinerary management application',
      link: '/travel-log'
    },
    {
      id: 9,
      title: 'Tech Gear',
      categories: ['cms'],
      image: '/images/WP1.avif',
      description: 'A tech-focused e-commerce platform built with CMS',
      link: '/tech-gear'
    },
    {
      id: 10,
      title: 'Health First',
      categories: ['cms'],
      image: '/images/WP2.avif',
      description: 'A health and wellness platform powered by CMS',
      link: '/health-first'
    },
    {
      id: 11,
      title: 'Artistic Corner',
      categories: ['cms'],
      image: '/images/WP3.avif',
      description: 'An art gallery and creative showcase using CMS',
      link: '/artistic-corner'
    },
    {
      id: 12,
      title: 'Green Thumb',
      categories: ['cms'],
      image: '/images/CMS4.avif',
      description: 'A gardening and plant care platform built with CMS',
      link: '/green-thumb'
    },
    {
      id: 13,
      title: 'Daily Habits',
      categories: ['mobile'],
      image: '/images/Mobileapp1.png',
      description: 'A habit tracking and productivity mobile application',
      link: '/daily-habits'
    },
    {
      id: 14,
      title: 'Recipe Hub',
      categories: ['mobile'],
      image: '/images/Mobileapp2.png',
      description: 'A recipe management and meal planning mobile app',
      link: '/recipe-hub'
    },
    {
      id: 15,
      title: 'Budget Buddy',
      categories: ['mobile'],
      image: '/images/Mobileapp2.png',
      description: 'A personal finance and budgeting mobile application',
      link: '/budget-buddy'
    },
    {
      id: 16,
      title: 'FitMate',
      categories: ['mobile'],
      image: '/images/Mobileapp3.png',
      description: 'A fitness tracking and workout companion mobile app',
      link: '/fitmate'
    },
    {
      id: 17,
      title: 'Music Streaming App',
      categories: ['uiux'],
      image: '/images/UIUX-Design1.png',
      description: 'A modern music streaming app UI/UX design',
      link: '/music-streaming-app'
    },
    {
      id: 18,
      title: 'Travel Booking Platform',
      categories: ['uiux'],
      image: '/images/UIUX-Design2.png',
      description: 'A comprehensive travel booking platform design',
      link: '/travel-booking-platform'
    },
    {
      id: 19,
      title: 'E-Commerce Redesign',
      categories: ['uiux'],
      image: '/images/UIUX-Design3.png',
      description: 'A complete e-commerce platform redesign',
      link: '/e-commerce-redesign'
    },
    {
      id: 20,
      title: 'Personal Finance Dashboard',
      categories: ['uiux'],
      image: '/images/UIUX-Design4.png',
      description: 'An intuitive personal finance dashboard design',
      link: '/personal-finance-dashboard'
    },
    {
      id: 21,
      title: 'Health Tracker',
      categories: ['mean'],
      image: '/images/Mean1.png',
      description: 'A comprehensive health tracking application',
      link: '/health-tracker'
    },
    {
      id: 22,
      title: 'E-Commerce Portal',
      categories: ['mean'],
      image: '/images/Mean2.png',
      description: 'A full-featured e-commerce platform',
      link: '/e-commerce-portal'
    },
    {
      id: 23,
      title: 'JobBoard',
      categories: ['mean'],
      image: '/images/Mean3.png',
      description: 'A professional job board platform',
      link: '/joboard'
    },
    {
      id: 24,
      title: 'Event Planner',
      categories: ['mean'],
      image: '/images/Mean4.png',
      description: 'An event management and planning system',
      link: '/event-planner'
    },
    {
      id: 25,
      title: 'Tech Gear',
      categories: ['web'],
      image: '/images/WP1.avif',
      description: 'A technology e-commerce platform',
      link: '/tech-gear'
    },
    {
      id: 26,
      title: 'Health First',
      categories: ['web'],
      image: '/images/WP2.avif',
      description: 'A health and wellness platform',
      link: '/health-first'
    },
    {
      id: 27,
      title: 'Artistic Corner',
      categories: ['web'],
      image: '/images/WP3.avif',
      description: 'An art showcase and marketplace',
      link: '/artistic-corner'
    },
    {
      id: 28,
      title: 'Green Thumb',
      categories: ['web'],
      image: '/images/CMS4.avif',
      description: 'A gardening and plant care platform',
      link: '/green-thumb'
    },
  ], []);

  // Memoize filtered projects to prevent recalculation on every render
  const filteredProjects = useMemo(() => 
    projects.filter(project => project.categories.includes(activeFilter)),
  [projects, activeFilter]);

  useEffect(() => {
    setIsMounted(true);
    
    // Clean up function
    return () => {
      projectRefs.current = [];
    };
  }, []);

  // Optimize animations with useCallback
  const animateFilters = useCallback(() => {
    if (!filtersRef.current) return;
    
    gsap.from(filtersRef.current.children, {
      opacity: 0,
      y: 10,
      stagger: 0.05, // Reduced stagger time
      duration: 0.4  // Slightly faster animation
    });
  }, []);

  const animateProjects = useCallback((isInitial = false) => {
    if (!projectRefs.current.length) return;
    
    gsap.from(projectRefs.current, {
      opacity: 0,
      y: 20,
      stagger: 0.08, // Reduced stagger time
      duration: 0.5,
      delay: isInitial ? 0.1 : 0 // Reduced delay
    });
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    animateFilters();
    animateProjects(true);
  }, [isMounted, animateFilters, animateProjects]);

  const handleFilter = useCallback((categoryId) => {
    if (categoryId === activeFilter || !isMounted) return;
    
    // Use a single timeline for better performance
    const tl = gsap.timeline();
    tl.to(projectRefs.current, {
      opacity: 0,
      y: 20,
      duration: 0.25, // Faster fade out
      onComplete: () => {
        setActiveFilter(categoryId);
        router.push(`?category=${categoryId}`, { scroll: false });
        
        // Use requestAnimationFrame for better performance
        requestAnimationFrame(() => {
          setTimeout(() => {
            gsap.to(projectRefs.current, {
              opacity: 1,
              y: 0,
              duration: 0.4,
              stagger: 0.05 // Reduced stagger time
            });
          }, 30); // Reduced timeout
        });
      }
    });
  }, [activeFilter, isMounted, router]);

  if (!isMounted) {
    return <div className="min-h-[200px] flex items-center justify-center">Loading...</div>;
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div ref={filtersRef} className="flex justify-center gap-3 mb-12">
        <div className="w-full flex flex-wrap md:flex-nowrap justify-center overflow-x-auto gap-2 sm:gap-3 pb-2 px-2 sm:px-0">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleFilter(category.id)}
              className={`flex-shrink-0 px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium transition-all duration-300 hover:scale-105 backdrop-blur-md border border-white/10 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-[#5209DE] to-[#8A2BE2] text-white shadow-[0_4px_20px_rgba(82,9,222,0.5)] hover:shadow-[0_6px_24px_rgba(82,9,222,0.6)]'
                  : 'bg-white/5 text-gray-300 hover:bg-white/15 hover:text-white hover:shadow-[0_4px_12px_rgba(255,255,255,0.1)]'
              }`}
              style={{
                backdropFilter: 'blur(8px)',
                minWidth: 'fit-content',
                margin: '0.25rem'
              }}
            >
              <span className="relative z-10 flex items-center gap-1">
                {category.label}
                {activeFilter === category.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                )}
              </span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div
            key={project.id}
            ref={el => projectRefs.current[index] = el}
            className="bg-white/5 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={project.link} className="block">
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  loading={index < 6 ? "eager" : "lazy"}
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl text-gray-100 font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.categories.map(catId => {
                    const category = categories.find(c => c.id === catId);
                    return (
                      <span 
                        key={`${project.id}-${catId}`}
                        className="px-3 py-1 text-gray-200 text-xs rounded-full border border-gray-200"
                      >
                        {category?.label}
                      </span>
                    );
                  })} 
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;