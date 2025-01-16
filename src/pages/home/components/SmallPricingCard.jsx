import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';
import Button from '../../../components/Button';

const SmallPricingCard = ({
  packageName,
  features,
  prices,
  currency,
  className,
}) => {
  const price = prices[currency] || prices.ask;
  const displayPrice =
    typeof price === 'string' ? price : `${price} ${currency}`;

  return (
    <div
      className={cn(
        'border-[1px] border-secondary-text bg-secondaryLightWhite dark:bg-secondaryDarkBlack pt-2 rounded-site overflow-hidden mx-2 h-[270px]',
        className
      )}
    >
      <div>
        <h3 className="text-xl text-center py-2">{packageName}</h3>
      </div>
      <div className="p-4">
        <ul>
          <li className="text-sm text-primary-text px-2">{features}</li>
        </ul>
        <div className="mt-4 flex items-center justify-between">
          {displayPrice === "Let's Talk" ? (
            <h4 className="font-medium text-lg mb-2 text-secondary">
              Custom Quotes
            </h4>
          ) : (
            <h4 className="font-medium text-lg mb-2 text-secondary">
              {displayPrice}
            </h4>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Button type="link" to="/meeting-booking" variant="primary">
            {displayPrice === "Let's Talk" ? "Let's Talk" : 'Book a call'}
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
