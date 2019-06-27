import React from 'react';

import Modal from "../Modal/Modal";

import "./ModalWrapper.scss";

class ModalWrapper extends React.Component {
    constructor() {
        super();
        this.state = {
            isShowing: false,
            modalData: null
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

    render() {
        return (
            <div className="modalWrapper">
                {this.props.children(this.openModalHandler)}

                <Modal
                    show={this.state.isShowing}
                    close={this.closeModalHandler}
                    data={this.state.modalData} />
            </div>
        )
    }
}
export default ModalWrapper;
