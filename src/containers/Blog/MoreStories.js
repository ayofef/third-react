import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import sprite from "../../assets/images/sprite.svg";
import { Link } from "react-router-dom";



const getMoreData = gql`
    query{
        blogs(first: 3, orderBy: postDate_DESC) {

            id,
                postCategory
            postImage {
            id,
            url
            },
            postExcerpt,
            postDate,
            postHeading
        }
    }

`;

function MoreStories(props) {

    
    const { loading, error, data } = useQuery(getMoreData);

    
  if (loading) return "";
  if (error) return "";
  return (
      
        <div className="more-stories">
            <h3 className="more-stories__header">News Headlines</h3>
            {data.blogs.map(el => <div className="blog-posts__card" key={el.id}>
                <div className="blog-posts__card--image">
                    <img className="blog-posts__card--image-img" src={el.postImage.url} alt={el.postHeading} />
                </div>
                <div className="blog-posts__card--text">
                    <h3 className="blog-posts__card--text-heading">{el.postHeading}</h3>
                    <p className="blog-posts__card--text-excerpt">{el.postExcerpt}</p>
                    <p className="blog-posts__card--text-date">{el.postDate.split("T")[0].split("-").reverse().join("/")}</p>
                    <Link to={`/blog/${el.postHeading.split(" ").join("_")}`} className="blog-posts__card--link">Read More<span><svg className="arrow-button-icon">
                        <use xlinkHref={sprite + "#icon-chevron-right"} />
                            </svg></span>
                    </Link>
                </div>
            </div>)}
        </div>
      
  );
  
}





export default MoreStories;



















