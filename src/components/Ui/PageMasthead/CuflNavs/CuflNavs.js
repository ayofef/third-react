import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function CuflNav(props) {


    return(
        <ul className="main-navigation__nav">
            <NavLi path="/cufl/#cufl-about" name="About Us" clicken={props.clicked} animate={props.slideIn} duration="slidein000"/>
            <NavLi path="/cufl/#cufl-rules" name="Rules" clicken={props.clicked} animate={props.slideIn} duration="slidein001"/>
            <NavLi path="/cufl/#cufl-leagues" name="Leagues" clicken={props.clicked} animate={props.slideIn} duration="slidein002"/>
            <NavLi path="/cufl/#cufl-committee" name="Committee" clicken={props.clicked} animate={props.slideIn} duration="slidein003"/>

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <p href="#" className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </p>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/cufl/#cufl-international" name="Intl. Team"  animate={props.slideIn} duration="slidein004"/>
                        <NavLi path="/cufl/#cufl-futsul" name="Futsul"  animate={props.slideIn} duration="slidein005"/>
                        <NavLi path="/cufl/#cufl-contacts" name="Contacts"  animate={props.slideIn} duration="slidein006"/>
                        <NavLi path="/cufl/#cufl-club-guide" name="Club Guide"  animate={props.slideIn} duration="slidein007"/>
                        <NavLi path="/cufl/#cufl-team-sheet" name="Team Sheet"  animate={props.slideIn} duration="slidein002"/>
                        <NavLi path="/cufl/#cufl-referee" name="Referees"  animate={props.slideIn} duration="slidein002"/>
                        <NavLi path="/latest-news" name="Latest News"  animate={props.slideIn} duration="slidein002"/>
                    </ul>
                
            </li>
        </ul>
    );
}

export default CuflNav;
