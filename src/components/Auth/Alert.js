// Import react
import React from "react";

// Import scss
import "./Alert.scss";

// Alert functional component
const Alert = props => (
    <div id="alert">
        {/* Display given error message */}
        <p>{props.foutmeldingen}</p>
    </div>
);

export default Alert;
