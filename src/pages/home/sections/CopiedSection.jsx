import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import drMohamed from '../../../assets/drMohamed.jpg';

const CopiedSection = () => {
  return (
    <Section className="-mt-11" id="copied">
      <Container className="flex items-center justify-center">
        <article
          dir="ltr"
          className="w-full z-10 relative bg-secondaryLightWhite dark:bg-secondaryDarkBlack max-w-lg flex justify-between flex-row rounded-site border border-light-border dark:border-secondary-text shadow-lg"
        >
          <figure className="w-1/4 md:w-2/4 overflow-hidden border-r border-secondary-text">
            <img
              src={drMohamed}
              alt="Portrait of Dr. Mohamed Esam, the founder"
              loading="lazy"
              className="w-full h-full object-cover rounded-l-site select-none no-drag-img"
            />
          </figure>
          <div className="w-3/4 md:w-full flex flex-col justify-center text-light-text dark:text-primary-text">
            <blockquote className="border-b py-2 px-3 border-secondary-text text-xs md:text-base text-center font-light">
              A copied or recycled logo is like a borrowed garment; it may look
              appealing, but it fails to represent its owner because it wasn’t
              tailored to their unique fit
            </blockquote>
            <h2 className="text-center p-1 py-2 text-xs md:text-base">
              Dr. Mohamed Esam (The Founder)
            </h2>
          </div>
        </article>
      </Container>
    </Section>
  );
};

export default CopiedSection;
