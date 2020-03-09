import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import sprite from "../../assets/images/sprite.svg";
import { useHistory, useParams } from "react-router-dom";
import MoreStories from "./MoreStories";
import Loader from "../../components/Ui/Loader/Loader";
import Error from "../../components/Ui/Error/Error";
import EmptyMast from "../../components/Ui/Masthead/EmptyMast";
import Footer from "../../components/Ui/Footer/Footer";


const getBlogPostsData = gql`
    query($slug : String!){
        blogs(where: {postHeading : $slug} ){
            id,
            postImage {
                id,
                url
            },
            postExcerpt,
            postDate,
            postHeading,
            postBody{
                html
            }

        }
    }

`;

function FullBlogPosts(props) {

    let history = useHistory();

    function backToBlogHandler(){
        history.push("/blog");
    }

    let { slug } = useParams();
    console.log(props)

    console.log(slug.split("_").join(" "))
    const { loading, error, data } = useQuery(getBlogPostsData, { variables : { slug: slug.split("_").join(" ")}});

    
  if (loading) return <Loader />
  if (error) return <Error />;
  return (
    
    <React.Fragment>
        <EmptyMast />
        <div className="blog-single">
            <div className="container">
                <div className="blog-single__container">
                    <div className="blog-single__card">
                        <h3 className="blog-single__card--text-heading">{data.blogs[0].postHeading}</h3>
                        <p className="blog-single__card--text-date">{data.blogs[0].postDate.split("T")[0].split("-").reverse().join("/")}</p>
                        <img className="blog-posts__card--image-img blog-posts-single-img" src={data.blogs[0].postImage.url} alt={data.blogs[0].postHeading}/>
                        <div className="blog-single__content" dangerouslySetInnerHTML={{__html: data.blogs[0].postBody.html}} />
                        <div className="blog-single__button">
                            <p  type="button" onClick={backToBlogHandler}> <span><svg className="arrow-left-button-icon">
                                        <use xlinkHref={sprite + "#icon-chevron-left"}></use>
                                </svg></span> Latest News </p>
                        </div>
                    </div>
                    <MoreStories />
                </div>
            </div>
        </div>
        <Footer page="" activeCfai="" activeWscai="" activeIufu="" activeCufl=""/>
    </React.Fragment>
      
  );
  
}





export default React.memo(FullBlogPosts);
