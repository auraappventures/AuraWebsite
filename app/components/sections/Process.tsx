"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Apply",
    description: "Tell us about your audience and app vision. We only take on projects we believe in.",
  },
  {
    number: "02",
    title: "Partner",
    description: "We agree on equity split (up to 50% for you) and sign a simple partnership agreement.",
  },
  {
    number: "03",
    title: "Build",
    description: "We design, develop, and handle everything. You focus on your audience.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Coordinated launch leveraging your audience. We publish to app stores.",
  },
  {
    number: "05",
    title: "Grow",
    description: "We continuously optimize and update. You earn passive income.",
  },
];

export const Process = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-xl md:text-2xl font-medium mb-3 sm:mb-4 text-black dark:text-white">how it works</h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            A simple 5-step process from idea to income.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto mb-12 sm:mb-14 md:mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-neutral-50 dark:bg-[#141414] rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 sm:p-6 hover:border-blue-500 transition-all duration-300 h-full">
                  <div className="text-3xl sm:text-4xl font-bold text-neutral-400 dark:text-neutral-400 mb-3 sm:mb-4">{step.number}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-black dark:text-white">{step.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                    <div className="w-4 h-0.5 bg-neutral-300 dark:bg-neutral-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-blue-500 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl">
            <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-xl sm:text-2xl">⚡</span>
              <h3 className="text-lg sm:text-xl font-medium text-white">why this works</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 sm:gap-8 items-center">
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-white">We only win when you win.</h4>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                  Our equity model means we&apos;re fully invested in your success. We don&apos;t get paid unless your app makes money. That&apos;s why we only partner with creators we believe in.
                </p>
              </div>
              <a
                href="#apply"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white dark:bg-black text-black dark:text-white rounded-lg font-semibold text-base sm:text-lg hover:opacity-90 transition-opacity whitespace-nowrap text-center"
              >
                Apply Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
