import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features-section";
import { CtaSection } from "@/components/cta-section";
import { CtaSection2 } from "@/components/cta-section-2";
import { Footer } from "@/components/footer";
import { SocialProof } from "@/components/social-proof";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <CtaSection2 />
      <SocialProof />
      <CtaSection />
      <Footer />
    </>
  );
}
