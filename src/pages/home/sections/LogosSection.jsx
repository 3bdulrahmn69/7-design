import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import MovingSlider from '../../../components/MovingSlider';
import BannerImg from '../../../components/BannerImg';
import { myLogosWhite, myLogosBlack } from '../../../services/myLogos';

const LogosSection = () => {
  return (
    <Section id={'logos'}>
      <Container>
        <p className="font-Satoshi text-center pt-2 text-primary-text text">
          You&apos;re in good hands:
        </p>
        <MovingSlider speed={50} direction="left" className="hidden dark:block">
          {myLogosWhite.map((logo, index) => (
            <BannerImg key={index} img={logo.img} link={logo.link} />
          ))}
        </MovingSlider>
        <MovingSlider speed={50} direction="left" className="block dark:hidden">
          {myLogosBlack.map((logo, index) => (
            <BannerImg key={index} img={logo.img} link={logo.link} />
          ))}
        </MovingSlider>
      </Container>
    </Section>
  );
};

export default LogosSection;
