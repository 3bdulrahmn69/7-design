import { LatinSpan, Section } from '../../../components/Section';
import Button from '../../../components/Button';
import Container from '../../../components/container';
import { useTranslation } from 'react-i18next';

const TakeAction = () => {
  const { t } = useTranslation();

  return (
    <Section className="relative z-20 w-80 md:w-full">
      <Container>
        <div className="backdrop-blur flex flex-col items-center justify-center gap-9 border-[1px] border-light-border dark:border-secondary-text py-8 rounded-3xl">
          <div className="text-center">
            <h1 className="text-site md:text-site-md font-medium text-center tracking-site leading-site px-2">
              {t('takeAction.readyToMakeYour')}{' '}
              <LatinSpan>{t('takeAction.iconicBrand')}</LatinSpan>
            </h1>
          </div>
          <div className="max-w-lg">
            <p className="text-center text-[17px] md:text-[20px] text-light-text dark:text-primary-text lg:max-w-2xl px-6 md:px-20 lg:px-0 leading-[1.5em] font-medium">
              {t('takeAction.description')}
            </p>
          </div>
          <Button type="link" to="/meeting-booking" className="z-20">
            {t('takeAction.bookCall')}
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default TakeAction;
