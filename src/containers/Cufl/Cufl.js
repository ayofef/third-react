import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Lightbox from 'fslightbox-react';


import Loader from "../../components/Ui/Loader/Loader";
import Error from "../../components/Ui/Error/Error";
import CuflNav from "../../components/Ui/PageMasthead/CuflNavs/CuflNavs";
import Masthead from "../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../components/Ui/Footer/Footer";


import Emblem from "../../components/Sections/SectionEmblem";
import About from "../../components/Sections/SectionAbout";
import Rules from "../../components/Sections/SectionRules";
import Leagues from "../../components/Sections/SectionLeague/SectionLeagues";
import International from "../../components/Sections/SectionInternational";
import Futsal from "../../components/Sections/SectionFutsal";
import Committee from "../../components/Sections/SectionCommittee/SectionComittee";
import Person from "../../components/Sections/SectionCommittee/CommitteeCard/CommitteeCard";
import Blog from "../../components/Sections/SectionBlog/SectionBlog";
import Gallery from "../../components/Sections/GalleryGrid/GalleryGrid";
import GalleryItem from "../../components/Sections/GalleryGrid/GridItem/GridItem";


import Logo from "../../assets/images/logo/cufl.png";

const getCuflPageData = gql`
    query{
        pageses(where: {id: "ck76m4pul3pfd0b84ipy6kdyn"}){
            aboutText
            aboutImage {
              id
              handle
              width
              height
            }
            aboutImageDesc,
            competitionText,
            competitionForm{
                id
                url
            }
            rulesImage {
              id
              handle
              width
              height
            }
            heroImage {
                id
                handle
              }
            rulesImageDesc
            ruleWhose
            ruleOne
            ruleTwo
            ruleThree
            ruleFour
            rulesPdf{
                id
                url
            }
            internationalTeamText
            internationalTeamImage {
              id
              handle
              width
              height
            }
            internationalTeamImageDesc,
            email
            twitter
           facebook
            instagram
            
            rulesPdf{
              id
              url
            }
        }
        cuflCommittees(orderBy: personRole_ASC){
            id
            personName
            personRole
            personEmail
            personPicture{
                id
                handle
                width
                height
            }
        
        }
        errorImageses{
            errorImage {
                id
                url(
                    transformation: {
                      image: { resize: { width: 800 } }
                      document: { output: { format: jpg } }
                    }
                  )
                handle
                fileName
                height
                width
            }
        },
        blogsConnection(orderBy: createdAt_DESC, where: {postCategory_contains: "cufl"}, first: 3){
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
  
        }
    }

`;




function Cufl(props) {

    /* LIGHT BOX */
    const [lightbox, setLightbox] = useState(false);
    const [image, setImage] = useState(0);

    function showSlide (img) {
        setLightbox(!lightbox);
        setImage(img);
    };
    /* LIGHT BOX */

    const [nav, setNav] = useState(false);


    const { loading, error, data } = useQuery(getCuflPageData);
 

    

    if (loading) return <Loader /> ;

    if (error) return <Error /> ;

    /* LIGHT BOX */
    const imgUrls = data.errorImageses[0].errorImage.map(el => {
        return el.url;
    });
    /* LIGHT BOX */

    // console.log(data)
    return(
        <React.Fragment>
            <Masthead identifier={"cufl-nav"} default={nav} changed={() => setNav(!nav)}>
                <CuflNav clicked={() => setNav(!nav)} slideIn={nav === true ? "mobile-nav__slidein" : ""}/>
            </Masthead>
            <main>
                <div className="main-content">
                    <div className="content-info">
                        <Emblem 
                            identifier="cufl"
                            logo={Logo} 
                            logoAlt="Cufl logo"
                            committee="CUFL"
                            committeeDesc="Colleges and Universities Football League"
                            bckg={data.pageses[0].heroImage.handle}
                        />

                        <Blog data={data.blogsConnection.edges} identifier="cufl" path="/latest-news/cufl" />
                        
                        <Rules 
                            identifier="cufl"
                            ruleImage={data.pageses[0].rulesImage}
                            ruleImageDesc={data.pageses[0].rulesImageDesc}
                            ruleWhose={data.pageses[0].ruleWhose}
                            ruleOne={data.pageses[0].ruleOne}
                            ruleTwo={data.pageses[0].ruleTwo}
                            ruleThree={data.pageses[0].ruleThree}
                            ruleFour={data.pageses[0].ruleFour}
                            rulePdf={data.pageses[0].rulesPdf.url}
                            formPdf={data.pageses[0].competitionForm.url}

                        />
                        <Leagues identifier="cufl" />
                        <International 
                            identifier="cufl"
                            context={data.pageses[0].internationalTeamText}
                            Intlimage={data.pageses[0].internationalTeamImage}
                            IntlImageDesc={data.pageses[0].internationalTeamImageDesc}
                            match={props.match.url}
                        />
                        <Futsal />
                        <Committee identifier="cufl" header="COMMITTEE">
                            {
                                data.cuflCommittees.map(el => (
                                    <Person key={el.id} personImage={el.personPicture} personEmail={el.personEmail} personRole={el.personRole} personName={el.personName}/>
                                ))
                            }
                        </Committee>
                        
                        <Gallery identifier="cufl">
                            {
                                data.errorImageses[0].errorImage.slice(0, 15).map((el, index) => ( <GalleryItem key={el.id} image={el} handle={el.handle} imageDesc={el.fileName} 
                                clicked={ (event) => showSlide(index + 1) } />))
                            }
                        </Gallery>
                        <Lightbox
                            toggler={lightbox}
                            slide={image}
                            sources={imgUrls}
                        /> 
                        <About 
                            identifier="cufl"
                            context={data.pageses[0].aboutText}
                            image={data.pageses[0].aboutImage}
                            imageDesc={data.pageses[0].aboutImageDesc}
                            path="/latest-news/cufl"
                        />
                    </div>
                </div>
            </main>
            <Footer 
            page="cufl"
            activeCufl="fcard-active"
            activeIufu=""
            activeCfai=""
            activeWscai=""
            />
        </React.Fragment>
    );
}

export default Cufl;
