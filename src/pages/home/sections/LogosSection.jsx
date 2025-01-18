import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import MovingSlider from '../../../components/MovingSlider';
import BannerImg from '../../../components/BannerImg';
import { myLogosWhite, myLogosBlack } from '../../../services/myLogos';
import Button from '../../../components/Button';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import { FaArrowRightLong } from 'react-icons/fa6';

const LogosSection = () => {
  const { t } = useTranslation();
  const lang = i18next.language;

  return (
    <Section id={'logos'}>
      <Container>
        <p className="font-Satoshi text-center pt-2 mb-4 text-primary-text text">
          {t('home.logosSection.littleTitle')}
        </p>
        <MovingSlider
          speed={50}
          direction="normal"
          orientation="row"
          arrayNumber={5}
          className="hidden dark:block"
        >
          {myLogosWhite.map((logo, index) => (
            <BannerImg key={index} img={logo.img} />
          ))}
        </MovingSlider>
        <MovingSlider
          speed={50}
          direction="normal"
          orientation="row"
          arrayNumber={5}
          className="block dark:hidden"
        >
          {myLogosBlack.map((logo, index) => (
            <BannerImg key={index} img={logo.img} />
          ))}
        </MovingSlider>
        <div className="flex items-center justify-center">
          <a
            href="https://www.behance.net/drme99"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="secondary"
              className="mt-4 flex items-center gap-2 hover:gap-3"
            >
              <FaArrowRightLong
                className={`${lang === 'en' ? '' : 'rotate-180'}`}
              />
              {t('buttons.discoverMore')}
            </Button>
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default LogosSection;
