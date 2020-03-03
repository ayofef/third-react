import React from "react";
import { Route, Switch, useParams, useLocation }from "react-router-dom";


import Header from "../Ui/PageMasthead/CuflNavs/CuflNavs";
import Masthead from "../Ui/PageMasthead/PageMasthead";
import Footer from "../Ui/Footer/Footer"; 

import Nav from "./LeagueSections/Nav";
import LatestImage from "./LeagueSections/LatestImage";
import SubNav from "./LeagueSections/FixResTable";
import Fixtures from "./LeagueSections/Fixtures";
import Standings from "./LeagueSections/Standings";




function League (props){

    let { slug } = useParams();
    
    console.log(props)

    let match = useLocation();

    return(
        <React.Fragment>
        <Masthead> <Header /> </Masthead>
        <div className="container">
            <div className="league-main-content">
                <div className="league-container">
                    <Nav />
                    <LatestImage />
                    <SubNav slug={slug} match={match.pathname}/>

                    <Switch>
                        <Route path="/cufl/leagues" exact component ={Fixtures} />
                        <Route path={`/cufl/leagues/${slug}`} exact component ={Fixtures} />
                        <Route path={`/cufl/leagues/${slug}/fixtures-result`} exact component ={Fixtures} />
                        <Route path={`/cufl/leagues/${slug}/standings`} exact component ={Standings} />
                    </Switch>           
                </div>
            </div>
        </div>
        <Footer page="" activeCfai="" activeWscai="" activeIufu="" activeCufl=""/>
        </React.Fragment>
    

    );
}

export default League;