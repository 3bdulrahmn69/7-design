import { LatinSpan, Section } from '../../../components/Section';
import Button from '../../../components/Button';
import Container from '../../../components/container';

const TakeAction = () => {
  return (
    <Section className="relative z-20 w-80 md:w-full">
      <Container>
        <div className="backdrop-blur flex flex-col items-center justify-center gap-9 border-[1px] border-secondary-text py-8 rounded-3xl">
          <div className="text-center ">
            <h1 className="text-site md:text-site-md font-medium text-center tracking-site leading-site px-2">
              Ready to make your <LatinSpan>iconic brand</LatinSpan>?
            </h1>
          </div>
          <div className="max-w-lg">
            <p className="text-center text-[17px] md:text-[20px] text-primary-text lg:max-w-2xl px-6 text md:px-20 lg:px-0 leading-[1.5em] font-medium">
              Looking for a custom logo and brand identity that reflects your
              vision? You’re in the right place—let’s create a lasting
              impression!
            </p>
          </div>
          <Button type="link" to="/meeting-booking" className="z-20">
            Book a call
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default TakeAction;
