import React from "react";
import error from "../../../../assets/images/error.svg";



function ErrorMini() {


    return(

                <div className="error-box">
                        <div className="error-box__img">
                            <img src={error} alt="Third level football error Ui"/>
                        </div>
                        <div className="error-box__text">
                            <div className="u-heading">Uh Oh Something Went Wrong..</div>
                            <p className="u-paragraph">Please Check your Internet Connection or Try Again</p>
                        </div>
                </div>

    );
}


export default ErrorMini;