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
    packageName: 'Full Brand Identity',
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
      <Container className="mt-16 flex flex-col md:flex-row gap-4 justify-center md:items-start items-center flex-nowrap md:flex-wrap">
        <div className="flex justify-center items-center gap-8 border-[1px] border-secondary-text rounded-site py-4 px-8 w-fit mx-auto">
          <button
            onClick={() => setCurrency('USD')}
            className={` rounded-site border-[1px] border-secondary-text ${
              currency === 'USD' &&
              'bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B] bg-clip-text text-transparent'
            } p-2`}
          >
            USD
          </button>
          <button
            onClick={() => setCurrency('SAR')}
            className={` rounded-site border-[1px] border-secondary-text ${
              currency === 'SAR' &&
              'bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B] bg-clip-text text-transparent'
            } p-2`}
          >
            SAR
          </button>
          <button
            onClick={() => setCurrency('EGP')}
            className={` rounded-site border-[1px] border-secondary-text ${
              currency === 'EGP' &&
              'bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B] bg-clip-text text-transparent'
            } p-2`}
          >
            EGP
          </button>
        </div>
      </Container>
      <Container className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:items-start items-center flex-nowrap md:flex-wrap">
        {packages.map((pkg, index) => (
          <PricingCard
            key={index}
            packageName={pkg.packageName}
            type={pkg.type}
            features={pkg.features}
            prices={pkg.prices}
            currency={currency}
            className={'w-[310px] sm:w-[350px]'}
            special={index === 1}
            setCurrency={setCurrency}
          />
        ))}
      </Container>
      <Container className="py-4">
        <MovingSliderHover speed={100} arrayNumber={6} enableHover>
          {otherPackages.map((pkg, index) => (
            <SmallPricingCard
              key={index}
              packageName={pkg.packageName}
              features={pkg.features}
              prices={pkg.prices}
              currency={currency}
              className={'w-[350px]'}
            />
          ))}
        </MovingSliderHover>
      </Container>
    </Section>
  );
};

export default PricingSections;
