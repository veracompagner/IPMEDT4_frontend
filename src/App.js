// Import React and several components for React-Router and Redux
import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Import SCSS
import "./App.scss";

// Import Components used in main routes
import Hoi from "./components/Hoi/Hoi";
import Auth from "./components/Auth/Auth";
import Overzicht from "./components/Overzicht/Overzicht";
import Acties from "./components/Acties/Acties";

const App = props => {
    const isLoggedIn = props.isLoggedIn;
    const pathname = props.location.pathname;

    if (!isLoggedIn && pathname !== "/auth/login" && pathname !== "/auth/register") {
        return <Redirect to="/auth/login" />;
    }
    if (isLoggedIn && (pathname === "/auth/login" || pathname === "/auth/register")) {
        return <Redirect to="/" />;
    }

    return (
        <Switch>
            <Route exact path='/' component={Hoi} />} />
            <Route path="/auth" component={Auth} />
            <Route path="/overzicht" component={Overzicht} />
            <Route path="/acties" component={Acties} />
        </Switch>
    )
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps)(withRouter(App));
