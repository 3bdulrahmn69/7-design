import Container from '../../../components/container';
import MovingSlider from '../../../components/MovingSlider';
import {
  Description,
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
      <Container className="flex flex-col gap-[19.5px] text-gap">
        <LittleTitle>Words Of Love</LittleTitle>
        <Title>Read What Our Clients Say</Title>
        <Description>
          See how our custom designs and fast delivery have helped businesses to
          stand out and achieve their goals and make a change. Our clients share
          their success stories and how we’ve turned their ideas into
          unforgettable brand identities.
        </Description>
      </Container>
      <Container className="flex flex-col gap-2 py-4">
        <MovingSlider speed={100}>
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
        <MovingSlider speed={100} direction={'reverse'}>
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
