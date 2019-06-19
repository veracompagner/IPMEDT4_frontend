import React from 'react';

import "./Ripple.scss"

export default class Ripple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
        };
        this.rippleEffect = this.rippleEffect.bind(this);
    }

    rippleEffect(event){
        const posX = (event.pageX - event.target.offsetLeft) - 25;
        const posY = (event.pageY / event.target.offsetHeight) - 0;
        this.setState({
            clicked: !this.state.clicked,
            posX,
            posY,
        });
        const self = this;
        setTimeout(() => {
            this.setState({
                clicked: !self.state.clicked,
            })
        }, 600);
    }

    render(){
        return (
            <div className="ripple-div">
                <button onClick={this.rippleEffect}
                    className="ripple-buttons">
                    <i className="material-icons ripple-icons">{this.props.icon}</i>
                    {this.props.name}
                    { this.state.clicked && <span className="ripple-ink" style={{ top: `${this.state.posY}px`, left: `${this.state.posX}px` }} /> }
                </button>
            </div>
        );
    }

}
