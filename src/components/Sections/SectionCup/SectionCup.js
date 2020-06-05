import React from "react";
import CupCard from "./SectionCupCard/SectionCupCard";
import sprite from "../../../assets/images/sprite.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./SectionCup.scss";

function SectionCup(props) {

    
    return(
        <section className={["leagues", `${props.identifier +"-cup"}`].join(" ")} id={props.identifier + "-leagues"}>
            <div className="container">
                <h2 className={["u-heading", "u-center", `${props.identifier + "-heading"}`].join(" ")}>CUPS</h2>
                <div className="leagues-box">
                    {
                        props.data.map((el, index) => (
                            <CupCard 
                            key={index}
                            identifier={el.split(" ").join("-").toLowerCase()}
                            committe={props.identifier} 
                            path={`/${props.identifier}/cup/${el.split(" ").join("-").toLowerCase()}`}
                            whose={el}
                            />
                        ))
                    }
                </div>
                <div className="leagues__form u-center">
                    <Link to={`/${props.identifier}/cup/perpetual-cup`} className="btn tocup__link">Cups
                    <span><svg className="arrow-button-icon">
                                <use xlinkHref={sprite + "#icon-chevron-right"}></use>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>

    );

}

SectionCup.propTypes = {
    identifier: PropTypes.string.isRequired,
    
}

export default SectionCup;



