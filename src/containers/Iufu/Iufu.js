import React from "react";

import Masthead from "../../components/Ui/PageMasthead/PageMasthead";
import Footer from "../../components/Ui/Footer/Footer";


const Iufu = (props) => {


    return(
        <React.Fragment>
            <Masthead identifier={"iufu-nav"}/>
                <div className="u-heading">
                    
                    This is CUFL
                    
                </div>
            <Footer 
            page="iufu"
            activeCufl=""
            activeIufu="fcard-active"
            activeCfai=""
            activeWscai=""
            />
        </React.Fragment>
    );
}

export default Iufu;
