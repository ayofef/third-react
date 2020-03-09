import React, { useState, useEffect} from "react";
import GraphImg from "graphcms-image";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import sprite from "../../assets/images/sprite.svg";
import { Link } from 'react-router-dom';
import Error from "../../components/Ui/Error/Error";
import Loader from "../../components/Ui/Loader/Loader";
import EmptyMast from "../../components/Ui/Masthead/EmptyMast";
import Footer from "../../components/Ui/Footer/Footer";



const STATE_WHOSE = "WHOSE";

sessionStorage.setItem(STATE_WHOSE, JSON.parse('""'));


const getBlogPostsData = gql`
    query($orderBy: BlogOrderByInput, $where: BlogWhereInput){
        blogs(orderBy: $orderBy, where: $where ) {

            id,
                postCategory
            postImage {
                id,
            handle,
            width,
            height
            },
            postExcerpt,
            postDate,
            postHeading

        }
    }

`;
function Blogs(props) {

  

    const [whose, setWhose] = useState(sessionStorage.getItem(STATE_WHOSE));

    useEffect(() => {
        sessionStorage.setItem(STATE_WHOSE, whose);
      }, [whose, setWhose]);


    const { loading, error, data } = useQuery(getBlogPostsData, {variables: {"orderBy":"postDate_DESC", "where": { "postCategory_contains": whose}}});

   
    
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
                    <h1 className={["u-heading", "blog-posts__whose-heading", `${whose + "-heading"}`].join(" ")}>{headerText} <span> Latest News</span></h1>
                    <div className="select">
                        <p className="blog-post__nav--text">Sort by Committee:</p>
                        <select className="blog-post__nav--select" defaultValue={whose} onChange={(event) => setWhose(event.target.value)}>
                            <option value="">All</option>
                            <option value="cufl">Cufl</option>
                            <option value="cfai">Cfai</option>
                            <option value="iufu">Iufu</option>
                            <option value="wscai">Wscai</option>
                        </select>
                    </div>
                </div>
                <div className="blog-posts__container">               
                    {data.blogs.map(el => <div className="blog-posts__card" key={el.id}>
                        <div className="blog-posts__card--image">
                            {/* <img className="blog-posts__card--image-img" src={el.postImage.url} alt={el.imageDesc}/> */}
                            <GraphImg image={el.postImage} alt={el.postHeading} maxWidth={800} className="blog-posts__card--image-img" SameSite="None" Secure/>
                        </div>
                        <div className="blog-posts__card--text">
                            <h3 className="blog-posts__card--text-heading">{el.postHeading}</h3>
                            <p className="blog-posts__card--text-excerpt">{el.postExcerpt}</p>
                            <p className="blog-posts__card--text-date">{el.postDate.split("T")[0].split("-").reverse().join("/")}</p>
                            <Link to={`/blog/${el.postHeading.split(" ").join("_")}`} className="blog-posts__card--link">Read More<span><svg className="arrow-button-icon">
                                <use xlinkHref={sprite + "#icon-chevron-right"} />
                            </svg></span></Link>
                        </div>
                    </div> )}
                </div>
            </div>
        </div>
        <Footer page="" activeCfai="" activeWscai="" activeIufu="" activeCufl=""/>
    </React.Fragment>
        
        
        
      
  );
}

export default React.memo(Blogs);