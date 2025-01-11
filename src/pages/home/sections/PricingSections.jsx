import { useState } from 'react';
import Container from '../../../components/container';
import {
  Description,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import PricingCard from '../components/PricingCard';
import SmallPricingCard from '../components/SmallPricingCard';
import MovingSliderHover from '../../../components/MovingSliderHover';

const packages = [
  {
    type: 'Basic',
    packageName: 'Logo Design',
    features: {
      'Logo design (3 initial concepts)': true,
      '2 minor revisions included': true,
      'Logo usage guidelines': true,
      'Design of essential marketing materials': false,
      'Business Cards': false,
      Letterheads: false,
      Envelopes: false,
      'Logo Animation: A short video to bring your logo to life': false,
      'Social Media Designs (20 designs)': false,
    },
    prices: { USD: '$ 350', SAR: '1,316 SAR', EGP: '17,762 EGP' },
  },
  {
    type: 'Intermediate',
    packageName: 'Brand Identity Design',
    features: {
      'Logo design (3 initial concepts)': true,
      '2 minor revisions included': true,
      'Logo usage guidelines': true,
      'Design of essential marketing materials': true,
      'Business Cards': true,
      Letterheads: true,
      Envelopes: true,
      'Logo Animation: A short video to bring your logo to life': false,
      'Social Media Designs (20 designs)': false,
    },
    prices: { USD: '$ 700', SAR: '2,632 SAR', EGP: '35,525 EGP' },
  },
  {
    type: 'Advanced',
    packageName: 'Comprehensive Brand Identity',
    features: {
      'Logo design (3 initial concepts)': true,
      '2 minor revisions included': true,
      'Logo usage guidelines': true,
      'Design of essential marketing materials': true,
      'Business Cards': true,
      Letterheads: true,
      Envelopes: true,
      'Logo Animation: A short video to bring your logo to life': true,
      'Social Media Designs (20 designs)': true,
    },
    prices: { USD: '$ 1,200', SAR: '4,512 SAR', EGP: '60,900 EGP' },
  },
];

const otherPackages = [
  {
    packageName: 'Basic Logo Animation',
    features: [
      'Simple, professional logo animation with smooth transitions and minimal effects. Delivered in MP4 and GIF formats to suit your needs.',
    ],
    prices: {
      USD: '$ 150',
      SAR: '564 SAR',
      EGP: '7,612 EGP',
    },
  },
  {
    packageName: 'Advanced Logo Animation',
    features: [
      'Complex, professional logo animation with dynamic transitions and advanced effects. Delivered in MP4 and GIF formats for versatile presentation.',
    ],
    prices: {
      USD: '$ 300',
      SAR: '1,128 SAR',
      EGP: '15,225 EGP',
    },
  },
  {
    packageName: 'Social Media Designs',
    features: ['20 designs for social media platforms.'],
    prices: {
      USD: '$ 400',
      SAR: '1,504 SAR',
      EGP: '20,300 EGP',
    },
  },
  {
    packageName: 'Graphics Design',
    features: [
      'Custom graphics to boost your brand’s visual communication effectively. Includes brochures, flyers, social media designs, and tailored materials.',
    ],
    prices: {
      ask: "Let's Talk",
    },
  },
  {
    packageName: 'Website Design',
    features: [
      'Professional, user-friendly websites with modern UI/UX design, tailored functionality, and optimized user experience for better engagement.',
    ],
    prices: {
      ask: "Let's Talk",
    },
  },
  {
    packageName: 'Social Media Management',
    features: [
      'Monthly management of social platforms with content creation, scheduling, and performance analysis to enhance audience engagement.',
    ],
    prices: {
      USD: '$ 500/month',
      SAR: '1,880 SAR/month',
      EGP: '25,375 EGP/month',
    },
  },
  {
    packageName: 'Managing Ads Campaigns',
    features: [
      'Monthly advertising campaign management, including campaign setup, optimization, budget management, and detailed performance tracking.',
    ],
    prices: {
      USD: '$ 700/month',
      SAR: '2,632 SAR/month',
      EGP: '35,525 EGP/month',
    },
  },
];

const PricingSections = () => {
  const [currency, setCurrency] = useState('USD');

  return (
    <Section id={'pricing'}>
      <Container className="flex flex-col gap-[19.5px] text-gap mb-8">
        <LittleTitle>Pricing</LittleTitle>
        <Title>Pricing That Fits Your Needs</Title>
        <Description>
          Explore our flexible pricing for comprehensive design services that
          make your brand stand out—transparent, with no hidden fees.
        </Description>
      </Container>
      <Container className="flex flex-col md:flex-row gap-4 justify-center md:items-start items-center flex-nowrap md:flex-wrap">
        {packages.map((pkg, index) => (
          <PricingCard
            key={index}
            packageName={pkg.packageName}
            type={pkg.type}
            features={pkg.features}
            prices={pkg.prices}
            currency={currency}
            className={'w-[350px]'}
            special={index === 1}
          />
        ))}
      </Container>
      <Container className="py-4">
        <MovingSliderHover
          speed={50}
          direction="normal"
          arrayNumber={3}
          enableHover
          hoverSpeed={300}
        >
          {otherPackages.map((pkg, index) => (
            <SmallPricingCard
              key={index}
              packageName={pkg.packageName}
              features={pkg.features}
              prices={pkg.prices}
              currency={currency}
              className={'w-[300px] md:w-[400px]'}
            />
          ))}
        </MovingSliderHover>
      </Container>
    </Section>
  );
};

export default PricingSections;
