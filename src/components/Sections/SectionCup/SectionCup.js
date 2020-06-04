import React from "react";
import CupCard from "./SectionCupCard/SectionCupCard.js";
import sprite from "../../../assets/images/sprite.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import classes from "./SectionCup.scss";

function SectionCup(props) {



    
    return(
        <section className={["Cup", `Cup__${props.identifier}`].join(" ")} id={props.identifier + "-cup"}>
            <div className="container">
                <h2 className={["u-heading", "u-center", `${props.identifier + "-heading"}`].join(" ")}>CUP</h2>
                <div className="Cup__Box">
                    {
                        props.card.map((el, index) => (<CupCard 
                            key={index}
                            whose={el}
                            identifier={props.identifier}
                            path={`/${props.identifier}/cup/${el.split(" ").join("-").toLowerCase()}`}
                        />))
                    }
                </div>
                <div className="cup__form u-center">
                    <Link to={`/${props.identifier}/cup/premier-division`} className="btn cup__link">Cups 
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
    card: PropTypes.array.isRequired
    
}

export default SectionCup;



