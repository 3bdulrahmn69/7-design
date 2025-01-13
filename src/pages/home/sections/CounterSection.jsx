import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import CounterCard from '../components/CounterCard';
import { IoMdHappy } from 'react-icons/io';
import { IoLogoDesignernews } from 'react-icons/io5';
import { AiFillLike } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { FaRegCalendarDays } from 'react-icons/fa6';
import { MdIncompleteCircle } from 'react-icons/md';

const counterData = [
  {
    num: 7,
    symbol: '+',
    title: 'Years of Experience',
    description:
      'With over 7 years of experience, we bring creativity and expertise to every project..',
    icon: <FaRegCalendarDays size={42} />,
  },
  {
    num: 10,
    symbol: '+',
    title: 'Countries',
    description: 'Our designs have reached clients in 10+ countries worldwide.',
    icon: <BiWorld size={42} />,
  },
  {
    num: 1700,
    symbol: '+',
    title: 'Unique Designs',
    description:
      'From logos to packaging, we’ve created 1700+ unique designs that stand out.',
    icon: <IoLogoDesignernews size={42} />,
  },
  {
    num: 500,
    symbol: '+',
    title: 'Completed Projects',
    description:
      "We’ve successfully delivered 500+ projects, each tailored to meet our clients' unique needs.",
    icon: <MdIncompleteCircle size={42} />,
  },
  {
    num: 97,
    symbol: '%',
    title: 'Client Satisfaction Rate',
    description:
      'Our 97% client satisfaction rate reflects our commitment to excellence.',
    icon: <AiFillLike size={42} />,
  },
  {
    num: 320,
    symbol: '+',
    title: 'Happy Clients',
    description:
      'Join our family of 320+ happy clients who trust us with their brand identity.',
    icon: <IoMdHappy size={42} />,
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
