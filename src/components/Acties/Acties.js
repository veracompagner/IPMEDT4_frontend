// Import React and the Link component from React-Router
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Import SCSS
import "./Acties.scss";

// Import Card component
import Card from "../Card";

// Import Modal
import Modal from "../Modal/Modal";

// Import Images
import example from  "../../img/default.png";

//Test elements till the products prop has been made;
const elements = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

// Define class component
class Acties extends React.Component {

    constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = (value) => {
        this.setState({
            isShowing: true,
            modalData: value
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }

    render(){
        return(
            <div className="acties">
                <div className="acties-header">
                    {/* Back arrow */}
                    <Link to="/"><i className="material-icons icon-left-corner">arrow_back</i></Link>

                    {/* Users current amount of points, when none are supplied defaults to 0 */}
                    <p className="acties-points">{this.props.user.points || 0} Punten</p>
                </div>

                {/* Company image + exchangeable product name + company name + needed amount of points */}
                {elements.map((value, index) => {
                return <Card onClick={() => {this.openModalHandler(value)}} img={example} title={value} text="GRATIS Product" points="5000" key={index}/>
                })}

                {/* Modal */}
                <Modal
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    data={this.state.modalData} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Acties);
