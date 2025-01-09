import PropTypes from 'prop-types';
import { cn } from '../../../lib/utils';

const ServiceCard = ({ img, title, description, className }) => {
  return (
    <div
      className={cn(
        'flex gap-6 items-center justify-center my-3 rounded-site p-4',
        className
      )}
    >
      {img && (
        <figure>
          <img src={img} alt={title} />
        </figure>
      )}
      <div className="flex flex-col gap-2">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ServiceCard;
