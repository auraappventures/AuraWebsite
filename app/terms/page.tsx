import Link from "next/link";
import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 mb-8 sm:mb-12">
              Last updated: January 2026
            </p>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                By accessing and using the services provided by Aura App Ventures (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                2. Services
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Aura App Ventures is a mobile app development studio and media company. We provide mobile application development services, media production, and related services as described on our website.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                3. Use License
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Aura App Ventures&apos; website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                4. Disclaimer
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                The materials on Aura App Ventures&apos; website are provided on an &apos;as is&apos; basis. Aura App Ventures makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                5. Limitations
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                In no event shall Aura App Ventures or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Aura App Ventures&apos; website, even if Aura App Ventures or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                6. Revisions
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Aura App Ventures may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-black dark:text-white">
                7. Contact Information
              </h2>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
