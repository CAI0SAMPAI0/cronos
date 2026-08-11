import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { StatsStrip } from "@/components/site/StatsStrip";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { WorkAtHeight } from "@/components/site/WorkAtHeight";
import { Sst } from "@/components/site/Sst";
import { LaborSupply } from "@/components/site/LaborSupply";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Portfolio } from "@/components/site/Portfolio";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Cta } from "@/components/site/Cta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloating } from "@/components/site/WhatsAppFloating";
import { SmoothAnchors } from "@/components/site/SmoothAnchors";

export default function HomePage() {
  return (
    <>
      <SmoothAnchors />
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <Services />
        <About />
        <WorkAtHeight />
        <Sst />
        <LaborSupply />
        <HowItWorks />
        <Portfolio />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}