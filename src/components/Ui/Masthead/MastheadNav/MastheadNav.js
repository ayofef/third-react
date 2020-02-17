import React from "react";
import sprite from "../../../../assets/images/sprite.svg";

const MastheadNav = (props) => {


    return(
        <nav className="masthead__nav">
            <ul>
                <li>
                    <a href="#">
                    <svg className="masthead__icon">
                    <use xlinkHref={sprite + "#icon-facebook-with-circle"} />
                    </svg>
                    </a>
                </li>
                
                <li>
                    <a href="#">
                    <svg className="masthead__icon">
                    <use xlinkHref={sprite + "#icon-twitter-with-circle"} />
                    </svg>
                    </a>
                </li>
                                
                <li>
                    <a href="#">
                    <svg className="masthead__icon">
                    <use xlinkHref={sprite + "#icon-instagram-with-circle"} />
                    </svg>
                    </a>
                </li>

                <li>
                    <a href="#">
                    <svg className="masthead__icon">
                    <use xlinkHref={sprite + "#icon-google-with-circle"} />
                    </svg>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default MastheadNav;