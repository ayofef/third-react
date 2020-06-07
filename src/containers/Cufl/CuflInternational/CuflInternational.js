import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Lightbox from 'fslightbox-react';

import Loader from "../../../components/Ui/Loader/Loader";
import Error from "../../../components/Ui/Error/Error";

import CuflNav from "../../../components/Ui/PageMasthead/CuflNavs/CuflNavs";

import Masthead from "../../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../../components/Ui/Footer/Footer";


import FixturesBox from "../../../components/Leagues/LeaguesHtml/FixturesHtml/FixturesHtml";
import Committee from "../../../components/Sections/SectionCommittee/SectionComittee";
import Person from "../../../components/Sections/SectionCommittee/CommitteeCard/CommitteeCard";
import TopImg from "../../../components/Sections/International/TopImg/IntlTopImg";
import TopImgEach from "../../../components/Sections/International/TopImg/TopImgEach";
import IntlAbout from "../../../components/Sections/International/IntlAbout/IntlAbout";
import Gallery from "../../../components/Sections/GalleryGrid/GalleryGrid";
import GalleryItem from "../../../components/Sections/GalleryGrid/GridItem/GridItem";



const GET_CUFL_INTL_DATA = gql`
    query{

        cuflInternationalAbouts{
            aboutImage{
                id
                handle
                width
                height
            }
            aboutImageDesc
            aboutText
            internationalHeroImages{
                id
                handle
                width
                height
                fileName
            }
        }

        cuflInternationalFixtureses(orderBy : dateAndTime_DESC){
            id
            homeTeamName
            homeTeamLogo{
            id
            url
            }
            homeTeamScore
            awayTeamScore
            awayTeamLogo{
            id
            url
            }
            awayTeamName
            dateAndTime
            venue
        }
        cuflInternationalCommittees{
            id,
            personName,
            personRole,
            personEmail,
            personPicture{
                id
                handle
                width
                height
            }

        }
        errorImageses{
            errorImage(orderBy: updatedAt_DESC){
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
        }
        
        
    }

`;




function CuflIntl() {


    /* LIGHT BOX */
    const [lightbox, setLightbox] = useState(false);
    const [image, setImage] = useState(0);

    function showSlide (img) {
        setLightbox(!lightbox);
        setImage(img);
    };
    /* LIGHT BOX */


    const [nav, setNav] = useState(false);


    const { loading, error, data } = useQuery(GET_CUFL_INTL_DATA);
 

    

    if (loading) return <Loader /> ;

    if (error) return <Error /> ;

    /* LIGHT BOX */
    const imgUrls = data.errorImageses[0].errorImage.map(el => {
        return el.url;
    });
    /* LIGHT BOX */

    return(
        <React.Fragment>
            <Masthead identifier={"cufl-nav"} default={nav} changed={() => setNav(!nav)}>
                <CuflNav clicked={() => setNav(!nav)} slideIn={nav === true ? "mobile-nav__slidein" : ""}/>
            </Masthead>
            <main>
                <div className="main-content">
                    <div className="content-info">
                        
                        <TopImg>
                            {
                                data.cuflInternationalAbouts[0].internationalHeroImages.map(el => ( <TopImgEach key={el.id} image={el} imageDesc={el.fileName} /> ) )
                            }
                            
                        </TopImg>
                        <IntlAbout 
                        identifier="cufl"
                            context={data.cuflInternationalAbouts[0].aboutText}
                            image={data.cuflInternationalAbouts[0].aboutImage}
                            imageDesc={data.cuflInternationalAbouts[0].aboutImageDesc}
                        />
                        <div className="container">
                        {data && data.cuflInternationalFixtureses >= 1 ? <FixturesBox whose="Upcoming Fixtures" data={data.cuflInternationalFixtureses} /> : null}
                        </div>
                        <Committee identifier="cufl" header="TEAM STAFF">
                            {
                                data.cuflInternationalCommittees.map(el => (
                                    <Person key={el.id} personImage={el.personPicture} personEmail={el.personEmail} personRole={el.personRole} personName={el.personName}/>
                                ))
                            }
                        </Committee>
                        <Committee identifier="cufl" header="COMMITTEE">
                            {
                                data.cuflInternationalCommittees.map(el => (
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

export default React.memo(CuflIntl);
