import * as React from "react";
import { IFullWidthPlayer, IFullWidthPlayerState } from "../../interfaces";

export class FullWidthPlayer extends React.Component<IFullWidthPlayer, IFullWidthPlayerState> {
  private _videoRef: React.RefObject<HTMLVideoElement>;
  private timer: number | null;
  private _isMounted: boolean;

  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
    this.timer = null;
    this._isMounted = false;
    this.state = {
      isPlaying: false,
      secondsPassed: 0,
      percentsPassed: 0,
      videoEnded: false
    }

    this.togglePlay = this.togglePlay.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
  }

  togglePlay() {
    if (this._isMounted) {
      this.setState({
        isPlaying: !this.state.isPlaying
      })
    }
  }

  startTimer() {
    this.timer = window.setInterval(() => {
      if (this._isMounted) {
        this.setState({
          secondsPassed: this.state.secondsPassed + 1,
          percentsPassed: (this.state.secondsPassed / (this.props.runTime * 60)) * 100
        })

        if (this.state.percentsPassed >= 100) {
          this.togglePlay();
          this.setState({
            videoEnded: true
          })
        }
      }
    }, 1000)
  }

  pauseTimer() {
    clearInterval(this.timer);
  }

  formatRemainingTime(runtime): string {
		const totalTimeInSec = (runtime * 60) - this.state.secondsPassed;

		const hours = Math.floor(totalTimeInSec / 3600);
		const min = Math.floor((totalTimeInSec - (hours * 3600)) / 60);
		const sec = totalTimeInSec % 60;

    return [hours, min, sec].map((val: number) => val > 10 ? val : `0${val}`).join(':');
  }

  handleFullScreenClick() {
    const video = this._videoRef.current;

    video.requestFullscreen();
  }

  componentDidMount() {
    this._isMounted = true;
    this.togglePlay();
  }

  componentDidUpdate(prevProps, prevState) {
    const video = this._videoRef.current;

    if (prevState.isPlaying !== this.state.isPlaying) {
      if (this.state.isPlaying) {
        video.play();
        this.startTimer();
      } else {
        video.pause()
        this.pauseTimer();
      }
    }

    if (prevState.videoEnded !== this.state.videoEnded) {
      this.setState({
        secondsPassed: 0,
        percentsPassed: 0
      })
      video.currentTime = 0;
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {
      videoSrc,
      poster,
      runTime,
      toggleFullWidthPlayer,
			filmName
    } = this.props;

    return (
      <React.Fragment>
        <div className="player">
          <video
            src={videoSrc}
            className="player__video"
            poster={poster}
            ref={this._videoRef}
          />

          <button
            onClick={toggleFullWidthPlayer}
            type="button"
            className="player__exit"
          >
            Exit
          </button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={this.state.percentsPassed} max="100" />
                <div
                  className="player__toggler"
                  style={{ left: `${this.state.percentsPassed}%` }}
                >
                  Toggler
                </div>
              </div>
              <div className="player__time-value">
                {this.formatRemainingTime(runTime)}
              </div>
            </div>

            <div className="player__controls-row">
              <button onClick={this.togglePlay} type="button" className="player__play">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref={this.state.isPlaying ? "#pause" : "#play-s"} />
                </svg>
                <span>{this.state.isPlaying ? "Pause" : "Play"}</span>
              </button>
              <div className="player__name">{filmName}</div>

              <button type="button" onClick={this.handleFullScreenClick} className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen" />
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
