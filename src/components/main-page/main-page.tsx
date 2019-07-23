import * as React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import Catalog from "../catalog/catalog";
import {IApp} from "../../interfaces";
import {Footer} from "../footer/footer";
import {FullWidthPlayer} from "../full-width-player/full-width-player";
import {Header} from "../header/header";

class MainPage extends React.PureComponent<IApp, null> {

  render() {
    const {filmOnTheMainPage, isFullWidthPlayerActive, toggleFullWidthPlayer} = this.props;

    return <React.Fragment>
      {
        isFullWidthPlayerActive ?
        <FullWidthPlayer 
          videoSrc={filmOnTheMainPage.video_link}
          poster={filmOnTheMainPage.background_image}
          runTime={filmOnTheMainPage.run_time}
          toggleFullWidthPlayer={toggleFullWidthPlayer}
          filmName={filmOnTheMainPage.name}
        /> :
      <React.Fragment>
        <Header {...this.props} isFullWidth={false} film={filmOnTheMainPage} toggleFullWidthPlayer={toggleFullWidthPlayer}/>
        <div className="page-content">
          <Catalog/>
          <Footer/>
        </div>
      </React.Fragment>
      }
    </React.Fragment>;
  }
}

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  filmOnTheMainPage: state[`DATA`].films[9]
});

export {MainPage};

export default connect(
    mapStateToProps,
    null
)(MainPage);
