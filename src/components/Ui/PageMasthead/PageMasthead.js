import React from "react";
import { Link } from "react-router-dom";
import Backdrop from "../Backdrop/Backdrop";
import "./PageMasthead.css";

function PageMasthead (props) {

    return(
        <header className="header">
            <div className="masthead-container">
                <div className="navigation">
                    <div className="navigation__logo">
                        <Link to="/" className="navigation__logo--link">Home</Link>
                    </div>
                    <nav className={"main-navigation " + props.identifier} id="navbar">
                        <div className="container">
                            <Backdrop show={props.default}  clicked={props.changed}/>
                                <input type="checkbox" className="main-navigation__checkbox" id="navi-toggle" checked={props.default} readOnly/>
                                <label htmlFor="navi-toggle" className="main-navigation__button" onClick={props.changed}>
                                    <span className="main-navigation__hamburger"></span>
                                </label>
                                <div className={ props.default ? "main-navigation-box responsive-masthed" : "main-navigation-box"}>
                                    {props.children}
                                </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );

}

export default PageMasthead;