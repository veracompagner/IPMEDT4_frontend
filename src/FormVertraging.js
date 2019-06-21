import React from "react";


import "./Login.scss";


const FormVertraging = ({vertraging}) => {

    let vertrekStation, aankomstStation, vertrekTijdDienstregeling, treinstelnummer;

    /**
     * @func handleFormVertraging
     * @param event
     * Handles form submissions
     **/
    const handleFormVertraging = event => {
        event.preventDefault();
        vertraging(vertrekStation.value, aankomstStation.value, vertrekTijdDienstregeling.value, treinstelnummer.value);
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
}

export default FormVertraging;
