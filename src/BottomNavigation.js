import React from 'react';
import "./BottomNavigation.scss"
import 'material-design-icons/iconfont/material-icons.css';


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
        <button onClick={this.toggle.bind(this)}  className="bottomNavigation-buttons"><i className="material-icons bottomNavigation-icons">favorite</i> <span style={shown}>Acties</span></button>
        <button onClick={this.toggle.bind(this)} className="bottomNavigation-buttons"><i className="material-icons bottomNavigation-icons">location_on</i><span  style={hidden}>Vertraging</span> </button>
      </div>
    );  
  }
}

  
  
 



