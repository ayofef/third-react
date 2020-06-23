import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { useHistory, useParams } from "react-router-dom";
import GraphImg from "graphcms-image";

import sprite from "../../assets/images/sprite.svg";
import MoreStories from "./MoreStories";
import Loader from "../../components/Ui/Loader/Loader";
import Error from "../../components/Ui/Error/Error";
import EmptyMast from "../../components/Ui/Masthead/EmptyMast";
import Footer from "../../components/Ui/Footer/Footer";
import DateFormatter from "../../components/Ui/CustomHooks/Date";

const getBlogPostsData = gql`
  query($slug: String!) {
    blogs(where: { postHeading: $slug }) {
      id
      createdAt
      postImage {
        id
        handle
        width
        height
      }
      postExcerpt
      postHeading
      postBody {
        html
      }
    }
  }
`;

function FullBlogPosts(props) {
  let history = useHistory();

  function backToBlogHandler() {
    history.goBack();
  }

  let { slug } = useParams();

  const { loading, error, data } = useQuery(getBlogPostsData, {
    variables: { slug: slug.split("_").join(" ") },
  });

  if (loading) return <Loader />;
  if (error) return <Error />;
  return (
    <React.Fragment>
      <EmptyMast />
      <div className="blog-single">
        <div className="container">
          <div className="blog-single__container">
            <div className="blog-single__card">
              <h3 className="blog-single__card--text-heading">
                {data.blogs[0].postHeading}
              </h3>
              <p className="blog-single__card--text-date">
                {DateFormatter(data.blogs[0].createdAt)}
              </p>

              <GraphImg
                image={data.blogs[0].postImage}
                alt={data.blogs[0].postHeading}
                fit="max"
                withWebp={true}
                maxWidth={800}
                className="blog-posts__card--image-img blog-posts-single-img"
                SameSite="None"
                Secure
              />
              <div
                className="blog-single__content"
                dangerouslySetInnerHTML={{
                  __html: data.blogs[0].postBody.html,
                }}
              />
              <div className="blog-single__button">
                <p type="button" onClick={backToBlogHandler}>
                  {" "}
                  <span>
                    <svg className="arrow-left-button-icon">
                      <use xlinkHref={sprite + "#icon-chevron-left"}></use>
                    </svg>
                  </span>{" "}
                  Back{" "}
                </p>
              </div>
            </div>
            <MoreStories />
          </div>
        </div>
      </div>
      <Footer
        page=""
        activeCfai=""
        activeWscai=""
        activeIufu=""
        activeCufl=""
      />
    </React.Fragment>
  );
}

export default FullBlogPosts;
