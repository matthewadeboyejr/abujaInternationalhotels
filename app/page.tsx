import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturedRooms from './components/FeaturedRooms';
import AccommodationSection from './components/AccommodationSection';
import SafestAffordableSection from './components/SafestAffordableSection';
import StealDealSection from './components/StealDealSection';
import CommonQueriesSection from './components/CommonQueriesSection';
import SpotlightsSection from './components/SpotlightsSection';
import CommitmentSection from './components/CommitmentSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white ">

      <HeroSection />
      <FeaturedRooms />
      <AccommodationSection />
      <SafestAffordableSection />
      <StealDealSection />
      <CommonQueriesSection />
      <CommitmentSection />



    </div>
  );
}
