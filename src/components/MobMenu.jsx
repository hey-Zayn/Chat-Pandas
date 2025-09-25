'use client'
import { useState, useCallback, useMemo, lazy, Suspense } from "react";
import dynamic from 'next/dynamic';
import Link from "next/link";

// Lazy load motion from framer-motion
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), {
  loading: () => <div className="fixed left-0 right-0 top-16 h-full bg-[#18181A]/50 backdrop-blur" />,
  ssr: false
});

const MotionUl = dynamic(() => import("framer-motion").then(mod => mod.motion.ul), {
  ssr: false
});

// Lazy load icons
const MenuIcon = dynamic(() => import("lucide-react").then(mod => mod.Menu), {
  loading: () => <span className="w-6 h-6 bg-gray-200 rounded" />,
  ssr: false
});

const XIcon = dynamic(() => import("lucide-react").then(mod => mod.X), {
  loading: () => <span className="w-6 h-6 bg-gray-200 rounded" />,
  ssr: false
});

const ChevronDownIcon = dynamic(() => import("lucide-react").then(mod => mod.ChevronDown), {
  loading: () => <span className="w-5 h-5 bg-gray-200 rounded" />,
  ssr: false
});

// Lazy load individual menu icons when needed
const DynamicIcon = ({ icon }) => {
  const IconComponent = dynamic(() => 
    import("lucide-react").then(mod => mod[icon?.name || "Circle"]), {
    loading: () => <span className="w-4 h-4 bg-gray-200 rounded-full" />,
    ssr: false
  });

  return IconComponent ? <IconComponent size={17} /> : null;
};

const subMenuDrawer = {
  enter: {
    height: "auto",
    overflow: "hidden",
  },
  exit: {
    height: 0,
    overflow: "hidden",
  },
};

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = useCallback(() => {
    setIsOpen(prev => !prev);
    setClicked(null);
  }, []);

  const handleClick = useCallback((i) => {
    setClicked(prev => prev === i ? null : i);
  }, []);

  const menuItems = useMemo(() => Menus.map(({ name, subMenu }, i) => {
    const isClicked = clicked === i;
    const hasSubMenu = subMenu?.length;
    
    return (
      <li key={`${name}-${i}`}>
        <span
          className="flex p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
          onClick={() => handleClick(i)}
        >
          {name}
          {hasSubMenu && (
            <Suspense fallback={<span className="ml-auto w-5 h-5" />}>
              <ChevronDownIcon
                className={`ml-auto transition-transform ${isClicked ? "rotate-180" : ""}`}
              />
            </Suspense>
          )}
        </span>
        {hasSubMenu && (
          <MotionUl
            initial="exit"
            animate={isClicked ? "enter" : "exit"}
            variants={subMenuDrawer}
            className="ml-5"
          >
            {subMenu.map(({ name, icon, link }) => (
              <Link href={link} key={name} passHref legacyBehavior>
                <li className="p-2 flex hover:bg-white/5 rounded-md gap-x-4 cursor-pointer">
                  <Suspense fallback={<span className="w-4 h-4 bg-gray-200 rounded-full" />}>
                    <DynamicIcon icon={icon} />
                  </Suspense>
                  {name}
                </li>
              </Link>
            ))}
          </MotionUl>
        )}
      </li>
    );
  }), [Menus, clicked, handleClick]);

  return (
    <div>
      <button 
        className="lg:hidden z-[999] relative" 
        onClick={toggleDrawer}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <Suspense fallback={<span className="w-6 h-6 bg-gray-200 rounded" />}>
          {isOpen ? <XIcon /> : <MenuIcon />}
        </Suspense>
      </button>

      <MotionDiv
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A]/50 backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <ul>
          {menuItems}
        </ul>
      </MotionDiv>
    </div>
  );
}