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

    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  render() {
    const {trailer, poster} = this.props;

    return <React.Fragment>
      <video 
        ref={this._videoRef}
        poster={poster}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
        width="280"
        height="175"
        muted>
          <source src={trailer}></source>
      </video>
    </React.Fragment>;
  }

  componentDidMount() {
    const video = this._videoRef.current;
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

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  handleMouseOver() {
    const {onMouseOver} = this.props;
    onMouseOver();
    this.setState({isPlaying: true});
  }

  handleMouseLeave() {
    const {onMouseLeave} = this.props;
    onMouseLeave();
    this.setState({isPlaying: false});
  }
}

VideoPlayer.propTypes = {
    trailer: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};
