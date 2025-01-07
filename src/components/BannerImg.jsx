import PropTypes from 'prop-types';

function BannerImg({ img, link }) {
  return (
    <a
      href={link}
      className=" w-32 h-32 mx-2 shrink-0 flex-none overflow-hidden p-4"
    >
      <img src={img} alt="logo" />
    </a>
  );
}

BannerImg.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default BannerImg;
