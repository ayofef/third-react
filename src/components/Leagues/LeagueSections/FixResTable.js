import React, {useState} from "react";
import { Link } from "react-router-dom";



function LatestImage (props) {
    
   const [active, setActive] = useState(true)

    return(

        <section className="fixandstandings-navigation">
            <nav className="fixandstandings-navigation__nav">
                <ul>
                    <li className={active ? "fixandstandings-navigation__active" : ""} onClick={ active ? () => setActive(active) : () => setActive(!active) }>
                        <Link to={`/cufl/leagues/${props.slug}/fixtures-result`} 
                            className={["fixandstandings-navigation__link",
                                    `${active ? "fixandstandings-navigation__active--link" : ""}`].join(" ")}>
                                Fixtures / Results
                        </Link>
                    </li>


                    <li className={!active ? "fixandstandings-navigation__active" : ""} onClick={ !active ? () => setActive(active) : () => setActive(!active) }>
                        <Link to={`/cufl/leagues/${props.slug}/standings`} 
                            className={["fixandstandings-navigation__link",
                            `${!active ? "fixandstandings-navigation__active--link" : ""}`].join(" ")}>
                            Standings
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>


    );
}


export default LatestImage;