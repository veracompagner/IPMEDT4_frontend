import React from 'react';
// import BNavi from "./BottomNavigation"
import 'material-design-icons/iconfont/material-icons.css';
import Cards from "./Cards"
import "./BottomNavigation.scss"
import "./Overzicht.css"
import logoZonder from "./img/appLogoZonder.png";
import smullers from "./img/smullers.jpeg";

class Overzicht extends React.Component {
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
		
  render(){
    var shown = {
			visibility: this.state.shown ? "visible" : "hidden"
		};
		
		var hidden = {
			visibility: this.state.shown ? "hidden" : "visible"
    }
    
    return(
      <div >
        <img className="logoImg" src={logoZonder} alt="appLogo"></img>
        <p className="puntenText">0000</p>
    
        <div>        
          <Cards
               title="Gratis Snack"
               text="Smullers"
               img={smullers}
        />
        </div>
        <div>
          <div className="bottomNavigation-root" >
            <button onClick={this.toggle.bind(this)}  className="bottomNavigation-buttons"><i className="material-icons bottomNavigation-icons">favorite</i> <span style={shown}>Acties</span></button>
            <button onClick={this.toggle.bind(this)} className="bottomNavigation-buttons"><i className="material-icons bottomNavigation-icons">location_on</i><span  style={hidden}>Vertraging</span> </button>
          </div>
        </div>
        
      </div>
    )


  }
}


export default Overzicht;
