import React from "react";

import "./Logout.scss";

import logoutimg from "../../img/logout.png";


const Logout = ({logoutUser}) => {
    function handleLogout(e){
        e.preventDefault();
        logoutUser();
    }

    return (
        <div id="logout">
            <img className="logoutimg" onClick={handleLogout} src={logoutimg} alt="uitloggen"/>
        </div>
    );
};

export default Logout;
