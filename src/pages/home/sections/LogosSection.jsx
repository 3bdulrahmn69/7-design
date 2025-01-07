import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import MovingSlider from '../../../components/MovingSlider';
import BannerImg from '../../../components/BannerImg';
import { myLogos } from '../../../services/myLogos';

const LogosSection = () => {
  return (
    <Section id={'about'}>
      <Container>
        <p className="font-Satoshi text-center pt-2 text-gray-500">
          You&apos;re in good hands:
        </p>
        <MovingSlider speed={50} direction="left">
          {myLogos.map((logo) => (
            <BannerImg key={logo.id} img={logo.img} link={logo.link} />
          ))}
        </MovingSlider>
      </Container>
    </Section>
  );
};

export default LogosSection;
