"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems } from "@/config/HeroSection";
import Image from "next/image";
interface NavBarProps {
  className?: string;
}

export function NavBar({ className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(navItems[0].name);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
    //   className={cn(
    //     "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
    // className
    //   )}
    >
      <div className=" mt-5 flex justify-between px-4    bg-white/10 border border-white/20 backdrop-blur-xl  rounded-xl shadow-2xl shadow-black/10">
        <div className="flex items-center">
          <Image
            height="100"
            width="100"
            src="/synqwebLogo.png"
            alt="logo"
            className="w-15 h-15 m-0 p-0"
          ></Image>
          <h1 className="text-white text-xl font-bold">Synqweb</h1>
        </div>

        <div className="items-center gap-8  hidden md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer  font-semibold  px-4 py-2 rounded-full transition-all duration-300",
                  "text-white/80 hover:text-white hover:bg-white/10",
                  isActive && "bg-white/20 text-white shadow-lg"
                )}
              >
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-gradient-to-r from-white/20 to-white/10 rounded-full -z-10 shadow-inner"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-indigo-500/[0.15] to-rose-400 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-gradient-to-r from-violet-400/30 to-amber-400/30 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-gradient-to-r from-amber-400/20 to-cyan-400/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-gradient-to-r from-blue-400/25 to-purple-400/25 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            );
          })}
        </div>
        <button className="bg-white px-4 py-1.5 rounded-md my-auto flex items-center whitespace-nowrap mr-2 ">
          Let&apos;s Talk
        </button>
      </div>
    </div>
  );
}
