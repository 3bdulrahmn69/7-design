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
        'border-[1px] border-secondary-text bg-secondaryLightWhite dark:bg-secondaryDarkBlack pt-2 rounded-site overflow-hidden mx-2 h-[210px]',
        className
      )}
    >
      <div className="">
        <h3 className="text-xl text-center py-2">{packageName}</h3>
      </div>
      <div className="p-4">
        <ul className="list-disc list-inside space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-primary-text px-2">
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          {displayPrice === "Let's Talk" ? (
            <Button type="link" to="/meeting-booking" variant="text">
              {displayPrice}
            </Button>
          ) : (
            <h4 className="font-medium text-lg mb-2 text-secondary">
              {displayPrice}
            </h4>
          )}
        </div>
      </div>
    </div>
  );
};

SmallPricingCard.propTypes = {
  packageName: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  prices: PropTypes.object.isRequired,
  currency: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default SmallPricingCard;
