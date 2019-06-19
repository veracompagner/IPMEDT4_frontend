// Import React
import React from "react";
import ReactDOM from "react-dom";

// Import Provider and store for redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

// Import Router for react-router
import { BrowserRouter as Router } from "react-router-dom";

// Import our App.js
import App from "./App";

// Bootstrap React app with Wrappers for Redux and Our React-Router
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.querySelector("#root")
);
