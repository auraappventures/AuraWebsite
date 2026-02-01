import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { CaseStudy } from "./components/sections/CaseStudy";
import { Testimonials } from "./components/sections/Testimonials";
import { EquityModel } from "./components/sections/EquityModel";
import { Services } from "./components/sections/Services";
import { Process } from "./components/sections/Process";
import { FAQ } from "./components/sections/FAQ";
import { ReferEarn } from "./components/sections/ReferEarn";
import { ApplicationForm } from "./components/sections/ApplicationForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors overflow-x-hidden w-full">
      <Header />
      <Hero />
      <CaseStudy />
      <EquityModel />
      <Services />
      <Process />
      <FAQ />
      <ApplicationForm />
      <ReferEarn />
      <Footer />
    </main>
  );
}
