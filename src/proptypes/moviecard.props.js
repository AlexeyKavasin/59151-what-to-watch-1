import PropTypes from "prop-types";

export const propTypes = {
  name: PropTypes.string.isRequired,
  onPlayClick: PropTypes.func,
  onMouseOver: PropTypes.func,
  src: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export const defaultProps = {
  onPlayClick: () => {},
  onMouseOver: () => {},
  src: `https://placehold.it/280x175`
};
