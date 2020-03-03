import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Fai from "../../../assets/images/fai.png";
import PropTypes from "prop-types";


function footer (props) {

    let today = new Date();
    let thisYear = today.getFullYear();

    return(
        <React.Fragment>
            <footer className={"footer footer-"+ props.page}>
            <div className="container">
                <div className="footer__box">
                    <div className={"fcard " + props.activeCufl}>
                        <Link to="/cufl" className="fcard__heading">CUFL</Link>
                        <ul className="fcard__list">
                            <li><HashLink to="/cufl#cufl-about" className="fcard__link">About Us</HashLink></li>
                            <li><HashLink to="/cufl#cufl-competition" className="fcard__link">Competition</HashLink></li>
                            <li><HashLink to="/cufl#cufl-rules" className="fcard__link">Rules</HashLink></li>
                            <li><HashLink to="/cufl#cufl-leagues" className="fcard__link">Leagues</HashLink></li>
                            <li><HashLink to="/cufl#cufl-committee" className="fcard__link">Committee</HashLink></li>
                            <li><HashLink to="/cufl#cufl-resources" className="fcard__link">Resources</HashLink></li>
                        </ul>
                    </div>
                    <div className={"fcard " + props.activeCfai}>
                        <Link to="/cfai" className="fcard__heading">CFAI</Link>
                        <ul className="fcard__list">
                            <li><HashLink to="/cfai#cfai-about" className="fcard__link">About Us</HashLink></li>
                            <li><HashLink to="/cfai#cfai-competition" className="fcard__link">Competition</HashLink></li>
                            <li><HashLink to="/cfai#cfai-rules" className="fcard__link">Rules</HashLink></li>
                            <li><HashLink to="/cfai#cfai-committee" className="fcard__link">Committee</HashLink></li>
                            <li><HashLink to="/cfai#cfai-resources" className="fcard__link">Resources</HashLink></li>
                        </ul>
                    </div>
                    <div className={"fcard " + props.activeIufu}>
                        <Link to="/iufu" className="fcard__heading">IUFU</Link>
                        <ul className="fcard__list">
                            <li><HashLink to="/iufu#iufu-about" className="fcard__link">About Us</HashLink></li>
                            <li><HashLink to="/iufu#iufu-competition" className="fcard__link">Competition</HashLink></li>
                            <li><HashLink to="/iufu#iufu-rules" className="fcard__link">Rules</HashLink></li>
                            <li><HashLink to="/iufu#iufu-committee" className="fcard__link">Committee</HashLink></li>
                            <li><HashLink to="/iufu#iufu-resources" className="fcard__link">Resources</HashLink></li>
                        </ul>
                    </div>
                    <div className={"fcard " + props.activeWscai}>
                        <Link to="/wscai" className="fcard__heading ">WSCAI</Link>
                        <ul className="fcard__list">
                            <li><HashLink to="/wscai#wscai-about" className="fcard__link">About Us</HashLink></li>
                            <li><HashLink to="/wscai#wscai-competition" className="fcard__link">Competition</HashLink></li>
                            <li><HashLink to="/wscai#wscai-rules" className="fcard__link">Rules</HashLink></li>
                            <li><HashLink to="/wscai#wscai-committee" className="fcard__link">Committee</HashLink></li>
                            <li><HashLink to="/wscai#wscai-resources" className="fcard__link">Resources</HashLink></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="footer__content">
                    <img src={Fai} alt="Fai's Logo" className="footer__content--img"/>
                    <Link to="/data-policies" className="footer__content--link">Legal & Privacy</Link>
                    <p className="footer__content--text">
                        COPYRIGHT &copy; <span>{thisYear}</span>, CUFL
                    </p>
                </div>
            </div>
            </footer>
        </React.Fragment>
    );
}


footer.propTypes ={
    page: PropTypes.string.isRequired,
    activeCfai: PropTypes.string.isRequired,
    activeCufl: PropTypes.string.isRequired,
    activeIufu: PropTypes.string.isRequired,
    activeWscai: PropTypes.string.isRequired

}

export default footer