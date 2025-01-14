import Container from '../../../components/container';
import {
  Description,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import BenefitCard from '../components/BenefitCard';

/* import the icons */
import expertDesigners from '../../../assets/icons/expertDesigners.gif';
import creativeDesigns from '../../../assets/icons/creativeDesigns.gif';
import engagingVisuals from '../../../assets/icons/engagingVisuals.gif';
import fastDelivery from '../../../assets/icons/fastDelivery.gif';
import transparentPricing from '../../../assets/icons/transparentPricing.gif';
import fullSatisfaction from '../../../assets/icons/fullSatisfaction.gif';

const Benefits = [
  {
    title: 'Expert Designers',
    description:
      'With years of experience and a portfolio of successful projects, we deliver designs you can trust.',
    icon: expertDesigners,
  },
  {
    title: 'Unique Designs',
    description:
      'Stand out with custom, one-of-a-kind designs tailored specifically for your brand.',
    icon: creativeDesigns,
  },
  {
    title: 'Engaging Visuals',
    description:
      'Our visuals are designed to captivate your audience and leave a lasting impression.',
    icon: engagingVisuals,
  },
  {
    title: 'Fast Delivery',
    description:
      'Get your designs quickly, professionally, and efficiently, ensuring your projects stay on track.',
    icon: fastDelivery,
  },
  {
    title: 'Transparent Pricing',
    description:
      'We offer clear and competitive pricing with no hidden fees. Choose a plan that fits your budget.',
    icon: transparentPricing,
  },
  {
    title: 'Full Satisfaction',
    description:
      'Your satisfaction is our top priority. We promise to do our best to make you 100% satisfied.',
    icon: fullSatisfaction,
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
      <Container className="flex flex-col items-center justify-center gap-4 md:gap-12 mt-16">
        <div className="w-full flex justify-around items-center gap-4 md:gap-0 flex-col md:flex-row">
          {Benefits.slice(0, 3).map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
        <div className="w-full flex justify-around items-center gap-4 md:gap-0 flex-col md:flex-row">
          {Benefits.slice(3, 6).map((benefit, index) => (
            <BenefitCard
              key={index}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
