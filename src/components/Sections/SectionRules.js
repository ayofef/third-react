import React from "react";
import sprite from "../../assets/images/sprite.svg";
import PropTypes from "prop-types";
import GraphImg from "graphcms-image";

function SectionRules(props) {



    return(
        <section className={["rules", `${props.identifier + "-rules"}`].join(" ")} id={props.identifier + "-rules"}>
                        <div className="container">
                            <h2 className={["u-heading", `${props.identifier + "-heading"}`].join(" ")}>RULES</h2>
                            <GraphImg image={props.ruleImage} alt={props.ruleImageDesc} fit="max" maxWidth={1100} className="rules__image" SameSite="None" Secure/>
                            <p className="rules__subhead">{props.ruleWhose}</p>
                            <div className="rule-list-box">
                                <ul className="rules__list">
                                    <li>{props.ruleOne}</li>
                                    <li>{props.ruleTwo}</li>
                                </ul>
                                <ul className="rules__list">
                                    <li>{props.ruleThree}</li>
                                    <li>{props.ruleFour}</li>
                                    
                                </ul>
                            </div>
                            <div className="rules__forms">
                                <a className="rules__link btn" href={props.rulePdf} download target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <svg className="download-button-icon">
                                            <use xlinkHref={sprite + "#icon-download"}></use>
                                        </svg>
                                    </span> Competition Rules
                                </a>
                                <a className="rules__link btn" href={props.formPdf} download target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <svg className="download-button-icon">
                                            <use xlinkHref={sprite + "#icon-download"}></use>
                                        </svg>
                                    </span> Competition Form
                                </a>
                            </div>
                        </div>
                    </section>
    );

}

SectionRules.propTypes = {
    identifier: PropTypes.string.isRequired,
    ruleImage: PropTypes.object.isRequired,
    ruleImageDesc: PropTypes.string.isRequired,
    ruleWhose: PropTypes.string.isRequired,
    ruleOne: PropTypes.string.isRequired,
    ruleTwo: PropTypes.string.isRequired,
    ruleThree: PropTypes.string.isRequired,
    ruleFour: PropTypes.string.isRequired,
    rulePdf: PropTypes.string.isRequired,
    formPdf: PropTypes.string.isRequired
}

export default SectionRules;



