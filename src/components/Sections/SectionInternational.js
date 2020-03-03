import React from "react";
import sprite from "../../assets/images/sprite.svg";
import PropTypes from "prop-types";


function SectionInternational(props) {

    return(
        <section className={["international", `${props.identifier + "-international"}`].join(" ")} id="cufl-international">
            <div className="container">
                <div className="international__box">
                    <div className="international__box--texts">
                        <div>
                            <h2 className={["u-heading", `${props.identifier + "-heading"}`].join(" ")}>International Team</h2>
                        <p className="u-paragraph">{props.context}</p>
                        <a href="leagues/league1.html" className="btn international__link">International Team <span><svg className="arrow-button-icon">
                            <use xlinkHref={sprite + "#icon-chevron-right"}></use>
                        </svg></span></a>
                        </div>
                    </div>
                    <div className="international__box--image">
                        <img src={props.Intlimage} alt={props.IntlImageDesc} className="international__box--image-img" />
                    </div>
                </div>
            </div>
        </section>
    );

}



SectionInternational.propTypes = {
    identifier: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    Intlimage: PropTypes.string.isRequired,
    IntlImageDesc: PropTypes.string.isRequired
};

export default SectionInternational;





