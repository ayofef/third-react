import React from "react";
import sprite from "../../../assets/images/sprite.svg";
import classes from "./EmptyArray.module.css";

function EmptyArray() {

    return(
        <div>
            <p className={classes.emptyArrayText}>
                <span className={classes.emptyArrayTextSpan}>
                    <svg className="download-button-icon">
                        <use xlinkHref={sprite + "#icon-notification"}></use>
                    </svg>
                </span> Sorry, Content Unavailable
            </p>
        </div>
    )
}

export default EmptyArray;