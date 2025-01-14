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
    title: 'Years of Experience',
    description:
      'With over 7 years of experience, we bring creativity and expertise to every project..',
    icon: years,
  },
  {
    num: 10,
    symbol: '+',
    title: 'Countries',
    description: 'Our designs have reached clients in 10+ countries worldwide.',
    icon: countries,
  },
  {
    num: 1700,
    symbol: '+',
    title: 'Creative Designs',
    description:
      'From logos to packaging, we’ve created 1700+ unique designs that stand out.',
    icon: creativeDesigns,
  },
  {
    num: 500,
    symbol: '+',
    title: 'Completed Projects',
    description:
      "We’ve successfully delivered 500+ projects, each tailored to meet our clients' unique needs.",
    icon: completedProjects,
  },
  {
    num: 97,
    symbol: '%',
    title: 'Client Satisfaction Rate',
    description:
      'Our 97% client satisfaction rate reflects our commitment to excellence.',
    icon: clientSatisfactionRate,
  },
  {
    num: 320,
    symbol: '+',
    title: 'Happy Clients',
    description:
      'Join our family of 320+ happy clients who trust us with their brand identity.',
    icon: happyClients,
  },
];

const CounterSection = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {counterData.map((counter, index) => (
            <CounterCard
              key={index}
              num={counter.num}
              symbol={counter.symbol}
              title={counter.title}
              description={counter.description}
              icon={counter.icon}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default CounterSection;
