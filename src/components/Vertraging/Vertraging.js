import React from 'react';
import { Link } from "react-router-dom";
import 'material-design-icons/iconfont/material-icons.css';
import './Vertraging.scss';
import FormVertraging from './FormVertraging';


const Vertraging = () => (
    <div>
        {/* Back arrow */}
        <Link to="/"><i className="material-icons icon-left-corner">arrow_back</i></Link>
        <div className="Vertraging-body">
            <h2>Vertraging Melden</h2>
            <FormVertraging />
        </div>
    </div>
);

export default Vertraging;
