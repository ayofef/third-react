import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Lightbox from 'fslightbox-react';

import Loader from "../../../components/Ui/Loader/Loader";
import Error from "../../../components/Ui/Error/Error";
import EmptyData from "../../../components/Ui/EmptyArray/EmptyArray";

import CuflNav from "../../../components/Ui/PageMasthead/CuflNavs/CuflNavs";

import Masthead from "../../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../../components/Ui/Footer/Footer";


import FixturesBox from "../../../components/Leagues/LeaguesHtml/FixturesHtml/FixturesHtml";
import FixturesCard from "../../../components/Leagues/LeaguesHtml/FixturesHtml/FixturesCard";
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

        cuflInternationalFixtureses(orderBy : dateAndTime_ASC){
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
            errorImage {
                id
                url(
                    transformation: {
                      image: { resize: { width: 200 } }
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

    /* DATE AND TIME */
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    const time = (hour, minute) =>{
        if(hour <= 11){
            return hour + " : " + minute + " AM";
        }else if(hour > 11){
            return (hour - 12) + " : " + minute + " PM"
        }else if(hour < 1){
            return (hour) + " : " + minute + " AM"
        } 
    }
    /* DATE AND TIME */

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
                            <FixturesBox whose="Upcoming Fixtures">
                                {data.cuflInternationalFixtureses < 1 ? <EmptyData /> : data.cuflInternationalFixtureses.map(el => (
                                    <FixturesCard 
                                        key={el.id}
                                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
                                        venue={el.venue}
                                        homeName={el.homeTeamName}
                                        homeLogo={el.homeTeamLogo.url}
                                        homeScore={el.homeTeamScore}
                                        awayScore={el.awayTeamScore}
                                        awayLogo={el.awayTeamLogo.url}
                                        awayName={el.awayTeamName}
 
                                    />
                                ))}
                            </FixturesBox>
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
                                data.errorImageses[0].errorImage.map((el, index) => ( <GalleryItem key={el.id} image={el} handle={el.handle} imageDesc={el.fileName} 
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
