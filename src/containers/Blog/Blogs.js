import React, { useState, useEffect} from "react";
import GraphImg from "graphcms-image";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link, useHistory } from 'react-router-dom';

import sprite from "../../assets/images/sprite.svg";
import Error from "../../components/Ui/Error/Error";
import Loader from "../../components/Ui/Loader/Loader";
import EmptyMast from "../../components/Ui/Masthead/EmptyMast";
import Footer from "../../components/Ui/Footer/Footer";



const STATE_WHOSE = "WHOSE";

sessionStorage.setItem(STATE_WHOSE, JSON.parse('""'));


const GET_BLOG_DATA = gql`
    query($where: BlogWhereInput, $after: String, $first: Int){
        blogsConnection(first:$first, after: $after, orderBy: createdAt_DESC, where: $where){
        edges{
            node{
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
        pageInfo{
            endCursor
            hasNextPage
        }
        
        }
        
    }

`;

function Blogs(props) {

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    const [whose, setWhose] = useState(sessionStorage.getItem(STATE_WHOSE));
    const [searched, setSearched] = useState("");

    useEffect(() => {
        sessionStorage.setItem(STATE_WHOSE, whose);
      }, [whose, setWhose]);


    const { loading, error, data, fetchMore } = useQuery(GET_BLOG_DATA , {variables: {"where": { "postCategory_contains": whose}, "after": null, "first": 10}});
    
    const history = useHistory()

   
    
    let headerText;
    if(whose === ""){
        headerText = "All"
    } else{
        headerText = whose;
    }
  

    
  if (loading) return <Loader />;
  if (error) return <Error /> ;
  return (

    <React.Fragment>
        <EmptyMast />
        <div className={["blog-posts", `${"blog-posts--" + whose}`].join(" ")}>
            <div className="container">
                <div className="blog-post__nav">
                    <h1 className="u-heading blog-posts__whose-heading">{headerText} <span> Latest News</span></h1>
                    <div className="latest-news__sort-search">
                        <div className="latest-news__search">
                            <input className="latest-news__search--input" type="text" value={searched} onChange={(event) => setSearched(event.target.value)} onKeyPress={(event) => (event.key === "Enter" && searched.length > 1) ? history.push(`/latest-news/search?query=${searched}`) : null}/>
                            <Link className={searched.length < 1 ? "latest-news__search--disabled" : "latest-news__search--link"} to={`/latest-news/search?query=${searched}`} onClick={(event) => searched.length < 1 ? event.preventDefault(): true }>
                                <span>
                                    <svg className="download-button-icon">
                                        <use xlinkHref={sprite + "#icon-magnifying-glass"}></use>
                                    </svg>
                                </span>
                            </Link>
                        </div>
                        <div className="latest-news__select">
                            <select className="blog-post__nav--select" defaultValue={whose} onChange={(event) => setWhose(event.target.value)}>
                                <option value="">All</option>
                                <option value="cufl">Cufl</option>
                                <option value="cfai">Cfai</option>
                                <option value="iufu">Iufu</option>
                                <option value="wscai">Wscai</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="blog-posts__container">               
                    {data.blogsConnection.edges.map(({node}, index) => <div className="blog-posts__card" key={node.id + index + Math.random(100000)}>
                        <div className="blog-posts__card--image">
                            <GraphImg image={node.postImage} alt={node.postHeading} maxWidth={800} fit="max" withWebp={true} className="blog-posts__card--image-img" samesite="None" secure="true"/>
                        </div>
                        <div className="blog-posts__card--text">
                            <h3 className="blog-posts__card--text-heading">{node.postHeading}</h3>
                            <p className="blog-posts__card--text-excerpt">{node.postExcerpt.length > 110 ? node.postExcerpt.substr(0,110).trim() + "..." : node.postExcerpt}</p>
                            <p className="blog-posts__card--text-date">{[node.createdAt.split("T")[0].split("-")[2], month[node.createdAt.split("T")[0].split("-")[1] -1], node.createdAt.split("T")[0].split("-")[0]].join(" ꞏ ")}</p>
                            <Link to={`/latest-news/${node.postHeading.split(" ").join("_")}`} className="blog-posts__card--link">Continue Reading<span><svg className="arrow-button-icon">
                                <use xlinkHref={sprite + "#icon-chevron-right"} />
                            </svg></span></Link>
                        </div>
                    </div> )}
                </div>
                <div className="blog-posts__more">
                {data.blogsConnection.pageInfo.hasNextPage ? 
                        <div className="blog-posts__more--button"onClick={() => {
                            const {endCursor} = data.blogsConnection.pageInfo;
                            const moreFirst = data.blogsConnection.edges.length 
                            fetchMore({
                                variables: {"where": { "postCategory_contains": whose}, "after": endCursor, "first": moreFirst + 10},
                                updateQuery: (prevResult, {fetchMoreResult}) => {
                                    fetchMoreResult.blogsConnection.edges =[...prevResult.blogsConnection.edges, ...fetchMoreResult.blogsConnection.edges];

                                    return fetchMoreResult;
                                }
                            });

                        }}
                        
                        
                        >Load More</div> : null}
                </div>
            </div>
        </div>
        <Footer page="" activeCfai="" activeWscai="" activeIufu="" activeCufl=""/>
    </React.Fragment>
        
        
        
      
  );
}

export default React.memo(Blogs);