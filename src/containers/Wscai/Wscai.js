import React, { useState}  from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Lightbox from 'fslightbox-react';



import Loader from "../../components/Ui/Loader/Loader";
import Error from "../../components/Ui/Error/Error";

import Masthead from "../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../components/Ui/Footer/Footer";
import WscaiNav from "../../components/Ui/PageMasthead/WscaiNavs/WscaiNavs";
import Blog from "../../components/Sections/SectionBlog/SectionBlog";
import Emblem from "../../components/Sections/SectionEmblem";
import About from "../../components/Sections/SectionAbout";
import Rules from "../../components/Sections/SectionRules";
import Committee from "../../components/Sections/SectionCommittee/SectionComittee";
import Person from "../../components/Sections/SectionCommittee/CommitteeCard/CommitteeCard";
import Gallery from "../../components/Sections/GalleryGrid/GalleryGrid";
import GalleryItem from "../../components/Sections/GalleryGrid/GridItem/GridItem";
import Cup from "../../components/Sections/SectionCup/SectionCup";


import Logo from "../../assets/images/logo/wscai.png";

const getWscaiPageData = gql`
query{
    pageses(where: {id: "ck7i7xdyt1gvz0b20qae46qvj"}){
        aboutText
        aboutImage {
          id
          handle
          width
          height
        }
        heroImage{
            id
            handle
        }
        aboutImageDesc
        competitionText
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
        email
        twitter
       facebook
        instagram
        clubGuide{
          id
          url
        }
        teamSheet{
          id
          url
        }
        rulesPdf{
          id
          url
        }
      }
    wscaiCommittees(orderBy: personRole_ASC){
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
    wscaiRefereeses(orderBy: refereeCounty_ASC){
        id
        refereeName
        refereeEmail
        refereeCounty
        refereeMobile
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
    blogsConnection(orderBy: createdAt_DESC, where: {postCategory_contains: "wscai"}, first: 3){
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

const Wscai = (props) => {

    /* LIGHT BOX */
    const [lightbox, setLightbox] = useState(false);
    const [image, setImage] = useState(0);

    function showSlide (img) {
        setLightbox(!lightbox);
        setImage(img);
    };
    /* LIGHT BOX */

    const [nav, setNav] = useState(false);

    const { loading, error, data } = useQuery(getWscaiPageData);

    

    if (loading) return <Loader /> ;

    if (error) return <Error /> ;

    /* LIGHT BOX */
    const imgUrls = data.errorImageses[0].errorImage.map(el => {
        return el.url;
    });
    /* LIGHT BOX */

    /* CUP CARD DATA */
    const CUPS_CARD_CARD = [
        "Collingwood Cup",
        "Harding Cup",
        "Duggan Cup",
        "Crowley Cup",
        "toBeConfirmed Cup"
    ]
    /* CUP CARD DATA */

    return(
        <React.Fragment>
            <Masthead identifier={"wscai-nav"} default={nav} changed={() => setNav(!nav)}>
                <WscaiNav clicked={() => setNav(!nav)} slideIn={nav === true ? "mobile-nav__slidein" : ""}/>
            </Masthead>
            <main>
                <div className="main-content">
                    <div className="content-info">
                        <Emblem 
                            identifier="wscai"
                            logo={Logo} 
                            logoAlt="Wscai logo"
                            committee="WSCAI"
                            committeeDesc="Women Soccer Colleges Association of Ireland"
                            bckg={data.pageses[0].heroImage.handle}
                        />
                        <Blog data={data.blogsConnection.edges} identifier="wscai" path="/latest-news/wscai"/>
                        
                        <Rules 
                            identifier="wscai"
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

                        <Cup data={CUPS_CARD_CARD} identifier="wscai"/>

                        <Committee identifier="wscai" header="COMMITTEE">
                            {
                                data.wscaiCommittees.map(el => (
                                    <Person key={el.id} personImage={el.personPicture} personEmail={el.personEmail} personRole={el.personRole} personName={el.personName}/>
                                ))
                            }
                        </Committee>
                        
                        <Gallery identifier="wscai">
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
                            identifier="wscai"
                            context={data.pageses[0].aboutText}
                            image={data.pageses[0].aboutImage}
                            imageDesc={data.pageses[0].aboutImageDesc}
                            path="/latest-news/wscai"
                        />
                    </div>
                </div>
            </main>
            <Footer 
            page="wscai"
            activeCufl=""
            activeIufu=""
            activeCfai=""
            activeWscai="fcard-active"
            />
        </React.Fragment>
    );
}

export default Wscai;
