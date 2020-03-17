import React from "react";
import sprite from "../../assets/images/sprite.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";




function SectionGoBlog (props){

    return(
        <section className={["to-blog", `${props.identifier + "-to-blog"}`].join(" ")}>
            <div className="container">
                <div className="to-blog-container">
                    <h4 className={["to-blog-container__heading", `${props.identifier + "-heading"}`].join(" ")}>Read {props.whose} Latest News</h4>
                    <Link to="/latest-news" className="btn to-blog-container__link">{props.whose} News
                        <span><svg className="arrow-button-icon" aria-hidden="true">
                            <use xlinkHref={sprite + "#icon-chevron-right"}></use>
                        </svg></span>
                    </Link>
                </div>
            </div>
        </section>
    );
}


SectionGoBlog.propTypes = {
    identifier: PropTypes.string.isRequired,
    whose: PropTypes.string.isRequired
}

export default SectionGoBlog;