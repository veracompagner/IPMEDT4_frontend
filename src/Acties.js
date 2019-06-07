import React from "react";
import { Link } from "react-router-dom";

import "./Acties.scss";

import example from "./img/exampleComp.jpg";

const Acties = (props) => {
    return (
        <div id="acties">
            <Link to="/"><i class="material-icons">arrow_back</i></Link>
            {/* Users current amount of points */}
            <p id="personalPoints" className="points">{props.punten || 0} Punten</p>

            {/* Company image pathname + exchangeable product name + company name + needed amount of points */}
            <div className="pointsExchangeCard">
                <figure>
                    <img src={example} alt="(Company name) Logo"></img>
                </figure>

                <div>
                    <h1 className="companyName infoText">Example Comp.</h1>
                    <p className="productDescription infoText">GRATIS Product</p>
                    <p className="cardPoints points infoText">5000</p>
                </div>
            </div>
        </div>
    );
}

export default Acties;
