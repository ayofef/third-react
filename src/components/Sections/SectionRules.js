import React from "react";
import sprite from "../../assets/images/sprite.svg";
import PropTypes from "prop-types";

function SectionRules(props) {



    return(
        <section className={["rules", `${props.identifier + "-rules"}`].join(" ")} id={props.identifier + "-rules"}>
                        <div className="container">
                            <h2 className="u-heading cufl-heading">RULES</h2>
                            <img className="rules__img" src={props.ruleImage} alt={props.ruleImageDesc} />
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
                            <a className="rules__link btn" href={props.rulePdf} download>
                                <span>
                                    <svg className="download-button-icon">
                                        <use xlinkHref={sprite + "#icon-download"}></use>
                                    </svg>
                                </span> Competition Rules
                            </a>
                        </div>
                    </section>
    );

}

SectionRules.propTypes = {
    identifier: PropTypes.string.isRequired,
    ruleImage: PropTypes.string.isRequired,
    ruleImageDesc: PropTypes.string.isRequired,
    ruleWhose: PropTypes.string.isRequired,
    ruleOne: PropTypes.string.isRequired,
    ruleTwo: PropTypes.string.isRequired,
    ruleThree: PropTypes.string.isRequired,
    ruleFour: PropTypes.string.isRequired,
    rulePdf: PropTypes.string.isRequired
}

export default SectionRules;



