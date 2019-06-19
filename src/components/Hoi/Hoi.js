import React from "react";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

/**
 * This class is just a placeholder, needs to be changed when people
 * work on routing/different screens. This just shows stuff works.
 **/
const Hoi = props => (
    <div>
        <p>Hallo {props.user.name}!!</p>
        <Link to="/auth/logout"><button>
            Logout
        </button></Link>
        <p>
            <Link to="/acties">Acties pagina</Link>
        </p>
        <p>
            <Link to="/overzicht">Overzicht pagina</Link>
        </p>

    </div>
)

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Hoi);
