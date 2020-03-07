import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function CuflNav(props) {


    return(
        <ul className="main-navigation__nav">
            <NavLi path="/cufl/#cufl-about" name="About Us" clicken={props.clicked}/>
            <NavLi path="/cufl/#cufl-rules" name="Rules" clicken={props.clicked}/>
            <NavLi path="/cufl/#cufl-leagues" name="Leagues" clicken={props.clicked}/>
            <NavLi path="/cufl/#cufl-committee" name="Committee" clicken={props.clicked}/>

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <p href="#" className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </p>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/cufl/#cufl-international" name="Intl. Team" />
                        <NavLi path="/cufl/#cufl-futsul" name="Futsul" />
                        <NavLi path="/cufl/#cufl-contacts" name="Contacts" />
                        <NavLi path="/cufl/#cufl-club-guide" name="Club Guide" />
                        <NavLi path="/cufl/#cufl-team-sheet" name="Team Sheet" />
                        <NavLi path="/cufl/#cufl-referee" name="Referees" />
                        <NavLi path="/blog" name="Blog" />
                    </ul>
                
            </li>
        </ul>
    );
}

export default CuflNav;
