import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Card from "../Card"
import BottomBar from './BottomBar'
import ModalWrapper from "../Modal/ModalWrapper";

import "./Overzicht.scss"

import logoZonder from "../../img/appLogoZonder.png";
import smullers from "../../img/smullers.jpeg";
import { APIURL } from "../../constants/constants";

const Overzicht = props => (
    <ModalWrapper>
        {openModal => (
            <div className="overzicht">
                <Link to="/auth/logout">
                    <i className="material-icons icon-left-corner">power_settings_new</i>
                </Link>
                <div className="overzicht-punten-root">
                    <img className="overzicht-punten-img" src={logoZonder} alt="appLogo"></img>
                    <p className="overzicht-punten-tekst">{props.user.points}</p>
                </div>
                <div className="overzicht-cards">
                    {props.products !== [] ?
                    <Card
                        onClick={() => {openModal({product: "Gratis Snack"})}}
                        title="Gratis Snack"
                        text="Smullers"
                        points="200"
                        img={smullers}
                    /> :
                    <Card
                        onClick={() => {openModal(props.products[0])}}
                        img={APIURL + "/products/" + props.products[0].company.logo}
                        title={props.products[0].company.name}
                        text={props.products[0].product}
                        points={props.products[0].cost}
                        key={props.products[0].id}
                    /> }
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
                            name="Vertraging"
                            icon="location_on"
                            link
                        ></BottomBar>
                    </Link>
                </div>
            </div>
        )}
    </ModalWrapper>
)

const mapStateToProps = state => {
    return {
        user: state.user,
        products: state.products
    }
}

export default connect(mapStateToProps)(Overzicht);
