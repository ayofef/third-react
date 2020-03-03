import React from "react";

import Masthead from "../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../components/Ui/Footer/Footer";


const Wscai = (props) => {


    return(
        <React.Fragment>
            <Masthead identifier={"wscai-nav"}/>
                <div className="u-heading">
                    
                    This is CUFL
                    
                </div>
            <Footer 
            page="wscai"
            activeCufl=""
            activeIufu=""
            activeCfai=""
            activeWscai="fcard-active"
            />
        </React.Fragment>
    );
}

export default Wscai;
