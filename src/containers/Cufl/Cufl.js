import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../../components/Ui/Loader/Loader";
import Error from "../../components/Ui/Error/Error";


import CuflNav from "../../components/Ui/PageMasthead/CuflNavs/CuflNavs";
import "./Cufl.css";

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
import Resources from "../../components/Sections/SectionResources/SectionResources";
import Referee from "../../components/Sections/SectionResources/refereeCard/refereeCard";
import Blog from "../../components/Sections/SectionGoBlog";



import Logo from "../../assets/images/indesign.png";

const getCuflPageData = gql`
    query{
        cuflPages{
            cuflAbout,
            cuflAboutImage {
              id,
              url
            },
            cuflAboutImageDesc,
            competitionText,
            competitionForm{
                id,
                url
            },
            rulesImage {
              id,
              url
            },
            rulesImageDesc,
            ruleWhose,
            ruleOne,
            ruleTwo,
            ruleThree,
            ruleFour,
            rulesPdf{
                id,
                url
            },
            internationalTeamText,
            internationalTeamImage {
              id,
              url
            },
            internationalTeamImageDesc,
            cuflEmail,
            cuflTwitter,
            cuflFacebook,
            cuflInstagram,
            clubGuide{
              id,
              url
            },
            teamSheet{
              id,
              url
            },
            rulesPdf{
              id,
              url
            }
          },
        cuflCommittees{
            id,
            personName,
            personRole,
            personEmail,
            personPicture{
                id,
                url
            }
        
        },
        cuflRefereeses(orderBy: refereeCounty_ASC){
            id,
            refereeName,
            refereeEmail,
            refereeCounty,
            refereeMobile
        }
    }

`;




function Cufl() {

    const [nav, setNav] = useState(false);

    const { loading, error, data } = useQuery(getCuflPageData);

    

    if (loading) return <Loader /> ;

    if (error) return <Error /> ;



    return(
        <React.Fragment>
            <Masthead identifier={"cufl-nav"} default={nav} changed={() => setNav(!nav)}>
                <CuflNav clicked={() => setNav(!nav)}/>
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
                        />
                        <About 
                            identifier="cufl"
                            context={data.cuflPages[0].cuflAbout}
                            image={data.cuflPages[0].cuflAboutImage.url}
                            imageDesc={data.cuflPages[0].cuflAboutImageDesc}
                            path="/blog"
                        />
                        <Rules 
                            identifier="cufl"
                            ruleImage={data.cuflPages[0].rulesImage.url}
                            ruleImageDesc={data.cuflPages[0].rulesImageDesc}
                            ruleWhose={data.cuflPages[0].ruleWhose}
                            ruleOne={data.cuflPages[0].ruleOne}
                            ruleTwo={data.cuflPages[0].ruleTwo}
                            ruleThree={data.cuflPages[0].ruleThree}
                            ruleFour={data.cuflPages[0].ruleFour}
                            rulePdf={data.cuflPages[0].rulesPdf.url}
                            formPdf={"###"}

                        />
                        <Leagues identifier="cufl" />
                        <International 
                            identifier="cufl"
                            context={data.cuflPages[0].internationalTeamText}
                            Intlimage={data.cuflPages[0].internationalTeamImage.url}
                            IntlImageDesc={data.cuflPages[0].internationalTeamImageDesc}
                        />
                        <Futsal />
                        <Committee identifier="cufl">
                            {
                                data.cuflCommittees.map(el => (
                                    <Person key={el.id} personImage={el.personPicture.url} personEmail={el.personEmail} personRole={el.personRole} personName={el.personName}/>
                                ))
                            }
                        </Committee>
                        <Resources 
                            identifier="cufl" 
                            email={data.cuflPages[0].cuflEmail}
                            facebook={data.cuflPages[0].cuflFacebook}
                            twitter={data.cuflPages[0].cuflTwitter}
                            instagram={data.cuflPages[0].cuflInstagram}
                            clubGuide={data.cuflPages[0].clubGuide.url}
                            teamSheet={data.cuflPages[0].teamSheet.url}
                        >
                            {
                                data.cuflRefereeses.map(el => (
                                    <Referee key={el.id} county={el.refereeCounty} refereeName={el.refereeName} refereeMobile={el.refereeMobile} refereeEmail={el.refereeEmail} identifier="cufl" />
                                ))
                            }
                        </Resources>
                        <Blog identifier="cufl" />
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

export default React.memo(Cufl);
