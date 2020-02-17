import React from "react";
import Aux from "../../../hoc/Auxilliary";
import MastheadHome from "./MastheadHome/MastheadHome";
import MastheadNav from "./MastheadNav/MastheadNav";

const Masthead = (props) => {


    return(
        <Aux>
            <div className="container2">
                <div className="masthead">
                    <MastheadHome />
                    <MastheadNav />
                </div>
            </div>
        </Aux>
    );

}

export default Masthead;





