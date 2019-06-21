// Import React and the Link component from React-Router
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Import SCSS
import "./Acties.scss";

// Import Card component
import Card from "../Card";

// Import Images
import example from "../../img/exampleComp.jpg";

// Define functional component
const Acties = props => (
    <div id="acties">
        {/* Back arrow */}
        <Link to="/"><i className="material-icons">arrow_back</i></Link>

        {/* Users current amount of points, when none are supplied defaults to 0 */}
        <p id="personalPoints" className="points">{props.user.points || 0} Punten</p>
        { console.log(props.user) }

        {/* Company image + exchangeable product name + company name + needed amount of points */}
        <Card img={example} title="Example Comp." text="GRATIS Product" points="5000"/>
    </div>
);

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Acties);
