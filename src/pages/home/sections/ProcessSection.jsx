import Container from '../../../components/container';
import {
  Section,
  Description,
  Title,
  LittleTitle,
} from '../../../components/Section';
import ProcessCard from '../components/ProcessCard';

const process = [
  {
    title: 'Enroll',
    description:
      'Select the plan that fits your needs and start your journey to an iconic brand.',
  },
  {
    title: 'Share',
    description:
      'Share your vision with us, and we’ll bring it to life with stunning designs.',
  },
  {
    title: 'Receive',
    description:
      'Your Iconic Brand is Ready! Receive your final designs and enjoy the revisions included in your plan until you’re 100% satisfied.',
  },
];

const ProcessSection = () => {
  return (
    <Section id={'process'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>Process</LittleTitle>
        <Title>How It works</Title>
        <Description>Iconic Brand in 3- Easy Steps</Description>
      </Container>
      <Container className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 mt-16">
        {process.map((item, index) => (
          <ProcessCard
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </Container>
    </Section>
  );
};

export default ProcessSection;
