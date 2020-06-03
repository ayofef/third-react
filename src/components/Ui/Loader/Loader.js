import React from "react";
import DotLoader from "react-spinners/DotLoader";
import classes from "./Loader.module.css";

function Loader (){

        return(
            <div className={classes.LoaderContainer}>
                <div className={classes.Loader}>
                    <DotLoader
                        css=""
                        size={100}
                        color={"#37474f"}
                        loading={true}
                    />
                </div>
            </div>
        );
}

export default Loader;