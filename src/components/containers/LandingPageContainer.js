import React, { Component } from "react";
import { LandingPageView } from "../views";

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      case1Opacity: "1",
      case2Opacity: "1",
    };
  }

  handleNewWindowClick = (e, link) => {
    window.open(link, "_blank");
  }

  handleCaseOverEnter = (e, caseNumber) => {
    if(caseNumber === "1") {
      this.setState({
        case1Opacity: "0.7"
      })
    }
    else {
      this.setState({
        case2Opacity: "0.7"
      })
    }
  }

  handleCaseOverLeave = (e, caseNumber) => {
    if(caseNumber === "1") {
      this.setState({
        case1Opacity: "1"
      })
    }
    else {
      this.setState({
        case2Opacity: "1"
      })
    }
  }

  render() {
    return (
      <>
      <LandingPageView
      handleNewWindowClick={this.handleNewWindowClick}
      handleCaseOverEnter={this.handleCaseOverEnter}
      handleCaseOverLeave={this.handleCaseOverLeave}
      state={this.state}
      />
      </>
    );
  }
}

export default LandingPageContainer;