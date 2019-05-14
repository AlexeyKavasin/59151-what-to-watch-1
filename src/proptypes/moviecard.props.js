import PropTypes from "prop-types";

export const propTypes = {
  name: PropTypes.string.isRequired,
  onPlayClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export const defaultProps = {
  onPlayClick: () => {},
  onMouseOver: () => {},
  poster: `https://placehold.it/280x175`
};
