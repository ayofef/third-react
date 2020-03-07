import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function Cfai(props) {


    return(
        <ul className="main-navigation__nav">
            <NavLi path="/cfai/#cfai-about" name="About Us" clicken={props.clicked}/>
            <NavLi path="/cfai/#cfai-rules" name="Rules" clicken={props.clicked}/>
            <NavLi path="/cfai/#cfai-leagues" name="Leagues" clicken={props.clicked}/>
            <NavLi path="/cfai/#cfai-committee" name="Committee" clicken={props.clicked}/>

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <p href="#" className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </p>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/cfai/#cfai-contacts" name="Contacts" />
                        <NavLi path="/cfai/#cfai-club-guide" name="Club Guide" />
                        <NavLi path="/cfai/#cfai-team-sheet" name="Team Sheet" />
                        <NavLi path="/cfai/#cfai-referee" name="Referees" />
                        <NavLi path="/blog" name="Blog" />
                    </ul>
                
            </li>
        </ul>
    );
}

export default Cfai;
