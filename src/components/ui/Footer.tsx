"use client";

import React from "react";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
function Footer({ show }: { show: boolean }) {
  return (
    <div className="text-white my-20">
      <p className="text-xl">Your Business Deserves a Better Website</p>
      <button className="bg-white mx-auto my-5 px-4 py-2 rounded-md  flex items-center gap-2 whitespace-nowrap text-foreground">
        Let&apos;s Talk
        <ArrowRight size={16} />
      </button>
      <p className="text-sm text-muted">
        Let&apos;s build a site that gets client attention.
      </p>
      <motion.footer
        initial={{ y: 100 }}
        animate={{ y: show ? 0 : 100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed bottom-0 left-0 right-0 z-50 px-4 py-3 bg-black text-white flex justify-between items-center text-sm sm:text-base
             before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5
             before:bg-gradient-to-r before:from-rose-500 before:via-cyan-400 before:to-indigo-500
             before:rounded-t-full before:z-50"
      >
        <span>© 2025 Synqweb.com. All rights reserved.</span>
        <a
          href="#"
          className="flex items-center gap-2 hover:text-blue-400 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M..." />
          </svg>
          @Synqweb
        </a>
      </motion.footer>
    </div>
  );
}

export default Footer;
