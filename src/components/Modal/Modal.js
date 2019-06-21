import React from 'react';

import './Modal.css';

import QRcode from "../Acties/QRcode";

const modal = (props) => {
    return (
        <div>
            <div className="modalWrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                }}>
                <div className="modalBody">
                    <QRcode value ="hey"/>
                </div>
                <div className="modalFooter">
                    <button className="cancelButton" onClick={props.close}>CANCEL</button>
                    <button className="confirmButton">CONFIRM</button>
                </div>
            </div>
        </div>
    )
}

export default modal;
