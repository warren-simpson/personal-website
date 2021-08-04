import React from "react";
import { Github } from "../icons"
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

            </div>

            <div class="section3">

            </div>
        </div>
        </>
    );
};

export default LandingPageView;