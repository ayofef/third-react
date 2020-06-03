import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function Iufu(props) {


    return(
        <ul className="main-navigation__nav">
            
            <NavLi path="/iufu#iufu-latest-news" name="Latest News"  clicken={props.clicked} />
            <NavLi path="/iufu/resources#iufu-club-guide" name="Club Guide"  clicken={props.clicked} />
            <NavLi path="/iufu/resources#iufu-contacts" name="Contacts"  clicken={props.clicked} />
            <NavLi path="/iufu#iufu-committee" name="Committee" clicken={props.clicked} />

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <i className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </i>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/iufu#iufu-gallery" name="Gallery" />
                        <NavLi path="/iufu#iufu-about" name="About Us" />
                        <NavLi path="/iufu#iufu-rules" name="Rules" />
                        <NavLi path="/iufu/resources#iufu-team-sheet" name="Team Sheet"  />
                        <NavLi path="/iufu/resources#iufu-referee" name="Referees"  />
                    </ul>
                
            </li>
        </ul>
    );
}

export default Iufu;
