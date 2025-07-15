"use client";

import * as React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { cn } from "@/lib/utils";
import { services } from "@/config/WhyUsSection";
// Spotlight component implementation
const Spotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group/spotlight relative overflow-hidden rounded-xl border border-neutral-800 bg-black/50 backdrop-blur-sm",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: { id: string; text: string }[];
  icon: React.ReactNode;
  spotlightColor: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  spotlightColor,
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = React.useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotationX = (y - centerY) / 20;
      const rotationY = -(x - centerX) / 20;

      setRotation({ x: rotationX, y: rotationY });
    }
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      ref={cardRef}
      className="perspective-1000"
      style={{
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        y: isHovered ? -5 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      <Spotlight
        className="h-full p-8 transition-all duration-300 hover:scale-[1.02]"
        color={spotlightColor}
        radius={300}
      >
        <div className="relative z-20 h-full flex flex-col">
          <motion.div
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotateY: isHovered ? 360 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          >
            {icon}
          </motion.div>

          <motion.h3
            className="mb-4 text-2xl font-bold text-white text-left "
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          >
            {title}
          </motion.h3>

          <motion.div
            className="text-gray-300 leading-relaxed flex-grow text-left"
            animate={{
              y: isHovered ? -2 : 0,
            }}
            transition={{
              duration: 0.3,
              delay: 0.1,
              ease: "easeOut",
            }}
          >
            {description.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </motion.div>
        </div>
      </Spotlight>
    </motion.div>
  );
};

const BusinessLandingSection: React.FC = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto  py-20">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            We Don&apos;t Just Build Websites
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            We make sure your business looks sharp, loads fast, and brings in
            leads.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + index * 0.1,
                ease: "easeOut",
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BusinessLandingSection;
