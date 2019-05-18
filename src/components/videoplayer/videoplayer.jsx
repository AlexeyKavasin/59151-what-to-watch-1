import React from "react";
import PropTypes from "prop-types";

export class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isLoading: true,
      isPlaying: props.isPlaying
    };

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

  componentDidMount() {
    const video = this._videoRef.current;

    if (video) {
      video.oncanplaythrough = () => this.setState({
        isLoading: false,
      });

      video.onplay = () => {
        this.setState({
          isPlaying: true,
        });
      };

      video.onpause = () => this.setState({
        isPlaying: false,
      });
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.playerTimeout) {
      clearTimeout(this.playerTimeout);
    }

    if (video) {
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

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.oncanplaythrough = null;
      video.onplay = null;
      video.onpause = null;
      video.src = ``;
    }
  }
}

VideoPlayer.propTypes = {
  trailer: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};
