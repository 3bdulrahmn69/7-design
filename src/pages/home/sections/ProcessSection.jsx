import Container from '../../../components/container';
import {
  Section,
  Description,
  Title,
  LittleTitle,
} from '../../../components/Section';
import ProcessCard from '../components/ProcessCard';

const ProcessSection = () => {
  return (
    <Section id={'process'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>Our Projects</LittleTitle>
        <Title>Our simple 3-step process to skyrocket your business.</Title>
        <Description>
          From Google ads, to Meta ads, to TikTok ads, and even content
          creation, we&apos;ve got you covered on everything front.
        </Description>
      </Container>
      <Container className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 mt-16">
        <ProcessCard></ProcessCard>
        <ProcessCard></ProcessCard>
        <ProcessCard></ProcessCard>
      </Container>
    </Section>
  );
};

export default ProcessSection;
