import PropTypes from "prop-types";

export const propTypes = {
  name: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
  poster: PropTypes.string,
  id: PropTypes.number.isRequired,
  genre: PropTypes.string
};

export const defaultProps = {
  onMouseOver: () => {},
  poster: `https://placehold.it/280x175`
};
