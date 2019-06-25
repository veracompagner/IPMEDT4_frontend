import React from 'react';

import "./BottomBar.scss"
 const BottomBar = props => (
    <div className="bottomBar-div" >
        <button
            className="bottomBar-buttons">
            <i className="material-icons bottomBar-icons">{props.icon}</i>
            {props.name}
        </button>
    </div>
);


export default BottomBar;



