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

            </div>
        </div>
        </>
    );
};

export default LandingPageView;