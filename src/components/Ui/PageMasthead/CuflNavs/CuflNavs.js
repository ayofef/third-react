import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function CuflNav(props) {


    return(
        <ul className="main-navigation__nav">
            <NavLi path="/cufl#cufl-latest-news" name="Latest News"  clicken={props.clicked} />
            <NavLi path="/cufl#cufl-leagues" name="Leagues" clicken={props.clicked} />
            <NavLi path="/cufl#cufl-international" name="Intl. Team"  clicken={props.clicked} />
            <NavLi path="/cufl/resources#cufl-club-guide" name="Club Guide"  clicken={props.clicked} />

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <i className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </i>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/cufl/resources#cufl-contacts" name="Contacts"  />
                        <NavLi path="/cufl#cufl-futsul" name="Futsal"  />
                        <NavLi path="/cufl#cufl-gallery" name="Gallery" />
                        <NavLi path="/cufl#cufl-about" name="About Us" />
                        <NavLi path="/cufl#cufl-rules" name="Rules" />
                        <NavLi path="/cufl/resources#cufl-team-sheet" name="Team Sheet"  />
                        <NavLi path="/cufl#cufl-committee" name="Committee" />
                        <NavLi path="/cufl/resources#cufl-referee" name="Referees"  />
                    </ul>
                
            </li>
        </ul>
    );
}

export default CuflNav;
