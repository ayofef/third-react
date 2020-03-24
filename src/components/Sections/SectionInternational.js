import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GraphImg from "graphcms-image";


import sprite from "../../assets/images/sprite.svg";


function SectionInternational(props) {

    return(
        <section className={["international", `${props.identifier + "-international"}`].join(" ")} id="cufl-international">
            <div className="container">
                <div className="international__box">
                    <div className="international__box--texts">
                        <div>
                            <h2 className={["u-heading", `${props.identifier + "-heading"}`].join(" ")}>INTERNATIONAL TEAM</h2>
                        <p className="u-paragraph">{props.context}</p>
                        <Link to={props.match + "/international-team"} className="btn international__link">International Team <span><svg className="arrow-button-icon">
                            <use xlinkHref={sprite + "#icon-chevron-right"}></use>
                        </svg></span></Link>
                        </div>
                    </div>
                    <div className="international__box--image">
                        <GraphImg image={props.Intlimage} alt={props.IntlImageDesc} fit="max" withWebp={true} maxWidth={900} className="international__box--image-img" SameSite="None" Secure/>
                    </div>
                </div>
            </div>
        </section>
    );

}



SectionInternational.propTypes = {
    identifier: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    Intlimage: PropTypes.object.isRequired,
    IntlImageDesc: PropTypes.string.isRequired
};

export default SectionInternational;





