import React, { useState } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Loader from "../../components/Ui/Loader/Loader";
import Error from "../../components/Ui/Error/Error";

import "./Cfai.css";

import Masthead from "../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../components/Ui/Footer/Footer";
import CfaiNav from "../../components/Ui/PageMasthead/CfaiNavs/CfaiNavs";
import Blog from "../../components/Sections/SectionGoBlog";
import Emblem from "../../components/Sections/SectionEmblem";
import About from "../../components/Sections/SectionAbout";
import Rules from "../../components/Sections/SectionRules";
import Committee from "../../components/Sections/SectionCommittee/SectionComittee";
import Person from "../../components/Sections/SectionCommittee/CommitteeCard/CommitteeCard";


import Logo from "../../assets/images/indesign.png";

const getCfaiPageData = gql`
    query{
        cfaiPages{
            cfaiAbout,
            cfaiAboutImage {
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
             rulePdf{
                 id,
                 url
             }
        },
        cfaiCommittees{
            id,
            personName,
            personRole,
            personEmail,
            personPicture{
                id,
                url
            }
        
        }
    }

`;




function Cfai() {

    const [nav, setNav] = useState(false);

    const { loading, error, data } = useQuery(getCfaiPageData);

    console.log(data)
    

    if (loading) return <Loader /> ;

    if (error) return <Error /> ;



    return(
        <React.Fragment>
            <Masthead identifier={"cfai-nav"} default={nav} changed={() => setNav(!nav)}>
                <CfaiNav clicked={() => setNav(!nav)}/>
            </Masthead>
            <main>
                <div className="main-content">
                    <div className="content-info">
                        <Emblem 
                            identifier="cfai"
                            logo={Logo} 
                            logoAlt="CFAI logo"
                            committee="CFAI"
                            committeeDesc="Colleges Football Association of Ireland"
                        />
                        <About 
                            identifier="cfai"
                            context={data.cfaiPages[0].cfaiAbout}
                            image={data.cfaiPages[0].cfaiAboutImage.url}
                            imageDesc={data.cfaiPages[0].aboutImageDesc}
                            path="/blog"
                        />
                        <Rules 
                            identifier="cfai"
                            ruleImage={data.cfaiPages[0].rulesImage.url}
                            ruleImageDesc={data.cfaiPages[0].rulesImageDesc}
                            ruleWhose={data.cfaiPages[0].ruleWhose}
                            ruleOne={data.cfaiPages[0].ruleOne}
                            ruleTwo={data.cfaiPages[0].ruleTwo}
                            ruleThree={data.cfaiPages[0].ruleThree}
                            ruleFour={data.cfaiPages[0].ruleFour}
                            rulePdf={data.cfaiPages[0].rulePdf.url}
                            formPdf={"###"}

                        />
                        <Committee identifier="cfai">
                            {
                                data.cfaiCommittees.map(el => (
                                    <Person key={el.id} personImage={el.personPicture.url} personEmail={el.personEmail} personRole={el.personRole} personName={el.personName}/>
                                ))
                            }
                        </Committee>
                        
                        <Blog identifier="cfai" />
                    </div>
                </div>
            </main>
            <Footer 
            page="cufl"
            activeCufl=""
            activeIufu=""
            activeCfai="fcard-active"
            activeWscai=""
            />
        </React.Fragment>
    );
}

export default React.memo(Cfai);
