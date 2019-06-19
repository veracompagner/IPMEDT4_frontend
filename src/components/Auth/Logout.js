import React from "react";

const Logout = ({ logoutUser }) => {

    return (
        <div id="logout">
            {logoutUser()}
        </div>
    );
}

export default Logout;
