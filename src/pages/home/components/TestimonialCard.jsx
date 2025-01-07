import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const TestimonialCard = ({ name, desc, title, className = '' }) => {
  return (
    <figure
      className={cn(
        'bg-primaryLightWhite dark:bg-primaryDarkBlack text-primaryDarkBlack dark:text-primaryLightWhite mx-2 shadow-lg rounded-lg p-6 min-w-fit text-sm',
        className
      )}
      aria-labelledby={`testimonial-${name}`}
    >
      <header className="flex items-center mb-4">
        <h2 id={`testimonial-${name}`} className="font-bold">
          {name}
        </h2>
      </header>
      <blockquote
        className="leading-relaxed font-normal max-w-xs"
        aria-label={`Testimonial description from ${name}`}
      >
        {desc}
      </blockquote>
      <figcaption
        className="text-gray-500"
        aria-label={`Testimonial source: ${title}`}
      >
        — <span className="font-medium">{title}</span>
      </figcaption>
    </figure>
  );
};

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TestimonialCard;
