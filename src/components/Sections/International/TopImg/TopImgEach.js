import React from "react";
import sample from "../../../../assets/images/jeffrey.jpg";
import classes from "./IntlTopImg.module.css";

function EachImg () {

    return(
        
        <div className={classes.International__imagesBox}><img className={classes.International__imagesBoxImg}src={sample} alt="sample" /></div>
            
   
    );
}



export default EachImg;