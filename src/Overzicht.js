import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import 'material-design-icons/iconfont/material-icons.css';
import Cards from "./Cards"
import Ripple from './Ripple'
import "./BottomNavigation.scss"
import "./Overzicht.scss"
import logoZonder from "./img/appLogoZonder.png";
import smullers from "./img/smullers.jpeg";
import Vertraging from './Vertraging';

class Overzicht extends React.Component {
	
  render(){
    return(
      <div >
        <div className="overzicht-punten-root">
          <img className="overzicht-punten-img" src={logoZonder} alt="appLogo"></img>
          <p className="overzicht-punten-text">0000</p>
        </div>
        
    
        <div className="overzicht-cards">         
          <Cards 
               title="Gratis Snack"
               text="Smullers"
               img={smullers}
        />
        </div>
        <div className="overzicht-footer">
            <Ripple
                icon="favorite"
                name="Acties"
            ></Ripple>
          <Link to="/vertraging">
          <Ripple
              icon="location_on"
              name="Vertraging"
          ></Ripple>
          </Link>
        </div>
        <Switch>
            <Route path='/vertraging' component={Vertraging}/>
        </Switch>
      </div>
      
    )


  }
}


export default Overzicht;
