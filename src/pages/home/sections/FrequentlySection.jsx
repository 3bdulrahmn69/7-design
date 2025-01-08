import Container from '../../../components/container';
import {
  Description,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import FAQItem from '../components/FAQItem';

const FrequentlySection = () => {
  const faqs = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer  a range of services including web design, graphic design, and branding. Our team is dedicated to delivering high-quality solutions tailored to your needs.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'The timeline for completing a project varies depending on its complexity. We will provide you with an estimated timeline during the initial consultation.',
    },
    {
      question: 'Can you work with my existing branding?',
      answer:
        'Yes, we can work with your existing branding and help enhance it to align with your vision and goals.',
    },
    {
      question: 'Do you offer support after the project is completed?',
      answer:
        'Yes, we offer post-project support to ensure that everything runs smoothly and to address any issues that may arise.',
    },
  ];

  return (
    <Section id="faq">
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle className="text-center">FAQ</LittleTitle>
        <Title className="">Frequently Asked Questions</Title>
        <Description className="text-center mb-6">
          Find the information you need about our services, plans, and
          processes. If you have more questions, feel free to reach out to us!
        </Description>
      </Container>
      <Container>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FrequentlySection;
