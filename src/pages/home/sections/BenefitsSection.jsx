import Container from '../../../components/container';
import {
  Description,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import BenefitCard from '../components/BenefitCard';

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
        <div className="w-full flex justify-center items-center">
          <BenefitCard />
          <BenefitCard />
          <BenefitCard />
        </div>
        <div className="w-full flex justify-center items-center">
          <BenefitCard />
          <BenefitCard />
          <BenefitCard />
        </div>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
