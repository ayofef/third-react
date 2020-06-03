import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function Cfai(props) {


    return(
        <ul className="main-navigation__nav">
            <NavLi path="/cfai#cfai-latest-news" name="Latest News" clicken={props.clicked} />
            <NavLi path="/cfai/resources#cfai-club-guide" name="Club Guide" clicken={props.clicked} />
            <NavLi path="/cfai/resources#cfai-contacts" name="Contacts" clicken={props.clicked} />
            <NavLi path="/cfai#cfai-committee" name="Committee" clicken={props.clicked} />
            

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <i className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </i>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/cfai#cfai-gallery" name="Gallery" /> 
                        <NavLi path="/cfai#cfai-about" name="About Us" />
                        <NavLi path="/cfai#cfai-rules" name="Rules" />
                        <NavLi path="/cfai/resources#cfai-team-sheet" name="Team Sheet" />
                        <NavLi path="/cfai/resources#cfai-referee" name="Referees" />
                    </ul>
                    
            </li>
        </ul>
    );
}

export default Cfai;
