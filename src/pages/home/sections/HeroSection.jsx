import Button from '../../../components/Button';
import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import TextAnimation from '../../../components/TextAnimation';
import Glow from '../components/Glow';

const HeroSection = () => {
  return (
    <div className="relative pb-20 overflow-hidden">
      <Section id={'home'}>
        <Container>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-[41px] text-gap ">
              <div className="w-fit xl:absolute top-0 left-80 flex items-center gap-2 z-10 py-2 px-4 mb-4 rounded-lg border-[1px] border-primaryDark">
                <div className="w-2 h-2 rounded-full bg-primaryDark animate-ping"></div>
                <p className=" text-center text-xs font-semibold">
                  Hurry! Only 3 Spots Left
                </p>
              </div>
              <TextAnimation />
              <div className="flex gap-6 z-10">
                <Button type="link" to="/meeting-booking">
                  Book a call
                </Button>
                <Button type="scroll" variant="secondary" to="logos">
                  Learn more
                </Button>
              </div>
            </div>
            <Glow isMoving={true} />
            <div className="absolute bottom-0 h-8 w-full bg-primaryLightWhite dark:bg-primaryDarkBlack blur-[10px]"></div>
            <div className="absolute bottom-0 h-5 w-full bg-primaryLightWhite dark:bg-primaryDarkBlack"></div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HeroSection;
