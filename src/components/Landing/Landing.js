import React, { Component } from "react";

import Aux from "../../hoc/Auxilliary";
import Masthead from "../Ui/Masthead/Masthead";
import LandingCard from "../Ui/LandingCard/LandingCard";


import Cufl from "../../assets/images/markus.jpg";
import CuflLogo from "../../assets/images/indesign.png";

import Cfai from "../../assets/images/hermes.jpg";
import CfaiLogo from "../../assets/images/indesign.png";

import Iufu from "../../assets/images/kawasaki.jpg";
import IufuLogo from "../../assets/images/indesign.png";

import Wscai from "../../assets/images/jeffrey.jpg";
import WscaiLogo from "../../assets/images/indesign.png";

class Landing extends Component {


    render () {
        return(
            <Aux>
                <div className="landing2-container">
                    <Masthead/>
                    <main>
                        <div className="container2">
                            <div className="landing2-content">
                                <div className="landing2__banner">
                                    <h1 className="landing2__banner--heading">
                                        Welcome to FAI
                                    </h1>
                                    <p className="landing2__banner--paragraph">
                                        Third Level Football.
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
                                        desc="Colleges and Universities Football League" 

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
            </Aux>
        );
    }
};

export default Landing;
