import React from 'react';
import {Link, BrowserRouter as Router}from "react-router-dom";
import 'material-design-icons/iconfont/material-icons.css';
import './Vertraging.scss';
import FormVertraging from './FormVertraging';
import Overzicht from "./Overzicht";

class Vertraging extends React.Component {


render() {
    return(
        
        <div>
            <div className="Vetraging-header">
                <Link to="/overzicht"><i className="material-icons">arrow_back</i> </Link>
            </div>

            <div className="Vertraging-body">
                <h2>Vertraging Melden</h2> 
                <FormVertraging />    
            </div>
           
            
        </div>
       
        

    );
}

}

export default Vertraging;