import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { SolutionSection } from "@/components/landing/SolutionSection";
import { CredibilitySection } from "@/components/landing/CredibilitySection";
import { PricingSection } from "@/components/landing/PricingSection";
import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AudienceSection />
      <ProblemSection />
      <SolutionSection />
      <CredibilitySection />
      <PricingSection />
      <BenefitsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
