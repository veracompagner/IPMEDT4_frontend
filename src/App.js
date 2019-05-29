import React from "react";
import Login from "./Login";
import Register from "./Register";
import Hoi from "./Hoi";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import "./App.css";

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
            isLoggedIn: false
        };
    }

    render(){
        if (!this.state.isLoggedIn && this.props.location.pathname !== "/login" && this.props.location.pathname !== "/register") {
            return <Redirect to="/login" />;
        }
        if (this.state.isLoggedIn && (this.props.location.pathname === "/login" || this.props.location.pathname === "/register")) {
            return <Redirect to="/" />;
        }
        return(
            <Switch>
                <Route exact path='/' component={Hoi} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        )
    }
}
export default withRouter(App);