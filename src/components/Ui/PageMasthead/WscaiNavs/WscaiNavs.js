import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import NavLi from "../NavLiHtml/NavLiHtml";


function Wscai(props) {


    return(
        <ul className="main-navigation__nav">
            <NavLi path="/latest-news/wscai" name="Latest News" clicken={props.clicked} />
            <NavLi path="/wscai/resources#wscai-club-guide" name="Club Guide" clicken={props.clicked}  />
            <NavLi path="/wscai/resources#wscai-contacts" name="Contacts" clicken={props.clicked}  />
            <NavLi path="/wscai#wscai-committee" name="Committee" clicken={props.clicked}  />

            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <p href="#" className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </p>
                    <ul className="main-navigation__resources--dropdown">
                        <NavLi path="/wscai#wscai-gallery" name="Gallery" />
                        <NavLi path="/wscai#wscai-about" name="About Us"  />
                        <NavLi path="/wscai#wscai-rules" name="Rules"  />
                        <NavLi path="/wscai/resources#wscai-team-sheet" name="Team Sheet"  />
                        <NavLi path="/wscai/resources#wscai-referee" name="Referees"  />
                    </ul>
                
            </li>
        </ul>
    );
}

export default Wscai;
