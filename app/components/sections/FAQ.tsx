"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How is this free? What's the catch?",
    answer:
      "There's no catch. We invest our time, resources, and expertise to build your app at no cost to you. In exchange, we take an equity stake in the app (typically 50-70%). When your app makes money, we both make money. We only win when you win.",
  },
  {
    question: "How much equity do I keep?",
    answer:
      "You can keep up to 50% equity. The exact split depends on what you bring to the table—audience size, engagement, niche, and involvement level. Creators with larger, more engaged audiences typically negotiate higher equity stakes.",
  },
  {
    question: "What do you mean by 'you handle everything'?",
    answer:
      "Literally everything. UI/UX design, iOS development, Android development, backend infrastructure, App Store account setup, app submission, review process, updates, bug fixes, server maintenance—all of it. You focus on your content and audience.",
  },
  {
    question: "How long does it take to launch?",
    answer:
      "Fast. We build your app in about 2 weeks. After that, App Store approval typically takes just a few days. From first call to live app, you're looking at roughly 3 weeks total.",
  },
  {
    question: "Who owns the app?",
    answer:
      "We co-own the app based on the equity split. Both parties have a stake in its success. The app is built under a joint venture structure, and all terms are clearly defined in our partnership agreement.",
  },
  {
    question: "What kind of apps do you build?",
    answer:
      "We specialize in consumer apps for influencers and creators—fitness apps, finance apps, lifestyle apps, community apps, educational apps. If you have an engaged audience and a compelling app idea, we want to hear from you.",
  },
  {
    question: "How do you make money?",
    answer:
      "We earn money when you earn money. Through our equity stake, we receive a percentage of all app revenue (subscriptions, in-app purchases, ads). This aligns our incentives perfectly—we're motivated to make your app as successful as possible.",
  },
  {
    question: "What if my app doesn't make money?",
    answer:
      "That's the risk we take, not you. You've invested nothing financially. If the app doesn't perform, you've lost nothing but time. This is why we're selective about partnerships—we only build apps we genuinely believe will succeed.",
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-24 bg-neutral-50 dark:bg-[#0a0a0a] transition-colors overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-xl md:text-2xl font-medium mb-3 sm:mb-4 text-black dark:text-white">
            frequently asked questions
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
            Everything you need to know about our equity partnership model.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 transition-colors overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors gap-4"
              >
                <span className="font-semibold text-base sm:text-lg text-black dark:text-white pr-4">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-5 h-5 flex-shrink-0 text-black dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-800">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center"
        >
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
            Still have questions?
          </p>
          <a
            href="#apply"
            className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 bg-blue-500 text-black rounded-lg font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};
