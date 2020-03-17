import React from "react";
import MastheadHome from "./MastheadHome/MastheadHome";
import MastheadNav from "./MastheadNav/MastheadNav";

const Empty = (props) => {


    return(
        <React.Fragment>
            
            <div className="emptymast">
                <div className="container">
                    <div className="landing-masthead">
                        <MastheadHome />
                        <MastheadNav  />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Empty;





