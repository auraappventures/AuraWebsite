"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { GlareCard } from "@/app/components/ui/glare-card";

export const ReferEarn = () => {
  return (
    <section id="refer" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black relative overflow-hidden transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <GlareCard className="bg-white dark:bg-[#141414] rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 sm:p-8 md:p-10 lg:p-12 text-center"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 text-black dark:text-white leading-tight">
                  Know an influencer?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 md:mb-10 leading-relaxed">
                  Earn $1,000 for every successful referral
                </p>
                <Link
                  href="/refer"
                  className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 text-black rounded-lg font-semibold text-sm sm:text-base md:text-lg hover:bg-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/20"
                >
                  Refer & Earn
                </Link>
              </motion.div>
            </GlareCard>
          </div>
        </div>
      </div>
    </section>
  );
};
