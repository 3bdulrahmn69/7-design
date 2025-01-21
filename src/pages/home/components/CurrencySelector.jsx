import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const CurrencySelector = ({ currency, setCurrency, className }) => {
  return (
    <div dir="ltr" className={cn('flex', className)}>
      <span
        className={`bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site overflow-hidden border-[1px] ${
          currency === 'USD' ? 'border-[#676767]' : 'border-[#d2d2d2]'
        } dark:border-secondary-text `}
      >
        <button
          onClick={() => setCurrency('USD')}
          className={`bg-secondaryLightWhite dark:bg-secondaryDarkBlack ${
            currency === 'USD'
              ? 'text-[#676767] dark:bg-gradient-to-t-orange dark:bg-clip-text dark:text-transparent'
              : 'text-[#d2d2d2] dark:text-primaryLightWhite'
          } p-2`}
        >
          USD
        </button>
      </span>
      <span
        className={`bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site overflow-hidden border-[1px] ${
          currency === 'SAR' ? 'border-[#676767]' : 'border-[#d2d2d2]'
        } dark:border-secondary-text `}
      >
        <button
          onClick={() => setCurrency('SAR')}
          className={`bg-secondaryLightWhite dark:bg-secondaryDarkBlack ${
            currency === 'SAR'
              ? 'text-[#676767] dark:bg-gradient-to-t-orange dark:bg-clip-text dark:text-transparent'
              : 'text-[#d2d2d2] dark:text-primaryLightWhite'
          } p-2`}
        >
          SAR
        </button>
      </span>
      <span
        className={`bg-primaryLightWhite dark:bg-primaryDarkBlack rounded-site overflow-hidden border-[1px] ${
          currency === 'EGP' ? 'border-[#676767]' : 'border-[#d2d2d2]'
        } dark:border-secondary-text `}
      >
        <button
          onClick={() => setCurrency('EGP')}
          className={`bg-secondaryLightWhite dark:bg-secondaryDarkBlack ${
            currency === 'EGP'
              ? 'text-[#676767] dark:bg-gradient-to-t-orange dark:bg-clip-text dark:text-transparent'
              : 'text-[#d2d2d2] dark:text-primaryLightWhite'
          } p-2`}
        >
          EGP
        </button>
      </span>
    </div>
  );
};

CurrencySelector.propTypes = {
  currency: PropTypes.string.isRequired,
  setCurrency: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default CurrencySelector;
