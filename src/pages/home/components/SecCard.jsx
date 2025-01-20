import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const SecCard = ({ title, description, iconLight, iconDark, className }) => {
  return (
    <div
      className={cn(
        'w-72 md:w-80 flex flex-col items-center gap-5 dark:bg-secondaryDarkBlack rounded-site border-[1px] border-light-border dark:border-secondary-text px-4 py-8',
        className
      )}
    >
      <figure className="w-[70px] xl:w-[80px]">
        <img
          src={iconLight}
          alt={title}
          className="no-drag-img block dark:hidden"
        />
        <img
          src={iconDark}
          alt={title}
          className="no-drag-img hidden dark:block"
        />
      </figure>
      {title && <h4 className="text-center text-2xl">{title}</h4>}
      {description && (
        <p className="text-center text-lg text-light-text dark:text-primary-text">
          {description}
        </p>
      )}
    </div>
  );
};

SecCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  iconLight: PropTypes.string,
  iconDark: PropTypes.string,
  className: PropTypes.string,
};

export default SecCard;
