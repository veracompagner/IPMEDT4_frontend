import React from "react"
import "./LoadingDots.scss"
import logo from "../img/appLogo.png";

const LoadingDots = () => (

    <div className="LoadingDots-container">
        <img className="LoadingDots-logoImg" src={logo} alt="appLogo"></img>
        <div className="LoadingDots-circle"></div>
    </div>

);


export default LoadingDots;
