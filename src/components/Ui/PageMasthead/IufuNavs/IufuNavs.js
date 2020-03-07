import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function Iufu(props) {


    return(
        <ul className="main-navigation__nav">
            <NavLi path="/iufu/#iufu-about" name="About Us" clicken={props.clicked}/>
            <NavLi path="/iufu/#iufu-rules" name="Rules" clicken={props.clicked}/>
            <NavLi path="/iufu/#iufu-leagues" name="Leagues" clicken={props.clicked}/>
            <NavLi path="/iufu/#iufu-committee" name="Committee" clicken={props.clicked}/>

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <p href="#" className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </p>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/iufu/#iufu-contacts" name="Contacts" />
                        <NavLi path="/iufu/#iufu-club-guide" name="Club Guide" />
                        <NavLi path="/iufu/#iufu-team-sheet" name="Team Sheet" />
                        <NavLi path="/iufu/#iufu-referee" name="Referees" />
                        <NavLi path="/blog" name="Blog" />
                    </ul>
                
            </li>
        </ul>
    );
}

export default Iufu;
