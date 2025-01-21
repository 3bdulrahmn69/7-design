import { useTranslation } from 'react-i18next';
import { Section } from '../../../components/Section';
import Container from '../../../components/container';
import drMohamed from '../../../assets/drMohamed.jpg';

const CopiedSection = () => {
  const { t } = useTranslation();

  return (
    <Section className="-mt-11" id="copied">
      <Container className="flex items-center justify-center">
        <article
          dir="ltr"
          className="w-full z-10 relative bg-secondaryLightWhite dark:bg-secondaryDarkBlack max-w-lg flex justify-between flex-row rounded-site border border-light-border dark:border-secondary-text"
          aria-labelledby="copied-title"
        >
          <figure className="w-1/4 md:w-2/4 overflow-hidden border-r border-secondary-text">
            <img
              src={drMohamed}
              alt="Portrait of Dr. Mohamed Esam, the founder of the organization"
              loading="lazy"
              width="150"
              height="150"
              className="w-full h-full object-cover rounded-l-site select-none no-drag-img"
            />
            <figcaption className="sr-only">
              Dr. Mohamed Esam, the founder of the organization
            </figcaption>
          </figure>
          <div className="w-3/4 md:w-full flex flex-col justify-center text-light-text dark:text-primary-text">
            <blockquote
              id="copied-title"
              className="border-b py-2 px-3 border-secondary-text text-xs md:text-base text-center font-light"
              aria-label={t('copied.quote')}
            >
              {t('copied.quote')}
            </blockquote>
            <h2 className="text-center p-1 py-2 text-xs md:text-base">
              {t('copied.by')}
            </h2>
          </div>
        </article>
      </Container>
    </Section>
  );
};

export default CopiedSection;
