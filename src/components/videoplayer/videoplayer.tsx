import * as React from "react";
import {IVideoPlayer} from "../../interfaces";

export class VideoPlayer extends React.PureComponent<IVideoPlayer, null> {
  private _videoRef: React.RefObject<HTMLVideoElement>;
  private playerTimeout: null | NodeJS.Timer;
  private playerDelay: number;

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
        <source src={trailer} />
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
