import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

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
        'border border-gray-300 rounded-site shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-2',
        className
      )}
    >
      <div className="">
        <h3 className="text-xl text-center py-2">{packageName}</h3>
      </div>
      <div className="p-4">
        <ul className="list-disc list-inside space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-700">
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h4 className="font-medium text-lg mb-2 text-secondary">
            {displayPrice}
          </h4>
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
