import React from 'react';

import { QRCode } from "react-qr-svg";

import './Modal.scss';

const modal = (props) => {
    return (
        <div>
            <div className="modal"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-200vh)',
                }}>
                <div className="modal-body">
                    <QRCode className="modal-qr" shape-rendering="crispEdges">{ "Hoi" || "QRCode" }</QRCode>
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
