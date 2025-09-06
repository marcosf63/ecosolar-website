import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CalculatorSection from '@/components/CalculatorSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import BenefitsSection from '@/components/BenefitsSection';
import PlantsSection from '@/components/PlantsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CalculatorSection />
        <HowItWorksSection />
        <BenefitsSection />
        <PlantsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
