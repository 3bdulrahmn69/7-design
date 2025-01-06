import Header from '../../components/Header';
import HeroSection from './sections/HeroSection';
import LoopSection from './sections/LoopSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-white relative pt-20 md:pt-36">
      <Header />
      <HeroSection />
      <LoopSection />
      <section className="h-screen"></section>
      <section className="h-screen"></section>
    </div>
  );
};

export default HomePage;
