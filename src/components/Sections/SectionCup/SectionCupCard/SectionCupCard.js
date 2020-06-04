import React from "react";
import { Link } from "react-router-dom";
import Trophy from "../../../../assets/images/trophies/trophystar.svg";
import PropTypes from "prop-types";


import classes from "../SectionCup.scss";


function CupCard(props) {



    return(
        <div to={props.path} className={["CupCard", `CupCard__${props.identifier}`, `CupCard__${props.whose.slit(" ").join("-")}`, "btn"].join(" ")}>
            <Link to={props.path} className="CupCard__Link">
                <div className="CupCard__Link__Icon">
                    <img src={Trophy} alt="CUFL Trophy"/>
                </div>
                <p>{props.whose}</p>
            </Link>
        </div>
    );

}

CupCard.propTypes = {
    whose: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    identifier: PropTypes.string.isRequired
}


export default CupCard;

