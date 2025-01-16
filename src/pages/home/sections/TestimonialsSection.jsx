import Container from '../../../components/container';
import MovingSlider from '../../../components/MovingSlider';
import {
  Description,
  LatinSpan,
  LittleTitle,
  Section,
  Title,
} from '../../../components/Section';
import { myTestimonialsOne } from '../../../services/myTestimonials';
import { myTestimonialsTwo } from '../../../services/myTestimonials';
import TestimonialCard from '../components/TestimonialCard';

const TestimonialsSection = () => {
  return (
    <Section>
      <Container className="flex flex-col gap-[19.5px] text-gap mb-12">
        <LittleTitle>Words Of Love</LittleTitle>
        <Title>
          Read What <LatinSpan>Our Clients</LatinSpan> Say
        </Title>
        <Description>
          See how our designs and fast delivery helped businesses stand out.
          Clients share how we turned their ideas into unforgettable brand
          identities.
        </Description>
      </Container>
      <Container className="mt-16 flex flex-col gap-4 py-8">
        <MovingSlider speed={100} arrayNumber={7}>
          {myTestimonialsOne.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={testimonial.title}
              desc={testimonial.description}
              name={testimonial.name}
              image={testimonial.image}
            />
          ))}
        </MovingSlider>
        <MovingSlider speed={100} arrayNumber={7} direction={'reverse'}>
          {myTestimonialsTwo.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={testimonial.title}
              desc={testimonial.description}
              name={testimonial.name}
              image={testimonial.image}
            />
          ))}
        </MovingSlider>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
