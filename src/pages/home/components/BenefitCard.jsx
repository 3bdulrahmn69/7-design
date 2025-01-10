import PropTypes from 'prop-types';

const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="w-56 flex flex-col items-center gap-4">
      <figure>
        <img src={image} alt={title} className="w-16" />
      </figure>
      <div>
        <h4 className="text-center">{title}</h4>
        <p className="text-center font-medium text-primary-text">
          {description}
        </p>
      </div>
    </div>
  );
};

BenefitCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default BenefitCard;
