import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Glow from './components/Glow';
import BenefitsSection from './sections/BenefitsSection';
import ComparisonSection from './sections/ComparisonSection';
import CounterSection from './sections/CounterSection';
import FrequentlySection from './sections/FrequentlySection';
import HeroSection from './sections/HeroSection';
import LogosSection from './sections/LogosSection';
import PricingSections from './sections/PricingSections';
import ProcessSection from './sections/ProcessSection';
import ProjectsSection from './sections/ProjectsSection';
import ServicesSection from './sections/ServicesSection';
import TakeAction from './sections/TakeAction';
import TestimonialsSection from './sections/TestimonialsSection';

const HomePage = () => {
  return (
    <div className="relative pt-20 md:pt-36 grid-bg overflow-x-hidden">
      <Header />
      <HeroSection />
      <LogosSection />
      <ProjectsSection />
      <CounterSection />
      <ProcessSection />
      <BenefitsSection />
      <ServicesSection />
      <ComparisonSection />
      <TestimonialsSection />
      <PricingSections />
      <FrequentlySection />
      <TakeAction />
      <div className="h-8 md:h-16 z-0">
        <Glow
          className="absolute bottom-[600px] md:bottom-[450px] translate-y-full"
          isMoving={false}
          shrink={true}
        />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
