import React from "react";
import { Github, Linkedin } from "../icons"
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
                    <li>
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
                    <li>
                      <Linkedin className="githubIcon" fill="white"/> 
                    </li>
                </ul>
              </div>

              <p class="aboutText">
                Computer Scientist who is extremely passionate about frontend development. 
                I enjoy working with others who are able to communicate their required objectives clearly.
                I live by the moto of "simplicity is the ultimate sophistication" because I believe quality over quantity.
              </p>

              <div class="landingNavBar">
                <div></div>
                <div></div>
                <div>
                  <button class="resumeButton">Resume</button>
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
                <div class="caseContainer1">

                </div>

                <div class="caseContainer2">

                </div>
              </div>
            </div>
        </div>
        </>
    );
};

export default LandingPageView;