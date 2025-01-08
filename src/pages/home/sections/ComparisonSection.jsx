import Container from '../../../components/container';
import { Section, Title, LittleTitle } from '../../../components/Section';
import ComparisonCard from '../components/ComparisonCard';

const ComparisonSection = () => {
  return (
    <Section id={'comparison'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>Comparison</LittleTitle>
        <Title>But, why would you want to work with us?</Title>
      </Container>
      <Container className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 mt-16">
        <div className="w-1/3">
          <h4>Other Agencies</h4>
          <ComparisonCard>
            <p>❌ Generic logo designs</p>
            <p>❌ No free revisions</p>
            <p>❌ No brand guidelines</p>
            <p>❌ Slow delivery</p>
            <p>❌ No industry research</p>
          </ComparisonCard>
        </div>
        <div className="w-1/3">
          <h4>Seven Design Studio</h4>
          <ComparisonCard type="glow">
            <p>✅ Unique, custom logo designs</p>
            <p>✅ Up to 3 free revisions</p>
            <p>✅ Comprehensive brand guidelines</p>
            <p>✅ Fast and reliable delivery</p>
            <p>✅ Industry-specific research</p>
          </ComparisonCard>
        </div>
      </Container>
    </Section>
  );
};

export default ComparisonSection;
