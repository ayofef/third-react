import React from "react";
import { Link } from "react-router-dom";
import sprite from "../../../../assets/images/sprite.svg";
import PropTypes from "prop-types";

function LeagueStar(props) {



    return(
        <div className={["leagues__card","btn", `${"leagues__card--" + props.identifier}`].join(" ")} id={props.committe + "-leagues"}>
            <div className={["leagues__card--icon", props.star].join(" ")}>
                <svg className="leagues__card--svg">
                    <use xlinkHref={sprite + "#icon-star"}></use>
                </svg>
                <svg className="leagues__card--svg leagues__card--svg-dominant">
                    <use xlinkHref={sprite + "#icon-star"}></use>
                </svg>
                <svg className="leagues__card--svg">
                    <use xlinkHref={sprite + "#icon-star"}></use>
                </svg>
            </div>
            <Link to={props.path}>
                <div style={{height: "100%", paddingBottom: "2rem"}}>
                    <h3 className="leagues__card--header">{props.heading}</h3>
                    <div className="leagues__card--body">{props.children}</div>
                </div>
            </Link>
        </div>
    );

}

LeagueStar.propTypes = {
    identifier: PropTypes.string.isRequired,
    star: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}


export default LeagueStar;

