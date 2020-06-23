import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link, useParams } from "react-router-dom";
import GraphImg from "graphcms-image";

import DateFormatter from "../../components/Ui/CustomHooks/Date";

import sprite from "../../assets/images/sprite.svg";

const getMoreData = gql`
  query {
    blogs(first: 3, orderBy: createdAt_DESC, stage: PUBLISHED) {
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
  const { whose } = useParams();

  const { loading, error, data } = useQuery(getMoreData);

  if (loading) return "";
  if (error) return "";
  return (
    <aside className="more-stories">
      <h3 className="more-stories__header">Latest News</h3>
      {data.blogs.map((el) => (
        <div className="blog-posts__card" key={el.id}>
          <div className="blog-posts__card--image">
            <GraphImg
              image={el.postImage}
              alt={el.postHeading}
              maxWidth={500}
              fit="max"
              withWebp={true}
              className="blog-posts__card--image-img"
              samesite="None"
              secure="true"
            />
          </div>
          <div className="blog-posts__card--text">
            <h3 className="blog-posts__card--text-heading">{el.postHeading}</h3>
            <p className="blog-posts__card--text-excerpt">
              {el.postExcerpt.length > 110
                ? el.postExcerpt.substr(0, 110).trim() + "..."
                : el.postExcerpt}
            </p>
            <p className="blog-posts__card--text-date">
              {DateFormatter(el.createdAt)}
            </p>
            <Link
              to={`/latest-news/${whose}/${el.postHeading
                .split(" ")
                .join("_")}`}
              className="blog-posts__card--link"
            >
              Continue Reading
              <span>
                <svg className="arrow-button-icon">
                  <use xlinkHref={sprite + "#icon-chevron-right"} />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      ))}
    </aside>
  );
}

export default MoreStories;
