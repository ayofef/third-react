import React from"react";
import { NavHashLink } from "react-router-hash-link";





function NavLi(props){

    return(
        <li className="main-navigation__nav--item"><NavHashLink to={props.path} className="main-navigation__nav--links" onClick={props.clicken}>{props.name}</NavHashLink></li>
    );


}


export default NavLi;