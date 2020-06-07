import React from "react";
import {NavLink} from "react-router-dom";



function LeagueNav (props) {
    


    return(

        <section className="subnav" id="navbar">
            <nav className="subnav__nav">
                <div id="nav-box">
                    <ul className="subnav__list">
                        {
                            props.navItem && props.navItem.map(({path, label}, index) => (
                                <li key={index}>
                                    <NavLink 
                                        to={path}
                                        activeClassName="subnav__active--link"  
                                        className="subnav__li subnav__links">
                                            {label}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </section>


    );
}


export default LeagueNav;