import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";


import Masthead from "../../components/Ui/Masthead/Masthead";
import LandingCard from "../../components/Ui/LandingCard/LandingCard";
import Loader from "../../components/Ui/Loader/Loader";


import Cufl from "../../assets/images/markus.jpg";
import CuflLogo from "../../assets/images/indesign.png";

import Cfai from "../../assets/images/hermes.jpg";
import CfaiLogo from "../../assets/images/indesign.png";

import Iufu from "../../assets/images/kawasaki.jpg";
import IufuLogo from "../../assets/images/indesign.png";

import Wscai from "../../assets/images/jeffrey.jpg";
import WscaiLogo from "../../assets/images/indesign.png";



const getLandingData = gql`
    query($id: ID){
        landingPages(where: {id: $id}){
        bannerLarge,
        bannerSmall
        id
        }
    }



`;

function Landing() {
    const { loading, error, data } = useQuery(getLandingData, {variables: { "id" : "ck6rpq0f8b3qx0b20rv5shcc6" }});

  if (loading) return (
    <Loader />
  );
  if (error) return `Error! ${error.message}`;
  return (
    <React.Fragment>
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
                                    {data.landingPages[0].bannerLarge}
                                </h1>
                                <p className="landing2__banner--paragraph">
                                {data.landingPages[0].bannerSmall}
                                </p>
                            </div> 

                            <div className="landing2-card">
                                <LandingCard
                                    link="/cufl"
                                    identifier=" landing2-card__card--dominant" 
                                    cardImg= {Cufl}
                                    cardLogo= {CuflLogo} 
                                    alt="CUFL" 
                                    cardName="CUFL"
                                    desc="Colleges and Universities Football League" 

                                />
                                <LandingCard
                                    link="/cfai"
                                    identifier=" landing2-card__card--cfai" 
                                    cardImg= {Cfai}
                                    cardLogo= {CfaiLogo} 
                                    alt="CFAI" 
                                    cardName="CFAI"
                                    desc="Colleges Football Association of Ireland" 

                                />
                                <LandingCard
                                    link="/iufu"
                                    identifier=" landing2-card__card--iufu" 
                                    cardImg= {Iufu}
                                    cardLogo= {IufuLogo} 
                                    alt="IUFU" 
                                    cardName="IUFU"
                                    desc="Irish Universities Football Union" 

                                />
                                <LandingCard
                                    link= "/wscai"
                                    identifier=" landing2-card__card--wscai" 
                                    cardImg= {Wscai}
                                    cardLogo= {WscaiLogo} 
                                    alt="WSCAI" 
                                    cardName="WSCAI"
                                    desc="Women Soccer Colleges Association of Ireland" 

                                />
                            </div>
                    </div>
                </div>
            </main>
        </div>
    </React.Fragment>
    
  );
}




export default Landing;
