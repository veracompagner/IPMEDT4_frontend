import React from 'react';
import BNavi from "./BottomNavigation"
import Cards from "./Cards"
import "./Overzicht.css"
import logoZonder from "./img/appLogoZonder.png";
import smullers from "./img/smullers.jpeg";

class Overzicht extends React.Component {
  
  
  
  
  
  
  render(){
    return(
      <div >
        <img className="logoImg" src={logoZonder} alt="appLogo"></img>
        <p className="puntenText">0000 {"\n"} Punten</p>
        


        <div>        
          <Cards
               title="Gratis Snack"
               text="Smullers"
               img={smullers}
        />
        </div>
        <div>
            <BNavi />
        </div>
        
      </div>
    )


  }
}


export default Overzicht
