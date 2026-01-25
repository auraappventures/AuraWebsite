"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { GlareCard } from "@/app/components/ui/glare-card";

const testimonials = [
  {
    quote: "BURD handled everything. I just focused on my content and they built me a business making six figures monthly. Best decision I ever made.",
    name: "IP",
    role: "Influencer Partner",
    category: "Finance Creator",
    downloads: "500K+ Downloads",
  },
  {
    quote: "The process was seamless. From the initial call to app launch, everything was handled professionally. My app is now generating passive income while I focus on what I love.",
    name: "CC",
    role: "Influencer Partner",
    category: "Lifestyle Creator",
    downloads: "300K+ Downloads",
  },
  {
    quote: "I was skeptical at first, but BURD delivered beyond expectations. The app quality is top-notch and the revenue share model is fair. Highly recommend!",
    name: "TC",
    role: "Influencer Partner",
    category: "Tech Creator",
    downloads: "200K+ Downloads",
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      prevTestimonial();
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-black transition-colors overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="text-xl md:text-2xl font-medium text-black dark:text-white mb-6 sm:mb-8">Testimonials</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto overflow-hidden">
          <div 
            className="relative"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <GlareCard className="bg-white dark:bg-black rounded-2xl border border-neutral-200 dark:border-transparent transition-all duration-300">
                  <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                    <div className="text-4xl sm:text-5xl mb-6 sm:mb-8 text-blue-500 leading-none">&quot;</div>
                    <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-black dark:text-white leading-relaxed mb-6 sm:mb-8 md:mb-10">
                      {testimonials[currentIndex].quote}
                    </blockquote>
                    
                    {/* Author Info */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-500 text-black font-bold flex items-center justify-center text-base sm:text-lg flex-shrink-0">
                          {testimonials[currentIndex].name}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-medium text-black dark:text-white mb-1">{testimonials[currentIndex].role}</p>
                          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">{testimonials[currentIndex].category}</p>
                        </div>
                      </div>
                      
                      {/* Stats */}
                      <div className="text-left sm:text-right">
                        <p className="text-base sm:text-lg font-semibold text-blue-500">{testimonials[currentIndex].downloads}</p>
                      </div>
                    </div>
                  </div>
                </GlareCard>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="hidden md:flex absolute left-0 sm:-left-12 md:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#141414] border border-neutral-200 dark:border-neutral-800 items-center justify-center text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-blue-500 transition-all duration-300 shadow-lg z-10"
              aria-label="Previous testimonial"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="hidden md:flex absolute right-0 sm:-right-12 md:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-[#141414] border border-neutral-200 dark:border-neutral-800 items-center justify-center text-black dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:border-blue-500 transition-all duration-300 shadow-lg z-10"
              aria-label="Next testimonial"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-500 w-6 sm:w-8" : "bg-neutral-300 dark:bg-neutral-600 w-1.5 sm:w-2 hover:bg-neutral-400 dark:hover:bg-neutral-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
