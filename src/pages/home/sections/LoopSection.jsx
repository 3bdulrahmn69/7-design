import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import LogosBanner from '../components/LogosBanner';

const LoopSection = () => {
  return (
    <Section id={'about'}>
      <Container>
        <p className="font-Satoshi text-center pt-2 text-gray-500">You&apos;re in good hands:</p>
        <LogosBanner />
      </Container>
    </Section>
  );
};

export default LoopSection;
