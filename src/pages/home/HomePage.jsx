import Header from '../../components/Header';
import HeroSection from './sections/HeroSection';
import LoopSection from './sections/LoopSection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <Header />
      <HeroSection />
      <LoopSection />
      <section className="h-screen"></section>
      <section className="h-screen"></section>
    </div>
  );
};

export default HomePage;
