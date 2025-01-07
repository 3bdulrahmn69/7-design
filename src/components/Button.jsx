import PropTypes from 'prop-types';
import { cn } from '../lib/utils';

const Button = ({ className, children, onClick, variant = 'primary' }) => {
  const variantStyles = {
    primary:
      'bg-gradient-to-t from-[#FF7B00] via-[#F9AF13] via-[#FFDA00] to-[#FFE48B] text-secondary-text',
    secondary:
      'bg-primaryDarkBlack outline-[1px] outline-gray-500/20 outline hover:outline-[3px] hover:outline-gray-500/40 duration-300 text-primaryLightWhite',
    outline:
      'border border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
    text: 'text-primary bg-transparent hover:bg-primary hover:text-white duration-300',
    custom: '',
  };

  return (
    <button
      className={cn(
        'px-4 py-[13px] rounded-[14px] font-medium text-[18.7]',
        variantStyles[variant],
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'outline',
    'text',
    'custom',
  ]),
  onClick: PropTypes.func,
};

export default Button;
