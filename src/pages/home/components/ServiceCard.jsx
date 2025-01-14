import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const ServiceCard = ({ icon, title, className }) => {
  return (
    <div
      className={cn(
        'min-w-fit mx-2 flex gap-3 text-2xl items-center justify-center rounded-site p-6 bg-secondaryLightWhite dark:bg-secondaryDarkBlack text-primaryDarkBlack dark:text-primaryLightWhite border-[1px] border-secondary-text',
        className
      )}
    >
      <span>{icon}</span>
      <h3>{title}</h3>
    </div>
  );
};

ServiceCard.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ServiceCard;
