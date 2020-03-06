import React from "react";


function LatestImage (props) {

   
    return(

        <section className="latest-fixtures">
            <div className="next-up-fixtures">
                {props.children}
            </div>
        </section>


    );
}


export default LatestImage;