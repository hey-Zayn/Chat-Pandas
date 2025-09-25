"use client";
import React, { lazy, Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Lazy-load the menu components
const DesktopMenu = dynamic(() => import("./DesktopMenu"), {
  loading: () => <div className="w-20 h-6 bg-gray-200 rounded animate-pulse" />,
});

const MobMenu = dynamic(() => import("./MobMenu"), {
  loading: () => <div className="w-10 h-6 bg-gray-200 rounded animate-pulse" />,
  ssr: false,
});

// Lazy-load icons (only the ones used in the initial render)
import {
  Users,
  Handshake,
  Briefcase,
  Heart,
  HelpCircle,
  BarChart2,
  MapPin,
  LayoutTemplate,
  Zap,
  Globe2,
  BadgeCheck,
  ShoppingCart,
  PackageCheck,
  Truck,
  Star,
  Search,
  Building2,
  Store,
  List,
  Target,
  Share2,
  RefreshCw,
  Mic,
  Tv,
  Mail,
  Youtube,
  DollarSign,
  Facebook,
  Code2,
  Palette,
  Accessibility,
  PenSquare,
  Layers,
  DraftingCompass,
  FileText,
  Video,
  Smartphone,
  Contact2,
  Cpu,
  Cloud,
  FolderGit2,
  Phone,
  Headset,
  ClipboardList,
  PhoneIncoming,
  ShieldCheck,
  UserCog,
  UserPlus,
  Lightbulb,
  RefreshCcwDot,
  ChartNoAxesCombined,
  GraduationCap,
  Network,
  Goal,
  Cog,
  Package,
  WorkflowIcon,
  Award,
  UserCircle2,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

// Create a map for lazy-loaded icons
const iconComponents = {
  Users: Users,
  Handshake: Handshake,
  Briefcase: Briefcase,
  Heart: Heart,
  HelpCircle: HelpCircle,
  // Add other icons that might be needed for initial render
};

const Header = () => {
  const Menus = [
    {
      id: 1,
      name: " IT & Development",
      subMenuHeading: [
        "Website Solution",
        "Design & Development",
        "IT Solutions",
      ],
      subMenu: [
        {
          name: "Wordpress Website Development",
          desc: "Custom WP sites",
          icon: LayoutTemplate,
          link: "/wordpress-website-development",
        },
        {
          name: "E-Commerce Solution",
          desc: "Online store setup",
          icon: ShoppingCart,
          link: "/e-commerce-website-development",
        },
        {
          name: "PHP Programming Development",
          desc: "Backend solutions",
          icon: Code2,
          link: "/php-programming-development",
        },
        {
          name: "E-commerce Website Design",
          desc: "Storefront design",
          icon: Palette,
          link: "/e-commerce-website-design",
        },
        {
          name: "360 Lead Nurture",
          desc: "Lead management",
          icon: RefreshCw,
          link: "/360-lead-nurture",
        },
        {
          name: "ADA Compliance Services",
          desc: "Accessibility compliance",
          icon: Accessibility,
          link: "/ada-compliance-services",
        },
        {
          name: "Logo Development",
          desc: "Brand identity",
          icon: PenSquare,
          link: "/logo",
        },
        {
          name: "Branding Theme Development",
          desc: "Visual identity",
          icon: Layers,
          link: "/branding-theme-development",
        },
        {
          name: "Video Branding Services",
          desc: "Promotional videos",
          icon: Youtube,
          link: "/video-production",
        },
        {
          name: "Interactive UI/UX",
          desc: "User experience",
          icon: DraftingCompass,
          link: "/ui-ux",
        },
        {
          name: "SEO Content Development",
          desc: "Optimized content",
          icon: FileText,
          link: "/seo-content-development",
        },
        {
          name: "Video Production",
          desc: "Professional videos",
          icon: Video,
          link: "/video-production",
        },
        {
          name: "App Development",
          desc: "Mobile solutions",
          icon: Smartphone,
          link: "/app-development",
        },
        {
          name: "CRM Generation",
          desc: "Customer management",
          icon: Contact2,
          link: "/crm",
        },
        {
          name: "AI-Monitoring & Integration",
          desc: "Smart systems",
          icon: Cpu,
          link: "/ai-monitoring-integration",
        },
        {
          name: "Cloud Hosting Solutions",
          desc: "Web hosting",
          icon: Cloud,
          link: "/cloud-hosting-solutions",
        },
        {
          name: "CMS Solution",
          desc: "Content management",
          icon: FolderGit2,
          link: "/software-development",
        },
      ],
      gridCols: 3,
    },
    {
      id: 2,
      name: "SEO ",
      subMenuHeading: [
        "Organic Search",
        "E-commerce",
        "Third-Party Placements",
      ],
      subMenu: [
        {
          name: "Search Engine Optimization",
          desc: "Boost online visibility",
          icon: BarChart2,
          link: "/Search-Engine-Optimization",
        },
        {
          name: "Local Search Optimization",
          desc: "Dominate local searches",
          icon: MapPin,
          link: "/Local-Search-Optimization",
        },
        {
          name: "Landing Page Optimization",
          desc: "Maximize conversion rates",
          icon: LayoutTemplate,
          link: "/Landing-Page-Optimization",
        },
        {
          name: "SEO for Leads",
          desc: "Generate quality leads",
          icon: Zap,
          link: "/seo-leads",
        },
        {
          name: "Enterprise Level Reach",
          desc: "Scale business growth",
          icon: Globe2,
          link: "/enterprise-level-reach",
        },
        {
          name: "Brand Optimization",
          desc: "Strengthen brand presence",
          icon: BadgeCheck,
          link: "/brand-optimization",
        },
        {
          name: "Shop & Order Outreach",
          desc: "Expand customer base",
          icon: ShoppingCart,
          link: "/shop-order-outreach",
        },
        {
          name: "Local Order Management",
          desc: "Streamline local orders",
          icon: PackageCheck,
          link: "/local-order-management",
        },
        {
          name: "B2B E-commerce enabling",
          desc: "Enable B2B commerce",
          icon: Handshake,
          link: "/b2b-e-commerce-enabling",
        },
        {
          name: "E-commerce Drop-shipping",
          desc: "Simplify order fulfillment",
          icon: Truck,
          link: "/drop-shipping",
        },
        {
          name: "Yelp Optimization",
          desc: "Enhance Yelp presence",
          icon: Star,
          link: "/yelp-optimization",
        },
        {
          name: "Bing & Yahoo Optimization",
          desc: "Expand search reach",
          icon: Search,
          link: "/bing-yahoo-optimization",
        },
        {
          name: "SEO for Amazon",
          desc: "Dominate Amazon rankings",
          icon: Building2,
          link: "/seo-amazon",
        },
        {
          name: "SEO for Walmart",
          desc: "Boost Walmart visibility",
          icon: Store,
          link: "/seo-for-walmart",
        },
        {
          name: "Listings & Directories",
          desc: "Manage online listings",
          icon: List,
          link: "/listings-directories",
        },
      ],

      gridCols: 3,
    },
    {
      id: 3,
      name: "Paid Marketing",
      subMenuHeading: [
        "Digital Advertisement",
        "Mrketing Outreach",
        "Commerce Platforms",
      ],
      subMenu: [
        {
          name: "PPC & Ads",
          desc: "Targeted ad campaigns",
          icon: ShoppingBag,
          link: "/paid-media-advertisement",
        },
        {
          name: "Facebook Lead Generation",
          desc: "Capture Facebook leads",
          icon: Target,
          link: "/facebook-lead-generation",
        },
        {
          name: "B2B Advertisement",
          desc: "Business-to-business ads",
          icon: Users,
          link: "/B2B-advertisement",
        },
        {
          name: "Social Media Campaigning",
          desc: "Boost social engagement",
          icon: Share2,
          link: "/paid-media-advertisement",
        },
        {
          name: "360 Lead Nurture",
          desc: "Nurture leads effectively",
          icon: RefreshCw,
          link: "/360-lead-nurture",
        },
        {
          name: "Influencer Marketing",
          desc: "Leverage influencer reach",
          icon: Mic,
          link: "/influencer-marketing",
        },
        {
          name: "TV Advertisement",
          desc: "Broadcast TV ads",
          icon: Tv,
          link: "/tv-advertisement",
        },
        {
          name: "Email Marketing",
          desc: "Engage via email",
          icon: Mail,
          link: "/email-marketing",
        },
        {
          name: "Youtube Advertisement",
          desc: "Monetize YouTube ads",
          icon: Youtube,
          link: "/youtube-advertisement",
        },
        {
          name: "Media Buying & Advertisement",
          desc: "Optimize ad spend",
          icon: DollarSign,
          link: "/media-buying-advertisement",
        },
        {
          name: "Yelp Advertisement",
          desc: "Promote on Yelp",
          icon: Star,
          link: "/yelp-advertisement",
        },
        {
          name: "Amazon Marketplace",
          desc: "Sell on Amazon",
          icon: Building2,
          link: "/amazon-marketing",
        },
        {
          name: "Walmart Marketplace",
          desc: "Expand on Walmart",
          icon: Store,
          link: "/walmart-marketplace",
        },
        {
          name: "Facebook Marketplace",
          desc: "Sell on Facebook",
          icon: Facebook,
          link: "/facebook-marketplace",
        },
        {
          name: "Commerce Credibility",
          desc: "Build trust fast",
          icon: BadgeCheck,
          link: "/commerce-credibility",
        },
      ],
      gridCols: 3,
    },

    {
      id: 4,
      name: "Business Servicing",
      subMenuHeading: ["BPO Services", "Human Resources", "Consultation"],
      subMenu: [
        {
          name: "Call Center",
          desc: "24/7 support",
          icon: Phone,
          link: "/call-centers",
        },
        {
          name: "Customer Service",
          desc: "Client support",
          icon: Headset,
          link: "/customer-service",
        },
        {
          name: "Back Office",
          desc: "Operations support",
          icon: ClipboardList,
          link: "/back-office",
        },
        {
          name: "Consulting",
          desc: "Expert guidance",
          icon: Briefcase,
          link: "/consulting",
        },
        {
          name: "Inbound Development",
          desc: "Call management",
          icon: PhoneIncoming,
          link: "/inbound-development",
        },
        {
          name: "Staffing",
          desc: "Team building",
          icon: Users,
          link: "/staffing",
        },
        {
          name: "Recruiting",
          desc: "Talent acquisition",
          icon: Search,
          link: "/recruiting",
        },
        {
          name: "Benefits Consulting",
          desc: "Employee benefits",
          icon: ShieldCheck,
          link: "/benefits-consulting",
        },
        {
          name: "HR Consulting",
          desc: "HR solutions",
          icon: UserCog,
          link: "/hr-consulting",
        },
        {
          name: "HR Outsourcing",
          desc: "HR management",
          icon: UserPlus,
          link: "/hr-outsourcing",
        },
        {
          name: "Business Consultants",
          desc: "Strategic advice",
          icon: Lightbulb,
          link: "/business-consultants",
        },
        {
          name: "Change Management",
          desc: "Transition support",
          icon: RefreshCcwDot,
          link: "/change-management",
        },
        {
          name: "Strategy Development",
          desc: "Growth planning",
          icon: ChartNoAxesCombined,
          link: "/strategy-development",
        },
        {
          name: "Corporate Training",
          desc: "Skill development",
          icon: GraduationCap,
          link: "/corporate-training",
        },
        {
          name: "Association Management",
          desc: "Organization leadership",
          icon: Network,
          link: "/association-management",
        },
      ],
      gridCols: 3,
    },
    {
      id: 5,
      name: "Who We Are",
      subMenuHeading: ["About Us", "Careers", "Our Values"],
      subMenu: [
        {
          name: "Who we are",
          desc: "Our story",
          icon: Users,
          link: "/Who-We-Are",
        },
        {
          name: "Portfolio",
          desc: "Our work",
          icon: WorkflowIcon,
          link: "/portfolio",
        },

        {
          name: "We are hiring!",
          desc: "Careers",
          icon: Briefcase,
          link: "/we-are-hiring",
        },
        {
          name: "Meet OUR LEAD",
          desc: "Our CEO",
          icon: Goal,
          link: "/meet-out-leader",
        },
        {
          name: "How-It-Works",
          desc: "Our process",
          icon: Cog,
          link: "/How-It-Works",
        },

        {
          name: "Packages",
          desc: "Our offerings",
          icon: Package,
          link: "/packages",
        },
        {
          name: "Our Team",
          desc: "Meet us",
          icon: UserCircle2,
          link: "/our-team",
        },

        {
          name: "FAQs",
          desc: "Get answers",
          icon: HelpCircle,
          link: "/FAQs",
        },
      ],
      gridCols: 3,
    },
  ];

  // Function to dynamically load icons when needed
  const getIconComponent = async (iconName) => {
    if (iconComponents[iconName]) {
      return iconComponents[iconName];
    }

    const { [iconName]: Icon } = await import("lucide-react");
    iconComponents[iconName] = Icon;
    return Icon;
  };

  return (
    <header className="absolute w-full top-0 left-0  max-sm:fixed flex justify-between items-center px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 text-white z-50 max-sm:bg-black">
      <div className="max-sm:w-full flex gap-6 items-center max-sm:justify-between">
        <a href="/">
          <img
            src="/images/660e8ed8eb1804501de1d733_Group 1.svg"
            alt="Logo"
            className="w-[120px] sm:w-[150px] md:w-[180px]"
            loading="lazy"
            width={180}
            height={60}
          />
        </a>
      </div>

      <div className="flex gap-4">
        <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-[#E73C5F] border-none rounded-md hidden sm:block hover:bg-[#D62A4D] transition-colors">
          <Link href="/Contact" passHref>
            Book a Demo
          </Link>
        </button>
        <button
          className="px-4 py-4 bg-[#E8E0CD] text-black rounded-full cursor-pointer"
          onClick={() => {
            const menu = document.getElementById("openmenu-panel");
            if (menu) {
              menu.style.display = menu.style.display === "block" ? "none" : "block";
            }
          }}
        >
          <Menu />
        </button>
        <div
          id="openmenu-panel"
          style={{ display: "none", position: "absolute", top: "100%", right: 0, zIndex: 1000 }}
        >
          {openmenu()}
        </div>
      </div>


    </header>
  );
};

export default Header;

export const openmenu = () => {
  return (
    <div className="w-[420px] relative -top-24 right-12 max-sm:right-4 max-sm:-top-18 h-full  pl-6  rounded-xl bg-[#E8E0CD]">
      <div className="w-full flex justify-end ">
        <button
          className="px-4 py-4 text-black  rounded-full cursor-pointer"
          onClick={() => {
            const menu = document.getElementById("openmenu-panel");
            if (menu) {
              menu.style.display = "none";
            }
          }}
        >
          <X />
        </button>
      </div>
      <div className="pb-10 pt-4 space-y-1.5">
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">Services</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">BPO</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">Call Center</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">The X Factors</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">Technical support</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">onboarding</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">meet the pandas</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">Ai in cx</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">chat support</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">voice support</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">email & Ticketing</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">lead generation</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">benchmarks</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">insights</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">contact</h2>
        <h2 className="text-2xl font-semibold uppercase cursor-pointer text-black">Portfolio</h2>
      </div>
          <div className="flex justify-between items-center pr-8">

          <h2 className="text-black/80 text-sm flex font-bold">Email : <span className="text-black/80"> zaynobusiness@gmail.com</span></h2>
              <div className=" text-black/50  text-sm font-semibold cursor-pointer mb-8 space-y-1.5">
                <h4 className="">FaceBook</h4>
                <h4>Linkedin</h4>
                <h4>Fiverr</h4>
              </div>
             
          </div>
    </div>
  );
};
