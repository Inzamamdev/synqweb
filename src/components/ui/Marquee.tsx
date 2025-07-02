"use client";

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";
import FastMarquee from "react-fast-marquee";
import type { MarqueeProps as FastMarqueeProps } from "react-fast-marquee";
import { companies } from "@/config/HeroSection";
export type MarqueeProps = HTMLAttributes<HTMLDivElement>;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div
    className={cn("relative w-full overflow-hidden mt-24", className)}
    {...props}
  />
);

export type MarqueeContentProps = FastMarqueeProps;

export const MarqueeContent = ({
  loop = 0,
  autoFill = true,
  pauseOnHover = true,
  ...props
}: MarqueeContentProps) => (
  <FastMarquee
    loop={loop}
    autoFill={autoFill}
    pauseOnHover={pauseOnHover}
    {...props}
  />
);

export type MarqueeFadeProps = HTMLAttributes<HTMLDivElement> & {
  side: "left" | "right";
};

export type MarqueeItemProps = HTMLAttributes<HTMLDivElement>;

export const MarqueeItem = ({ className, ...props }: MarqueeItemProps) => (
  <div
    className={cn("mx-2 flex-shrink-0 object-contain", className)}
    {...props}
  />
);

const Demo = () => {
  return (
    <Marquee>
      <MarqueeContent>
        {companies.map((company, index) => (
          <MarqueeItem key={index} className="px-6 py-4">
            <div className="text-2xl text-white font-bold  whitespace-nowrap">
              {company}
            </div>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  );
};

export default Demo;
