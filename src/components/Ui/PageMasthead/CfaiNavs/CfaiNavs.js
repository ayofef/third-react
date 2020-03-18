import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function Cfai(props) {


    return(
        <ul className="main-navigation__nav">
            <NavLi path="/cfai/#cfai-about" name="About Us" clicken={props.clicked} animate={props.slideIn} duration="slidein000"/>
            <NavLi path="/cfai/#cfai-rules" name="Rules" clicken={props.clicked} animate={props.slideIn} duration="slidein001"/>
            <NavLi path="/cfai/#cfai-committee" name="Committee" clicken={props.clicked} animate={props.slideIn} duration="slidein002"/>
            <NavLi path="/cfai/#cfai-gallery" name="Gallery" animate={props.slideIn} duration="slidein004"/>

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <p href="#" className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </p>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/cfai/#cfai-contacts" name="Contacts" animate={props.slideIn} duration="slidein004"/>
                        <NavLi path="/cfai/#cfai-club-guide" name="Club Guide" animate={props.slideIn} duration="slidein005"/>
                        <NavLi path="/cfai/#cfai-team-sheet" name="Team Sheet" animate={props.slideIn} duration="slidein006"/>
                        <NavLi path="/cfai/#cfai-referee" name="Referees" animate={props.slideIn} duration="slidein007"/>
                        <NavLi path="/latest-news" name="Latest News" animate={props.slideIn} duration="slidein008"/>
                    </ul>
                    
            </li>
        </ul>
    );
}

export default Cfai;
