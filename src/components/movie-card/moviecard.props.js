import PropTypes from "prop-types";

export const propTypes = {
  name: PropTypes.string.isRequired,
  onMouseOver: PropTypes.func,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  genre: PropTypes.string.isRequired
};

export const defaultProps = {
  onMouseOver: () => {},
  poster: `https://placehold.it/280x175`
};