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

// Import Images
import example from "../../img/default.png";

// Define functional component
class Acties extends React.Component {
  constructor(props) {
    super(props);
    this.retrieveProducts();
  }

  render(){
      return(
        <div id="acties">
            <div id="header">
                {/* Back arrow */}
                <Link to="/"><i className="material-icons arrow icon-left-corner">arrow_back</i></Link>

                {/* Users current amount of points, when none are supplied defaults to 0 */}
                <p id="personalPoints" className="points">{this.props.user.points || 0} Punten</p>
                {JSON.parse(localStorage["products"]).map((product, index) => {
                  return <Card img={example} title={product.product} text={product.product} points={product.cost} key={product.id}/>
                })}
            </div>
        </div>
      )
  }

  retrieveProducts = () => {
    axios.get(APIURL + "/acties", {headers: {Authorization: `Bearer ${this.props.user.auth_token}`}})
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
