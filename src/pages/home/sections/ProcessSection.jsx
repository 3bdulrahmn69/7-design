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
        <LittleTitle>Process</LittleTitle>
        <Title>How It works</Title>
        <Description>Iconic Brand in 3- Easy Steps</Description>
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
