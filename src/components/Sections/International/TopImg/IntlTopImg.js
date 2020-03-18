import React from "react";

import classes from "./IntlTopImg.module.css";


function FlexedImg (props) {

    return(
        
        <section style={{paddingTop: "5rem"}}>
            <div className="container">
                <div className={classes.International__images}>
                   {props.children}
                </div>
            </div>
        </section>
                    
    );
}



export default FlexedImg;