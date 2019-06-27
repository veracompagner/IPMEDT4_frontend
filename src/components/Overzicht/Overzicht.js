import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeProducts } from "../../redux/actions";

import Card from "../helper/Card/Card"
import BottomBar from './BottomBar'
import ModalWrapper from "../helper/Modal/ModalWrapper";

import "./Overzicht.scss"

import logoZonder from "../../img/appLogoZonder.png";
import { APIURL } from "../../constants/constants";
import axios from "axios";
import Spinner from "../helper/Spinner/Spinner";

class Overzicht extends React.Component {

    componentWillMount = () => {
        this.retrieveProducts();
    }

    retrieveProducts = () => {
        if(this.props.products !== []) {
            axios({
                method: 'GET',
                url: APIURL + "/products",
                headers: {Authorization: `Bearer ${this.props.token}`}
            })
            .then(json => {
                if (json.data) {
                    this.props.dispatch(changeProducts(json.data))
                } else {
                    console.log(json);
                    console.log("Retrieving products failed!");
                }
            })
            .catch(error => {
                console.log(error);
                console.log(error.response);
                console.log("Er is iets mis gegaan");
            });
        }
    };

    render() {
        let product = this.props.products.length !== 0 ? this.props.products[this.props.favorite-1] : false;

        return (
            <ModalWrapper>
                {openModal => (
                    <div className="overzicht">
                        <Link to="/auth/logout">
                            <i className="material-icons icon-left-corner">power_settings_new</i>
                        </Link>
                        <div className="overzicht-punten-root">
                            <img className="overzicht-punten-img" src={logoZonder} alt="appLogo"></img>
                            <p className="overzicht-punten-tekst">{this.props.user.points}</p>
                        </div>
                        <div className="overzicht-cards">
                            {
                                product ?
                                    <Card
                                        onClick={() => {openModal(product)}}
                                        img={APIURL + "/products/" + product.company.logo}
                                        title={product.company.name}
                                        text={product.product}
                                        points={product.cost}
                                        key={product.id}
                                    />
                                :
                                    <div className="overzicht-cards-spinner">
                                        <Spinner />
                                    </div>
                            }
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
                                ></BottomBar>
                            </Link>
                        </div>
                    </div>
                )}
            </ModalWrapper>
        )
    }

}

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token,
        products: state.products,
        favorite: state.favorite
    }
}

export default connect(mapStateToProps)(Overzicht);
