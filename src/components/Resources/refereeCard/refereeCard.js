import React from "react";
import PropTypes from "prop-types";
import sprite from "../../../assets/images/sprite.svg";


            

function CommitteeCard(props) {
    const number = (number) => {
        const nbr = number.split("")
        const firstSplit = [nbr[1], nbr[2], nbr[3]].join("")
        const secondSplit = [nbr[4], nbr[5], nbr[6]].join("")
        const thirdSplit = [nbr[7], nbr[8], nbr[9]].join("")

        const formatedNumber = ["+353", firstSplit, secondSplit, thirdSplit].join(" ")
        if(number.length > 10){
            return number
        }
        return(
            formatedNumber
        )
    } 

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
                    {number(props.refereeMobile)}
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