import Container from '../../../components/container';
import {
  Description,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import MovingSlider from '../../../components/MovingSlider';
import ServiceCard from '../components/ServiceCard';
import { useEffect, useState } from 'react';

const ServicesOne = [
  {
    title: 'Logo Design',
    description:
      'Creative logo designs that reflect your company’s vision and leave a lasting impression. Our designers work closely with you to deliver a logo that stands out.',
    img: 'https://framerusercontent.com/images/knDbwCDQFdVjP3Gg5zDjYJEinyE.svg',
  },
  {
    title: 'Brand Identity Design',
    description:
      'Comprehensive designs including business cards, letterheads, envelopes, and more to elevate your brand identity. We help you create a consistent and recognizable brand image across all platforms.',
    img: 'https://framerusercontent.com/images/knDbwCDQFdVjP3Gg5zDjYJEinyE.svg',
  },
  {
    title: 'Logo Animation',
    description:
      'Short videos that bring your logo to life and captivate your audience. We create dynamic and engaging logo animations that leave a lasting impression.',
    img: 'https://framerusercontent.com/images/knDbwCDQFdVjP3Gg5zDjYJEinyE.svg',
  },
  {
    title: 'Social Media Designs',
    description:
      'Elevate your social media presence with custom designs tailored to your brand. We create eye-catching visuals that boost engagement and attract followers.',
    img: 'https://framerusercontent.com/images/knDbwCDQFdVjP3Gg5zDjYJEinyE.svg',
  },
];

const ServicesTwo = [
  {
    title: 'Graphics Design',
    description:
      "Enhance your brand's visual communication with custom graphics. From marketing materials to social media content, our designers bring your ideas to life.",
    img: 'https://framerusercontent.com/images/knDbwCDQFdVjP3Gg5zDjYJEinyE.svg',
  },
  {
    title: 'Website Design and Development',
    description:
      "Professional and user-friendly websites that showcase your identity and meet your clients' needs. Our design team ensures your online presence is both visually appealing and highly functional.",
    img: 'https://framerusercontent.com/images/knDbwCDQFdVjP3Gg5zDjYJEinyE.svg',
  },
  {
    title: 'Managing Ads Campaigns',
    description:
      'Launch successful advertising campaigns that capture attention and drive results. From concept to execution, we ensure your message reaches the right audience.',
    img: 'https://framerusercontent.com/images/knDbwCDQFdVjP3Gg5zDjYJEinyE.svg',
  },
  {
    title: 'Social Media Management',
    description:
      'Innovative management for your social media pages and ad campaigns to increase engagement and expand your brand’s reach. We create, schedule, and optimize content to grow your audience and enhance your brand’s online visibility.',
    img: 'https://framerusercontent.com/images/knDbwCDQFdVjP3Gg5zDjYJEinyE.svg',
  },
];

const ServicesSection = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768); // Example breakpoint for small screens
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mergedServices = [...ServicesOne, ...ServicesTwo];

  return (
    <Section id={'services'}>
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>Services</LittleTitle>
        <Title>How can we help you</Title>
        <Description>
          From logo design to comprehensive brand identity, our expert team
          crafts unique visual solutions that elevate your business and leave a
          lasting impression.
        </Description>
      </Container>
      <Container className="flex gap-6 my-4">
        {isSmallScreen ? (
          <MovingSlider orientation="col" className="h-[300px]">
            {mergedServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </MovingSlider>
        ) : (
          <>
            <MovingSlider orientation="col" className="h-[300px]">
              {ServicesOne.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </MovingSlider>
            <MovingSlider
              orientation="col"
              direction="reverse"
              className="h-[300px]"
            >
              {ServicesTwo.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </MovingSlider>
          </>
        )}
      </Container>
    </Section>
  );
};

export default ServicesSection;
