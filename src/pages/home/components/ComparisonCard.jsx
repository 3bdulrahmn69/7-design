import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const ComparisonCard = ({ type = 'normal', className, children }) => {
  return (
    <div
      className={cn(
        ' w-72 md:w-full md:max-w-[450px] relative border-[1px] border-secondary-text rounded-site p-6 flex flex-col gap-6 text-lg overflow-hidden bg-secondaryLightWhite dark:bg-secondaryDarkBlack',
        className
      )}
    >
      {type === 'glow' && (
        <>
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-tr from-primary to-primary opacity-30 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -top-2 -right-2 w-40 h-40 bg-gradient-to-tr from-red-800 to-orange-800 opacity-30 rounded-full blur-2xl pointer-events-none"></div>
        </>
      )}
      {children}
    </div>
  );
};

ComparisonCard.propTypes = {
  type: PropTypes.oneOf(['normal', 'glow']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ComparisonCard;
