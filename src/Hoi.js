import React from "react";

import { Link } from "react-router-dom";

/**
 * This class is just a placeholder, needs to be changed when people
 * work on routing/different screens. This just shows stuff works.
 **/
const Hoi = props => {
    return (
        <div>
            <p>Hallo!!</p>
            <button onClick={props.logoutUser}>
                Logout
            </button>
            <p>
                <Link to="/acties">Acties pagina</Link>
            </p>

        </div>
    )
}

export default Hoi;
