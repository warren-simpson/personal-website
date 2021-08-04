import React, { Component } from "react";
import { LandingPageView } from "../views";

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 

    };
  }


  handleClick = (e) => {

  }

  render() {
    return (
      <>
      <LandingPageView
      handleClick={this.handleClick}
      state={this.state}
      />
      </>
    );
  }
}

export default LandingPageContainer;