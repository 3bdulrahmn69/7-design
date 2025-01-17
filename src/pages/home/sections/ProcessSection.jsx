import { useTranslation } from 'react-i18next';
import Container from '../../../components/container';
import {
  Section,
  Description,
  Title,
  LittleTitle,
  LatinSpan,
} from '../../../components/Section';
import SecCard from '../components/SecCard';

/* Import the icons */
import enroll from '../../../assets/icons/enroll.gif';
import share from '../../../assets/icons/share.gif';
import receive from '../../../assets/icons/receive.gif';

const process = [
  {
    title: 'process.enrollTitle',
    description: 'process.enrollDescription',
    icon: enroll,
  },
  {
    title: 'process.shareTitle',
    description: 'process.shareDescription',
    icon: share,
  },
  {
    title: 'process.receiveTitle',
    description: 'process.receiveDescription',
    icon: receive,
  },
];

const ProcessSection = () => {
  const { t } = useTranslation();

  return (
    <Section id={'process'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>{t('process.sectionTitle')}</LittleTitle>
        <Title>
          {t('process.howIt')} <LatinSpan>{t('process.works')}</LatinSpan>
        </Title>
        <Description>{t('process.description')}</Description>
      </Container>
      <Container className="mt-16">
        <div className="w-full flex justify-around items-center gap-16 flex-col md:flex-row flex-wrap">
          {process.map((item, index) => (
            <SecCard
              key={index}
              icon={item.icon}
              title={t(item.title)}
              description={t(item.description)}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProcessSection;
