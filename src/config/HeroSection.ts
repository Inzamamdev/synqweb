import { LucideIcon, Home, User, Briefcase, FileText } from "lucide-react";
export const elegantShapes = [
  {
    delay: 0.3,
    width: 600,
    height: 140,
    rotate: 12,
    gradient: "from-indigo-500/[0.15]",
    className:
      "left-[-20%] sm:left-[-15%] md:left-[-5%] top-[15%] md:top-[20%] scale-50 sm:scale-75 md:scale-100",
  },
  {
    delay: 0.5,
    width: 500,
    height: 120,
    rotate: -15,
    gradient: "from-rose-500/[0.15]",
    className:
      "right-[-15%] sm:right-[-10%] md:right-[0%] top-[70%] md:top-[75%] scale-50 sm:scale-75 md:scale-100",
  },
  {
    delay: 0.4,
    width: 300,
    height: 80,
    rotate: -8,
    gradient: "from-violet-500/[0.15]",
    className:
      "left-[-5%] sm:left-[0%] md:left-[10%] bottom-[5%] md:bottom-[10%] scale-60 sm:scale-75 md:scale-100",
  },
  {
    delay: 0.6,
    width: 200,
    height: 60,
    rotate: 20,
    gradient: "from-amber-500/[0.15]",
    className:
      "right-[5%] sm:right-[10%] md:right-[20%] top-[10%] md:top-[15%] scale-60 sm:scale-75 md:scale-100",
  },
  {
    delay: 0.7,
    width: 150,
    height: 40,
    rotate: -25,
    gradient: "from-cyan-500/[0.15]",
    className:
      "hidden sm:block left-[15%] md:left-[25%] top-[5%] md:top-[10%] scale-75 md:scale-100",
  },
];

//Navbar
export const navItems = [
  { name: "Home", url: "#", icon: Home },
  { name: "About", url: "#", icon: User },
  { name: "Projects", url: "#", icon: Briefcase },
  { name: "Resume", url: "#", icon: FileText },
];

//Marquee
export const companies = [
  "Apple",
  "Google",
  "Microsoft",
  "Amazon",
  "Meta",
  "Tesla",
  "Netflix",
  "Spotify",
  "Adobe",
  "Salesforce",
];
