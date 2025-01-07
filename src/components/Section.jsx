import PropTypes from 'prop-types';
import { cn } from '../lib/utils';

export const Title = ({ children, className }) => {
  return (
    <h2
      className={cn(
        'text-[34px] md:text-[55px] font-medium text-center font-Satoshi leading-none letter text-primaryDarkBlack dark:text-primaryLightWhite',
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

export const LittleTitle = ({ children, className }) => {
  return (
    <div className="flex justify-center items-center">
      <p
        className={cn(
          'bg-primaryLightWhite dark:bg-primaryDarkBlack text-primaryDarkBlack dark:text-primaryLightWhite outline  outline-[1px] outline-gray-400/20 px-4 py-[7px] rounded-[14px] font-medium w-fit text-center',
          className
        )}
      >
        {children}
      </p>
    </div>
  );
};

LittleTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export const Description = ({ children, className }) => {
  return (
    <p
      className={cn(
        'text-center text-[17px] md:text-[20px] text-primary-text lg:max-w-2xl px-6 text  md:px-20 lg:px-0 leading-[1.5em] font-medium max-w-2xl mx-auto',
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
