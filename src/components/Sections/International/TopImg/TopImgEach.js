import React from "react";
import GraphImg from "graphcms-image";
import classes from "./IntlTopImg.module.css";

function EachImg (props) {

    return(
        
        <div className={classes.International__imagesBox} >
            <GraphImg image={props.image} alt={props.imageDesc} maxWidth={800} withWebp={true} fit="max" className={classes.International__imagesBoxImg} SameSite="None" Secure/>
        </div>
            
   
    );
}



export default EachImg;