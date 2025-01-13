import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const ProcessCard = ({ title, description, icon, className }) => {
  return (
    <div
      className={cn(
        'w-72 flex flex-col items-center gap-2 bg-secondaryLightWhite dark:bg-secondaryDarkBlack rounded-site border-[1px] border-secondary-text py-2 px-4',
        className
      )}
    >
      <div className="text-primary pt-2">{icon}</div>
      <div>
        <h4 className="text-center">{title}</h4>
        <p className="text-center font-medium text-primaryLightWhiteText dark:text-primary-text">
          {description}
        </p>
      </div>
    </div>
  );
};

ProcessCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.node,
};

export default ProcessCard;
