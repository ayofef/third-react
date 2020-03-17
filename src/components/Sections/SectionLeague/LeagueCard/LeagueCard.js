import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function LeagueCard(props) {



    return(
        <div className={["leagues__card","btn", `${"leagues__card--" + props.identifier}`].join(" ")} id={props.committe + "-leagues"}>
            <Link to={props.path} >
                <h3 className="leagues__card--header">{props.heading}</h3>
                <div className="leagues__card--body">{props.children}</div>
            </Link>
        </div>
    );

}

LeagueCard.propTypes = {

    identifier: PropTypes.string.isRequired,
    committe: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default LeagueCard;



