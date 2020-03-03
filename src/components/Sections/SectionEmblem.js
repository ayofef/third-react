import React from "react";
import sprite from "../../assets/images/sprite.svg";
import PropTypes from "prop-types";


function SectionEmblem(props) {

    return(
        <div className="banner">
            <div className="banner__image-container">
                <div className={["banner__img", `${"banner__" + props.identifier}`].join(" ")}></div>
            </div>
            <section className="emblem">
                <div className="container">
                    <div className="emblem__logo">
                        <img src={props.logo} alt={props.logoAlt} className="emblem__logo--img" />
                    </div>
                    <div className="emblem__text">
                        <h1 className="emblem__text--heading u-bold">{props.committee}</h1>
                        <p className="emblem__text--sub-text u-uppercase">{props.committeeDesc}</p>
                    </div>
                </div>
            </section>
            <div className="banner__scroll-cue">
                <svg className="banner__scroll-cue--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use>
                </svg>
            </div>
        </div>
    );

}

SectionEmblem.propTypes = {
    identifier: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    logoAlt: PropTypes.string.isRequired,
    committee: PropTypes.string.isRequired,
    committeeDesc: PropTypes.string.isRequired
}

export default SectionEmblem;





