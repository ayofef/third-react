import React from 'react';
import GraphImg from "graphcms-image";
import "./GridItem.css";


function GridItem(props) {
    
    return(

        <div onClick={props.clicked} className="galleryGrid__item">
            <GraphImg image={props.image} alt={props.imageDesc} maxWidth={800} withWebp={true} fit="max"  SameSite="None" Secure 
        />
        </div>

    );
}

export default GridItem;