import Container from '../../../components/container';
import {
  Section,
  Description,
  Title,
  LittleTitle,
} from '../../../components/Section';
import ProcessCard from '../components/ProcessCard';
import { CiShare2 } from 'react-icons/ci';
import { PiHandshakeFill } from 'react-icons/pi';
import { MdCallReceived } from 'react-icons/md';

const process = [
  {
    title: 'Enroll',
    description:
      'Select the plan that fits your needs and start your journey to an iconic brand.',
    icon: <PiHandshakeFill size={36} />,
  },
  {
    title: 'Share',
    description:
      'Share your vision with us, and we’ll bring it to life with stunning designs.',
    icon: <CiShare2 size={36} />,
  },
  {
    title: 'Receive',
    description:
      'Your Iconic Brand is Ready! Receive your final designs with revisions until 100% satisfied.',
    icon: <MdCallReceived size={36} />,
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
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </Container>
    </Section>
  );
};

export default ProcessSection;
