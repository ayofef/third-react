import React from "react";
import MastheadHome from "./MastheadHome/MastheadHome";
import MastheadNav from "./MastheadNav/MastheadNav";

const Masthead = (props) => {


    return(
        <React.Fragment>
            <div className="container2">
                <div className="landing-masthead">
                    <MastheadHome />
                    <MastheadNav  />
                </div>
            </div>
        </React.Fragment>
    );

}

export default Masthead;





