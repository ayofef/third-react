import React from "react";
import sprite from "../../assets/images/sprite.svg";
import PropTypes from "prop-types";




function SectionGoBlog (props){

    return(
        <section className={["to-blog", `${props.identifier + "-to-blog"}`].join(" ")}>
            <div className="container">
                <div className="to-blog-container">
                    <h4 className={["to-blog-container__heading", `${props.identifier + "-heading"}`].join(" ")}>For Latest News, Visit {props.whose} Blog</h4>
                    <a href="/blog.html" className="btn to-blog-container__link">{props.whose} Blog
                        <span><svg className="arrow-button-icon" aria-hidden="true">
                            <use xlinkHref={sprite + "#icon-chevron-right"}></use>
                        </svg></span>
                    </a>
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