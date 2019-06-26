// Import React and the Link component from React-Router
import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { APIURL } from "../../constants/constants";

// Import SCSS
import "./Acties.scss";

// Import Card component
import Card from "../Card";

// Import Modal
import Modal from "../Modal/Modal";

// Import Images
import defaultImg from  "../../img/default.png";
import ModalWrapper from "../Modal/ModalWrapper";

// Define class component
class Acties extends React.Component {

    constructor() {
        super();
        this.state = {
            products: null
        }
    }

    componentWillMount = () => {
        this.retrieveProducts();
    }

    render(){
        return(
            <ModalWrapper>
                {openModal => (
                    <div className="acties">
                        <div className="acties-header">
                            {/* Back arrow */}
                            <Link to="/"><i className="material-icons icon-left-corner">arrow_back</i></Link>

                            {/* Users current amount of points, when none are supplied defaults to 0 */}
                            <p className="acties-points">{this.props.user.points || 0} Punten</p>
                        </div>

                        {/* Company image + exchangeable product name + company name + needed amount of points */}
                        {
                            this.testFunctie(this.state.products, openModal)
                        }

                        {/* Modal */}
                        <Modal
                            show={this.state.isShowing}
                            close={this.closeModalHandler}
                            data={this.state.modalData} />
                    </div>
                )}
            </ModalWrapper>
        )
    }

    retrieveProducts = () => {
        if(!localStorage["products"]) {
            axios
            .get(APIURL + "/products", {headers: {Authorization: `Bearer ${this.props.token}`}})
            .then(json => {
                if (json.data) {
                    // save products data in local storage
                    localStorage["products"] = JSON.stringify(json.data);
                    this.setState({
                        products: json.data
                    })
                } else {
                    console.log(json);
                    console.log("Retrieving products failed!");
                }
            })
            .catch(error => {
                console.log(error.response);
                console.log("Er is iets mis gegaan");
            });
        } else {
            this.setState({
                products: JSON.parse(localStorage["products"])
            })
        }

    };

    testFunctie = (products, openModal) => {
        if (products != null) {
            console.log(products);
            return products.map((product, index) => {
                return <Card
                    onClick={() => {openModal(product.product)}}
                    img={product.company.logo ? APIURL + "/products/" + product.company.logo : defaultImg}
                    title={product.company.name}
                    text={product.product}
                    points={product.cost}
                    key={product.id}
                    />
            })
        }
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
}

export default connect(mapStateToProps)(Acties);
