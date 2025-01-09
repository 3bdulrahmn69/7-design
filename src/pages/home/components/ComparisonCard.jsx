import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const ComparisonCard = ({ type = 'normal', className, children }) => {
  return (
    <div
      className={cn(
        'relative w-full border-[1px] border-primary-text rounded-site min-w-72 max-w-[450px] p-6  flex flex-col gap-6 text-lg overflow-hidden',
        className
      )}
    >
      {type === 'glow' && (
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-tr from-red-500 to-orange-500 opacity-30 rounded-full blur-2xl pointer-events-none"></div>
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
