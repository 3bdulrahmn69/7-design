import PropTypes from 'prop-types';
import { cn } from '../lib/utils';

const Button = ({ className, children, onClick, variant = 'primary' }) => {
  const variantStyles = {
    primary: 'bg-primary text-white',
    outline: 'border border-primary text-primary bg-transparent',
    text: 'text-primary bg-transparent hover:bg-primary hover:text-white',
    custom: '',
  };

  return (
    <button
      className={cn('px-4 py-2 rounded-lg', variantStyles[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline', 'text', 'custom']),
  onClick: PropTypes.func,
};

export default Button;
