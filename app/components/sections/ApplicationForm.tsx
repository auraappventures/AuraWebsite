"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { GlareCard } from "@/app/components/ui/glare-card";

const steps = [
  {
    number: "1",
    description: "We review your application within 48 hours",
  },
  {
    number: "2",
    description: "If it's a fit, we schedule a discovery call",
  },
  {
    number: "3",
    description: "We agree on equity split and sign partnership",
  },
  {
    number: "4",
    description: "We start building—you start earning",
  },
];

export const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    platform: "",
    followerCount: "",
    socialHandle: "",
    audienceDescription: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submittedContent = (
    <section id="apply" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-blue-500/20 border border-blue-500 rounded-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-black dark:text-white">Application Submitted!</h2>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              We&apos;ve received your application and will review it within 48 hours. We&apos;ll be in touch soon!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );

  const formContent = (
    <section id="apply" className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 sm:space-y-8"
            >
              <div>
                <h2 className="text-2xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4 text-black dark:text-white">
                  ready to build your app?
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  Apply for a partnership. Tell us about your audience and your vision. If we&apos;re a good fit, we&apos;ll build your app for free and you keep up to 50% equity.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-3 sm:space-y-4">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-500 text-black font-bold flex items-center justify-center text-xs sm:text-sm">
                      {step.number}
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-0.5 sm:pt-1">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlareCard className="bg-white dark:bg-[#141414] rounded-2xl border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/50 transition-all duration-300">
                <form
                  onSubmit={handleSubmit}
                  className="p-5 sm:p-6 space-y-3 sm:space-y-4"
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-1 text-black dark:text-white">Apply for Partnership</h3>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 mb-3 sm:mb-4">
                    We review every application personally.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label
                        htmlFor="platform"
                        className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                      >
                        Primary Platform
                      </label>
                      <select
                        id="platform"
                        name="platform"
                        required
                        value={formData.platform}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select platform</option>
                        <option value="instagram">Instagram</option>
                        <option value="tiktok">TikTok</option>
                        <option value="youtube">YouTube</option>
                        <option value="twitter">Twitter/X</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="followerCount"
                        className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                      >
                        Follower Count
                      </label>
                      <select
                        id="followerCount"
                        name="followerCount"
                        required
                        value={formData.followerCount}
                        onChange={handleChange}
                        className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select range</option>
                        <option value="50k-100k">50K - 100K</option>
                        <option value="100k-500k">100K - 500K</option>
                        <option value="500k-1m">500K - 1M</option>
                        <option value="1m+">1M+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="socialHandle"
                      className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                    >
                      Social Handle
                    </label>
                    <input
                      type="text"
                      id="socialHandle"
                      name="socialHandle"
                      required
                      value={formData.socialHandle}
                      onChange={handleChange}
                      placeholder="@yourhandle"
                      className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="audienceDescription"
                      className="block text-xs font-medium mb-1 text-neutral-700 dark:text-neutral-300"
                    >
                      What types of people watch your videos?
                    </label>
                    <textarea
                      id="audienceDescription"
                      name="audienceDescription"
                      required
                      rows={3}
                      value={formData.audienceDescription}
                      onChange={handleChange}
                      className="w-full px-3 py-2 text-sm border border-neutral-300 dark:border-neutral-700 rounded-lg bg-white dark:bg-neutral-800 text-black dark:text-white hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-blue-500 text-black rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-400 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>

                  <p className="text-xs text-center text-neutral-600 dark:text-neutral-400">
                    We respond to every application within 48 hours.
                  </p>
                </form>
              </GlareCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );

  return isSubmitted ? submittedContent : formContent;
};
