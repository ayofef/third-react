import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import PropTypes from "prop-types";


import Cfai from "../../../assets/images/logo/cfai.png";
import Wscai from "../../../assets/images/logo/wscai.png";
import Fai from "../../../assets/images/fai.png";

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
                            <li><HashLink to="/cufl#cufl-rules" className="fcard__link">Rules</HashLink></li>
                            <li><HashLink to="/cufl#cufl-leagues" className="fcard__link">Leagues</HashLink></li>
                            <li><HashLink to="/cufl#cufl-committee" className="fcard__link">Committee</HashLink></li>
                            <li><HashLink to="/cufl#cufl-gallery" className="fcard__link">Gallery</HashLink></li>
                            <li><HashLink to="/cufl/resources" className="fcard__link">Resources</HashLink></li>
                            <li><HashLink to="/latest-news" className="fcard__link">Latest News</HashLink></li>
                        </ul>
                    </div>
                    <div className={"fcard " + props.activeCfai}>
                        <Link to="/cfai" className="fcard__heading">CFAI</Link>
                        <ul className="fcard__list">
                            <li><HashLink to="/cfai#cfai-about" className="fcard__link">About Us</HashLink></li>
                            <li><HashLink to="/cfai#cfai-rules" className="fcard__link">Rules</HashLink></li>
                            <li><HashLink to="/cufl#cufl-leagues" className="fcard__link">Cups</HashLink></li>
                            <li><HashLink to="/cfai#cfai-committee" className="fcard__link">Committee</HashLink></li>
                            <li><HashLink to="/cfai#cfai-gallery" className="fcard__link">Gallery</HashLink></li>
                            <li><HashLink to="/cfai/resources" className="fcard__link">Resources</HashLink></li>
                            <li><HashLink to="/latest-news" className="fcard__link">Latest News</HashLink></li>
                        </ul>
                    </div>
                    <div className={"fcard " + props.activeIufu}>
                        <Link to="/iufu" className="fcard__heading">IUFU</Link>
                        <ul className="fcard__list">
                            <li><HashLink to="/iufu#iufu-about" className="fcard__link">About Us</HashLink></li>
                            <li><HashLink to="/iufu#iufu-rules" className="fcard__link">Rules</HashLink></li>
                            <li><HashLink to="/cufl#cufl-leagues" className="fcard__link">Cups</HashLink></li>
                            <li><HashLink to="/iufu#iufu-committee" className="fcard__link">Committee</HashLink></li>
                            <li><HashLink to="/iufu#iufu-gallery" className="fcard__link">Gallery</HashLink></li>
                            <li><HashLink to="/iufu/resources" className="fcard__link">Resources</HashLink></li>
                            <li><HashLink to="/latest-news" className="fcard__link">Latest News</HashLink></li>
                        </ul>
                    </div>
                    <div className={"fcard " + props.activeWscai}>
                        <Link to="/wscai" className="fcard__heading ">WSCAI</Link>
                        <ul className="fcard__list">
                            <li><HashLink to="/wscai#wscai-about" className="fcard__link">About Us</HashLink></li>
                            <li><HashLink to="/wscai#wscai-rules" className="fcard__link">Rules</HashLink></li>
                            <li><HashLink to="/cufl#cufl-leagues" className="fcard__link">Cups</HashLink></li>
                            <li><HashLink to="/wscai#wscai-committee" className="fcard__link">Committee</HashLink></li>
                            <li><HashLink to="/wscai#wscai-gallery" className="fcard__link">Gallery</HashLink></li>
                            <li><HashLink to="/wscai/resources" className="fcard__link">Resources</HashLink></li>
                            <li><HashLink to="/latest-news" className="fcard__link">Latest News</HashLink></li>
                        </ul>
                    </div>
                    
                </div>
                <div className="footer__content">
                    <div className="footer__content--img-box">
                        <img src={Fai} alt="Fai's Logo" className="footer__content--img"/>
                        <img src={Cfai} alt="Fai's Logo" className="footer__content--img"/>
                        <img src={Fai} alt="Fai's Logo" className="footer__content--img footer__content--img-Dominant"/>
                        <img src={Fai} alt="Fai's Logo" className="footer__content--img"/>
                        <img src={Wscai} alt="Fai's Logo" className="footer__content--img"/>
                    </div>
                    <Link to="/data-policies" className="footer__content--link">Legal & Privacy</Link>
                    <p className="footer__content--text">
                        COPYRIGHT &copy; <span>{thisYear}</span>
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