// Import React and the Link component from React-Router
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeFavorite } from "../../redux/actions"

import { APIURL } from "../../constants/constants";

// Import SCSS
import "./Acties.scss";

// Import Card component
import Card from "../Card";

import ModalWrapper from "../Modal/ModalWrapper";

// Define class component
class Acties extends React.Component {

    favoriteClick = (event, id) => {
        event.stopPropagation();
        this.props.dispatch(changeFavorite(id));
    }

    favoriteCheck = id => {
        if(this.props.favorite === id) {
            return "favorite";
        } else {
            return "favorite_border";
        }
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
                            this.props.products != null ?
                                this.props.products.map((product, index) => {
                                    return <Card
                                        onClick={() => {openModal(product)}}
                                        img={product.company.logo ? APIURL + "/products/" + product.company.logo : ""}
                                        title={product.company.name}
                                        text={product.product}
                                        points={product.cost}
                                        key={product.id}
                                        favorite={this.favoriteCheck(product.id)}
                                        favoriteClick={event => {this.favoriteClick(event, product.id)}} />

                                }) : ""
                        }
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

export default connect(mapStateToProps)(Acties);
