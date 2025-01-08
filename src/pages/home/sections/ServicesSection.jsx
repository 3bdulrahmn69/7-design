import Container from '../../../components/container';
import {
  Description,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';

const ServicesSection = () => {
  return (
    <Section id={'services'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>Services</LittleTitle>
        <Title>How can we help you</Title>
        <Description>
          From logo design to comprehensive brand identity, our expert team
          crafts unique visual solutions that elevate your business and leave a
          lasting impression.
        </Description>
      </Container>
      <Container className="flex flex-col items-center justify-center gap-8 md:gap-16 lg:gap-24 mt-16"></Container>
    </Section>
  );
};

export default ServicesSection;
