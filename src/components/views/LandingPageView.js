import React from "react";
import { Github, Linkedin } from "../icons";
import "../views/styles/LandingPageView.css";

const LandingPageView = (props) => {
    return (
        <>
        <div class="landingPage">
            <div class="landingNavBar">
                <div class="logoContainer">
                    <p class="profileTitle">Warren Simpson</p>
                </div>
                <div></div>
                <ul>
                    <li onClick={(e) => props.handleNewWindowClick(e, "https://github.com/Warren28")}>
                      <Github className="githubIcon" fill="white"/> 
                    </li>
                </ul>
            </div>

            <div class="section1">
              <div class="sec1A">
                <p class="P1A">Hi There!<br></br><span class="P1B">Looking For A Frontend Developer?</span></p>
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
                    <li onClick={(e) => props.handleNewWindowClick(e, "https://www.linkedin.com/in/warren-simpson1/")}>
                      <Linkedin className="githubIcon" fill="white"/> 
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
                <div class="caseContainer1" onMouseEnter={(e) => props.handleCaseOverEnter(e, "1")} onMouseLeave={(e) => props.handleCaseOverLeave(e, "1")} onClick={(e) => props.handleNewWindowClick(e, "https://malus.fi")}>
                  <img class="caseImage" src="malusfrontpage.svg" alt="" style={{"opacity": props.state.case1Opacity}}></img>
                  <p class="caseTitle">Malus</p>
                  <p class="caseText">
                    A web application that was created to interact with smart contracts on the
                    Ethereum blockchain.</p>
                </div>

                <div class="caseContainer2" onMouseEnter={(e) => props.handleCaseOverEnter(e, "2")} onMouseLeave={(e) => props.handleCaseOverLeave(e, "2")} onClick={(e) => props.handleNewWindowClick(e, "https://lemonade-ecomm.herokuapp.com/php/FrontPage.php")}>
                  <img class="caseImage" src="lemonadefrontpage.svg" alt="" style={{"opacity": props.state.case2Opacity}}></img>
                  <p class="caseTitle">Lemonade</p>
                  <p class="caseText">
                    An ecommerce web application created to help customers purchase items such as bags and shoes
                    in multiple quanties.</p>
                </div>

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

              <form class="contactForm">
                <div class="formCell1">
                  <label class="formLabel" >Firstname</label>
                  <input class="formInput" value={props.state.firstname} name="firstname" onChange={e => props.handleInputChange(e)} autocomplete="off"></input>
                </div>

                <div class="formCell1">
                  <label class="formLabel" >Lastname</label>
                  <input class="formInput" value={props.state.lastname} name="lastname" onChange={e => props.handleInputChange(e)} autocomplete="off"></input>
                </div>

                <div class="formCell1">
                  <label class="formLabel" >Company (Optional)</label>
                  <input class="formInput" value={props.state.company} name="company" onChange={e => props.handleInputChange(e)} autocomplete="off"></input>
                </div>

                <div class="formCell1">
                  <label class="formLabel" >Email</label>
                  <input class="formInput" value={props.state.email} name="email" onChange={e => props.handleInputChange(e)} autocomplete="off"></input>
                </div>

                <div class="formCell2">
                  <label class="formLabel" >Message</label>
                  <textarea  class="formInput2" value={props.state.message} name="message" onChange={e => props.handleInputChange(e)} autocomplete="off"></textarea>
                </div>

                <div class="formCell1">
                  <button class="submitButtonOn">Submit</button>
                </div>
              </form>
            </div>
        </div>
        </>
    );
};

export default LandingPageView;