// Import React and the Link component from React-Router
import React from "react";
import { Link } from "react-router-dom";

// Import SCSS
import "./Acties.scss";

// Import Card component
import Card from "../Card";

import Modal from "../Modal/Modal";

// Import Images
import example from "../../img/exampleComp.jpg";

class Acties extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render(){
        return(
            <div id="acties">
                {/* Back arrow */}
                <Link to="/"><i className="material-icons">arrow_back</i></Link>

                {/* Users current amount of points, when none are supplied defaults to 0
                    <p id="personalPoints" className="points">{props.punten || 0} Punten</p>*/}


                {/* Company image + exchangeable product name + company name + needed amount of points */}
                <div onClick={this.openModalHandler}>
                    <Card img={example} title="Example Comp." text="GRATIS Product" points="5000" />
                </div>

                {/* modal */}
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="modalBackground"></div> : null }
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                </Modal>
            </div>

        )
    }
}


export default Acties;
