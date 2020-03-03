import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import PropTypes from "prop-types";


            

function CommitteeCard(props) {

    return(
        <div className="resources__referee-box--card" >
            <h4 className={["resources__referee-box--card-sub-heading", `${props.identifier + "-heading"}`].join(" ")}>
                <span>
                    <svg className="resources__referee-box--icon resources__referee-box--icon-sub-head">
                        <use xlinkHref={sprite + "#icon-location-pin"}></use>
                    </svg>
                </span>
                {props.county}
            </h4>
            <div className="resources__referee-box--contact-card">
                <p>
                    <span>
                        <svg className="resources__referee-box--icon">
                            <use xlinkHref={sprite + "#icon-user"}></use>
                        </svg>
                    </span>
                    {props.refereeName}
                </p>
                <p>
                    <span>
                        <svg className="resources__referee-box--icon">
                            <use xlinkHref={sprite + "#icon-phone"}></use>
                        </svg>
                    </span>
                    {props.refereeMobile}
                </p>
                <p>
                    <span>
                        <svg className="resources__referee-box--icon">
                            <use xlinkHref={sprite + "#icon-email"}></use>
                        </svg>
                    </span>
                    {props.refereeEmail}
                </p>
            </div>
        </div>
    
    );

}


CommitteeCard.propTypes = {
    identifier: PropTypes.string.isRequired,
    county: PropTypes.string.isRequired,
    refereeName: PropTypes.string.isRequired,
    refereeMobile: PropTypes.string.isRequired,
    refereeEmail: PropTypes.string.isRequired
}

export default CommitteeCard;