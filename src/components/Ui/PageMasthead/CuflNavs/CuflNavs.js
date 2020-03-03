import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import { NavHashLink } from "react-router-hash-link";



function CuflNav(props) {


    return(
        <ul className="main-navigation__nav">
            <li className="main-navigation__nav--item"><NavHashLink to="#cufl-about" className="main-navigation__nav--links" onClick={props.clicked}>About Us</NavHashLink></li>
            <li className="main-navigation__nav--item"><NavHashLink to="#cufl-competition" className="main-navigation__nav--links" onClick={props.clicked}>Competition</NavHashLink></li>
            <li className="main-navigation__nav--item"><NavHashLink to="#cufl-rules" className="main-navigation__nav--links" onClick={props.clicked}>Rules</NavHashLink></li>
            <li className="main-navigation__nav--item"><NavHashLink to="#cufl-leagues" className="main-navigation__nav--links" onClick={props.clicked}>Leagues</NavHashLink></li>
            <li className="main-navigation__nav--item"><NavHashLink to="#cufl-committee" className="main-navigation__nav--links" onClick={props.clicked}>Committee</NavHashLink></li>
   
            <li className="main-navigation__nav--item main-navigation__resources" onClick={props.clicked}>
                <p href="#" className="main-navigation__nav--links d-none-md">More 
                    <span><svg className="main-navigation__resources--icon">
                    <use xlinkHref={sprite + "#icon-chevron-down"}></use></svg></span>                                            
                </p>
                    <ul className="main-navigation__resources--dropdown">
                        <li className="main-navigation__nav--item"><NavHashLink className="main-navigation__nav--links" to="#cufl-international">Intl. Team</NavHashLink></li>
                        <li className="main-navigation__nav--item"><NavHashLink className="main-navigation__nav--links" to="#cufl-futsul">Futsul</NavHashLink></li>
                        <li className="main-navigation__nav--item"><NavHashLink className="main-navigation__nav--links" to="#cufl-contacts">Contacts</NavHashLink></li>
                        <li className="main-navigation__nav--item"><NavHashLink className="main-navigation__nav--links" to="#cufl-club-guide">Club Guide</NavHashLink></li>
                        <li className="main-navigation__nav--item"><NavHashLink className="main-navigation__nav--links" to="#cufl-team-sheet">Team Sheet</NavHashLink></li>
                        <li className="main-navigation__nav--item"><NavHashLink className="main-navigation__nav--links" to="#cufl-referee">Referees</NavHashLink></li>
                        <li className="main-navigation__nav--item"><NavHashLink className="main-navigation__nav--links" to="/cufl-blog">Blog</NavHashLink></li>
                    </ul>
                
            </li>
        </ul>
    );
}

export default CuflNav
