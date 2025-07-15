"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import ElegantShape from "./ElegantShape";
import { elegantShapes } from "@/config/HeroSection";
import { NavBar } from "./Navbar";
import { ArrowRight } from "lucide-react";
import { TextShimmer } from "./text-shimmer";
import BusinessLandingSection from "./Whyus";
import Demo from "./Marquee";
import OurWork from "./OurWork";
import Pricing from "./Pricing";
import Footer from "./Footer";
function HeroGeometric() {
  const [showFooter, setShowFooter] = useState(false);
  const businessRef = useRef<HTMLDivElement | null>(null);
  const ourWorkRef = useRef<HTMLDivElement | null>(null);
  const pricingRef = useRef<HTMLDivElement | null>(null);
  const lastSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowFooter(entry.isIntersecting);
      },
      { threshold: 0.5 } // adjust sensitivity
    );

    if (lastSectionRef.current) {
      observer.observe(lastSectionRef.current);
    }

    return () => {
      if (lastSectionRef.current) {
        observer.unobserve(lastSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex  justify-center overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        {elegantShapes.map((shape, index) => (
          <ElegantShape
            key={index}
            delay={shape.delay}
            width={shape.width}
            height={shape.height}
            rotate={shape.rotate}
            gradient={shape.gradient}
            className={shape.className}
          />
        ))}
      </div>

      <div className="relative z-10 w-full mx-auto px-2 sm:px-0 sm:max-w-5xl">
        <NavBar
          scrollToSections={{
            business: () =>
              businessRef.current?.scrollIntoView({ behavior: "smooth" }),
            work: () =>
              ourWorkRef.current?.scrollIntoView({ behavior: "smooth" }),
            pricing: () =>
              pricingRef.current?.scrollIntoView({ behavior: "smooth" }),
          }}
        />
        <div className=" mx-auto text-center ">
          <motion.div
            className="mt-36 "
            custom={1}
            initial="hidden"
            animate="visible "
          >
            <h1 className="text-white text-5xl md:text-6xl xl:text-8xl font-semibold  font-sans text-balance">
              <span className="bg-clip-text text-transparent leading-10  bg-gradient-to-b from-white to-white/80">
                Launch your website within a week
              </span>
            </h1>

            <TextShimmer
              className={cn(
                " text-sm md:text-lg  font-sans tracking-tight my-3"
              )}
            >
              Cool features, lightning-fast delivery. We build full-stack web
              that go live fast.
            </TextShimmer>

            <button className="bg-white mx-auto mt-10 px-4 py-2 rounded-md my-auto flex items-center gap-2 whitespace-nowrap">
              Let&apos;s Talk
              <ArrowRight size={16} />
            </button>
          </motion.div>
          <Demo />
          <div ref={businessRef}>
            <BusinessLandingSection />
          </div>

          {/* 👉 OurWork */}
          <div ref={ourWorkRef}>
            <OurWork />
          </div>

          {/* 👉 Pricing */}
          <div ref={pricingRef}>
            <Pricing />
          </div>

          <div
            ref={lastSectionRef}
            data-orientation="horizontal"
            role="none"
            className="shrink-0 h-[1px] w-full bg-gray-400 my-5"
          ></div>
          <Footer show={showFooter} />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
