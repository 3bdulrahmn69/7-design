import { useState, useEffect, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import Container from '../../../components/container';
import {
  Description,
  LatinSpan,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import PricingCard from '../components/PricingCard';
import SmallPricingCard from '../components/SmallPricingCard';
import MovingSliderHover from '../../../components/MovingSliderHover';

const packages = [
  {
    type: 'basic',
    packageName: 'logoDesign',
    features: {
      'pricing.features.one': true,
      'pricing.features.two': true,
      'pricing.features.three': true,
      'pricing.features.four': false,
      'pricing.features.five': false,
      'pricing.features.six': false,
      'pricing.features.seven': false,
      'pricing.features.eight': false,
      'pricing.features.nine': false,
    },
    prices: { USD: '$ 350', SAR: '350 SAR', EGP: '350 EGP' },
  },
  {
    type: 'intermediate',
    packageName: 'brandIdentityDesign',
    features: {
      'pricing.features.one': true,
      'pricing.features.two': true,
      'pricing.features.three': true,
      'pricing.features.four': true,
      'pricing.features.five': true,
      'pricing.features.six': true,
      'pricing.features.seven': true,
      'pricing.features.eight': false,
      'pricing.features.nine': false,
    },
    prices: { USD: '$ 700', SAR: '700 SAR', EGP: '700 EGP' },
  },
  {
    type: 'advanced',
    packageName: 'fullBrandIdentity',
    features: {
      'pricing.features.one': true,
      'pricing.features.two': true,
      'pricing.features.three': true,
      'pricing.features.four': true,
      'pricing.features.five': true,
      'pricing.features.six': true,
      'pricing.features.seven': true,
      'pricing.features.eight': true,
      'pricing.features.nine': true,
    },
    prices: { USD: '$ 1,200', SAR: '1,200 SAR', EGP: '1,200 EGP' },
  },
];

const otherPackages = [
  {
    packageName: 'basicLogoAnimation',
    features: 'pricing.otherPackages.one',
    prices: {
      USD: '$ 150',
      SAR: '150 SAR',
      EGP: '150 EGP',
    },
  },
  {
    packageName: 'advancedLogoAnimation',
    features: 'pricing.otherPackages.two',
    prices: {
      USD: '$ 300',
      SAR: '300 SAR',
      EGP: '300 EGP',
    },
  },
  {
    packageName: 'socialMediaDesigns',
    features: 'pricing.otherPackages.three',
    prices: {
      USD: '$ 400',
      SAR: '400 SAR',
      EGP: '400 EGP',
    },
  },
  {
    packageName: 'graphicsDesign',
    features: 'pricing.otherPackages.four',
    prices: {
      ask: "Let's Talk",
    },
  },
  {
    packageName: 'websiteDesign',
    features: 'pricing.otherPackages.five',
    prices: {
      ask: "Let's Talk",
    },
  },
  {
    packageName: 'socialMediaManagement',
    features: 'pricing.otherPackages.six',
    prices: {
      USD: '$ 500/month',
      SAR: '500 SAR/month',
      EGP: '500 EGP/month',
    },
  },
  {
    packageName: 'managingAdsCampaigns',
    features: 'pricing.otherPackages.seven',
    prices: {
      USD: '$ 700/month',
      SAR: '700 SAR/month',
      EGP: '700 EGP/month',
    },
  },
];

const PricingSections = () => {
  const [currency, setCurrency] = useState('USD');
  const [exchangeRates, setExchangeRates] = useState({
    USD: 1,
    SAR: 1,
    EGP: 1,
  });
  const { t } = useTranslation();

  // Fetch exchange rates only once when the component mounts
  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json`
        );
        const data = await response.json();
        const egpRate = data.usd.egp;
        const sarRate = data.usd.sar;

        setExchangeRates({ USD: 1, SAR: sarRate, EGP: egpRate });
      } catch (error) {
        console.error(
          'Error fetching data from primary source, trying fallback...',
          error
        );

        const fallbackResponse = await fetch(
          `https://latest.currency-api.pages.dev/v1/currencies/usd.json`
        );
        const fallbackData = await fallbackResponse.json();
        const egpRate = fallbackData.usd.egp;
        const sarRate = fallbackData.usd.sar;

        setExchangeRates({ USD: 1, SAR: sarRate, EGP: egpRate });
      }
    };

    getExchangeRate();
  }, []); // Only run once on mount

  // Memoize the price conversion logic to prevent recalculating on each render
  const convertPrice = useCallback(
    (price, currency) => {
      const formatPrice = (value) => new Intl.NumberFormat().format(value);

      const priceValue = parseFloat(price.replace(/[^\d.-]/g, ''));
      const formattedPrice = formatPrice(priceValue);

      if (price.includes('/month')) {
        if (currency === 'USD') return `$ ${formattedPrice} /month`;
        if (currency === 'SAR')
          return `${formatPrice(
            (priceValue * exchangeRates.SAR).toFixed(0)
          )} SAR/month`;
        if (currency === 'EGP')
          return `${formatPrice(
            (priceValue * exchangeRates.EGP).toFixed(0)
          )} EGP/month`;
      } else {
        if (currency === 'USD') return `$ ${formattedPrice}`;
        if (currency === 'SAR')
          return `${formatPrice(
            (priceValue * exchangeRates.SAR).toFixed(0)
          )} SAR`;
        if (currency === 'EGP')
          return `${formatPrice(
            (priceValue * exchangeRates.EGP).toFixed(0)
          )} EGP`;
      }
    },
    [exchangeRates]
  ); // Depend on exchangeRates to avoid unnecessary recalculations

  // Memoize the pricing cards and slider for better performance
  const renderPricingCards = useMemo(() => {
    return packages.map((pkg, index) => (
      <PricingCard
        key={index}
        packageName={t('pricing.packages.' + pkg.packageName)}
        type={t('pricing.packages.' + pkg.type)}
        features={pkg.features}
        prices={{
          ...pkg.prices,
          [currency]: convertPrice(pkg.prices[currency], currency),
        }}
        currency={currency}
        className={'w-[310px] sm:w-[350px]'}
        special={index === 1}
        setCurrency={setCurrency}
      />
    ));
  }, [currency, convertPrice, t]);

  const renderSmallPricingCards = useMemo(() => {
    return otherPackages.map((pkg, index) => (
      <SmallPricingCard
        key={index}
        packageName={t('pricing.otherPackages.' + pkg.packageName)}
        features={t(pkg.features)}
        prices={{
          ...pkg.prices,
          [currency]: pkg.prices[currency]
            ? convertPrice(pkg.prices[currency], currency)
            : "Let's Talk",
        }}
        currency={currency}
        className={'w-[350px]'}
      />
    ));
  }, [currency, convertPrice, t]);

  return (
    <Section id={'pricing'}>
      <Container className="flex flex-col gap-[19.5px] text-gap mb-8">
        <LittleTitle>{t('pricing.titleDis')}</LittleTitle>
        <Title>
          {t('pricing.title')} <LatinSpan>{t('pricing.YourNeeds')} </LatinSpan>
        </Title>
        <Description>{t('pricing.description')}</Description>
      </Container>
      <Container className="mt-16 flex flex-col md:flex-row gap-4 justify-center md:items-start items-center flex-nowrap md:flex-wrap">
        <div
          dir="ltr"
          className="flex justify-center items-center gap-8 bg-primaryLightWhite dark:bg-primaryDarkBlack  border-[1px] border-secondary-text rounded-site py-4 px-8 w-fit mx-auto"
        >
          <span className="bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site border-[1px] border-secondary-text ">
            <button
              onClick={() => setCurrency('USD')}
              className={`${
                currency === 'USD' &&
                'bg-gradient-to-t-orange bg-clip-text text-transparent'
              } p-2`}
            >
              USD
            </button>
          </span>
          <span className="bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site border-[1px] border-secondary-text ">
            <button
              onClick={() => setCurrency('SAR')}
              className={`${
                currency === 'SAR' &&
                'bg-gradient-to-t-orange bg-clip-text text-transparent'
              } p-2`}
            >
              SAR
            </button>
          </span>
          <span className="bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site border-[1px] border-secondary-text ">
            <button
              onClick={() => setCurrency('EGP')}
              className={`${
                currency === 'EGP' &&
                'bg-gradient-to-t-orange bg-clip-text text-transparent'
              } p-2`}
            >
              EGP
            </button>
          </span>
        </div>
      </Container>
      <Container className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:items-start items-center flex-nowrap md:flex-wrap">
        {renderPricingCards}
      </Container>
      <Container className="py-4">
        <MovingSliderHover speed={320} arrayNumber={10} enableHover>
          {renderSmallPricingCards}
        </MovingSliderHover>
      </Container>
    </Section>
  );
};

export default PricingSections;
