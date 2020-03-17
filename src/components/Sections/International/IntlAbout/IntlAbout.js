import React from 'react';
import GraphImg from "graphcms-image";
import INtlImg from "../../../../assets/images/leagues/league-bg.jpg";
import "./IntlAbout.css";

function IntlAbout(props) {
    
    return(
        <div className="container">
            <div className="Intl-about__container">
                <div className="Intl-about__text">
                    <p className="u-paragraph">{props.context}</p>      
                </div>
            
                <div className="Intl-about__image">
                    <img src={INtlImg} alt="that"/>
                {/* <GraphImg image={props.image} alt={props.imageDesc} maxWidth={800} withWebp={true} fit="max" className="about__image" SameSite="None" Secure/> */}
                </div>
            </div>
        </div>
    );
}

export default IntlAbout;