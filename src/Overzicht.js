import React from 'react';

import Cards from "./Cards"
import Ripple from './Ripple'

import 'material-design-icons/iconfont/material-icons.css';

import "./css/BottomNavigation.scss"
import "./css/Overzicht.scss"

import logoZonder from "./img/appLogoZonder.png";
import smullers from "./img/smullers.jpeg";

class Overzicht extends React.Component {
    render(){
        return(
            <div >
                <div className="overzicht-punten-root">
                    <img className="overzicht-punten-img" src={logoZonder} alt="appLogo"></img>
                    <p className="overzicht-punten-text">0000</p>
                </div>
                <div className="overzicht-cards">
                    <Cards
                        title="Gratis Snack"
                        text="Smullers"
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
