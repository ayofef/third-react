import React from "react";
import sprite from "../../assets/images/sprite.svg";
import PropTypes from "prop-types";


function SectionAbout(props) {



    return(
        <section className={["competition", `${props.identifier + "-competition"}`].join(" ")} id={props.identifier + "-competition"}>
            <div className="container">
                <h2 className={["u-heading", `${props.identifier + "-heading"}`].join(" ")}>COMPETITIONS</h2>
                <p className="u-paragraph">{props.context}</p>
                <div className="competition__form">
                    <a className="btn competition__link" href={props.competitionPdf} download="Competition Form" target="_blank" rel="noopener noreferrer">
                        <span>
                            <svg className="download-button-icon">
                                <use xlinkHref={sprite + "#icon-download"}></use>
                            </svg>
                        </span> Application Form</a>
                </div>
            </div>
        </section>
    );

}

SectionAbout.propsTypes = {
    identifier: PropTypes.string.isRequired,
    context: PropTypes.string.isRequired,
    competitionPdf: PropTypes.string.isRequired
}


export default SectionAbout;



