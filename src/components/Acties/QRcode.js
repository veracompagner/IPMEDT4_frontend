import React from "react";
import { QRCode } from "react-qr-svg";

const QRcode = props => (
    <div>
        <QRCode>{ props.value || "QRCode" }</QRCode>
    </div>
);

export default QRcode;
