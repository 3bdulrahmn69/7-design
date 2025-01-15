import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';
import Button from '../../../components/Button';
import { LittleTitle } from '../../../components/Section';
import {
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
} from 'react-icons/io';

const PricingCard = ({
  packageName,
  type,
  features,
  prices,
  currency,
  className,
  special,
  setCurrency,
}) => {
  const price = prices[currency] || prices.ask;
  const displayPrice =
    typeof price === 'string' ? price : `${price} ${currency}`;

  return (
    <div
      className={cn(
        'flex flex-col relative border border-secondary-text rounded-site shadow-lg px-4 py-8 max-w-md overflow-hidden bg-primaryLightWhite dark:bg-primaryDarkBlack',
        className
      )}
    >
      {type && <LittleTitle className="text-center mb-4">{type}</LittleTitle>}
      {special && (
        <>
          <div className="absolute top-0 right-0 z-[1] h-24 w-24 specialGlow rounded-tr-site blur-[25px] opacity-50"></div>
          <div className="absolute -top-1/2 -right-1/2 z-[1] h-full w-full specialGlow rounded-full blur-[40px] opacity-20"></div>
        </>
      )}
      <div className="z-[2]">
        <h5 className="text-2xl font-bold mb-2 text-center">{packageName}</h5>
        <div className="flex flex-col gap-4 justify-between items-center mb-4">
          <p className="text-2xl font-semibold">{displayPrice}</p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrency('USD')}
              className={`bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site border-[1px] border-secondary-text ${
                currency === 'USD' && 'text-primary'
              } p-2`}
            >
              USD
            </button>
            <button
              onClick={() => setCurrency('SAR')}
              className={`bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site border-[1px] border-secondary-text ${
                currency === 'SAR' && 'text-primary'
              } p-2`}
            >
              SAR
            </button>
            <button
              onClick={() => setCurrency('EGP')}
              className={`bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site border-[1px] border-secondary-text ${
                currency === 'EGP' && 'text-primary'
              } p-2`}
            >
              EGP
            </button>
          </div>
          <hr className="w-11/12 border-secondary-text" />
        </div>
        <ul className="py-2">
          {Object.entries(features).map(([feature, isIncluded], index) => (
            <li key={index} className="flex items-start mb-2">
              <span
                className={`mr-2 ${
                  isIncluded
                    ? 'bg-gradient-to-t from-[#FF7B00] via-[#FFDA00] to-[#FFE48B] bg-clip-text text-transparent'
                    : 'text-gray-400'
                }`}
                role="img"
              >
                <svg width="0" height="0">
                  <defs>
                    <linearGradient
                      id="icon-gradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        style={{ stopColor: '#FF7B00', stopOpacity: 1 }}
                      />
                      <stop
                        offset="50%"
                        style={{ stopColor: '#FFDA00', stopOpacity: 1 }}
                      />
                      <stop
                        offset="100%"
                        style={{ stopColor: '#FFE48B', stopOpacity: 1 }}
                      />
                    </linearGradient>
                  </defs>
                </svg>
                {isIncluded ? (
                  <IoIosCheckmarkCircleOutline
                    size={20}
                    style={{ fill: 'url(#icon-gradient)' }}
                  />
                ) : (
                  <IoIosCloseCircleOutline
                    size={20}
                    style={{ fill: 'currentColor' }}
                  />
                )}
              </span>
              <span className={`${isIncluded ? '' : 'text-primary-text/50'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <Button type="link" to="meeting-booking" className="mt-4">
        Get Started
      </Button>
    </div>
  );
};

PricingCard.propTypes = {
  packageName: PropTypes.string.isRequired,
  features: PropTypes.objectOf(PropTypes.bool).isRequired,
  prices: PropTypes.shape({
    USD: PropTypes.string,
    SAR: PropTypes.string,
    EGP: PropTypes.string,
    ask: PropTypes.string,
  }).isRequired,
  currency: PropTypes.string.isRequired,
  setCurrency: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  special: PropTypes.bool,
};

export default PricingCard;
