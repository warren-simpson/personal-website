import React, { Component } from "react";
import { LandingPageView } from "../views";

//#e32727
class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      case1Opacity: "1",
      case2Opacity: "1",
      firstname: "",
      l1_color: "white",
      lastname: "",
      l2_color: "white",
      company: "",
      email: "",
      l3_color: "white",
      message: "",
      l4_color: "white",
      button_backgroundColor: "#0023a6",
      button_cursor: "arrow"
    };
  }

  handleNewWindowClick = (e, link) => {
    window.open(link, "_blank");
  }

  handleSubmit = (e) => {

  };

  handleInputChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
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
      handleSubmit={this.handleSubmit}
      handleInputChange={this.handleInputChange}
      handleCaseOverEnter={this.handleCaseOverEnter}
      handleCaseOverLeave={this.handleCaseOverLeave}
      state={this.state}
      />
      </>
    );
  }
}

export default LandingPageContainer;