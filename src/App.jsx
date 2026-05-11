import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AudienceSection from './sections/AudienceSection';
import BusinessSection from './sections/BusinessSection';
import CTASection from './sections/CTASection';
import FamilySection from './sections/FamilySection';
import PositioningSection from './sections/PositioningSection';
import PropertySection from './sections/PropertySection';
import ServicesSection from './sections/ServicesSection';
import StatsSection from './sections/StatsSection';
import TimelineSection from './sections/TimelineSection';

export default function App() {
  return (
    <div className="min-h-screen bg-graphite text-ivory">
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <AudienceSection />
        <PositioningSection />
        <ServicesSection />
        <TimelineSection />
        <BusinessSection />
        <PropertySection />
        <FamilySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
