import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-neutral-200 dark:border-neutral-800 transition-colors overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-black dark:text-white">Aura App Ventures</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm">
              Building premium mobile apps for influencers. You keep the equity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-black dark:text-white">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#how-it-works"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#case-study"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Case Study
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-black dark:text-white">Resources</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#refer"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Refer & Earn
                </Link>
              </li>
              <li>
                <Link
                  href="#apply"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-black dark:text-white">Legal</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 text-center sm:text-left">
            © 2026 Aura App Ventures. All rights reserved.
          </p>
          <div>
            <Link
              href="#"
              className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
