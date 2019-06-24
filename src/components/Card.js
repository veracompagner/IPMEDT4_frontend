
import React from 'react'
import "./Card.scss";

const Card = props => (
    <div className="card">
        <figure>
            <img src={props.img} alt="(Company name) Logo"></img>
        </figure>
        <div>
            <p className="card-text card-text-name">{ props.title || "Titel" }</p>
            <p className="card-text card-text-description">{ props.text || "Geen tekst beschikbaar" }</p>
            <p className="card-text card-text-points">{ props.points || "0"}</p>
        </div>
    </div>
);

export default Card;
