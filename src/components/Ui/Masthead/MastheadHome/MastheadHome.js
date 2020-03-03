import React from "react";
import { Link } from "react-router-dom";

const MastheadHome = (props) => {


    return(
        <div className="landing-masthead__logo">
            <Link to="/" className="landing-masthead__logo--link">Home</Link>
        </div>
    );

}

export default MastheadHome;