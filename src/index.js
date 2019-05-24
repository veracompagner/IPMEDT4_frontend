import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, withRouter } from "react-router-dom";

import App from './App'

const AppContainer = withRouter(props => <App {...props} />);

ReactDOM.render(
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>,

    document.querySelector("#root")
);
