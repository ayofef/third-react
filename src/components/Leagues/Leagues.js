import React, { useState, useEffect } from "react";
import { Route, Switch, useParams }from "react-router-dom";



import CuflNav from "../Ui/PageMasthead/CuflNavs/CuflNavs";
import Masthead from "../Ui/PageMasthead/PageMasthead";
import Footer from "../Ui/Footer/Footer"; 

import Nav from "./LeagueSections/Nav";
import LatestImage from "./LeagueSections/LatestImage";
import SubNav from "./LeagueSections/FixResTable";
import Fixtures from "./LeagueSections/Fixtures";
import Standings from "./LeagueSections/Standings";
import Svg from "./LeaguesHtml/FixturesHtml/TextSvg";


function League (){
    const [nav, setNav] = useState(false);
    const [active, setActive] = useState();

    let { slug } = useParams();


    let icon;

    if(slug === "premier-division"){
        icon = Svg.prem
    }else if(slug === "division-one"){
        icon = Svg.d1
    }
    else if(slug === "division-two"){
        icon = Svg.d2
    }else if(slug === "division-three"){
        icon = Svg.d3
    }else if(slug === "division-four"){
        icon = Svg.d4
    }

    useEffect(() => {
        setActive(true);

      }, [slug]);
    
    
    return(
        <React.Fragment>
        <Masthead identifier={"cufl-nav"} default={nav} changed={() => setNav(!nav)}>
                <CuflNav clicked={() => setNav(!nav)}/>
            </Masthead>
        <div className="container">
            <div className="league-main-content">
                <div className="league-container">
                    <Nav />
                    <LatestImage>
                        <div>{icon}
                        </div>
                    </LatestImage>
                    <SubNav slug={slug} 
                            Fclicked={active ? () => setActive(active) : () => setActive(!active)} 
                            Sclicked={!active ? () => setActive(active) : () => setActive(!active)} 
                            active={active}/>

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