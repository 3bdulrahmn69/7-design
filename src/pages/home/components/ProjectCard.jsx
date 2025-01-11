import PropTypes from 'prop-types';

const ProjectCard = ({ img, title }) => {
  return (
    <div className="w-96 h-full">
      <img
        src={img}
        alt={`${title} project`}
        className="w-96 h-full object-contain"
        loading="lazy"
      />
    </div>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectCard;
