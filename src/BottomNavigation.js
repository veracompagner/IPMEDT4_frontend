import React from 'react';
import "./scss/BottomNavigation.scss";
import Ripple from './Ripple';
import 'material-design-icons/iconfont/material-icons.css';
//Component overbodig

export default class BottomNavigation extends React.Component {

	constructor() {
		super();
		this.state = {
			shown: true,
		};
	}

	toggle() {
		this.setState({
			shown: !this.state.shown
		});
	}

	render() {
		var shown = {
			visibility: this.state.shown ? "visible" : "hidden"
		};

		var hidden = {
			visibility: this.state.shown ? "hidden" : "visible"
		}


    return (
        <div className="bottomNavigation-root" >
            <Ripple onClick={this.toggle.bind(this)} className="bottomNavigation-buttons">
                <i className="bottomNavigation-icons material-icons">favorite</i><span style={shown}>Acties</span>
            </Ripple>
            <Ripple onClick={this.toggle.bind(this)} className="bottomNavigation-buttons">
                <i className="bottomNavigation-icons material-icons">location_on</i><span style={hidden}>Vertraging</span>
            </Ripple>
        </div>
        );
    }
}







