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
import { SiBrandfolder } from 'react-icons/si';
import { MdAnimation } from 'react-icons/md';
import { TiSocialInstagram } from 'react-icons/ti';
import { SiTaichigraphics } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { MdManageAccounts } from 'react-icons/md';
import { BsThreadsFill } from 'react-icons/bs';

const ServicesOne = [
  {
    title: 'Logo Design',
    description:
      'Creative logo designs that reflect your company’s vision and leave a lasting impression. Our designers work closely with you to deliver a logo that stands out.',
    icon: <GiPencilRuler />,
  },
  {
    title: 'Brand Identity Design',
    description:
      'Comprehensive designs including business cards, letterheads, envelopes, and more to elevate your brand identity. We help you create a consistent and recognizable brand image across all platforms.',
    icon: <SiBrandfolder />,
  },
  {
    title: 'Logo Animation',
    description:
      'Short videos that bring your logo to life and captivate your audience. We create dynamic and engaging logo animations that leave a lasting impression.',
    icon: <MdAnimation />,
  },
  {
    title: 'Social Media Designs',
    description:
      'Elevate your social media presence with custom designs tailored to your brand. We create eye-catching visuals that boost engagement and attract followers.',
    icon: <TiSocialInstagram />,
  },
];

const ServicesTwo = [
  {
    title: 'Graphics Design',
    description:
      "Enhance your brand's visual communication with custom graphics. From marketing materials to social media content, our designers bring your ideas to life.",
    icon: <SiTaichigraphics />,
  },
  {
    title: 'Website Design and Development',
    description:
      "Professional and user-friendly websites that showcase your identity and meet your clients' needs. Our design team ensures your online presence is both visually appealing and highly functional.",
    icon: <CgWebsite />,
  },
  {
    title: 'Managing Ads Campaigns',
    description:
      'Launch successful advertising campaigns that capture attention and drive results. From concept to execution, we ensure your message reaches the right audience.',
    icon: <BsThreadsFill />,
  },
  {
    title: 'Social Media Management',
    description:
      'Innovative management for your social media pages and ad campaigns to increase engagement and expand your brand’s reach. We create, schedule, and optimize content to grow your audience and enhance your brand’s online visibility.',
    icon: <MdManageAccounts />,
  },
];

const ServicesSection = () => {
  return (
    <Section id={'services'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>Services</LittleTitle>
        <Title>
          All your <LatinSpan>design</LatinSpan> needs.
        </Title>
        <Description>
          From logo design to brand identity, our expert team crafts unique
          visual solutions that elevate your business and leave a lasting
          impact.
        </Description>
      </Container>
      <Container className="flex flex-col gap-4 my-4 mt-10">
        <MovingSlider speed={120} arrayNumber={6} direction="reverse">
          {ServicesOne.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </MovingSlider>
        <MovingSlider speed={120} arrayNumber={6}>
          {ServicesTwo.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service.icon}
            />
          ))}
        </MovingSlider>
      </Container>
    </Section>
  );
};

export default ServicesSection;
