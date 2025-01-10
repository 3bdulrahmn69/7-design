import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';
import { FaStar } from 'react-icons/fa'; // Import star icon

const TestimonialCard = ({ name, desc, title, image, className }) => {
  return (
    <figure
      className={cn(
        'bg-primaryLightWhite dark:bg-primaryDarkBlack text-primaryDarkBlack dark:text-primaryLightWhite mx-2 shadow-lg rounded-lg p-6 min-w-fit text-sm',
        className
      )}
      aria-labelledby={`testimonial-${name}`}
    >
      <header className="flex items-center mb-4">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-12 h-12 rounded-full mr-4 select-none"
        />
        <div>
          <h2 id={`testimonial-${name}`} className="font-bold">
            {name}
          </h2>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-yellow-500 mr-1" />
            ))}
          </div>
        </div>
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
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TestimonialCard;
