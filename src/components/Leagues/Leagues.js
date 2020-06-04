import React, { useState, useEffect } from "react";
import { Route, Switch, useParams, useHistory }from "react-router-dom";
import Select from 'react-select';



import CuflNav from "../Ui/PageMasthead/CuflNavs/CuflNavs";
import Masthead from "../Ui/PageMasthead/PageMasthead";
import Footer from "../Ui/Footer/Footer"; 

import Nav from "./LeagueSections/Nav";
import LatestImage from "./LeagueSections/LatestImage";
import SubNav from "./LeagueSections/FixResTable";
import Fixtures from "./LeagueSections/Fixtures";
import Standings from "./LeagueSections/Standings";
import Svg from "./LeaguesHtml/FixturesHtml/TextSvg";


function League (props){
    let { slug } = useParams();
    let history = useHistory();

    const [nav, setNav] = useState(false);
    const [sort, setSort] = useState({value: slug , label: slug.split("-").join(" ").toUpperCase()});

    // let { slug } = useParams();

    console.log(sort)
    const handleChange = (selectedOption) => {
        setSort(selectedOption);
        history.push(`/cufl/leagues/${selectedOption.value}`);
        // setCurrentPage(1);
    }
    const sortOption = [
        {value: "premier-division" , label: "PREMIER DIVISION"},
        {value: "division-one" , label: "DIVISION ONE"},
        {value: "division-two" , label: "DIVISION TWO"},
        {value: "division-three" , label: "DIVISION THREE"},
        {value: "division-four" , label: "DIVISION FOUR"},
    ];

    /* MAKING SURE SUBNAV IS SYNCING WITH SELECT VALUE */

    useEffect(() => {
        setSort({value: slug , label: slug.split("-").join(" ").toUpperCase()})
    },[slug])
    /* MAKING SURE SUBNAV IS SYNCING WITH SELECT VALUE */
    

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

    
    
    console.log(props)
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
                    <div className="leagueSelect">
                        <Select
                            className="basic-single"
                            classNamePrefix="select"
                            defaultValue={sort}
                            isDisabled={false}
                            isLoading={false}
                            isClearable={false}
                            isRtl={false}
                            isSearchable={false}
                            name="color"
                            options={sortOption}
                            value={sort}
                            onChange={handleChange}
                        />
                        <SubNav slug={slug} />
                    </div>

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