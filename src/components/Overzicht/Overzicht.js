import React from 'react';
import { Link } from "react-router-dom";


import Card from "../Card"
import BottomBar from './BottomBar'

import "./Overzicht.scss"

import logoZonder from "../../img/appLogoZonder.png";
import smullers from "../../img/smullers.jpeg";

class Overzicht extends React.Component {
    render(){
        return(
            <div >
                <Link to="/auth/logout">
                    <i className="material-icons icon-left-corner">power_settings_new</i>
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
                        <BottomBar
                            name="Acties"
                            icon="favorite"
                            link="/acties"
                        ></BottomBar>
                    </Link>
                    <Link to="/vertraging">
                        <BottomBar
                            name="vertraging"
                            icon="location_on"
                            link
                        ></BottomBar>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Overzicht;
