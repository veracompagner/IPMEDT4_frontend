import React from 'react';

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
                    <Ripple
                        icon="favorite"
                        name="Acties"
                    ></Ripple>
                    <Ripple
                        icon="location_on"
                        name="Vertraging"
                    ></Ripple>
                </div>
            </div>
        )
    }
}

export default Overzicht;
