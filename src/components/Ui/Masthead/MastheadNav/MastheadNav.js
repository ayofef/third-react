import React from "react";
import sprite from "../../../../assets/images/sprite.svg";
import youtube from "../../../../assets/images/youtubeSprite.svg";

const MastheadNav = (props) => {


    return(
        <nav className="landing-masthead__nav">
            <ul>
                <li>
                    <a href="https://www.facebook.com/faithirdlevelfootball" target="_blank" rel="noopener noreferrer" className="landing-masthead__nav--link">
                    <svg className="landing-masthead__icon">
                    <use xlinkHref={sprite + "#icon-facebook-with-circle"} />
                    </svg>
                    </a>
                </li>
                
                <li>
                    <a href="https://twitter.com/thirdlevelfootb" target="_blank" rel="noopener noreferrer" className="landing-masthead__nav--link">
                    <svg className="landing-masthead__icon">
                    <use xlinkHref={sprite + "#icon-twitter-with-circle"} />
                    </svg>
                    </a>
                </li>
                                
                <li>
                    <a href="https://www.instagram.com/thirdlevelfootball" target="_blank" rel="noopener noreferrer" className="landing-masthead__nav--link">
                    <svg className="landing-masthead__icon">
                    <use xlinkHref={sprite + "#icon-instagram-with-circle"} />
                    </svg>
                    </a>
                </li>

                <li>
                    <a href="https://www.instagram.com/thirdlevelfootball" target="_blank" rel="noopener noreferrer" className="landing-masthead__nav--link">
                    <svg className="landing-masthead__icon">
                    <use xlinkHref={youtube + "#icon-youtube-with-circle"} />
                    </svg>
                    </a>
                </li>

            </ul>
        </nav>
    );
}

export default MastheadNav;