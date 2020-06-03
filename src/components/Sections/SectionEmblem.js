import React from "react";
import sprite from "../../assets/images/sprite.svg";
import PropTypes from "prop-types";
import { useMediaQuery } from "../mediaQuery/mediaQuery";
import Socials from "../Ui/Masthead/MastheadNav/MastheadNav";

function SectionEmblem(props) {

    const isSmall = useMediaQuery("(max-width: 37.5em)");



    const styles = {
        container: isSmall => ({
          backgroundImage: `url(https://media.graphcms.com/resize=width:${isSmall ? 800 : 1600}/output=format:jpg/${props.bckg})`
        })
      };

    return(
        <div className="banner">
            <div className="banner__image-container">
                <div className={["banner__img", `${"banner__" + props.identifier}`].join(" ")} style={styles.container(isSmall)}></div>
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
                <Socials />
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





