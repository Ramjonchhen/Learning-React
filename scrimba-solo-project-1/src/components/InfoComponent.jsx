import React from "react";
import pp from "../images/pp.jpg";
export default function Info() {
    return (
        <div className="Info-Container">
            <img src={pp} alt="Ram-Jonchhen-Picture" id="display-image"/>
            <h3 class="info-headings" id="info-1">Ram Jonchhen</h3>
            <h4 class="info-headings" id="info-2">BackEnd Developer</h4>
            <h5 class="info-headings" id="info-3">ramjonchhen.com.np</h5>
            <div class="info-buttons" id="linedin-button">LinedIn</div>
            <div class="info-buttons" id="email-button">Email</div>
        </div>
    );
}