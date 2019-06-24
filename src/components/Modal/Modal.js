import React from 'react';

import { QRCode } from "react-qr-svg";

import './Modal.scss';

const modal = (props) => {
    return (
        <div onClick={props.close} className="modal"
        style={{
            transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
        }}>
            <div className="modal-wrapper">
                <div className="modal-body">
                    <QRCode value={props.data || "undefined"} className="modal-qr" />
                </div>
                <div className="modal-footer">
                    <button className="modal-button modal-button-cancel" onClick={props.close}>CANCEL</button>
                    <button className="modal-button modal-button-confirm">CONFIRM</button>
                </div>
            </div>
        </div>
    )
}

export default modal;
