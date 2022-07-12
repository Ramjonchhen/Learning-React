import React from "react";

import Info from "./components/InfoComponent";
import AboutComponenet from "./components/AboutComponent";
import InterestComponenet from "./components/IntrestContainer";
import FooterSection from "./components/FooterSection";

export default function MainContainer() {
    return (
        <div className="main--container">
            <Info/>
            <AboutComponenet/>
            <InterestComponenet/>
            <FooterSection/>
        </div>
    );
}