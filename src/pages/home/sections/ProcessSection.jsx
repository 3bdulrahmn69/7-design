import Container from '../../../components/container';
import {
  Section,
  Description,
  Title,
  LittleTitle,
  LatinSpan,
} from '../../../components/Section';
import SecCard from '../components/SecCard';

/* Import the icons */
import enroll from '../../../assets/icons/enroll.gif';
import share from '../../../assets/icons/share.gif';
import receive from '../../../assets/icons/receive.gif';

const process = [
  {
    title: 'Enroll',
    description:
      'Select the plan that fits your needs and start your journey to an iconic brand.',
    icon: enroll,
  },
  {
    title: 'Share',
    description:
      'Share your vision with us, and we’ll bring it to life with stunning designs.',
    icon: share,
  },
  {
    title: 'Receive',
    description:
      'Your Iconic Brand is Ready! Receive your final designs with revisions until 100% satisfied.',
    icon: receive,
  },
];

const ProcessSection = () => {
  return (
    <Section id={'process'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>Process</LittleTitle>
        <Title>
          How It <LatinSpan>works</LatinSpan>
        </Title>
        <Description>Iconic Brand in 3- Easy Steps</Description>
      </Container>
      <Container className="mt-16">
        <div className="w-full flex justify-around items-center gap-16 flex-col md:flex-row flex-wrap">
          {process.map((item, index) => (
            <SecCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProcessSection;
