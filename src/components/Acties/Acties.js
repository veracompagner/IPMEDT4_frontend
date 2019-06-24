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
import example from  "../../img/default.png";

// Define class component
class Acties extends React.Component {

    constructor() {
        super();
        this.retrieveProducts();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = (value) => {
        this.setState({
            isShowing: true,
            modalData: value
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render(){
        return(
            <div className="acties">
                <div className="acties-header">
                    {/* Back arrow */}
                    <Link to="/"><i className="material-icons icon-left-corner">arrow_back</i></Link>

                    {/* Users current amount of points, when none are supplied defaults to 0 */}
                    <p className="acties-points">{this.props.user.points || 0} Punten</p>
                </div>

                {/* Company image + exchangeable product name + company name + needed amount of points */}
                {JSON.parse(localStorage["products"]).map((product, index) => {
                    return <Card onClick={() => {this.openModalHandler(product.product)}} img={example} title={product.product} text={product.product} points={product.cost} key={product.id}/>
                })}

                {/* Modal */}
                <Modal
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    data={this.state.modalData} />
            </div>
        )
    }

    retrieveProducts = () => {
        axios
        .get(APIURL + "/acties", {headers: {Authorization: `Bearer ${this.props.user.auth_token}`}})
        .then(json => {
            if (json.data.products) {
                // save products data in local storage
                localStorage["products"] = JSON.stringify(json.data.products);
            } else console.log("Retrieving products failed!");
        })
        .catch(error => {
            console.log("Er is iets mis gegaan");
        });
    };
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Acties);
