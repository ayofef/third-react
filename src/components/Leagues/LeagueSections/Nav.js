import React from "react";
import {NavLink} from "react-router-dom";



function LeagueNav (props) {
    

    return(

        <section className="subnav" id="navbar">
            <nav className="subnav__nav">
                <div id="nav-box">
                    <ul className="subnav__list">
                        <li><NavLink to="/cufl/leagues/premier-division" activeClassName="subnav__active--link"  className="subnav__li subnav__links" onClick={props.prem}>Premier Division</NavLink></li>
                        <li><NavLink to="/cufl/leagues/division-one" activeClassName="subnav__active--link" className="subnav__li subnav__links" onClick={props.d1}>Division 1</NavLink></li>
                        <li><NavLink to="/cufl/leagues/division-two" activeClassName="subnav__active--link" className="subnav__li subnav__links" onClick={props.d2}>Division 2</NavLink></li>
                        <li><NavLink to="/cufl/leagues/division-three" activeClassName="subnav__active--link" className="subnav__li subnav__links" onClick={props.d3}>Division 3</NavLink></li>
                        <li><NavLink to="/cufl/leagues/division-four" activeClassName="subnav__active--link" className="subnav__li subnav__links" onClick={props.d4}>Division 4</NavLink></li>
                    </ul>
                </div>
            </nav>
        </section>


    );
}


export default LeagueNav;