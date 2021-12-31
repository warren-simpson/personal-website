import React, { Component } from "react";
import { LandingPageView } from "../views";
//import{ init } from '@emailjs/browser';
import dotenv from "dotenv"

class LandingPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      case1Opacity: "1",
      case2Opacity: "1",
      firstname: "",
      l1Color: "white",
      l1ErrorMessage: "",
      lastname: "",
      l2Color: "white",
      l2ErrorMessage: "",
      company: "",
      email: "",
      l3Color: "white",
      l3ErrorMessage: "",
      message: "",
      l4Color: "white",
      l4ErrorMessage: "",
      buttonBackgroundColor: "#0023a6",
      buttonCursor: "arrow",
    };
  }

  
  componentDidMount() {
    dotenv.config();
    console.log(process.env);
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
    
    // eslint-disable-next-line
    let testEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    //Update the state for each individual cell.
    if(name === "firstname") {
      this.setState({
        l1Color: value === "" ? "#e32727" : "white", 
        l1ErrorMessage: value === "" ? "required" : "",
      });
    }
    else if(name === "lastname") {
      this.setState({
        l2Color: value === "" ? "#e32727" : "white", 
        l2ErrorMessage: value === "" ? "required" : "",
      });
    }
    else if(name === "email") {
      this.setState({
        l3Color: !testEmail.test(value) ? "#e32727" : "white", 
        l3ErrorMessage: !testEmail.test(value) ? "Email is not valid" : "",
      });
    }
    else if(name === "message") {
      this.setState({
        l4Color: value === "" ? "#e32727" : "white",
        l4ErrorMessage: value === "" ? "required" : "",
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