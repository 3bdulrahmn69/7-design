import { useTranslation } from 'react-i18next';
import Container from '../../../components/container';
import {
  Description,
  LatinSpan,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import MovingSlider from '../../../components/MovingSlider';
import ServiceCard from '../components/ServiceCard';

import { GiPencilRuler } from 'react-icons/gi';
import { MdAnimation } from 'react-icons/md';
import { TiSocialInstagram } from 'react-icons/ti';
import { SiTaichigraphics } from 'react-icons/si';
import { MdOutlineWeb } from 'react-icons/md';
import { MdOutlineAdsClick } from 'react-icons/md';
import { BiSolidLike } from 'react-icons/bi';

const ServicesOne = [
  {
    title: 'services.logoDesignTitle',
    description: 'services.logoDesignDescription',
    icon: <GiPencilRuler style={{ fill: 'url(#icon-gradient)' }} />,
  },
  {
    title: 'services.brandIdentityDesignTitle',
    description: 'services.brandIdentityDesignDescription',
    icon: (
      <div className="relative w-10 h-10 ">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-10 h-10 select-none">
          <span className="block w-full h-1 bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B] rounded-site"></span>
          <p className="bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B] bg-clip-text text-transparent font-black text-[10px] text-center -my-2 font-mono">
            BRAND
          </p>
          <span className="block w-full h-1 bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B] rounded-site"></span>
        </div>
      </div>
    ),
  },
  {
    title: 'services.logoAnimationTitle',
    description: 'services.logoAnimationDescription',
    icon: <MdAnimation style={{ fill: 'url(#icon-gradient)' }} />,
  },
  {
    title: 'services.socialMediaDesignsTitle',
    description: 'services.socialMediaDesignsDescription',
    icon: <TiSocialInstagram style={{ fill: 'url(#icon-gradient)' }} />,
  },
];

const ServicesTwo = [
  {
    title: 'services.graphicsDesignTitle',
    description: 'services.graphicsDesignDescription',
    icon: <SiTaichigraphics style={{ fill: 'url(#icon-gradient)' }} />,
  },
  {
    title: 'services.websiteDesignAndDevelopmentTitle',
    description: 'services.websiteDesignAndDevelopmentDescription',
    icon: <MdOutlineWeb style={{ fill: 'url(#icon-gradient)' }} />,
  },
  {
    title: 'services.managingAdsCampaignsTitle',
    description: 'services.managingAdsCampaignsDescription',
    icon: <MdOutlineAdsClick style={{ fill: 'url(#icon-gradient)' }} />,
  },
  {
    title: 'services.socialMediaManagementTitle',
    description: 'services.socialMediaManagementDescription',
    icon: <BiSolidLike style={{ fill: 'url(#icon-gradient)' }} />,
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <Section id={'services'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>{t('services.sectionTitle')}</LittleTitle>
        <Title>
          {t('services.allYour')}{' '}
          <LatinSpan>{t('services.designNeeds')}</LatinSpan>
        </Title>
        <Description>{t('services.description')}</Description>
      </Container>
      <Container className="flex flex-col gap-4 my-4 mt-16">
        <MovingSlider speed={120} arrayNumber={6} direction="reverse">
          {ServicesOne.map((service, index) => (
            <ServiceCard
              key={index}
              title={t(service.title)}
              icon={service?.icon}
              img={service?.img}
            />
          ))}
        </MovingSlider>
        <MovingSlider speed={120} arrayNumber={6}>
          {ServicesTwo.map((service, index) => (
            <ServiceCard
              key={index}
              title={t(service.title)}
              icon={service?.icon}
              img={service?.img}
            />
          ))}
        </MovingSlider>
      </Container>
    </Section>
  );
};

export default ServicesSection;
