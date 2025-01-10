import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';
import test from '../../../assets/test.svg';

const ProcessCard = ({ title, description, className }) => {
  return (
    <div
      className={cn(
        'w-72 flex flex-col items-center gap-4 bg-secondaryDarkBlack rounded-site border-[1px] border-secondary-text py-2 px-4',
        className
      )}
    >
      <figure>
        <img src={test} alt="test" className="w-16" />
      </figure>
      <div>
        <h4 className="text-center">{title}</h4>
        <p className="text-center font-medium text-primary-text">
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
};

export default ProcessCard;
