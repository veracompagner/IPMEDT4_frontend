import React from "react";
import "./scss/Alert.scss";

const Alert = (props) => {
    return (
        <div id="alert">
            <p>{props.foutmeldingen}</p>
        </div>
    );
};

export default Alert;
