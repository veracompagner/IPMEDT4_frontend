import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Hoi from "./Hoi";
import Acties from "./Acties";
import Auth from "./Auth";
import Overzicht from "./Overzicht";


import "./scss/App.scss";

class App extends React.Component {

    /**
     * @func constructor
     * @param props
     * This function initializes the state for isLoggedIn
     * It shows whether a user has logged in or not
     **/
    constructor(props) {
        super(props);
        this.apiurl = "http://" + window.location.hostname + ":8000/api";
    }

    render(){
        if (!this.props.isLoggedIn && this.props.location.pathname !== "/auth/login" && this.props.location.pathname !== "/auth/register") {
            return <Redirect to="/auth/login" />;
        }
        if (this.props.isLoggedIn && (this.props.location.pathname === "/auth/login" || this.props.location.pathname === "/auth/register")) {
            return <Redirect to="/" />;
        }
        return(
            <Switch>
                <Route exact path='/' render={props => <Hoi {...props} logoutUser={Auth.logoutUser} user={this.props.user} apiurl={this.apiurl}/>} />
                <Route path="/acties" component={Acties} />
                <Route path="/auth" component={Auth} />
                <Route path="/overzicht" component={Overzicht} />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(App));
