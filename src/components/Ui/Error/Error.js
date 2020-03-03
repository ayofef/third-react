import React from "react";
import { Link } from "react-router-dom";
import error from "../../../assets/images/error.svg";
import Footer from "../Footer/Footer";
import EmptyMast from "../Masthead/EmptyMast";



function Error() {


    return(
        <React.Fragment>
            <EmptyMast />
                <div className="error-box">
                        <div className="error-box__img">
                            <img src={error} alt="Third level football error Ui"/>
                        </div>
                        <div className="error-box__text">
                            <div className="u-heading">Uh Oh Something Went Wrong..</div>
                            <p className="u-paragraph">Please Check your Internet Connection or Try Again</p>
                            <Link to="/" className={["error-box__link", "btn"].join(" ")}>Go Bach Home</Link>
                        </div>

                </div>
            <Footer page="" activeCfai="" activeWscai="" activeIufu="" activeCufl=""/>
        </React.Fragment>
    );
}


export default Error;