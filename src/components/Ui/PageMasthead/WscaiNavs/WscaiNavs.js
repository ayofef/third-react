import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function Wscai(props) {


    return(
        <ul className="main-navigation__nav">
            <NavLi path="/wscai/#wscai-about" name="About Us" clicken={props.clicked}animate={props.slideIn} duration="slidein000" />
            <NavLi path="/wscai/#wscai-rules" name="Rules" clicken={props.clicked}animate={props.slideIn} duration="slidein001" />
            <NavLi path="/wscai/#wscai-leagues" name="Leagues" clicken={props.clicked}animate={props.slideIn} duration="slidein002" />
            <NavLi path="/wscai/#wscai-committee" name="Committee" clicken={props.clicked}animate={props.slideIn} duration="slidein003" />

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <p href="#" className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </p>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/wscai/#wscai-contacts" name="Contacts" animate={props.slideIn} duration="slidein004" />
                        <NavLi path="/wscai/#wscai-club-guide" name="Club Guide" animate={props.slideIn} duration="slidein005" />
                        <NavLi path="/wscai/#wscai-team-sheet" name="Team Sheet" animate={props.slideIn} duration="slidein006" />
                        <NavLi path="/wscai/#wscai-referee" name="Referees" animate={props.slideIn} duration="slidein007" />
                        <NavLi path="/latest-news" name="Latest News" animate={props.slideIn} duration="slidein008"/>
                    </ul>
                
            </li>
        </ul>
    );
}

export default Wscai;
