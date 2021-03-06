import React, { useState}  from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Lightbox from 'fslightbox-react';

import Loader from "../../components/Ui/Loader/Loader";
import Error from "../../components/Ui/Error/Error";

import Masthead from "../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../components/Ui/Footer/Footer";
import IufuNav from "../../components/Ui/PageMasthead/IufuNavs/IufuNavs";
import Blog from "../../components/Sections/SectionBlog/SectionBlog";
import Emblem from "../../components/Sections/SectionEmblem";
import About from "../../components/Sections/SectionAbout";
import Rules from "../../components/Sections/SectionRules";
import Committee from "../../components/Sections/SectionCommittee/SectionComittee";
import Person from "../../components/Sections/SectionCommittee/CommitteeCard/CommitteeCard";
import Gallery from "../../components/Sections/GalleryGrid/GalleryGrid";
import GalleryItem from "../../components/Sections/GalleryGrid/GridItem/GridItem";
import Cup from "../../components/Sections/SectionCup/SectionCup";


import Logo from "../../assets/images/logo/iufu.jpg";

const getIufuPageData = gql`
query{
    pageses(where: {id: "ck7i7tup21gsc0b20i578kpcu"}){
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
        
        rulesPdf{
          id
          url
        }
      }
    iufuCommittees(orderBy: personRole_ASC){
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
    blogsConnection(orderBy: createdAt_DESC, where: {postCategory_contains: "iufu"}, first: 3){
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


function Iufu (props) {

    /* LIGHT BOX */
    const [lightbox, setLightbox] = useState(false);
    const [image, setImage] = useState(0);

    function showSlide (img) {
        setLightbox(!lightbox);
        setImage(img);
    };
    /* LIGHT BOX */

    const [nav, setNav] = useState(false);

    const { loading, error, data } = useQuery(getIufuPageData);


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
            <Masthead identifier={"iufu-nav"} default={nav} changed={() => setNav(!nav)}>
                <IufuNav clicked={() => setNav(!nav)} slideIn={nav === true ? "mobile-nav__slidein" : ""}/>
            </Masthead>
            <main>
                <div className="main-content">
                    <div className="content-info">
                        <Emblem 
                            identifier="iufu"
                            logo={Logo} 
                            logoAlt="Iufu logo"
                            committee="IUFU"
                            committeeDesc="Irish Universities Football Union"
                            bckg={data.pageses[0].heroImage.handle}
                        />
                        
                        <Blog data={data.blogsConnection.edges} identifier="iufu" path="/latest-news/iufu"/>

                        <Rules 
                            identifier="iufu"
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

                        <Cup data={CUPS_CARD_CARD } identifier="iufu"/>

                        <Committee identifier="iufu" header="COMMITTEE">
                            {
                                data.iufuCommittees.map(el => (
                                    <Person key={el.id} personImage={el.personPicture} personEmail={el.personEmail} personRole={el.personRole} personName={el.personName}/>
                                ))
                            }
                        </Committee>
                        
                        <Gallery identifier="iufu">
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
                            identifier="iufu"
                            context={data.pageses[0].aboutText}
                            image={data.pageses[0].aboutImage}
                            imageDesc={data.pageses[0].aboutImageDesc}
                            path="/latest-news/iufu"
                        />
                    </div>
                </div>
            </main>
            <Footer 
            page="iufu"
            activeCufl=""
            activeIufu="fcard-active"
            activeCfai=""
            activeWscai=""
            />
        </React.Fragment>
    );
}

export default Iufu;