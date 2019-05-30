import React from 'react';
import BNavi from "./BottomNavigation"
import "./Overzicht.css"
import logoZonder from "./img/appLogoZonder.png";

class Overzicht extends React.Component {
  
  
  
  
  
  
  render(){
    return(
      <div >
        <img className="logoImg" src={logoZonder} alt="appLogo"></img>
        <p className="puntenText">0000 {"\n"} Punten</p>
        
        <div>
            <BNavi />
        </div>
        
      </div>
    )


  }
}


export default Overzicht
