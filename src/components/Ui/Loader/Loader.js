import React from "react";
import classes from "./Loader.module.css";

function Loader (){

        return(
            <div className={classes.LoaderContainer}>
                <div className={classes.Loader}></div>
            </div>
        );
}

export default Loader;