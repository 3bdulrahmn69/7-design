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
        <LittleTitle>Testimonials</LittleTitle>
        <Title>What Our Clients Are Saying</Title>
        <Description>
          Discover how our design solutions have transformed businesses and
          brought visions to life through our clients' experiences.
        </Description>
      </Container>
      <Container className="flex flex-col ">
        <MovingSlider speed={100}>
          {myTestimonialsOne.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={testimonial.title}
              desc={testimonial.description}
              name={testimonial.name}
            />
          ))}
        </MovingSlider>
        <MovingSlider speed={100} direction={'right'}>
          {myTestimonialsTwo.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={testimonial.title}
              desc={testimonial.description}
              name={testimonial.name}
            />
          ))}
        </MovingSlider>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
