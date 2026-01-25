"use client";
import { motion } from "framer-motion";
import { GlareCard } from "@/app/components/ui/glare-card";

const equityCards = [
  {
    value: "$0",
    title: "Your Investment",
  },
  {
    value: "Up to 50%",
    title: "Your Equity",
  },
  {
    value: "100% covered",
    title: "Development",
  },
  {
    value: "Included",
    title: "Maintenance",
  },
];

export const EquityModel = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black relative overflow-hidden transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <GlareCard className="bg-white dark:bg-[#141414] rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-6 sm:p-8 md:p-10 lg:p-12"
            >
              {/* Header Section */}
              <div className="mb-8 sm:mb-10 md:mb-12">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-4 sm:mb-6 text-black dark:text-white leading-tight max-w-3xl">
                  $0 upfront.
                  <br />
                  <span className="text-blue-500">up to 50% equity.</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                  We invest our time and resources to build your app for free. In return, we split the revenue. You keep up to 50% of the equity— the more you bring to the table, the more you keep.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {equityCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="relative group"
                  >
                    <div className="bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300 h-full">
                      <div className="p-4 sm:p-5 md:p-6 lg:p-7 relative overflow-hidden h-full flex flex-col">
                        {/* Glowing effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-blue-500/0 transition-all duration-500 rounded-xl" />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <h3 className="text-xs sm:text-sm md:text-base font-medium text-neutral-600 dark:text-neutral-300 mb-2 sm:mb-3">
                            {card.title}
                          </h3>
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-black dark:text-white group-hover:text-blue-500 transition-colors duration-300">
                            {card.value}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </GlareCard>
        </div>
      </div>
    </section>
  );
};
