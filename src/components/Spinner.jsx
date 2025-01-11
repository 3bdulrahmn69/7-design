import PropTypes from 'prop-types';
import { memo } from 'react';

const Spinner = ({ size = '12', ariaLabel = 'Loading...' }) => {
  const spinnerSize = `w-${size} h-${size}`;

  return (
    <div
      role="status"
      aria-live="polite"
      className="inline-flex items-center justify-center"
    >
      <div
        className={`spinner ${spinnerSize} border-4 border-t-primary border-primary-text rounded-full animate-spin`}
        aria-label={ariaLabel}
      />
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  ariaLabel: PropTypes.string,
};

export default memo(Spinner);
