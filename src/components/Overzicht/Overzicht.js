import React from 'react';
import { Link } from "react-router-dom";


import Card from "../Card"
import Ripple from './Ripple'

import 'material-design-icons/iconfont/material-icons.css';
import "./Overzicht.scss"

import logoZonder from "../../img/appLogoZonder.png";
import smullers from "../../img/smullers.jpeg";

class Overzicht extends React.Component {
    render(){
        return(
            <div >
                <Link to="/auth/logout">
                    <i className="material-icons">power_settings_new</i>
                </Link>
                <div className="overzicht-punten-root">
                    <img className="overzicht-punten-img" src={logoZonder} alt="appLogo"></img>
                    <p className="overzicht-punten-text">0000</p>
                </div>
                <div className="overzicht-cards">
                    <Card
                        title="Gratis Snack"
                        text="Smullers"
                        points="2000"
                        img={smullers}
                    />
                </div>
                <div className="overzicht-footer">
                    <Link to="/acties">
                        <Ripple
                            icon="favorite"
                            name="Acties"
                        ></Ripple>
                    </Link>
                    <Link to="/auth/register">
                        <Ripple
                            icon="location_on"
                            name="vertraging"
                        ></Ripple>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Overzicht;
