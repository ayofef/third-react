import React from 'react';
import { Link, useParams } from "react-router-dom";
import GraphImg from "graphcms-image";
import DateFormatter from "../CustomHooks/Date";


import sprite from "../../../assets/images/sprite.svg";

function BlogCard ({node, style, identifier}) {

 
    const {whose} = useParams();

    
    return(
        <div className="blog-posts__card" style={style}>
            <div className="blog-posts__card--image">
                <GraphImg image={node.postImage} alt={node.postHeading} fadeIn={true} blurryPlaceholder={true} maxWidth={800} fit="max" withWebp={true} className="blog-posts__card--image-img" samesite="None" secure="true"/>
            </div>
            <div className="blog-posts__card--text">
                <h3 className="blog-posts__card--text-heading">{node.postHeading}</h3>
                <p className="blog-posts__card--text-excerpt">{node.postExcerpt.length > 110 ? node.postExcerpt.substr(0,110).trim() + "..." : node.postExcerpt}</p>
                <p className="blog-posts__card--text-date">{DateFormatter(node.createdAt)}</p>
                <Link to={`/latest-news/${whose ? whose : identifier}/${node.postHeading.split(" ").join("_")}`} className="blog-posts__card--link">Continue Reading<span><svg className="arrow-button-icon">
                    <use xlinkHref={sprite + "#icon-chevron-right"} />
                </svg></span></Link>
            </div>
        </div>
    )
}

export default BlogCard;