import Container from '../../../components/container';

const HeroSection = () => {
  return (
    <div className="">
      <Container>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold text-center">
            Welcome to the website
          </h1>
          <p className="text-center">
            This is a starter for a website using React and Tailwind CSS
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
