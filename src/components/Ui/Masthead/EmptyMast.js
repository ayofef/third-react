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
                        <MastheadNav 
                            setFacebook={props.facebook}
                            setTwitter={props.twitter}
                            setInstagram={props.instagram}
                            setEmail={props.email}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );

}

export default Empty;





