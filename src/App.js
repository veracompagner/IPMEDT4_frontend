// Import React and several components for React-Router and Redux
import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Import SCSS
import "./App.scss";

// Import Components used in main routes
import Auth from "./components/Auth/Auth";
import Overzicht from "./components/Overzicht/Overzicht";
import Acties from "./components/Acties/Acties";
import Vertraging from "./components/Vertraging/Vertraging";
import LoadingDots from "./components/LoadingDots";

// Main functional component
const App = props => {
    // Link consts to props for smaller code
    const isLoggedIn = props.isLoggedIn;
    const pathname = props.location.pathname;

    // Check for logged in status and page, and redirect accordingly
    if (!isLoggedIn && pathname !== "/auth/login" && pathname !== "/auth/register") {
        return <Redirect to="/auth/login" />;
    }
    if (isLoggedIn && (pathname === "/auth/login" || pathname === "/auth/register")) {
        return <Redirect to="/" />;
    }

    // Return Switch with all main routes
    return (
        <Switch>
            <Route exact path='/' component={Overzicht} />} />
            <Route path="/auth" component={Auth} />
            {/*<Route path="/overzicht" component={Overzicht} />*/}
            <Route path="/acties" component={Acties} />
            <Route path="/vertraging" component={Vertraging} />
            <Route path="/dots" component={LoadingDots} />
        </Switch>
    )
}

// Get isLoggedIn from state and map it to props
const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

// connect to redux and run component with router to access pathnames
export default connect(mapStateToProps)(withRouter(App));
