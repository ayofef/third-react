import React from "react";
import sprite from "../../assets/images/sprite.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function SectionAbout(props) {



    return(
        <section className={["about", `${props.identifier + "-about"}`].join(" ")} id={props.identifier + "-about"}>
            <div className="container">
                <div className="about__container">
                    <div className="about__text">
                        <h2 className={["u-heading", `${props.identifier + "-heading"}`].join(" ")}>ABOUT US</h2>
                        <p className="u-paragraph">{props.context}</p>
                        <Link to={props.path} className="btn about__link">Read Our Blog 
                            <span><svg className="arrow-button-icon" aria-hidden="true">
                                    <use xlinkHref={sprite + "#icon-chevron-right"}></use>
                                </svg>
                            </span>
                        </Link>          
                    </div>
                
                    <div className="about__image">
                        <img className="about__image--img" src={props.image} alt={props.imageDesc} />
                    </div>
                </div>
            </div>
        </section>
    );

}


SectionAbout.propTypes = {
    identifier: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    imageDesc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}


export default SectionAbout;



