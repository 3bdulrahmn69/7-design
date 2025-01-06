import Button from '../../../components/Button';
import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import TextAnimation from '../../../components/TextAnimation';
import Glow from '../components/Glow';

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden text-black dark:text-white pb-20">
      <Section id={'home'}>
        <Container>
          <div className=" flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
              <div className="w-fit xl:absolute top-0 left-80 flex items-center gap-2 z-10 py-2 px-4 mb-4 rounded-lg border-[1px] border-primaryDark">
                <div className="w-2 h-2 rounded-full bg-primaryDark animate-ping"></div>
                <p className=" text-center text-xs font-Satoshi font-semibold">
                  Hurry! Only 3 Spots Left
                </p>
              </div>
              <TextAnimation />
              <div className="flex gap-6 my-2 z-10">
                <Button className="bg-gradient-to-r from-primary to-orange-500 hover:from-yellow-500 hover:to-orange-600 duration-300">
                  Book a call
                </Button>
                <Button className="bg-black outline-[1px] outline-white/20 hover:outline-[3px] hover:outline-white/40 outline duration-300">
                  Learn more
                </Button>
              </div>
            </div>
            <Glow />
          </div>
        </Container>
      </Section>
      <div className="relative -z-0">
        <div className="absolute top-0 w-full h-[200px] blur-[20px] bg-white  dark:bg-black"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[10px] blur-[10px] bg-white dark:bg-black"></div>
      </div>
    </div>
  );
};

export default HeroSection;
