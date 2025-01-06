import Button from '../../../components/Button';
import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import Glow from '../components/Glow';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <Section id={'hero'}>
        <Container className="h-screen overflow-hidden">
          <div className=" flex flex-col items-center justify-center h-screen overflow-hidden">
            <div className="xl:absolute top-36 left-96 flex items-center gap-2 z-10 py-2 px-4 mb-4 rounded-lg border-[1px] border-primaryDark">
              <div className="w-2 h-2 rounded-full bg-primaryDark animate-ping"></div>
              <p className=" text-white text-center text-xs font-Satoshi">
                Hurry! Only 3 Spots Left
              </p>
            </div>
            <div>
              <h1 className="lg:text-7xl text-6xl font-medium text-center font-Satoshi">
                Ready to{' '}
                <span className="font-Instrument font-normal italic">
                  scale
                </span>{' '}
                your <br /> brand with paid ads?
              </h1>
              <p className=" text-center lg:text-lg text-base py-4">
                If you want to achieve ground-breaking growth with increased
                sales <br /> and profitability with paid ads, then you&apos;re
                in the right place.
              </p>
            </div>
            <div className="flex gap-6 my-2 z-10">
              <Button className="bg-primary hover:bg-primaryDark outline-[1px] outline-white/20 hover:outline-[3px] hover:outline-white/40 duration-200">
                Book a call
              </Button>
              <Button className="bg-black outline-[1px] outline-white/20 hover:outline-[3px] hover:outline-white/40 outline duration-200">
                Learn more
              </Button>
            </div>
            <Glow />
          </div>
        </Container>
      </Section>
      <div className="relative -z-0">
        <div className="absolute top-0 w-full h-[80px] blur-[20px] bg-black"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[10px] blur-[10px] bg-black"></div>
      </div>
    </div>
  );
};

export default HeroSection;
