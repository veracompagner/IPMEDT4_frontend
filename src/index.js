import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Vertraging from "./Vertraging";
import Overzicht from "./Overzicht";



ReactDOM.render(<BrowserRouter><Overzicht /></BrowserRouter>, document.querySelector("#root"));
// ReactDOM.render(<App/>, document.querySelector("#root"));