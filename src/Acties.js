import React from "react";
import "./Acties.css";

class Acties extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
      return (
          <div>
              {/* Users current amount of points */}
              <p id="personalPoints" className="points">(Not received)</p>

              {/* Copany image pathname + exchangeable product name + company name + needed amount of points */}
              <div className="pointsExchangeCard">
                <div class="companyLogoWrapper">
                  <img className="companyLogo" src="./img/exampleComp.jpg" alt="(Company name) Logo"></img>
                </div>

                <div className="exchangeCardTextInfoContainer">
                  <h1 className="companyName infoText">Example Comp.</h1>
                  <p className="productDescription infoText">GRATIS Product</p>
                  <p className="cardPoints points infoText">5000</p>
                </div>
              </div>
          </div>
      );
    }
}

export default Acties;
