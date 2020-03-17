import React from "react";
import Image from "./TopImgEach";

import classes from "./IntlTopImg.module.css";


function FlexedImg () {

    return(
        
        <section style={{paddingTop: "5rem"}}>
            <div className="container">
                <div className={classes.International__images}>
                    <Image />
                    <Image />
                    <Image />
                </div>

                <div className="">
                    <h1 className="u-heading cufl-heading">CUFL International</h1>
                </div>
            </div>
        </section>
                    
    );
}



export default FlexedImg;