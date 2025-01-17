import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const SecCard = ({ title, description, icon, className }) => {
  return (
    <div
      className={cn(
        'w-72 md:w-80 flex flex-col items-center gap-5 bg-secondaryLightWhite dark:bg-secondaryDarkBlack rounded-site border-[1px] border-secondary-text px-4 py-8',
        className
      )}
    >
      <figure className="w-[70px] xl:w-[80px]">
        <img src={icon} alt={title} className="no-drag-img" />
      </figure>
      {title && <h4 className="text-center text-2xl">{title}</h4>}
      {description && (
        <p className="text-center text-lg font-medium text-primaryLightWhiteText dark:text-primary-text">
          {description}
        </p>
      )}
    </div>
  );
};

SecCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
};

export default SecCard;
