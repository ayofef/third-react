import React from 'react';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import sprite from "../../../assets/images/sprite.svg";
import BlogCard from "../../Ui/Blog/BlogCard";
import classes from "./SectionBlog.module.scss";


function SectionBlog (props) {


    return(
        <section className={["latest-news", `${props.identifier + "-latest-news"}`].join(" ")} id={props.identifier + "-latest-news"}>
            <div className="container">
                <h2 className={["u-heading", `${props.identifier + "-heading"}`].join(" ")}>Latest News</h2>
                <div className={classes.sectionBlog}>
                    {
                        props.data.map(({node}) => (
                            <BlogCard node={node} key={node.id} identifier={props.identifier}/>
                        ))
                    }
                </div>
                <Link to={props.path} className="btn latest-news__link">More News 
                    <span><svg className="arrow-button-icon" aria-hidden="true">
                            <use xlinkHref={sprite + "#icon-chevron-right"}></use>
                        </svg>
                    </span>
                </Link>
            </div>
        </section>
    )
}


SectionBlog.propTypes = {
    data: PropTypes.array.isRequired,
    identifier: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export default SectionBlog;