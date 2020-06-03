import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { Helmet } from "react-helmet-async";


import Masthead from "../../components/Ui/Masthead/Masthead";
import LandingCard from "../../components/Ui/LandingCard/LandingCard";
import Loader from "../../components/Ui/Loader/Loader";
import Error from "../../components/Ui/Error/Error";


import CuflLogo from "../../assets/images/logo/cufl.png";
import CfaiLogo from "../../assets/images/logo/cfai.png";
import IufuLogo from "../../assets/images/logo/iufu.jpg";
import WscaiLogo from "../../assets/images/logo/wscai.png";


const GET_LANDING_PICTURES = gql`
    query{
        pageses{
            heroImage {
                id
                handle
                width
                height
              }
            }
        }
`;

function Landing() { 

    const { loading, error, data } = useQuery(GET_LANDING_PICTURES);

    if (loading) return <Loader />;
    if (error) return <Error /> ;

  return (
    <React.Fragment>
        <Helmet>
            <title>Third Level Footbal | Home</title>
            <meta name="keywords" content="###"></meta>
            <meta name="og:title" content="#####" />
            <meta name="description" content="#####" />
            <meta name="og:type" content="website" />
            <meta name="og:url" content="#######" />
            <meta name="og:image" content="###" />
            <meta name="og:description" content="Third Level" />
        </Helmet>
        <div className="landing2-background">
        <div className="landing2-container">
            <header>
                <Masthead 
                    facebook="https://www.facebook.com/FAIreland/" 
                    twitter="https://twitter.com/FAIreland" 
                    instagram="https://www.instagram.com/faireland/" 
                    email="Robert.dowling-byrne@fai.ie"
                />
            </header>
            <main>
                <div className="container2">
                        <div className="landing2-content">
                            <div className="landing2__banner">
                                <h1 className="landing2__banner--heading">
                                    Welcome to Third
                                </h1>
                                <p className="landing2__banner--paragraph">
                                    Level Football
                                </p>
                            </div> 

                            <div className="landing2-card">
                                <LandingCard
                                    link="/cufl"
                                    identifier=" landing2-card__card--dominant"
                                    cardLogo= {CuflLogo} 
                                    alt="CUFL" 
                                    cardName="CUFL"
                                    desc="Colleges and Universities Football League" 
                                    cardImg={data.pageses[0].heroImage}
                                />
                                <LandingCard
                                    link="/cfai"
                                    identifier=" landing2-card__card--cfai" 
                                    cardLogo= {CfaiLogo} 
                                    alt="CFAI" 
                                    cardName="CFAI"
                                    desc="Colleges Football Association of Ireland" 
                                    cardImg={data.pageses[1].heroImage}
                                />
                                <LandingCard
                                    link="/iufu"
                                    identifier=" landing2-card__card--iufu" 
                                    cardLogo= {IufuLogo} 
                                    alt="IUFU" 
                                    cardName="IUFU"
                                    desc="Irish Universities Football Union" 
                                    cardImg={data.pageses[2].heroImage} 
                                />
                                <LandingCard
                                    link= "/wscai"
                                    identifier=" landing2-card__card--wscai" 
                                    cardLogo= {WscaiLogo} 
                                    alt="WSCAI" 
                                    cardName="WSCAI"
                                    desc="Women Soccer Colleges Association of Ireland" 
                                    cardImg={data.pageses[3].heroImage}
                                />
                            </div>
                    </div>
                </div>
            </main>
        </div>
        </div>
    </React.Fragment>
    
  );
}




export default React.memo(Landing);
