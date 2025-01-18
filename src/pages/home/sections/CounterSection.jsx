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

const counterData = [
  {
    num: 7,
    symbol: '+',
    title: 'counter.yearsExperience.title',
    description: 'counter.yearsExperience.description',
    icon: years,
  },
  {
    num: 10,
    symbol: '+',
    title: 'counter.countries.title',
    description: 'counter.countries.description',
    icon: countries,
  },
  {
    num: 1700,
    symbol: '+',
    title: 'counter.creativeDesigns.title',
    description: 'counter.creativeDesigns.description',
    icon: creativeDesigns,
  },
  {
    num: 500,
    symbol: '+',
    title: 'counter.completedProjects.title',
    description: 'counter.completedProjects.description',
    icon: completedProjects,
  },
  {
    num: 97,
    symbol: '%',
    title: 'counter.satisfactionRate.title',
    description: 'counter.satisfactionRate.description',
    icon: clientSatisfactionRate,
  },
  {
    num: 320,
    symbol: '+',
    title: 'counter.happyClients.title',
    description: 'counter.happyClients.description',
    icon: happyClients,
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
              icon={counter.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CounterSection;
