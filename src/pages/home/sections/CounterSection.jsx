import { useTranslation } from 'react-i18next';
import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import CounterCard from '../components/CounterCard';

/* Import the icons */
import years from '../../../assets/icons/years.gif';
import countries from '../../../assets/icons/countries.gif';
import creativeDesigns from '../../../assets/icons/creativeDesigns.gif';
import completedProjects from '../../../assets/icons/completedProjects.gif';
import clientSatisfactionRate from '../../../assets/icons/clientSatisfactionRate.gif';
import happyClients from '../../../assets/icons/happyClients.gif';

/* Import the black icons */
import yearsBlack from '../../../assets/icons/years-black.gif';
import countriesBlack from '../../../assets/icons/countries-black.gif';
import creativeDesignsBlack from '../../../assets/icons/creativeDesigns-black.gif';
import completedProjectsBlack from '../../../assets/icons/completedProjects-black.gif';
import clientSatisfactionRateBlack from '../../../assets/icons/clientSatisfactionRate-black.gif';
import happyClientsBlack from '../../../assets/icons/happyClients-black.gif';

const counterData = [
  {
    num: 7,
    symbol: '+',
    title: 'counter.yearsExperience.title',
    description: 'counter.yearsExperience.description',
    iconLight: yearsBlack,
    iconDark: years,
  },
  {
    num: 10,
    symbol: '+',
    title: 'counter.countries.title',
    description: 'counter.countries.description',
    iconLight: countriesBlack,
    iconDark: countries,
  },
  {
    num: 1700,
    symbol: '+',
    title: 'counter.creativeDesigns.title',
    description: 'counter.creativeDesigns.description',
    iconLight: creativeDesignsBlack,
    iconDark: creativeDesigns,
  },
  {
    num: 500,
    symbol: '+',
    title: 'counter.completedProjects.title',
    description: 'counter.completedProjects.description',
    iconLight: completedProjectsBlack,
    iconDark: completedProjects,
  },
  {
    num: 97,
    symbol: '%',
    title: 'counter.satisfactionRate.title',
    description: 'counter.satisfactionRate.description',
    iconLight: clientSatisfactionRateBlack,
    iconDark: clientSatisfactionRate,
  },
  {
    num: 320,
    symbol: '+',
    title: 'counter.happyClients.title',
    description: 'counter.happyClients.description',
    iconLight: happyClientsBlack,
    iconDark: happyClients,
  },
];

const CounterSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <Container>
        <div className="grid place-items-center md:place-items-stretch grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {counterData.map((counter, index) => (
            <CounterCard
              key={index}
              num={counter.num}
              symbol={counter.symbol}
              title={t(counter.title)}
              description={t(counter.description)}
              iconLight={counter.iconLight}
              iconDark={counter.iconDark}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CounterSection;
