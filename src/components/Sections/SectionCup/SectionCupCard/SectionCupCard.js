import React from "react";
import { Link } from "react-router-dom";
import Trophy from "../../../../assets/images/trophies/trophystar.svg";
import PropTypes from "prop-types";

import "../SectionCup.scss";

function CupCard(props) {



    return(
        <div className={["leagues__card","btn", "cup__card", `${"cup__card--" + props.identifier}`].join(" ")} id={props.committe + "-leagues"}>
            <Link to={props.path} className="cup__link">
                <div className="cup__icon">
                    <img className="cup__icon--svg" src={Trophy} alt="CUFL Trophy"/>
                </div>
                <div style={{height: "100%", paddingBottom: "2.5rem"}}>
                    <p className="cup__text">{props.whose}</p>
                </div>
            </Link>
        </div>
    );

}

CupCard.propTypes = {
    identifier: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    committe: PropTypes.string.isRequired,
    whose: PropTypes.node.isRequired,
}


export default CupCard;

