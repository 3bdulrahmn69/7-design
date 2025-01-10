import Container from '../../../components/container';
import {
  Description,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import BenefitCard from '../components/BenefitCard';

import test from '../../../assets/test.svg';

const Benefits = [
  {
    title: 'Expert Designers',
    description:
      'With years of experience and a portfolio of successful projects, we deliver designs you can trust.',
  },
  {
    title: 'Unique Designs',
    description:
      'Stand out with custom, one-of-a-kind designs tailored specifically for your brand.',
  },
  {
    title: 'Engaging Visuals',
    description:
      'Our visuals are designed to captivate your audience and leave a lasting impression.',
  },
  {
    title: 'Fast Delivery',
    description:
      'Get your designs quickly and efficiently, ensuring your projects stay on track.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'We offer clear and competitive pricing with no hidden fees. Choose a plan that fits your budget.',
  },
  {
    title: 'Full Satisfaction',
    description:
      'Your satisfaction is our top priority. We promise to do our best to make you 100% satisfied.',
  },
];

const BenefitsSection = () => {
  return (
    <Section id={'benefits'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>Benefits</LittleTitle>
        <Title>Why Us</Title>
        <Description>
          Our plans come with the promise of limitless Creativity and Dedicated
          Support.
        </Description>
      </Container>
      <Container className="flex flex-col items-center justify-center gap-8 md:gap-16 lg:gap-24 mt-16">
        <div className="w-full flex justify-around items-center">
          {Benefits.slice(0, 3).map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              image={test}
            />
          ))}
        </div>
        <div className="w-full flex justify-around items-center">
          {Benefits.slice(3, 6).map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              image={test}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
