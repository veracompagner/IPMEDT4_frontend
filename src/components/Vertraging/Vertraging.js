import React from 'react';
import {Link, BrowserRouter as Router}from "react-router-dom";
import 'material-design-icons/iconfont/material-icons.css';
import './Vertraging.scss';
import FormVertraging from './FormVertraging';


const Vertraging = () => (
    <div>
    <div className="Vetraging-header">
        {/* Back arrow */}
        <Link to="/"><i className="material-icons">arrow_back</i></Link>
    </div>

    <div className="Vertraging-body">
        <h2>Vertraging Melden</h2>
        <FormVertraging />
    </div>


</div>
);










export default Vertraging;
