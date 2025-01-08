import { useState } from 'react';
import Container from '../../../components/container';
import {
  Description,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import PricingCard from '../components/PricingCard';

const packages = [
  {
    type: 'Basic',
    packageName: 'Logo Design',
    features: [
      'Logo design (3 initial concepts).',
      '2 minor revisions included.',
      'Logo usage guidelines.',
    ],
    prices: {
      USD: '$ 350',
      SAR: '1,316 SAR',
      EGP: '17,762 EGP',
    },
  },
  {
    type: 'Intermediate',
    packageName: ' Brand Identity Design',
    features: [
      'Everything included in the Basic Package (Logo Design).',
      'Design of essential marketing materials:',
      'Business Cards.',
      'Letterheads.',
      'Envelopes.',
      '2 minor revisions included.',
    ],
    prices: {
      USD: '$ 700',
      SAR: '2,632 SAR',
      EGP: '35,525 EGP',
    },
  },
  {
    type: 'Advanced',
    packageName: 'Comprehensive Brand Identity',
    features: [
      'Everything included in the Intermediate Package (Logo Design & Brand Identity).',
      'Logo Animation: A short video to bring your logo to life.',
      'Social Media Designs:',
      '20 designs (posts, stories, banners, etc.).',
      '3 minor revisions included.',
      'Delivery of all files: Brand identity files, logo animation, and social media designs.',
    ],
    prices: {
      USD: '$ 1,200',
      SAR: '4,512 SAR',
      EGP: '60,900 EGP',
    },
  },
];

const otherPackages = [
  {
    packageName: 'Basic Logo Animation',
    features: [
      'Simple, clean animation to bring your logo to life.',
      'Basic transitions and effects.',
      'Delivery in multiple formats (MP4, GIF).',
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
      'Complex, professional animation with advanced effects.',
      'Custom transitions and dynamic movements tailored to your brand.',
      'Delivery in multiple formats (MP4, GIF).',
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
      'Custom graphics design to enhance your brand’s visual communication.',
      'Marketing materials (Brochures, Flyers).',
      'Social media designs.',
      'Any other materials based on your needs.',
    ],
    prices: {
      ask: "Let's Talk",
    },
  },
  {
    packageName: 'Website Design and Development',
    features: [
      'Professional and user-friendly websites that reflect your brand identity.',
      'UI/UX design.',
      'Functionality development tailored to your needs.',
      'User experience optimization for better engagement and conversions.',
    ],
    prices: {
      ask: "Let's Talk",
    },
  },
  {
    packageName: 'Social Media Management',
    features: [
      'Monthly management of your social media platforms (Facebook, Instagram, Twitter, etc.).',
      'Content creation and scheduling.',
      'Performance analysis and reporting.',
      'User experience optimization for better engagement and conversions.',
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
      'Monthly management of your advertising campaigns (Facebook Ads, Google Ads, etc.).',
      'Campaign setup and optimization.',
      'Budget management.',
      'Performance tracking and reporting.',
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
          Explore our flexible pricing options to find the best fit for your
          business. With transparent pricing and no hidden fees, we offer
          comprehensive design services tailored to help your brand stand out.
        </Description>
      </Container>
      <Container className="flex flex-col md:flex-row gap-4 justify-center md:items-start items-center">
        {packages.map((pkg, index) => (
          <PricingCard
            key={index}
            packageName={pkg.packageName}
            type={pkg.type}
            features={pkg.features}
            prices={pkg.prices}
            currency={currency}
            className={'w-[300px] md:w-[400px]'}
          />
        ))}
      </Container>
    </Section>
  );
};

export default PricingSections;
