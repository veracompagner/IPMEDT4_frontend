import React from "react";
import Login from "./Login";
import Register from "./Register";
import Hoi from "./Hoi";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import "./App.css";

class App extends React.Component {

    /**
     * @func constructor
     * @param props
     * This function initializes the state for redirect
     * It shows whether a user has logged in or not
     **/
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
    }

    /**
     * @func setRedirect*
     * Changes redirect to true or false
     */
    setRedirectTrue = () => {
        this.setState({
            redirect: true
        })
    };

    setRedirectFalse = () => {
        this.setState({
            redirect: false
        })
    };


    /**
     * @func renderRedirect
     * @returns component to show
     *
     * This function makes sure the non-logged user is redirected
     */

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    };


    /**
     * @func Index
     * @returns {Logincomponent}
     * This function shows the login screen
     */
    Login() {
        return <Login/>;
    }

    Register(){
        return <Register/>;
    }

    /**
     * @func Hoi
     * @returns {Hoicomponent}
     * This function is a placeholder to show how routing works
     * Change this to your component in a new function and a new route.
     * Possibly change the redirect stuffs  ;)
     */
    Hoi() {
        return <Hoi/>;
    }


    render(){
        return(
            <div>
                <Router>
                    <Route exact path='/' component={this.Login} />
                    <Route path="/register" component={this.Register} />
                </Router>
            </div>
        )
    }
}
export default App;