import React, { useState } from "react";
import sprite from "../../../assets/images/sprite.svg";
import PropTypes from "prop-types";
import "./SectionResources.css";




function SectionFutsal(props) {

    const [collapse, setCollapse] = useState(false);

    let collapseWord = "More";
    let icon = "#icon-chevron-down"

    if(collapse){
        collapseWord = "Less";
        icon = "#icon-chevron-up"
    }


    return(

        <section className={["resources", `${props.identifier + "-resources"}`].join(" ")} id={props.identifier + "-contacts"}>
            <div className="container">
                <div className="resources-container">
                    <h2 className={["u-heading", `${props.identifier + "-heading"}`].join(" ")}>Resources</h2>
                    <div className="resources__contact">
                        <h3 className={["u-bold", "resources__sub-heading", `${props.identifier + "-heading"}`].join(" ")}>Contacts</h3>
                        <div className="resources__contact--box">
                            <a className="resources__contact--link btn" href={"mailto:" + props.email} target="_blank" rel="noopener noreferrer">
                                <span>
                                    <svg className="resources-contact-button-icon">
                                        <use xlinkHref={sprite + "#icon-mail4"}></use>
                                        </svg>
                                </span> E-mail
                            </a>
                            <a className="resources__contact--link btn" href={props.facebook} target="_blank" rel="noopener noreferrer">
                                <span>
                                    <svg className="resources-contact-button-icon">
                                        <use xlinkHref={sprite + "#icon-facebook-with-circle"}></use>
                                        </svg>
                                </span> Facebook
                            </a>
                            <a className="resources__contact--link btn" href={props.twitter} target="_blank" rel="noopener noreferrer">
                                <span>
                                    <svg className="resources-contact-button-icon">
                                        <use xlinkHref={sprite + "#icon-twitter-with-circle"}></use>
                                        </svg>
                                </span> Twitter
                            </a>
                            <a className="resources__contact--link btn" href={props.instagram} target="_blank" rel="noopener noreferrer">
                                <span>
                                    <svg className="resources-contact-button-icon">
                                        <use xlinkHref={sprite + "#icon-instagram-with-circle"}></use>
                                        </svg>
                                </span> Instagram
                            </a>
                        </div>
                    </div>

                    <div className="resources__downloads" id={props.identifier + "-club-guide"}>
                        <div className="resources__downloads--club-guide">
                            <h3 className={["u-bold", "resources__sub-heading", `${props.identifier + "-heading"}`].join(" ")}>Club Guide</h3>
                            <a className="resources__downloads--link btn" href={props.clubGuide} download="Club Guide" target="_blank" rel="noopener noreferrer">
                                <span>
                                    <svg className="download-button-icon">
                                        <use xlinkHref={sprite + "#icon-download"}></use>
                                    </svg>
                                </span> Download</a>
                        </div>
                        <div className="resources__downloads--team-sheet" id={props.identifier + "-team-sheet"}>
                            <h3 className={["u-bold", "resources__sub-heading", `${props.identifier + "-heading"}`].join(" ")}>Team Sheet</h3>
                            <a className="resources__downloads--link btn" href={props.teamSheet} download="Team Sheet" target="_blank" rel="noopener noreferrer">
                                <span>
                                    <svg className="download-button-icon">
                                        <use xlinkHref={sprite + "#icon-download"}></use>
                                    </svg>
                                </span> Download</a>
                        </div>
                    </div>

                    <div className="resources__referee" id={props.identifier + "-referee"} >
                        <h3 className={["u-bold", "resources__sub-heading", `${props.identifier + "-heading"}`].join(" ")}>Referees</h3>
                        <div className={["resources__referee-box", `${ collapse ? "complete__ref" : "collapsible__ref"}`].join(" ")}>
                            {props.children}
                        </div>
                    </div>
                    <div className="collapse__background" style={{display: collapse ? "none" : "block"}}></div>
                    <div className="collapse__referee" onClick={() => setCollapse(!collapse)}>
                        <p className="collapse__referee--text">{collapseWord} 
                            <span>
                                <svg className="arrow-button-icon">
                                    <use xlinkHref={sprite + icon}></use>
                                </svg>
                            </span>
                        </p>
                    </div>
            </div>
            </div>
        </section>
    
    );

}

SectionFutsal.propTypes = {
    identifier: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    instagram: PropTypes.string.isRequired,
    clubGuide: PropTypes.string.isRequired,
    teamSheet: PropTypes.string.isRequired

}


export default SectionFutsal;










        