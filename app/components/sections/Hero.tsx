"use client";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import { GlareCard } from "@/app/components/ui/glare-card";

const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const Hero = () => {
  return (
    <AuroraBackground className="min-h-screen overflow-x-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-white dark:bg-neutral-900 border border-blue-500 rounded-full text-xs sm:text-sm font-medium text-black dark:text-white">
            now accepting 2 new partners
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10 mx-auto max-w-4xl text-center text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight px-4 text-black dark:text-white"
        >
          we build your app.
          <br />
          <span className="text-neutral-600 dark:text-neutral-400">
            you keep the equity.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-600 dark:text-neutral-400 mb-8 text-base sm:text-lg md:text-xl lg:text-2xl px-4"
        >
          We partner with top influencers to build premium mobile apps—completely free. You focus on your audience. We handle design, development, App Store publishing, and everything in between.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
        >
          <button
            onClick={() => smoothScrollTo("apply")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-white rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity text-center"
          >
            Contact
          </button>
          <button
            onClick={() => smoothScrollTo("case-study")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-black border-2 border-blue-500 text-black dark:text-white rounded-lg font-semibold text-base sm:text-lg hover:bg-neutral-50 dark:hover:bg-neutral-900 hover:border-blue-400 transition-colors text-center"
          >
            View Case Study
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-10 mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
        >
          <GlareCard className="group bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 cursor-default overflow-hidden">
            <div className="p-4 sm:p-6 relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/0 transition-all duration-500" />
              <div className="relative z-10">
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-black dark:text-white group-hover:text-blue-500 transition-colors">No app idea needed</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  We come up with the perfect concept for your audience
                </p>
              </div>
            </div>
          </GlareCard>
          
          <GlareCard className="group bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 cursor-default overflow-hidden">
            <div className="p-4 sm:p-6 relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/0 transition-all duration-500" />
              <div className="relative z-10">
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-black dark:text-white group-hover:text-blue-500 transition-colors">100% free development</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Zero upfront costs. We invest in your success
                </p>
              </div>
            </div>
          </GlareCard>
          
          <GlareCard className="group bg-white dark:bg-black rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 cursor-default overflow-hidden">
            <div className="p-4 sm:p-6 relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/0 transition-all duration-500" />
              <div className="relative z-10">
                <h3 className="font-semibold text-base sm:text-lg mb-2 text-black dark:text-white group-hover:text-blue-500 transition-colors">We handle everything</h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  From design to App Store publishing
                </p>
              </div>
            </div>
          </GlareCard>
        </motion.div>
      </div>
    </AuroraBackground>
  );
};
