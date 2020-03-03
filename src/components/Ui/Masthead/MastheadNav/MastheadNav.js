import React from "react";
import sprite from "../../../../assets/images/sprite.svg";

const MastheadNav = (props) => {


    return(
        <nav className="landing-masthead__nav">
            <ul>
                <li>
                    <a href={props.setFacebook} target="_blank" rel="noopener noreferrer" className="landing-masthead__nav--link">
                    <svg className="landing-masthead__icon">
                    <use xlinkHref={sprite + "#icon-facebook-with-circle"} />
                    </svg>
                    </a>
                </li>
                
                <li>
                    <a href={props.setTwitter} target="_blank" rel="noopener noreferrer" className="landing-masthead__nav--link">
                    <svg className="landing-masthead__icon">
                    <use xlinkHref={sprite + "#icon-twitter-with-circle"} />
                    </svg>
                    </a>
                </li>
                                
                <li>
                    <a href={props.setInstagram} target="_blank" rel="noopener noreferrer" className="landing-masthead__nav--link">
                    <svg className="landing-masthead__icon">
                    <use xlinkHref={sprite + "#icon-instagram-with-circle"} />
                    </svg>
                    </a>
                </li>

                <li>
                    <a href={"mailto:" + props.setEmail} className="landing-masthead__nav--link">
                    <svg className="landing-masthead__icon">
                    <use xlinkHref={sprite + "#icon-google-with-circle"} />
                    </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MastheadNav;