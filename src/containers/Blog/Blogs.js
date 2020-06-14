import React, { useState, useEffect} from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Link, useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';

import sprite from "../../assets/images/sprite.svg";
import Error from "../../components/Ui/Error/Error";
import Loader from "../../components/Ui/Loader/Loader";
import EmptyMast from "../../components/Ui/Masthead/EmptyMast";
import Footer from "../../components/Ui/Footer/Footer";
import BlogCard from "../../components/Ui/Blog/BlogCard";

import MatchFixturesAndResults from "../../components/Ui/Blog/BlogResults/BlogResults";
import Pagination from "../../components/Ui/Pagination/Pagination";

const GET_BLOG_DATA = gql`
    query($where: String!){
        blogsConnection(orderBy: createdAt_DESC, where: {AND: [{postCategory_contains: $where}, {status: PUBLISHED}] } ){
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
    
    const [searched, setSearched] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [sort, setSort] = useState({value: props.match.params.whose , label: props.match.params.whose.toUpperCase()});

    const BlogListPerPage = 10;
    
    const {whose} = useParams();
    const history = useHistory();

    const handleChange = (selectedOption) => {
        setSort(selectedOption);
        history.push(`/latest-news/${selectedOption.value}`);
        setCurrentPage(1);
    }

    const sortOption = [
        {value: "all" , label: "All"},
        {value: "cufl" , label: "CUFL"},
        {value: "iufu" , label: "IUFU"},
        {value: "wscai" , label: "WSCAI"}
    ];
    
    const { loading, error, data} = useQuery(GET_BLOG_DATA , {variables: {"where": whose === "all" ? "" : whose}});

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [currentPage, setCurrentPage]);

    

    
    const nextPage = (total) =>{
        if(currentPage < total){
            setCurrentPage(currentPage + 1)
        }
    }
    const prevPage = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    
    let headerText;
    if(!whose){
        headerText = "All"
    } else{
        headerText = whose;
    }
  
  if (loading) return <Loader />;
  if (error) return <Error /> ;



  /* Logic for DISPLAYING BLOG */
  const indexOfLastBlogList = currentPage * BlogListPerPage;
  const indexOfFirstBlogList = indexOfLastBlogList - BlogListPerPage;
  const totalPages = Math.ceil(data.blogsConnection.edges.length / BlogListPerPage);
  const BlogList = data.blogsConnection.edges.slice(indexOfFirstBlogList, indexOfLastBlogList);
//   console.log(indexOfLastBlogList, indexOfFirstBlogList, BlogList.length, data.blogsConnection.edges.length )
  /* Logic for DISPLAYING BLOG */



  

  return (

    <React.Fragment>
        <EmptyMast />
        <div className={["blog-posts", `${"blog-posts--" + whose}`].join(" ")}>
            <div className="container">
                <div className="latestNewsAndResults">
                    <div className="latestNewsContainer">
                        <div className="blog-post__nav">
                        <h1 className="u-heading blog-posts__whose-heading">{headerText} <span> Latest News</span></h1>
                        <div className="latest-news__sort-search">
                            <div className="latest-news__search">
                                <input className="latest-news__search--input" placeholder="Search.." list="sugesst" name="search" type="text" value={searched} onChange={(event) => setSearched(event.target.value)} onKeyPress={(event) => (event.key === "Enter" && searched.length > 1) ? history.push(`/latest-news/${whose}/search?query=${searched}`) : null}/>
                                <datalist id="sugesst">
                                    <option value="CUFL" />
                                    <option value="CFAI" />
                                    <option value="IUFU" />
                                    <option value="WSCAI" />
                                </datalist>
                                <Link className={searched.length < 1 ? "latest-news__search--disabled" : "latest-news__search--link"} to={`/latest-news/${whose}/search?query=${searched}`} onClick={(event) => searched.length < 1 ? event.preventDefault(): true }>
                                    <span>
                                        <svg className="download-button-icon">
                                            <use xlinkHref={sprite + "#icon-magnifying-glass"}></use>
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                            <div className="latest-news__select">
                                {/* <select className="blog-post__nav--select" defaultValue={whose} onChange={(e) => {return (history.push(`/latest-news/${e.target.value}`), setCurrentPage(1))}}>
                                    <option value="all">All</option>
                                    <option value="cufl">Cufl</option>
                                    <option value="cfai">Cfai</option>
                                    <option value="iufu">Iufu</option>
                                    <option value="wscai">Wscai</option>
                                </select> */}
                                <Select
                                    className="basic-single"
                                    classNamePrefix="select"
                                    defaultValue={sort}
                                    isDisabled={false}
                                    isLoading={false}
                                    isClearable={false}
                                    isRtl={false}
                                    isSearchable={false}
                                    name="color"
                                    options={sortOption}
                                    value={sort}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="blog-posts__container">
                        {
                            BlogList.map(({node}) => <BlogCard style={props} node={node} key={node.id}/>)
                        }

                       
                    </div>
                        <div style={{marginBottom: "3rem"}}>
                            
                            {
                                data.blogsConnection.edges.length > BlogListPerPage ? <Pagination prev={() => prevPage(totalPages)} next={() => nextPage(totalPages)} currentPage={currentPage} totalPages={totalPages} /> : null
                            }
                        </div>
                    </div>
                    <MatchFixturesAndResults />
                </div>
            </div>
        </div>
        <Footer page="" activeCfai="" activeWscai="" activeIufu="" activeCufl=""/>
    </React.Fragment>
        
        
        
      
  );
}

export default Blogs;