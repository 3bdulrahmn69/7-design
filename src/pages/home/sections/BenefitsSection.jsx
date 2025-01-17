import { useTranslation } from 'react-i18next';
import Container from '../../../components/container';
import {
  Description,
  LatinSpan,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import SecCard from '../components/SecCard';

/* import the icons */
import expertDesigners from '../../../assets/icons/expertDesigners.gif';
import uniqueDesigns from '../../../assets/icons/uniqueDesigns.gif';
import engagingVisuals from '../../../assets/icons/engagingVisuals.gif';
import fastDelivery from '../../../assets/icons/fastDelivery.gif';
import transparentPricing from '../../../assets/icons/transparentPricing.gif';
import fullSatisfaction from '../../../assets/icons/fullSatisfaction.gif';

const Benefits = [
  {
    title: 'benefits.expertDesignersTitle',
    description: 'benefits.expertDesignersDescription',
    icon: expertDesigners,
  },
  {
    title: 'benefits.uniqueDesignsTitle',
    description: 'benefits.uniqueDesignsDescription',
    icon: uniqueDesigns,
  },
  {
    title: 'benefits.engagingVisualsTitle',
    description: 'benefits.engagingVisualsDescription',
    icon: engagingVisuals,
  },
  {
    title: 'benefits.fastDeliveryTitle',
    description: 'benefits.fastDeliveryDescription',
    icon: fastDelivery,
  },
  {
    title: 'benefits.transparentPricingTitle',
    description: 'benefits.transparentPricingDescription',
    icon: transparentPricing,
  },
  {
    title: 'benefits.fullSatisfactionTitle',
    description: 'benefits.fullSatisfactionDescription',
    icon: fullSatisfaction,
  },
];

const BenefitsSection = () => {
  const { t } = useTranslation();

  return (
    <Section id={'benefits'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>{t('benefits.sectionTitle')}</LittleTitle>
        <Title>
          {t('benefits.why')} <LatinSpan>{t('benefits.us')}</LatinSpan>
        </Title>
        <Description>{t('benefits.description')}</Description>
      </Container>
      <Container className="mt-16">
        <div className="w-full flex justify-around items-center gap-16 flex-col md:flex-row flex-wrap">
          {Benefits.map((benefit, index) => (
            <SecCard
              key={index}
              title={t(benefit.title)}
              description={t(benefit.description)}
              icon={benefit.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default BenefitsSection;
