"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeProvider";

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

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elementId = href.replace("#", "");
    setIsMenuOpen(false);
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      smoothScrollTo(elementId);
    }, 100);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-black dark:text-white">
            Aura App Ventures
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a
              href="#case-study"
              onClick={(e) => handleLinkClick(e, "#case-study")}
              className="text-sm lg:text-base text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              Case Study
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleLinkClick(e, "#how-it-works")}
              className="text-sm lg:text-base text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              How It Works
            </a>
            <a
              href="#faq"
              onClick={(e) => handleLinkClick(e, "#faq")}
              className="text-sm lg:text-base text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              FAQ
            </a>
            <a
              href="#refer"
              onClick={(e) => handleLinkClick(e, "#refer")}
              className="text-sm lg:text-base text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
            >
              Refer & Earn
            </a>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <a
              href="#apply"
              onClick={(e) => handleLinkClick(e, "#apply")}
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg font-medium text-sm lg:text-base hover:opacity-90 transition-opacity cursor-pointer"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-black dark:text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-3">
                <a
                  href="#case-study"
                  onClick={(e) => handleLinkClick(e, "#case-study")}
                  className="block text-base text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  Case Study
                </a>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleLinkClick(e, "#how-it-works")}
                  className="block text-base text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </a>
                <a
                  href="#faq"
                  onClick={(e) => handleLinkClick(e, "#faq")}
                  className="block text-base text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  FAQ
                </a>
                <a
                  href="#refer"
                  onClick={(e) => handleLinkClick(e, "#refer")}
                  className="block text-base text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                >
                  Refer & Earn
                </a>
                <button
                  onClick={toggleTheme}
                  className="block w-full text-left px-4 py-2 text-base text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
                </button>
                <a
                  href="#apply"
                  onClick={(e) => handleLinkClick(e, "#apply")}
                  className="block px-4 py-2 bg-blue-500 text-white rounded-lg font-medium text-center text-base cursor-pointer"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
