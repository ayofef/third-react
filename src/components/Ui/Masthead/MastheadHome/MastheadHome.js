import React from "react";
import { Link } from "react-router-dom";

const MastheadHome = (props) => {


    return(
        <div className="masthead__logo">
            <Link to="/index">Home</Link>
        </div>
    );

}

export default MastheadHome;