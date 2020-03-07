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
        pageses(where: {id: "ck76m4pul3pfd0b84ipy6kdyn"}){
            aboutText,
            aboutImage {
              id,
              url
            },
            aboutImageDesc,
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
            email,
            twitter,
           facebook,
            instagram,
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
    console.log(data)

    

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
                            context={data.pageses[0].aboutText}
                            image={data.pageses[0].aboutImage.url}
                            imageDesc={data.pageses[0].aboutImageDesc}
                            path="/blog"
                        />
                        <Rules 
                            identifier="cufl"
                            ruleImage={data.pageses[0].rulesImage.url}
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
                            Intlimage={data.pageses[0].internationalTeamImage.url}
                            IntlImageDesc={data.pageses[0].internationalTeamImageDesc}
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
                        <Blog identifier="cufl" whose="CUFL"/>
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
