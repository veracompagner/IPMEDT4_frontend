import React from 'react';

import { QRCode } from "react-qr-svg";

import './Modal.scss';
import axios from "axios";
import {APIURL} from "../../../constants/constants";
import {changeUser} from "../../../redux/actions";
import {connect} from "react-redux";

const modal = (props) => {
    if(props.show){
        var showQR = false;
        const handleConfirm = event => {
            event.preventDefault();
            var cost = (props.data.cost);
            var formData = new FormData();
            formData.append("email", props.user.email);
            formData.append("points", cost);
            console.log(showQR);
            if(subtractRequest(formData, showQR)){
                console.log(showQR);
                setTimeout(function(){showQR = false}, 3000)
            }
        };
        const subtractRequest = (formData, showQR) => {
            axios({
                method: 'POST',
                url: APIURL + "/products",
                headers: {Authorization: `Bearer ${props.token}`},
                data: formData
            })
                .then(json => {
                    console.log(json);
                    console.log(json.response);
                    if(json.data.email){
                        if(json.data.points === props.user.points){
                            showQR = false;
                        }else{
                            showQR = true;
                        }
                        props.dispatch(changeUser(json.data));
                    } else {
                        console.log("not a user object!");
                    }
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
            return showQR
        };

        return (
            <div onClick={props.close} className="modal">
                <div className="modal-wrapper">
                    { !showQR ?
                    <div className="modal-body noQR"
                    style={{
                        background: '#003373'
                    }}>
                        <p>Weet u zeker dat u het volgende product wilt activeren?</p>
                        <p className={"bold"}>{props.data.company.name}</p>
                        <p>{props.data.product}</p>
                        <div className="modal-footer">
                            <button className="modal-button modal-button-cancel" onClick={props.close}>Annuleren</button>
                            <button className="modal-button modal-button-confirm" onClick={handleConfirm}>Activeren</button>
                        </div>
                    </div>
                    :
                    <div className="modal-body QR"
                         style={{
                        background: 'white'
                    }}>
                        <QRCode value={props.data.product} className="modal-qr" />
                        <div className="modal-footer">
                            <button className="modal-button modal-button-cancel" onClick={props.close}>Sluiten</button>
                        </div>
                    </div>
                    }
                </div>
            </div>
        )
    }else{
        return null;
    }
};

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
}

export default connect(mapStateToProps)(modal);
