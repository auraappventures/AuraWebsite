import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Header />
      <main className="pt-16 sm:pt-20 pb-12 sm:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-blue-500 hover:text-blue-400 mb-6 sm:mb-8 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black dark:text-white">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12">
              Last updated: January 2026
            </p>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                1. Introduction
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Aura App Ventures (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                2. Information We Collect
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the website includes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 ml-4">
                <li>
                  <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website.
                </li>
                <li>
                  <strong>Derived Data:</strong> Information our servers automatically collect when you access the website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the website.
                </li>
                <li>
                  <strong>Mobile Device Data:</strong> Device information, such as your mobile device ID number, model, and manufacturer, and information about the location of your device, if you access the website from a mobile device.
                </li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                3. Use of Your Information
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 ml-4">
                <li>Create and manage your account</li>
                <li>Process your transactions and send you related information</li>
                <li>Email you regarding your account or order</li>
                <li>Fulfill and manage purchases, orders, payments, and other transactions related to the website</li>
                <li>Generate a personal profile about you to make future visits more personalized</li>
                <li>Increase the efficiency and operation of the website</li>
                <li>Monitor and analyze usage and trends to improve your experience</li>
                <li>Notify you of updates to the website</li>
                <li>Perform other business activities as needed</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                4. Disclosure of Your Information
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 ml-4">
                <li>
                  <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
                </li>
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.
                </li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                5. Security of Your Information
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                6. Policy for Children
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We do not knowingly solicit information from or market to children under the age of 13. If we learn that we have collected personal information from a child under age 13 without verification of parental consent, we will delete that information as quickly as possible.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                7. Changes to This Privacy Policy
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                8. Contact Us
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                If you have questions or comments about this Privacy Policy, please contact us.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
