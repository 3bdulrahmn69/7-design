import PropTypes from 'prop-types';
import { cn } from '../lib/utils';

export const Title = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'text-2xl uppercase text-center md:text-3xl font-bold text-gray-800 mb-2',
        className
      )}
    >
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const Description = ({ children, className }) => {
  return (
    <p
      className={cn(
        'text-md md:text-lg text-gray-600 max-w-2xl mx-auto',
        className
      )}
    >
      {children}
    </p>
  );
};

Description.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const Section = ({ id, className, children }) => {
  return (
    <section
      id={id}
      className={cn('container mx-auto py-8 px-4 md:px-8', className)}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
