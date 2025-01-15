import Container from '../../../components/container';
import {
  Section,
  Title,
  LittleTitle,
  LatinSpan,
} from '../../../components/Section';
import ComparisonCard from '../components/ComparisonCard';
import { FaCheck } from 'react-icons/fa6';
import { TfiClose } from 'react-icons/tfi';

import logo from '../../../assets/logo-textl.png';

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
        <Title>
          Why <LatinSpan>Choose</LatinSpan> Seven Design Studio?
        </Title>
      </Container>
      <Container className="flex flex-col md:flex-row items-center justify-center gap-11 md:gap-16 lg:gap-24 mt-16">
        <div className="w-full flex flex-col items-center justify-center md:max-w-[450px]">
          <h4
            className="text-center text-primary-text text-2xl mb-8"
            aria-label="Other Agencies"
          >
            Other Agencies
          </h4>
          <ComparisonCard className="text-[rgba(0,0,0,0.5)] dark:text-[rgba(255,255,255,0.56)]">
            <ul className="space-y-6" role="list">
              {otherAgencies.map((item, index) => (
                <li key={`other-${index}`} className="flex items-center gap-2">
                  <span className="" aria-hidden="true">
                    <TfiClose size={20} />
                  </span>
                  <span className="ml-1 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </ComparisonCard>
        </div>
        <div className="w-full flex flex-col items-center justify-center md:max-w-[450px]">
          <h4
            className="flex items-center justify-center gap-4 mb-8"
            aria-label="Seven Design Studio"
          >
            <img
              src={logo}
              alt="Seven Design Studio"
              className="w-32 md:w-44"
            />
          </h4>
          <ComparisonCard type="glow">
            <ul className="space-y-6" role="list">
              {sevenDesignStudio.map((item, index) => (
                <li key={`seven-${index}`} className="flex items-center gap-2">
                  <span aria-hidden="true">
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient
                          id="icon-gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop
                            offset="0%"
                            style={{ stopColor: '#FF7B00', stopOpacity: 1 }}
                          />
                          <stop
                            offset="50%"
                            style={{ stopColor: '#FFDA00', stopOpacity: 1 }}
                          />
                          <stop
                            offset="100%"
                            style={{ stopColor: '#FFE48B', stopOpacity: 1 }}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                    <FaCheck
                      size={24}
                      style={{ fill: 'url(#icon-gradient)' }}
                    />
                  </span>
                  <span className="ml-1 text-lg">{item}</span>
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
