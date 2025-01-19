import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { cn } from '../../../lib/utils';
import Button from '../../../components/Button';

const SmallPricingCard = ({
  packageName,
  features,
  prices,
  currency,
  className,
}) => {
  const { t } = useTranslation();

  const price = prices[currency] || prices.ask;
  let displayPrice = typeof price === 'string' ? price : `${price} ${currency}`;

  // Wrap '/month' with translation
  if (displayPrice.includes('/month')) {
    const [basePrice] = displayPrice.split('/month'); // Extract the base price
    displayPrice = `${basePrice}${t('pricing.perMonth')}`; // Use translation key for 'per month'
  }

  return (
    <div
      className={cn(
        'border-[1px] border-light-border dark:border-secondary-text bg-secondaryLightWhite dark:bg-secondaryDarkBlack pt-2 rounded-site overflow-hidden mx-2 h-[270px]',
        className
      )}
    >
      <div>
        <h3 className="text-xl text-center py-2">{packageName}</h3>
      </div>
      <div className="p-4">
        <ul>
          <li className="text-sm text-light-text dark:text-primary-text px-2">
            {features}
          </li>
        </ul>
        <div className="mt-4 flex items-center justify-between">
          {displayPrice === "Let's Talk" ? (
            <h4 className="font-medium text-lg mb-2 text-secondary">
              {t('pricing.customQuotes')}
            </h4>
          ) : (
            <h4 className="font-medium text-lg mb-2 text-secondary">
              {displayPrice}
            </h4>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Button type="link" to="/meeting-booking" variant="primary">
            {displayPrice === "Let's Talk"
              ? t('buttons.letsTalk')
              : t('buttons.getStarted')}
          </Button>
        </div>
      </div>
    </div>
  );
};

SmallPricingCard.propTypes = {
  packageName: PropTypes.string.isRequired,
  features: PropTypes.string,
  prices: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SmallPricingCard;
