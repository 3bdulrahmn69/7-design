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
    title: 'Logo Design',
    description:
      'Creative logo designs that reflect your company’s vision and leave a lasting impression. Our designers work closely with you to deliver a logo that stands out.',
    icon: <GiPencilRuler style={{ fill: 'url(#icon-gradient)' }} />,
  },
  {
    title: 'Brand Identity Design',
    description:
      'Comprehensive designs including business cards, letterheads, envelopes, and more to elevate your brand identity. We help you create a consistent and recognizable brand image across all platforms.',
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
    title: 'Logo Animation',
    description:
      'Short videos that bring your logo to life and captivate your audience. We create dynamic and engaging logo animations that leave a lasting impression.',
    icon: <MdAnimation style={{ fill: 'url(#icon-gradient)' }} />,
  },
  {
    title: 'Social Media Designs',
    description:
      'Elevate your social media presence with custom designs tailored to your brand. We create eye-catching visuals that boost engagement and attract followers.',
    icon: <TiSocialInstagram style={{ fill: 'url(#icon-gradient)' }} />,
  },
];

const ServicesTwo = [
  {
    title: 'Graphics Design',
    description:
      "Enhance your brand's visual communication with custom graphics. From marketing materials to social media content, our designers bring your ideas to life.",
    icon: <SiTaichigraphics style={{ fill: 'url(#icon-gradient)' }} />,
  },
  {
    title: 'Website Design and Development',
    description:
      "Professional and user-friendly websites that showcase your identity and meet your clients' needs. Our design team ensures your online presence is both visually appealing and highly functional.",
    icon: <MdOutlineWeb style={{ fill: 'url(#icon-gradient)' }} />,
  },
  {
    title: 'Managing Ads Campaigns',
    description:
      'Launch successful advertising campaigns that capture attention and drive results. From concept to execution, we ensure your message reaches the right audience.',
    icon: <MdOutlineAdsClick style={{ fill: 'url(#icon-gradient)' }} />,
  },
  {
    title: 'Social Media Management',
    description:
      'Innovative management for your social media pages and ad campaigns to increase engagement and expand your brand’s reach. We create, schedule, and optimize content to grow your audience and enhance your brand’s online visibility.',
    icon: <BiSolidLike style={{ fill: 'url(#icon-gradient)' }} />,
  },
];

const ServicesSection = () => {
  return (
    <Section id={'services'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>Services</LittleTitle>
        <Title>
          All your <LatinSpan>design</LatinSpan> needs
        </Title>
        <Description>
          From logo design to brand identity, our expert team crafts unique
          visual solutions that elevate your business and leave a lasting
          impact.
        </Description>
      </Container>
      <Container className="flex flex-col gap-4 my-4 mt-16">
        <MovingSlider speed={120} arrayNumber={6} direction="reverse">
          {ServicesOne.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              icon={service?.icon}
              img={service?.img}
            />
          ))}
        </MovingSlider>
        <MovingSlider speed={120} arrayNumber={6}>
          {ServicesTwo.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
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
