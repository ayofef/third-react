import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import GraphImg from "graphcms-image";


import sprite from "../../assets/images/sprite.svg";


const getMoreData = gql`
    query{
        blogs(first: 3, orderBy: createdAt_DESC) {

            id
            createdAt
                postCategory
            postImage {
                id
                handle
                width
                height
            }
            postExcerpt
            postHeading
        }
    }

`;

function MoreStories(props) {

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];
    
    const { loading, error, data } = useQuery(getMoreData);

    
  if (loading) return "";
  if (error) return "";
  return (
      
        <div className="more-stories">
            <h3 className="more-stories__header">Latest News</h3>
            {data.blogs.map(el => <div className="blog-posts__card" key={el.id}>
                <div className="blog-posts__card--image">
                    <GraphImg image={el.postImage} alt={el.postHeading} maxWidth={800} fit="max" withWebp={true} className="blog-posts__card--image-img" samesite="None" secure="true"/>
                </div>
                <div className="blog-posts__card--text">
                    <h3 className="blog-posts__card--text-heading">{el.postHeading}</h3>
                    <p className="blog-posts__card--text-excerpt">{el.postExcerpt}</p>
                    <p className="blog-posts__card--text-date">{[el.createdAt.split("T")[0].split("-")[2], month[el.createdAt.split("T")[0].split("-")[1] -1], el.createdAt.split("T")[0].split("-")[0]].join(" ꞏ ")}</p>
                    <Link to={`/latest-news/${el.postHeading.split(" ").join("_")}`} className="blog-posts__card--link">Continue Reading<span><svg className="arrow-button-icon">
                        <use xlinkHref={sprite + "#icon-chevron-right"} />
                            </svg></span>
                    </Link>
                </div>
            </div>)}
        </div>
      
  );
  
}





export default MoreStories;



















