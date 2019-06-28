import React from 'react';

import { QRCode } from "react-qr-svg";

import './Modal.scss';
import axios from "axios";
import {APIURL} from "../../../constants/constants";
import {changeUser} from "../../../redux/actions";
import {connect} from "react-redux";

const modal = (props) => {
    if(props.show){
        const handleConfirm = event => {
            event.preventDefault();
            var cost = (props.data.cost);
            var formData = new FormData();
            formData.append("email", props.user.email);
            formData.append("points", cost);
            subtractRequest(formData);
        };
        const subtractRequest = formData => {
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
                        props.dispatch(changeUser(json.data));
                    } else {
                        console.log("not a user object!");
                    }
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                });
        };

        return (
            <div onClick={props.close} className="modal"
                 style={{
                     transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                     opacity: props.show ? '1' : '0',
                 }}>
                <div className="modal-wrapper">
                    <div className="modal-body"
                    style={{
                        background: '#003373'
                    }}>
                        {console.log(props.data)}
                        <p className={"bold"}>{props.data.company.name}</p>
                        <p>{props.data.product}</p>
                        <div className="modal-footer">
                            <button className="modal-button modal-button-cancel" onClick={props.close}>Cancel</button>
                            <button className="modal-button modal-button-confirm" onClick={handleConfirm}>Confirm</button>
                        </div>
                    </div>

                    {/*<div className="modal-body">*/}
                    {/*    <QRCode value={props.data.product} className="modal-qr" />*/}
                    {/*</div>*/}
                    {/*<div className="modal-footer">*/}
                    {/*    <button className="modal-button modal-button-cancel" onClick={props.close}>Cancel</button>*/}
                    {/*    <button className="modal-button modal-button-confirm" onClick={handleConfirm}>Confirm</button>*/}
                    {/*</div>*/}
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
