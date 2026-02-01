"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { icon: "⏱", value: "2 weeks", label: "first $" },
  { icon: "⬇", value: "2000+", label: "downloads" },
];

const processSteps = [
  { number: "1", text: "We crafted the", highlight: "perfect idea" },
  { number: "2", text: "Designed, built & launched in", highlight: "2 weeks" },
  { number: "3", text: "Users claim settlements,", highlight: "revenue flows" },
];

const whatWeBuilt = [
  "iOS App",
  "Android App",
  "Backend & APIs",
  "Admin Dashboard",
  "App Store Publishing",
  "Ongoing Updates",
];

export const CaseStudy = () => {
  return (
    <section id="case-study" className="py-16 sm:py-20 md:py-24 bg-neutral-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-8"
        >
          Case Study
        </motion.p>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Avatar + Name */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-black font-bold text-lg overflow-hidden">
                  CS
                </div>
                <div>
                  <p className="text-black dark:text-white font-medium">Claimshark</p>
                  <p className="text-neutral-600 dark:text-neutral-500 text-sm">Legal Tech App • Settlement Claims</p>
                </div>
              </div>

              {/* Main Headline */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-black dark:text-white mb-2 leading-tight">
                2K+ downloads.
              </h2>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-500 mb-6 leading-tight">
                $500+/month.
              </h2>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg mb-8 leading-relaxed max-w-lg">
               We came up with{" "}
                <span className="text-black dark:text-white font-medium">Claimshark</span>, designed it, built it, and launched it all in two weeks. Today it has 2K+ users and generates $500+ monthly while helping users claim their settlements.
              </p>

              {/* Our Process */}
              <div className="bg-white dark:bg-[#141414] rounded-xl p-5 mb-6 border border-neutral-200 dark:border-neutral-800">
                <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-4">Our Process</p>
                <div className="space-y-3">
                  {processSteps.map((step) => (
                    <div key={step.number} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-blue-500 text-black font-bold flex items-center justify-center text-sm flex-shrink-0">
                        {step.number}
                      </div>
                      <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                        {step.text} <span className="text-black dark:text-white font-medium">{step.highlight}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What We Built */}
              <div className="mb-8">
                <p className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-500 mb-4">What We Built</p>
                <div className="flex flex-wrap gap-2">
                  {whatWeBuilt.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 bg-white dark:bg-[#1a1a1a] border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-700 dark:text-neutral-300 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-blue-500 text-black rounded-lg font-medium text-sm hover:bg-blue-400 transition-colors"
                >
                  Build yours next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
                <a
                  href="https://claimshark.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-[#1a1a1a] border border-neutral-300 dark:border-neutral-800 text-black dark:text-white rounded-lg font-medium text-sm hover:bg-neutral-50 dark:hover:bg-[#222] transition-colors"
                >
                  View live app
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-[#141414] rounded-xl p-4 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
                  >
                    <span className="text-blue-500 text-lg mb-2 block">{stat.icon}</span>
                    <p className="text-black dark:text-white text-2xl sm:text-3xl font-bold mb-1">{stat.value}</p>
                    <p className="text-neutral-600 dark:text-neutral-500 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* App Screenshot */}
              <div className="flex-1 hidden lg:flex items-center justify-center">
                <div className="relative">
                  <div className="relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[500px]">
                    <Image
                      src="/mockup.png"
                      alt="Claimshark App"
                      width={500}
                      height={1000}
                      className="w-full h-auto drop-shadow-2xl"
                      priority
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
