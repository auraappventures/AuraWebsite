"use client";
import { motion } from "framer-motion";

const services = [
  {
    title: "Design",
    description: "Custom UI/UX tailored to your brand and audience",
    icon: "🎨",
  },
  {
    title: "Development",
    description: "Native iOS & Android with scalable backend",
    icon: "</>",
  },
  {
    title: "Publishing",
    description: "App Store & Play Store submission handled",
    icon: "🏪",
  },
  {
    title: "Launch",
    description: "Coordinated launch strategy for maximum impact",
    icon: "🚀",
  },
  {
    title: "Updates",
    description: "Ongoing maintenance and feature releases",
    icon: "🔄",
  },
  {
    title: "Analytics",
    description: "User insights and revenue optimization",
    icon: "📊",
  },
];

export const Services = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black transition-colors overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className="text-xl md:text-2xl font-medium mb-3 sm:mb-4 text-black dark:text-white">
            we handle everything
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
            From first pixel to App Store approval—you won&apos;t lift a finger.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full p-4 sm:p-5 md:p-6 bg-neutral-50 dark:bg-[#141414] rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500 transition-all duration-300 text-center">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{service.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
