import React, { useState}  from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../../components/Ui/Loader/Loader";
import Error from "../../components/Ui/Error/Error";

import Masthead from "../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../components/Ui/Footer/Footer";
import WscaiNav from "../../components/Ui/PageMasthead/WscaiNavs/WscaiNavs";
import Blog from "../../components/Sections/SectionGoBlog";
import Emblem from "../../components/Sections/SectionEmblem";
import About from "../../components/Sections/SectionAbout";
import Rules from "../../components/Sections/SectionRules";
import Committee from "../../components/Sections/SectionCommittee/SectionComittee";
import Person from "../../components/Sections/SectionCommittee/CommitteeCard/CommitteeCard";
import Resources from "../../components/Sections/SectionResources/SectionResources";
import Referee from "../../components/Sections/SectionResources/refereeCard/refereeCard";

import "./Wscai.css";


import Logo from "../../assets/images/indesign.png";

const getWscaiPageData = gql`
query{
    pageses(where: {id: "ck7i7xdyt1gvz0b20qae46qvj"}){
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
    wscaiCommittees{
        id,
        personName,
        personRole,
        personEmail,
        personPicture{
            id,
            url
        }
    
    },
    wscaiRefereeses(orderBy: refereeCounty_ASC){
        id,
        refereeName,
        refereeEmail,
        refereeCounty,
        refereeMobile
    }
}


`;

const Wscai = (props) => {
    const [nav, setNav] = useState(false);

    const { loading, error, data } = useQuery(getWscaiPageData);

    console.log(data)
    

    if (loading) return <Loader /> ;

    if (error) return <Error /> ;


    return(
        <React.Fragment>
            <Masthead identifier={"wscai-nav"} default={nav} changed={() => setNav(!nav)}>
                <WscaiNav clicked={() => setNav(!nav)}/>
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
                        />
                        <About 
                            identifier="wscai"
                            context={data.pageses[0].aboutText}
                            image={data.pageses[0].aboutImage.url}
                            imageDesc={data.pageses[0].aboutImageDesc}
                            path="/blog"
                        />
                        <Rules 
                            identifier="wscai"
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
                        <Committee identifier="wscai">
                            {
                                data.wscaiCommittees.map(el => (
                                    <Person key={el.id} personImage={el.personPicture.url} personEmail={el.personEmail} personRole={el.personRole} personName={el.personName}/>
                                ))
                            }
                        </Committee>
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
                        <Blog identifier="wscai" whose="WSCAI" />
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

export default React.memo(Wscai);
