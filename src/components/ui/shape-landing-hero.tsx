"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { cn } from "@/lib/utils";
import ElegantShape from "./ElegantShape";
import { elegantShapes } from "@/config/ElegantShapeConfig";
import { NavBar } from "./Navbar";

function HeroGeometric() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

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

      <div className="relative z-10 w-full max-w-5xl mx-auto ">
        <NavBar />
        <div className="max-w-3xl mx-auto text-center ">
          <motion.div
            className="mt-36 "
            custom={1}
            initial="hidden"
            animate="visible "
          >
            <h1 className="text-white text-5xl md:text-6xl xl:text-7xl  tracking-tight font-sans text-balance">
              <span className="bg-clip-text text-transparent leading-10  bg-gradient-to-b from-white to-white/80">
                Launch your website within a week
              </span>
            </h1>
            <p className="text-sm md:text-lg text-gray-400 font-sans tracking-tight ">
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 "
                )}
              >
                Cool features, lightning-fast delivery.We build full-stack web
                that go live fast.
              </span>
            </p>
          </motion.div>

          <motion.div custom={2} initial="hidden" animate="visible">
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4"></p>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}

export { HeroGeometric };
