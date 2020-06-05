import React from "react";
import { useHistory } from "react-router-dom";


import error from "../../../../assets/images/error.svg";



function SearchError() {

    const history = useHistory();

    // useEffect(() =>{
    //     setTimeout(() => {
    //         history.push("/latest-news")
    //     }, 5000);
    // })


    return(

                <div className="error-box">
                        <div className="error-box__img">
                            <img src={error} alt="Third level football error Ui"/>
                        </div>
                        <div className="error-box__text">
                            <div className="u-heading"></div>
                            <div className="error-box__text">
                                <div className="u-heading"><span  role="img" aria-label="sad face">&#128530;</span> No results found..</div>
                                <p className="u-paragraph"></p>
                                <i onClick={() => history.goBack()} className={["error-box__link", "errBtn"].join(" ")}>Latest News</i>
                            </div>
                        </div>
                </div>

    );
}


export default SearchError;