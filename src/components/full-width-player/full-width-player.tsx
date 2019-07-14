import * as React from "react";
import { IFullWidthPlayer } from "../../interfaces";

export class FullWidthPlayer extends React.Component<IFullWidthPlayer, null> {
  private _videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);
    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  formatRuntime(runtime): string {
		const totalTimeInSec = runtime * 60;

		const hours = Math.floor(totalTimeInSec / 3600);
		const min = Math.floor((totalTimeInSec - (hours * 3600)) / 60);
		const sec = totalTimeInSec % 60;

    return [hours, min, sec].map((val: number) => val > 10 ? val : `0${val}`).join(':');
  }

  render() {
    const {
      videoSrc,
      poster,
      percentsPassed,
      runTime,
      toggleFullWidthPlayer,
			isPlaying,
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
                <progress className="player__progress" value={percentsPassed} max="100" />
                <div
                  className="player__toggler"
                  style={{ left: `${percentsPassed}` }}
                >
                  Toggler
                </div>
              </div>
              <div className="player__time-value">
                {this.formatRuntime(runTime)}
              </div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref={isPlaying ? "#pause" : "#play-s"} />
                </svg>
                <span>{isPlaying ? "Pause" : "Play"}</span>
              </button>
              <div className="player__name">{filmName}</div>

              <button type="button" className="player__full-screen">
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
