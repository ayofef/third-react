import React from 'react';
import "./GalleryGrid.css";

function GalleryGrid(props) {
    
    return(
        <section className={["gallery", `${props.identifier + "-gallery"}`].join(" ")} id={props.identifier + "-gallery"}>
            <div className="container">
            <h2 className={["u-heading", `${props.identifier + "-heading"}`].join(" ")}>GALLERY</h2>
            </div>
            <div className="galleryGrid">
                {props.children}
            </div>
        </section>
    );
}

export default GalleryGrid;