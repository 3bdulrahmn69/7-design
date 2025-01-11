import Container from '../../../components/container';
import Logo from '../../../components/Logo';
import { Section, Title, LittleTitle } from '../../../components/Section';
import ComparisonCard from '../components/ComparisonCard';

const ComparisonSection = () => {
  const otherAgencies = [
    'Generic logo designs',
    'No free revisions',
    'No brand guidelines',
    'Slow delivery',
    'No industry research',
  ];

  const sevenDesignStudio = [
    'Unique, custom logo designs',
    'Up to 3 free revisions',
    'Comprehensive brand guidelines',
    'Fast and reliable delivery',
    'Industry-specific research',
  ];

  return (
    <Section id="comparison" aria-labelledby="comparison-title">
      <Container className="flex flex-col gap-5 text-gap">
        <LittleTitle id="comparison-title">Comparison</LittleTitle>
        <Title>Why Choose Seven Design Studio?</Title>
      </Container>
      <Container className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24 mt-16">
        <div className="w-full max-w-[450px]">
          <h4
            className="text-center text-primary-text text-2xl mb-4"
            aria-label="Other Agencies"
          >
            Other Agencies
          </h4>
          <ComparisonCard className="text-[rgba(0,0,0,0.5)] dark:text-[rgba(255,255,255,0.56)]">
            <ul className="list-none pl-0 space-y-6" role="list">
              {otherAgencies.map((item, index) => (
                <li key={`other-${index}`} className="flex items-center gap-2">
                  <span className="" aria-hidden="true">
                    ✖
                  </span>
                  <span className="text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </ComparisonCard>
        </div>
        <div className="w-full max-w-[450px]">
          <h4
            className="flex items-center justify-center gap-4 mb-4"
            aria-label="Seven Design Studio"
          >
            <Logo />
            <span className="text-2xl">Seven Design Studio</span>
          </h4>
          <ComparisonCard type="glow">
            <ul className="list-none pl-0 space-y-6" role="list">
              {sevenDesignStudio.map((item, index) => (
                <li key={`seven-${index}`} className="flex items-center gap-2">
                  <span
                    className="bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B] bg-clip-text text-transparent"
                    aria-hidden="true"
                  >
                    ✔
                  </span>
                  <span className="text-sm lg:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </ComparisonCard>
        </div>
      </Container>
    </Section>
  );
};

export default ComparisonSection;
