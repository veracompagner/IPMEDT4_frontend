import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Hoi from "./Hoi";
import Acties from "./Acties";
import Auth from "./Auth";

import "./App.scss";

class App extends React.Component {

    /**
     * @func constructor
     * @param props
     * This function initializes the state for isLoggedIn
     * It shows whether a user has logged in or not
     **/
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {}
        };
        this.apiurl = "http://" + window.location.hostname + ":8000/api";
        // this.apiurl = "http://IPMEDT4_api.test/api"; Meuk voor matthijs
    }

    render(){
        if (!this.state.isLoggedIn && this.props.location.pathname !== "/auth/login" && this.props.location.pathname !== "/auth/register") {
            return <Redirect to="/auth/login" />;
        }
        if (this.state.isLoggedIn && (this.props.location.pathname === "/login" || this.props.location.pathname === "/register")) {
            return <Redirect to="/" />;
        }
        return(
            <Switch>
                <Route exact path='/' render={props => <Hoi {...props} logoutUser={this.logoutUser} user={this.state.user} apiurl={this.apiurl}/>} />
                <Route path="/acties" component={Acties} />
                <Route path="/auth" component={Auth} />
            </Switch>

        )
    }
}
export default withRouter(App);
