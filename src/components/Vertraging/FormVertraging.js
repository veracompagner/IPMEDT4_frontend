import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {changeUser} from "../../redux/actions";

import './FormVertraging.scss';
import {APIURL} from "../../constants/constants";
import {withRouter} from "react-router-dom";



const FormVertraging = props => {

    let vertrekStation, aankomstStation, vertrekTijdDienstregeling, treinstelnummer;


    /**
     * @func handleFormVertraging
     * @param event
     * Handles form submissions
     **/
    const handleFormVertraging = event => {
        event.preventDefault();

        var formData = new FormData();
        formData.append("email", props.user.email);
        formData.append("trein", treinstelnummer.value);
        vertragingRequest(formData);
    };
    const vertragingRequest = formData => {
        axios({
            method: 'POST',
            url: APIURL + "/delay/",
            headers: {Authorization: `Bearer ${props.token}`},
            data: formData
        })
        .then(json => {
            console.log(json);
            console.log(json.data);
            if(json.data){
                props.dispatch(changeUser(json.data));
                props.history.push('/');
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
                {/* input aankomststation */}
                <select ref={(input) => aankomstStation = input} required>
                    <option selected value="Alphen">Alphen aan den Rijn</option>
                    <option value="Leiden">Leiden</option>
                    <option value="Utrecht">Utrecht</option>
                    <option value="Amsterdam">Amsterdam</option>
                </select>

                {/* input vertrek */}
                <select ref={(input) => vertrekStation = input} required>
                    <option selected value="Alphen">Alphen aan den Rijn</option>
                    <option value="Leiden">Leiden</option>
                    <option value="Utrecht">Utrecht</option>
                    <option value="Amsterdam">Amsterdam</option>
                </select>


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

export default connect(mapStateToProps)(withRouter(FormVertraging));
