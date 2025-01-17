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
      question: 'one',
      answer: 'one',
    },
    {
      question: 'two',
      answer: 'two',
    },
    {
      question: 'three',
      answer: 'three',
    },
    {
      question: 'four',
      answer: 'four',
    },
    {
      question: 'five',
      answer: 'five',
    },
    {
      question: 'six',
      answer: 'six',
    },
    {
      question: 'seven',
      answer: 'seven',
    },
    {
      question: 'eight',
      answer: 'eight',
    },
    {
      question: 'nine',
      answer: 'nine',
    },
    {
      question: 'ten',
      answer: 'ten',
    },

    {
      question: 'eleven',
      answer: 'eleven',
    },
  ];

  return (
    <Section id="FAQs">
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle className="text-center">FAQs</LittleTitle>
        <Title className="">Frequently Asked Questions</Title>
        <Description className="text-center mb-6">
          Find the information you need about our services, plans, and
          processes. If you have more questions, feel free to reach out to us!
        </Description>
      </Container>
      <Container className="mt-16">
        <div className="max-w-2xl flex flex-col items-center justify-center mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FrequentlySection;
