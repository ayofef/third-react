import React, { useEffect, useState } from "react";
import GraphImg from "graphcms-image";
import { Link, useParams, useHistory } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import sprite from "../../assets/images/sprite.svg";
import Error from "../../components/Ui/Error/Error";
import MiniError from "../../components/Ui/Error/SearchError/SearchError";
import Loader from "../../components/Ui/Loader/Loader";
import EmptyMast from "../../components/Ui/Masthead/EmptyMast";
import Footer from "../../components/Ui/Footer/Footer";

const GET_BLOG_SEARCH_DATA = gql`
  query($where: BlogWhereInput) {
    blogsConnection(orderBy: createdAt_DESC, where: $where) {
      edges {
        node {
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

function SearchBlogs(props) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    for (let param of query.entries()) {
      // console.log(param); yields ['query', 'input']
      setSearchQuery(param[1]);
    }
  }, [props.location.search]);

  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const { whose } = useParams();
  const history = useHistory();

  const { loading, error, data } = useQuery(GET_BLOG_SEARCH_DATA, {
    variables: { where: { _search: searchQuery } },
  });

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <React.Fragment>
      <EmptyMast />
      <div className="blog-posts blog-posts--all">
        <div className="container">
          <div className="blog-post__nav">
            <h1
              className={["u-heading", "blog-posts__whose-heading"].join(" ")}
            >
              Search result for "{searchQuery}"
            </h1>
          </div>
          <div className="blog-posts__container">
            {data.blogsConnection.edges.length < 1 ? (
              <MiniError />
            ) : (
              data.blogsConnection.edges.map(({ node }, index) => (
                <div
                  className="blog-posts__card"
                  key={node.id + index + Math.random(100000)}
                >
                  <div className="blog-posts__card--image">
                    <GraphImg
                      image={node.postImage}
                      alt={node.postHeading}
                      maxWidth={800}
                      className="blog-posts__card--image-img"
                      samesite="None"
                      secure="true"
                    />
                  </div>
                  <div className="blog-posts__card--text">
                    <h3 className="blog-posts__card--text-heading">
                      {node.postHeading}
                    </h3>
                    <p className="blog-posts__card--text-excerpt">
                      {node.postExcerpt.length > 110
                        ? node.postExcerpt.substr(0, 110).trim() + "..."
                        : node.postExcerpt}
                    </p>
                    <p className="blog-posts__card--text-date">
                      {[
                        node.createdAt.split("T")[0].split("-")[2],
                        month[node.createdAt.split("T")[0].split("-")[1] - 1],
                        node.createdAt.split("T")[0].split("-")[0],
                      ].join(" ꞏ ")}
                    </p>
                    <Link
                      to={`/latest-news/${whose}/${node.postHeading
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
              ))
            )}
          </div>
          <div className="blog-single__button">
            <p type="button" onClick={() => history.goBack()}>
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

export default SearchBlogs;
