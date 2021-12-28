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
      buttonBackgroundColor: "#0023a6",
      buttonCursor: "arrow"
    };
  }



  handleNewWindowClick = (e, link) => {
    window.open(link, "_blank");
  }



  handleSubmit = (e) => {
    e.preventDefault();

  };



  handleInputChange = (e) => {
    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    this.setState({[name]: value}, () => {
      this.finishInputChange(name, value)
    })
  }



  finishInputChange = (name, value) => {

    //Update the state for each individual cell.
    if(name === "firstname") {
      this.setState({
        l1Color: value === "" ? "#e32727" : "white", 
      });
    }
    else if(name === "lastname") {
      this.setState({
        l2Color: value === "" ? "#e32727" : "white", 
      });
    }
    else if(name === "email") {
      this.setState({
        l3Color: value === "" ? "#e32727" : "white",
      });
    }
    else if(name === "message") {
      this.setState({
        l4Color: value === "" ? "#e32727" : "white",
      });
    }

    //Update the submit button state based on 
    const isButtonSet = (this.state.firstname !== "" && this.state.lastname !== "" && this.state.email !== "" && this.state.message !== "")
    this.setState({
      buttonBackgroundColor: isButtonSet === true ? "#0F42FF" : "#0023a6",
      buttonCursor: isButtonSet === true ? "pointer" : "arrow",
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