import React from "react";
import { Link } from "react-router-dom";
import GraphImg from "graphcms-image";


function LandingCard (props) {


    return(
        <div className={["landing2-card__card", props.identifier].join(" ")}>
            <Link to={props.link}>
                <GraphImg image={props.cardImg} alt={props.alt} maxWidth={600} fit="max" withWebp={true} className="landing2-card__img" samesite="None" secure="true"/>
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
