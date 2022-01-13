import React from "react";
import { Github, Linkedin } from "../icons";
import "../views/styles/LandingPageView.css";

            /*
            <div class="caseContainer1" onMouseEnter={(e) => props.handleCaseOverEnter(e, "1")} onMouseLeave={(e) => props.handleCaseOverLeave(e, "1")} onClick={(e) => props.handleNewWindowClick(e, "https://malus.fi")}>
              <img class="caseImage" src="malusfrontpage.svg" alt="" style={{"opacity": props.state.case1Opacity}}></img>
              <p class="caseTitle">Malus</p>
              <p class="caseText">
                A web application that was created to interact with smart contracts on the
                Ethereum blockchain.</p>
              <i class="caseGitHolder" onClick={(e) => props.handleNewWindowClick(e, "https://github.com/malus-labs")}>
                <Github className="githubIcon2" fill="white"/> 
              </i>
            </div>

            <div class="caseContainer2" onMouseEnter={(e) => props.handleCaseOverEnter(e, "2")} onMouseLeave={(e) => props.handleCaseOverLeave(e, "2")} onClick={(e) => props.handleNewWindowClick(e, "https://lemonade-ecomm.herokuapp.com/php/FrontPage.php")}>
              <img class="caseImage" src="lemonadefrontpage.svg" alt="" style={{"opacity": props.state.case2Opacity}}></img>
              <p class="caseTitle">Lemonade</p>
              <p class="caseText">
                An ecommerce web application created to help customers purchase items such as bags and shoes
                in multiple quanties.</p>
              <i class="caseGitHolder" onClick={(e) => props.handleNewWindowClick(e, "https://github.com/Warren28/Php_Project")}>
                <Github className="githubIcon2" fill="white"/> 
              </i>
            </div>
            */
            
            /*
            */
           
const LandingPageView = (props) => {
  console.log(window.innerWidth)
  var dynamicFormContent = (
  <>
            <div class="formCell1" onSubmit={(e) => props.handleSubmit(e)}>
              <label class="formLabel" >Firstname <span class="errorMessage">{props.state.l1ErrorMessage}</span></label>
              <input class="formInput"style={{"border-color": props.state.l1Color}} value={props.state.firstname} name="firstname" onChange={(e) => props.handleInputChange(e)} autoComplete="off"></input>
            </div>

            <div class="formCell1">
              <label class="formLabel" >Lastname <span class="errorMessage">{props.state.l2ErrorMessage}</span></label>
              <input class="formInput" style={{"border-color": props.state.l2Color}} value={props.state.lastname} name="lastname" onChange={(e) => props.handleInputChange(e)} autoComplete="off"></input>
            </div>

            <div class="formCell1">
              <label class="formLabel" >Company (Optional)</label>
              <input class="formInput" value={props.state.company} name="company" onChange={(e) => props.handleInputChange(e)} autoComplete="off"></input>
            </div>

            <div class="formCell1">
              <label class="formLabel" >Email <span class="errorMessage">{props.state.l3ErrorMessage}</span></label>
              <input class="formInput" style={{"border-color": props.state.l3Color}} value={props.state.email} name="email" onChange={(e) => props.handleInputChange(e)} autoComplete="off"></input>
            </div>

            <div class="formCell2">
              <label class="formLabel" >Message <span class="errorMessage">{props.state.l4ErrorMessage}</span></label>
              <textarea  class="formInput2" style={{"border-color": props.state.l4Color}} value={props.state.message} name="message" onChange={(e) => props.handleInputChange(e)} autoComplete="off"></textarea>
            </div>

            <div class="formCell1">
              <button class="submitButton" style={{"opacity": props.state.buttonOpacity, "cursor": props.state.buttonCursor}} onClick={(e) => props.handleSubmit(e)} type="button">Submit</button>
            </div>
      </> )

  if(props.state.currentFormView === "thankyou") {
    dynamicFormContent = (
      <>
      <div class="cftdiv">
        <p class="thankYouText">Thank for contacting me, <br/> I will be connecting with you shortly.</p>
      </div>
      </>)
  }
  else if(props.state.currentFormView === "loading") {
    dynamicFormContent = (
    <>
    <div class="loader"></div>
    </>)
  }

  return (
    <>
    <div class="landingPage">
        <div class="landingNavBar">
            <div class="logoContainer">
                <p class="profileTitle">Warren Simpson</p>
            </div>
            <div></div>
            <ul>
                <li class="gitHolder1" onClick={(e) => props.handleNewWindowClick(e, "https://github.com/Warren28")}>
                  <Github className="githubIcon1" fill="white"/> 
                </li>
            </ul>
        </div>

        <div class="section1">
          <div class="sec1A">
            <p class="P1A">Hi There!<br></br><span class="P1B">Looking For A Frontend Engineer?</span></p>
          </div>

          <div class="sec1B">
            <img class="profile" src="profile.png" alt=""></img>
          </div>
        </div>

        <div class="section2">
          <div class="landingNavBar">
            <div class="logoContainer">
                <p class="aboutTitle">About</p>
            </div>
            <div></div>
            <ul>
                <li className="linkedinHolder" onClick={(e) => props.handleNewWindowClick(e, "https://www.linkedin.com/in/warren-simpson1/")}>
                  <Linkedin className="linkedinIcon" fill="white"/> 
                </li>
            </ul>
          </div>

          <p class="aboutText">
            Computer Science graduate who is extremely passionate about frontend development. 
            I enjoy working with others who are able to communicate their required objectives clearly.
            I live by the moto of "simplicity is the ultimate sophistication" because I believe quality over quantity.
          </p>

          <div class="landingNavBar">
            <div></div>
            <div></div>
            <div>
              <button class="resumeButton" onClick={(e) => props.handleNewWindowClick(e, "https://www.dropbox.com/s/vmj373sh58o0h61/Resume.docx?dl=0")}>Resume</button>
            </div>
          </div>
        </div>

        <div class="section3">
          <div class="landingNavBar">
            <div class="logoContainer">
                <p class="aboutTitle">Case Studies</p>
            </div>
            <div></div>
            <div></div>
          </div>

          <div class="sec3A">
            
          </div>
        </div>

        <div class="section4">
          <div class="landingNavBar">
            <div class="logoContainer">
                <p class="aboutTitle">Contact</p>
            </div>
            <div></div>
            <div></div>
          </div>

          <form class="contactForm" onSubmit={(e) => props.handleSubmit(e)}>
            {dynamicFormContent}
          </form>
        </div>
    </div>
    </>
  );
};

export default LandingPageView;