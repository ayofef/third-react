import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function Wscai(props) {


    return(
        <ul className="main-navigation__nav">
            <NavLi path="/wscai/#wscai-about" name="About Us" clicken={props.clicked}/>
            <NavLi path="/wscai/#wscai-rules" name="Rules" clicken={props.clicked}/>
            <NavLi path="/wscai/#wscai-leagues" name="Leagues" clicken={props.clicked}/>
            <NavLi path="/wscai/#wscai-committee" name="Committee" clicken={props.clicked}/>

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <p href="#" className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </p>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/wscai/#wscai-contacts" name="Contacts" />
                        <NavLi path="/wscai/#wscai-club-guide" name="Club Guide" />
                        <NavLi path="/wscai/#wscai-team-sheet" name="Team Sheet" />
                        <NavLi path="/wscai/#wscai-referee" name="Referees" />
                        <NavLi path="/blog" name="Blog" />
                    </ul>
                
            </li>
        </ul>
    );
}

export default Wscai;
