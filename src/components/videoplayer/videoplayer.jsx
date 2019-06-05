import React from "react";
import PropTypes from "prop-types";

export class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this.playerTimeout = null;
    this.playerDelay = 1000;
  }

  render() {
    const {trailer, poster} = this.props;

    return <React.Fragment>
      <video
        ref={this._videoRef}
        poster={poster}
        width="280"
        height="175"
        muted>
        <source src={trailer}></source>
      </video>
    </React.Fragment>;
  }

  componentDidUpdate(prevProps) {
    const video = this._videoRef.current;
    clearTimeout(this.playerTimeout);

    if (prevProps.isPlaying !== this.props.isPlaying) {
      if (this.props.isPlaying) {
        this.playerTimeout = setTimeout(() => {
          video.play();
        }, this.playerDelay);
      } else {
        video.pause();
        video.load();
      }
    }
  }
}

VideoPlayer.propTypes = {
  trailer: PropTypes.string,
  poster: PropTypes.string,
  isPlaying: PropTypes.bool.isRequired
};
