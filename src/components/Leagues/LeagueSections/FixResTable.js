import React from "react";
import { NavLink } from "react-router-dom";



function FixResTable (props) {
    
   

    return(

        <section className="fixandstandings-navigation">
            <nav className="fixandstandings-navigation__nav">
                <ul>
                    <li onClick={ props.Fclicked }>
                        <NavLink 
                            activeStyle={{backgroundColor: "#333", color: "#fff"}}
                            to={`/cufl/leagues/${props.slug}/fixtures-result`} 
                            className={"fixandstandings-navigation__link"}>
                                Fixtures / Results
                        </NavLink>
                    </li>


                    <li  onClick={ props.Sclicked }>
                        <NavLink 
                            activeStyle={{backgroundColor: "#333", color: "#fff"}}
                            to={`/cufl/leagues/${props.slug}/standings`} 
                            className={"fixandstandings-navigation__link"}>
                            Standings
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </section>


    );
}


export default FixResTable;
