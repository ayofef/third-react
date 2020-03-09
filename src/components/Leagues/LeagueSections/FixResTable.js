import React from "react";
import { Link } from "react-router-dom";



function FixResTable (props) {
    
   

    return(

        <section className="fixandstandings-navigation">
            <nav className="fixandstandings-navigation__nav">
                <ul>
                    <li className={ props.active === true ? "fixandstandings-navigation__active" : ""} onClick={ props.Fclicked }>
                        <Link to={`/cufl/leagues/${props.slug}/fixtures-result`} 
                            className={["fixandstandings-navigation__link",
                                    `${props.active === true ? "fixandstandings-navigation__active--link" : ""}`].join(" ")}>
                                Fixtures / Results
                        </Link>
                    </li>


                    <li className={ props.active === false ? "fixandstandings-navigation__active" : ""} onClick={ props.Sclicked }>
                        <Link to={`/cufl/leagues/${props.slug}/standings`} 
                            className={["fixandstandings-navigation__link",
                            `${props.active === false ? "fixandstandings-navigation__active--link" : ""}`].join(" ")}>
                            Standings
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>


    );
}


export default FixResTable;
