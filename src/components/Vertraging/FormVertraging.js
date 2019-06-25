import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {changeUser} from "../../redux/actions";

import './FormVertraging.scss';
import {APIURL} from "../../constants/constants";



const FormVertraging = ({user, token}) => {

    let vertrekStation, aankomstStation, vertrekTijdDienstregeling, treinstelnummer;

    /**
     * @func handleFormVertraging
     * @param event
     * Handles form submissions
     **/
    const handleFormVertraging = event => {
        event.preventDefault();

        var formData = new FormData();
        formData.append("email", user.email);
        formData.append("trein", treinstelnummer.value);
        
        vertragingRequest(formData);
    };

    const vertragingRequest = formData => {
        axios({
            method: 'POST',
            url: APIURL + "/delay/",
            headers: {Authorization: `Bearer ${token}`},
            data: formData
        })
        .then(json => {
            if(json.data){
                this.props.dispatch(changeUser(json.data));
            }
        })
        .catch(error => {
            console.log(error);
            console.log(error.response);
        });
    };

    return (
        <div id="FormVertraging-root">
            <form onSubmit={handleFormVertraging} action="" method="post">
                {/* input vertrekstation */}
                <input
                    ref={input => (vertrekStation = input)}
                    name="Vertrekstation"
                    type="text"
                    placeholder="Vertrekstation"
                />

                {/* input aankomststation */}
                <input
                    ref={input => (aankomstStation = input)}
                    name="Aankomst_station"
                    type="text"
                    placeholder="Aankomststation"
                />


                {/* input vertrektijd volgens dienstregeling */}
                <input
                    ref={input => (vertrekTijdDienstregeling = input)}
                    name="vertrek_tijd_dienstregeling"
                    type="text"
                    placeholder="Vertrektijd"
                />

                <input
                    ref={input => (treinstelnummer = input)}
                    name="treinstelnummer"
                    type="text"
                    placeholder="Treinstelnummer"
                />

                <div className="splitbox">
                    {/* submit button */}
                    <button type="submit">
                        Verstuur
                    </button>
                </div>
            </form>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        user: state.user,
        token: state.token
    }
};

export default connect(mapStateToProps)(FormVertraging);
