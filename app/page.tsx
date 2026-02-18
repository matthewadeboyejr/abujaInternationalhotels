import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import InvestorRelationsSection from './components/InvestorRelationsSection';
import CommitmentSection from './components/CommitmentSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <InvestorRelationsSection />
      <CommitmentSection />

    </div>
  );
}
