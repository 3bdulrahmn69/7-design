import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';
import SpecialGlow from './SpecialGlow';

const ComparisonCard = ({ type = 'normal', className, children }) => {
  return (
    <div
      className={cn(
        ' w-72 md:w-full md:max-w-[450px] relative border-[1px] border-light-border dark:border-secondary-text rounded-site p-6 flex flex-col gap-6 text-lg overflow-hidden bg-secondaryLightWhite dark:bg-secondaryDarkBlack',
        className
      )}
    >
      {type === 'glow' && (
        <SpecialGlow className="absolute -top-full md:-top-[120%] -right-1/2 z-[1]" />
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
