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
    this.startPlaying = this.startPlaying.bind(this);
    this.pausePlaying = this.pausePlaying.bind(this);
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

  pausePlaying() {
    this.setState({
      isPlaying: false,
    });
  }

  startPlaying() {
    this.setState({
      isPlaying: true,
    });
  }

  componentDidMount() {
    const video = this._videoRef.current;

    video.addEventListener(`canplaythrough`, () => this.setState({
      isLoading: false,
    }), {once: true});

    video.addEventListener(`play`, this.startPlaying);
    video.addEventListener(`pause`, this.pausePlaying);
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

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.removeEventListener(`play`, this.startPlaying);
    video.removeEventListener(`pause`, this.pausePlaying);
    video.src = ``;
  }
}

VideoPlayer.propTypes = {
  trailer: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  isPlaying: PropTypes.bool.isRequired
};
