
import React from 'react'
import "./css/Cards.scss";

function Cards(props){

    return (
        <div className="cards-root">
            <img className="cards-img" src={props.img} alt="appLogo"></img>
            <div className="cards-text">
                <h2> {props.title || "titel"}</h2>
                {props.text || "Geen tekst beschikbaar"}
            </div>
        </div>
    );
}

export default Cards;
