import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Lightbox from 'fslightbox-react';

import Loader from "../../../components/Ui/Loader/Loader";
import Error from "../../../components/Ui/Error/Error";


import CuflNav from "../../../components/Ui/PageMasthead/CuflNavs/CuflNavs";

import Masthead from "../../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../../components/Ui/Footer/Footer";

import Committee from "../../../components/Sections/SectionCommittee/SectionComittee";
import Person from "../../../components/Sections/SectionCommittee/CommitteeCard/CommitteeCard";
import TopImg from "../../../components/Sections/International/TopImg/IntlTopImg";
import Fixtures from "../../../components/Sections/International/UpcomingFix/UpcomingFix";
import IntlAbout from "../../../components/Sections/International/IntlAbout/IntlAbout";
import Gallery from "../../../components/Sections/GalleryGrid/GalleryGrid";
import GalleryItem from "../../../components/Sections/GalleryGrid/GridItem/GridItem";


const GET_CUFL_INTL_DATA = gql`
    query{
          
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
                url
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

    const imgUrls = data.errorImageses[0].errorImage.map(el => {
        return el.url;
    });
    console.log(imgUrls);
    console.log(image);

    return(
        <React.Fragment>
            <Masthead identifier={"cufl-nav"} default={nav} changed={() => setNav(!nav)}>
                <CuflNav clicked={() => setNav(!nav)}/>
            </Masthead>
            <main>
                <div className="main-content">
                    <div className="content-info">
                        
                        <TopImg />
                        <IntlAbout 
                            context="CUFL Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit qui saepe incidunt doloremque hic animi facilis dolorum? Quisquam ullam fugit, in omnis eveniet libero accusantium nam debitis fuga nobis modi rerum quam voluptatum alias adipisci impedit consectetur dignissimos reprehenderit doloremque dicta quidem qui hic. Blanditiis quibusdam quis autem, quos, aspernatur facere ratione possimus, a quidem voluptate incidunt. Quasi placeat natus dolorem qui ullam inventore vitae error soluta minima saepe? Esse labore magnam tempora quae, dolor quisquam distinctio provident voluptas soluta consequatur! In corporis, provident culpa iste molestias ad illum. Voluptate numquam veniam at esse quia consequatur excepturi corrupti? Tenetur!"
                        />
                        <Fixtures />
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
