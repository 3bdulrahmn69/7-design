import PropTypes from 'prop-types';

function BannerImg({ img, link }) {
  return (
    <a
      href={link}
      className="md:w-28 w-20 md:h-28 h-20 mx-2 shrink-0 flex-none overflow-hidden p-4"
    >
      <img
        src={img}
        alt="logo"

      />
    </a>
  );
}

BannerImg.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BannerImg;
