import React, { Component } from "react";
import { LandingPageView } from "../views";


class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      case1Opacity: "1",
      case2Opacity: "1",
      firstname: "",
      l1Color: "white",
      lastname: "",
      l2Color: "white",
      company: "",
      email: "",
      l3Color: "white",
      message: "",
      l4Color: "white",
      amountCompleted: 0,
      buttonBackgroundColor: "#0023a6",
      buttonCursor: "arrow"
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

    //
    this.setState({
      [name]: value,
    });
 

    //
    if(name === "firstname" && value === "") {
      this.setState({
        l1Color: "#e32727", 
        amountCompleted: this.state.amountCompleted - 1,
      });
    }
    else if(name === "lastname" && value === "") {
      this.setState({
        l2Color: "#e32727",
        amountCompleted: this.state.amountCompleted - 1,
      });
    }
    else if(name === "email" && value === "") {
      this.setState({
        l3Color: "#e32727",
        amountCompleted: this.state.amountCompleted - 1,
      });
    }
    else if(name === "message" && value === "") {
      this.setState({
        l4Color: "#e32727",
        amountCompleted: this.state.amountCompleted - 1,
      });
    }


    //
    if(this.state.amountCompleted === 4) {
      this.setState({
        buttonBackgroundColor: "#0F42FF",
      });
    }
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