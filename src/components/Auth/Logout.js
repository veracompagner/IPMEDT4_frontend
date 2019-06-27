// Import react
import React from "react";

// Logout functional component
const Logout = props => (
    <div id="logout">
        {/* Trigger logout, which redirects user to login page */}
        {props.logoutUser()}
    </div>
);

export default Logout;
