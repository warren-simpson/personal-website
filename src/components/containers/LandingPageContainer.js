import React, { Component } from "react";
import { LandingPageView } from "../views";
import emailjs from '@emailjs/browser';
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
      currentFormView: "input",
      buttonOpacity: "0.3",
      buttonCursor: "arrow",
      cases: [
        {
          githubLink: "https://github.com/malus-labs",
          img: "malusfrontpage.svg",
          name: "Malus",
          number: "1",
          text: "A web application that was created to interact with smart contracts on the Ethereum blockchain.",
          website: "https://malus.fi",
        }, 

        {
          githubLink: "https://github.com/warren-simpson/Php_Project",
          img: "lemonadefrontpage.svg",
          name: "Lemonade",
          number: "2",
          text: "An ecommerce web application created to help customers purchase items such as bags and shoes in multiple quanties.",
          website: "https://lemonade-ecomm.herokuapp.com/php/FrontPage.php",
        }]
    };
  }


  componentDidMount() {
    dotenv.config();
  }



  handleNewWindowClick = (e, link) => {
    e.stopPropagation();
    window.open(link, "_blank");
  }



  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      currentFormView: "loading"
    })
    const form = window.document.getElementsByClassName("contactForm");

    if(this.state.buttonOpacity === "1") {
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form[0], process.env.REACT_APP_USER_ID)
      .then((result) => {
        this.setState({
          currentFormView: "thankyou"
        })
      }, (error) => {
          console.log(error.text);
      });
    }
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
      buttonOpacity: isButtonSet === true ? "1" : "0.3",
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