import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Loader from "../../../components/Ui/Loader/Loader";
import Error from "../../../components/Ui/Error/Error";

import Resources from "../../../components/Resources/SectionResources";
import Referee from "../../../components/Resources/refereeCard/refereeCard";

import WscaiNav from "../../../components/Ui/PageMasthead/WscaiNavs/WscaiNavs";

import Masthead from "../../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../../components/Ui/Footer/Footer";


const GET_RESOURCES_DATA = gql`
query{
    pageses(where: {id: "ck7i7xdyt1gvz0b20qae46qvj"}){
        
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
    wscaiRefereeses(orderBy: refereeCounty_ASC){
        id
        refereeName
        refereeEmail
        refereeCounty
        refereeMobile
    }
}

`;




function WscaiResources() {


    const [nav, setNav] = useState(false);

    



    const { loading, error, data } = useQuery(GET_RESOURCES_DATA);
 

    

    if (loading) return <Loader /> ;

    if (error) return <Error /> ;

    

    return(
        <React.Fragment>
            <Masthead identifier={"wscai-nav"} default={nav} changed={() => setNav(!nav)}>
                <WscaiNav clicked={() => setNav(!nav)} slideIn={nav === true ? "mobile-nav__slidein" : ""}/>
            </Masthead>
            <main>
                <div className="main-content">
                    <div className="content-info">
                        
                        <Resources 
                            identifier="wscai" 
                            email={data.pageses[0].email}
                            facebook={data.pageses[0].facebook}
                            twitter={data.pageses[0].twitter}
                            instagram={data.pageses[0].instagram}
                            clubGuide={data.pageses[0].clubGuide.url}
                            teamSheet={data.pageses[0].teamSheet.url}
                        >
                            {
                                data.wscaiRefereeses.map(el => (
                                    <Referee key={el.id} county={el.refereeCounty} refereeName={el.refereeName} refereeMobile={el.refereeMobile} refereeEmail={el.refereeEmail} identifier="wscai" />
                                    
                                ))
                            }
                        </Resources>
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

export default WscaiResources;
