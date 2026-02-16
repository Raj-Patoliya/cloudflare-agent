import { HeroSection, FeaturesSection, BenefitsSection, HowItWorksSection, PricingSection, CTASection } from '@/components/landing';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorksSection />
      <PricingSection />
      <CTASection />
    </main>
  );
}

