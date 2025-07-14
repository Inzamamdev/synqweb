"use client";
import React from "react";
import { PlusIcon, ShieldCheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { BorderTrail } from "./ui/border-trail";
import { features } from "@/config/Pricing";
import { CheckCircle2 } from "lucide-react";
export function PricingComp() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24">
      <div id="pricing" className="mx-auto w-full max-w-6xl space-y-5 px-4">
        <div className="relative">
          <div
            className={cn(
              "z--10 pointer-events-none absolute inset-0 size-full",
              "bg-[linear-gradient(to_right,--theme(--color-background/.2)_1px,transparent_1px),linear-gradient(to_bottom,--theme(--color-background/.2)_1px,transparent_1px)]",
              "bg-[size:32px_32px]",
              "[mask-image:radial-gradient(ellipse_at_center,var(--foreground)_10%,transparent)]"
            )}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="mx-auto w-full max-w-2xl space-y-2"
          >
            <div className="grid md:grid-cols-2 bg-foreground relative border p-4">
              <PlusIcon className="absolute -top-3 -left-3  size-5.5" />
              <PlusIcon className="absolute -top-3 -right-3 size-5.5" />
              <PlusIcon className="absolute -bottom-3 -left-3 size-5.5" />
              <PlusIcon className="absolute -right-3 -bottom-3 size-5.5" />

              <div className="w-full px-4 pt-5 pb-4">
                <div className="space-y-1">
                  <p className="text-3xl font-bold md:text-4xl">
                    Join the WEB Experience
                  </p>
                  <p>Got an idea? Let&apos;s build it.</p>
                </div>
                <div className="mt-10 ">
                  <div className="text-muted-background flex items-end gap-0.5 text-xl"></div>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="#">Book a 15-minute call</a>
                  </Button>
                </div>
              </div>
              <div className="relative w-full rounded-lg border px-4 pt-5 pb-4">
                <BorderTrail
                  style={{
                    boxShadow:
                      "0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)",
                  }}
                  size={100}
                />
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="leading-none font-semibold">Standard</h3>
                    <div className="flex items-center gap-x-1">
                      <Badge>One Time Payment</Badge>
                    </div>
                  </div>
                </div>
                <div className="mt-16 space-y-4">
                  <div className="text-muted-background flex items-end text-xl">
                    <span>$</span>
                    <span className="text-background -mb-0.5 text-4xl font-extrabold tracking-tighter md:text-5xl">
                      1000
                    </span>
                    <span>/project</span>
                  </div>

                  <Button className="w-full" variant="secondary" asChild>
                    <a href="#">Get Started Now</a>
                  </Button>
                </div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 h-[1px] w-full bg-gray-400 my-5"
                ></div>
                <div className="flex flex-col gap-2">
                  <p className="text-left font-bold font-sans tracking-tighter text-xl">
                    Here&apos;s What&apos;s Included
                  </p>
                  {features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-gray-400 flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
