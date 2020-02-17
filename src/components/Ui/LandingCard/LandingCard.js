import React from "react";
import { Link } from "react-router-dom";


const LandingCard = (props) => {


    return(
        <div className={"landing2-card__card" + props.identifier}>
            <Link to={props.link}>
                <img className="landing2-card__img" src={props.cardImg} alt={props.alt} />
                <img className="landing2-card__logo" src={props.cardLogo} alt={props.alt} />
                <div className="landing2-card__description">
                    <h1 className="landing2-card__description--heading">{props.cardName}</h1>
                    <p className="landing2__description--text">{props.desc}</p>
                </div>          
            </Link>
        </div>
    );
}

export default LandingCard;
