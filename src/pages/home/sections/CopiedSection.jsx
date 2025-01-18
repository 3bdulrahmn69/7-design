import Container from '../../../components/container';
import { Section } from '../../../components/Section';
import drMohamed from '../../../assets/drMohamed.jpg';

const CopiedSection = () => {
  return (
    <Section>
      <Container className="flex items-center justify-center">
        <article
          dir="ltr"
          className="w-full max-w-lg flex justify-between flex-row bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site border border-secondary-text shadow-lg"
        >
          <figure className="w-1/4 md:w-2/4 overflow-hidden border-r border-secondary-text">
            <img
              src={drMohamed}
              alt="Portrait of Dr. Mohamed Esam, the founder"
              loading="lazy"
              className="w-full h-full object-cover rounded-site select-none no-drag-img"
            />
          </figure>
          <div className="w-3/4 md:w-full flex flex-col justify-center text-primary-text">
            <blockquote className="border-b py-2 px-3 border-secondary-text text-xs md:text-base text-center font-light">
              A copied or recycled logo is like a borrowed garment; it may look
              appealing, but it fails to represent its owner because it wasn’t
              tailored to their unique fit
            </blockquote>
            <h2 className="text-center font-semibold p-1 py-2 text-xs md:text-base">
              Dr. Mohamed Esam (The Founder)
            </h2>
          </div>
        </article>
      </Container>
    </Section>
  );
};

export default CopiedSection;
