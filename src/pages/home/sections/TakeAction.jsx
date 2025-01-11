import { Section } from '../../../components/Section';
import Button from '../../../components/Button';
import Container from '../../../components/container';

const TakeAction = () => {
  return (
    <Section>
      <Container>
        <div className="backdrop-blur-sm flex flex-col items-center justify-center gap-9 border-[1px] border-gray-500/20 py-8 rounded-3xl">
          <div className="max-w-lg text-center ">
            <h1>Ready to make your iconic brand?</h1>
          </div>
          <div className="max-w-lg">
            <p className="text-center">
              If you’re looking for a custom logo and a cohesive brand identity
              that reflects your vision, you’ve come to the right place. Let’s
              create a brand that leaves a lasting impression!
            </p>
          </div>
          <Button type="link" to="/meeting-booking">
            Book a call
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default TakeAction;
