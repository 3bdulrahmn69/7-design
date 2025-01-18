import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/Button';
import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import TextAnimation from '../../../components/TextAnimation';
import Glow from '../../../components/Glow';

const HeroSection = () => {
  const { t } = useTranslation();
  const lang = i18next.language;

  return (
    <div className="relative pb-20 overflow-hidden">
      <Section id={'home'}>
        <Container>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center justify-center gap-[41px] text-gap">
              <div
                className={`w-fit xl:absolute top-0 ${
                  lang === 'en' ? 'left-80' : 'right-80'
                } flex items-center gap-2 z-10 py-2 px-4 mb-4 rounded-lg border-[1px] border-primary`}
              >
                <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                <p className=" text-center text-xs font-semibold">
                  {t('home.heroSection.hurry')}
                </p>
              </div>
              <TextAnimation />
              <div className="flex gap-6 z-10">
                <Button type="link" to="/meeting-booking">
                  {t('buttons.bookACall')}
                </Button>
                <Button type="scroll" variant="secondary" to="logos">
                  {t('buttons.learnMore')}
                </Button>
              </div>
            </div>
            <Glow isMoving={true} />
            <div className="absolute bottom-2 h-8 w-full bg-primaryLightWhite dark:bg-primaryDarkBlack blur-[4px]"></div>
            <div className="absolute bottom-0 h-8 w-full bg-primaryLightWhite dark:bg-primaryDarkBlack blur-[1px]"></div>
            <div className="absolute bottom-0 h-5 w-full bg-primaryLightWhite dark:bg-primaryDarkBlack"></div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default HeroSection;
