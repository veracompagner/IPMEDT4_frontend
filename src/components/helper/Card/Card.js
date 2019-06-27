
import React from 'react'
import "./Card.scss";

import defaultImg from "../../../img/default.png";

const Card = props => (
    <div className="card" onClick={props.onClick || null}>
        <figure>
            <img src={props.img || defaultImg} alt="(Company name) Logo"></img>
        </figure>
        <div>
            <p className="card-text card-text-name">{ props.title || "Titel" }</p>
            <p className="card-text card-text-description">{ props.text || "Geen tekst beschikbaar" }</p>
            <p className="card-text card-text-points">{ props.points || "0"}</p>
        </div>
        <i className="material-icons" onClick={props.favoriteClick}>{props.favorite}</i>
    </div>
);

export default Card;
