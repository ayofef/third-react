import React from "react";

import Masthead from "../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../components/Ui/Footer/Footer";


const Cfai = (props) => {


    return(
        <React.Fragment>
            <Masthead identifier={"cfai-nav"}/>
                <div className="u-heading">
                    
                    This is CUFL
                    
                </div>
            <Footer 
            page="cfai"
            activeCufl=""
            activeIufu=""
            activeCfai="fcard-active"
            activeWscai=""
            />
        </React.Fragment>
    );
}

export default Cfai;
