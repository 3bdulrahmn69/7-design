import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import MovingSlider from '../../../components/MovingSlider';
import BannerImg from '../../../components/BannerImg';
import { myLogosWhite, myLogosBlack } from '../../../services/myLogos';
import Button from '../../../components/Button';

const LogosSection = () => {
  return (
    <Section id={'logos'}>
      <Container>
        <p className="font-Satoshi text-center pt-2 mb-4 text-primary-text text">
          You&apos;re in good hands:
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
        <div className='flex items-center justify-center'>
          <a
            href="https://www.behance.net/drme99"
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary" className="mt-4">
              Discover more
            </Button>
          </a>
        </div>
      </Container>
    </Section>
  );
};

export default LogosSection;
