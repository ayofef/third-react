import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Loader from "../../../components/Ui/Loader/Loader";
import Error from "../../../components/Ui/Error/Error";

import Resources from "../../../components/Resources/SectionResources";
import Referee from "../../../components/Resources/refereeCard/refereeCard";

import CuflNav from "../../../components/Ui/PageMasthead/CuflNavs/CuflNavs";

import Masthead from "../../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../../components/Ui/Footer/Footer";


const GET_RESOURCES_DATA = gql`
    query{
        pageses(where: {id: "ck76m4pul3pfd0b84ipy6kdyn"}){
            
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
            
        }
        
        cuflRefereeses(orderBy: refereeCounty_ASC){
            id
            refereeName
            refereeEmail
            refereeCounty
            refereeMobile
        }
        
        
    }


`;




function CuflResources() {


    const [nav, setNav] = useState(false);

    



    const { loading, error, data } = useQuery(GET_RESOURCES_DATA);
 

    

    if (loading) return <Loader /> ;

    if (error) return <Error /> ;


    return(
        <React.Fragment>
            <Masthead identifier={"cufl-nav"} default={nav} changed={() => setNav(!nav)}>
                <CuflNav clicked={() => setNav(!nav)} slideIn={nav === true ? "mobile-nav__slidein" : ""}/>
            </Masthead>
            <main>
                <div className="main-content">
                    <div className="content-info">
                        
                        <Resources 
                                identifier="cufl" 
                                email={data.pageses[0].email}
                                facebook={data.pageses[0].facebook}
                                twitter={data.pageses[0].twitter}
                                instagram={data.pageses[0].instagram}
                                clubGuide={data.pageses[0].clubGuide.url}
                                teamSheet={data.pageses[0].teamSheet.url}
                            >
                                {
                                    data.cuflRefereeses.map(el => (
                                        <Referee key={el.id} county={el.refereeCounty} refereeName={el.refereeName} refereeMobile={el.refereeMobile} refereeEmail={el.refereeEmail} identifier="cufl" />
                                    ))
                                }
                        </Resources>
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

export default CuflResources;
