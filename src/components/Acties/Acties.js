// Import React and the Link component from React-Router
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Import SCSS
import "./Acties.scss";

// Import Card component
import Card from "../Card";

// Import Images
import example from  "../../img/default.png";
//Test elements till the products prop has been made;
const elements = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
// Define functional component
const Acties = props => (
    <div id="acties">
        <div id="header">
            {/* Back arrow */}
            <Link to="/"><i className="material-icons arrow icon-left-corner">arrow_back</i></Link>

            {/* Users current amount of points, when none are supplied defaults to 0 */}
            <p id="personalPoints" className="points">{props.user.points || 0} Punten</p>
        </div>

        {/* Company image + exchangeable product name + company name + needed amount of points */}
        {elements.map((value, index) => {
          return <Card img={example} title={value} text="GRATIS Product" points="5000" key={index}/>
        })}
    </div>
);

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Acties);
