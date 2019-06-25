import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Card from "../Card"
import BottomBar from './BottomBar'

import "./Overzicht.scss"

import logoZonder from "../../img/appLogoZonder.png";
import smullers from "../../img/smullers.jpeg";

const Overzicht = props => (
    <div className="overzicht">
        <Link to="/auth/logout">
            <i className="material-icons icon-left-corner">power_settings_new</i>
        </Link>
        <div className="overzicht-punten-root">
            <img className="overzicht-punten-img" src={logoZonder} alt="appLogo"></img>
            <p className="overzicht-punten-tekst">{props.user.points}</p>
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

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Overzicht);