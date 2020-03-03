import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import PropTypes from "prop-types";



function CommitteeCard(props) {

    return(
        <figure className="committee__item">
            <div className="committee__box">
                <div className="committee__image-box">
                    <img src={props.personImage} alt={props.personName} className="committee__image-box--img" />
                    <p className="committee__image-box--contact">
                        <span>
                            <svg className="committee__image-box--contact-icon">
                                <use xlinkHref={sprite + "#icon-email"}></use>
                            </svg>
                        </span>
                        {props.personEmail}</p>
                </div>
                <p className="committee__caption"><span className="committee__caption--name u-bold">{props.personName}</span><br/>{props.personRole}</p>
            </div>
            <div className="committee__backdrop">&nbsp;</div>
        </figure>
    
    );

}

CommitteeCard.propTypes = {
    personEmail: PropTypes.string.isRequired,
    personImage: PropTypes.string.isRequired,
    personName: PropTypes.string.isRequired,
    personRole: PropTypes.string.isRequired
}

export default CommitteeCard;