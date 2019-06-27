// Import React
import React from 'react';

// Import scss
import './Spinner.scss';

// Spinner functional component
const Spinner = props => (
    // Take color from props, with default set to black
    <svg className="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg" stroke={props.color || "black"} >
        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
    </svg>
)

export default Spinner;
