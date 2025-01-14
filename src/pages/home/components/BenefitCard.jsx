import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const BenefitCard = ({ title, description, icon, className }) => {
  return (
    <div
      className={cn(
        'w-72 md:w-80 flex flex-col items-center gap-4 bg-secondaryLightWhite dark:bg-secondaryDarkBlack rounded-site border-[1px] border-secondary-text py-2 px-4',
        className
      )}
    >
      <figure className="w-1/3">
        <img src={icon} alt={title} className="no-drag-img" />
      </figure>
      <div>
        <h4 className="text-center">{title}</h4>
        <p className="text-center font-medium text-primaryLightWhiteText dark:text-primary-text">
          {description}
        </p>
      </div>
    </div>
  );
};

BenefitCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default BenefitCard;
