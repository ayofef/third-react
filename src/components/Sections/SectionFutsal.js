import React from "react";
import sprite from "../../assets/images/sprite.svg";



function SectionFutsal(props) {

    return(

        <section className="futsal" id="cufl-futsul">
            <div className="container">
                <div className="futsal-container">
                    <h2 className="u-heading">FUTSAL</h2>
                    <p className="futsal-container__body-text">2 Teams 5 Players, <br/>Sign Up for CUFL FUTSAL Now!</p>
                    <a href="/futsal-form.html" className="futsal-container__link btn">Sign Up
                    <span><svg className="arrow-button-icon" aria-hidden="true">
                        <use xlinkHref={sprite + "#icon-chevron-right"}></use>
                        </svg>
                    </span>
                    </a>
                </div>
            </div>
        </section>
    );

}

export default SectionFutsal;





