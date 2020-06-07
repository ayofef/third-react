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


    const navItem = [
        {path: "/cufl/leagues/premier-division", label: "Premier Division"},
        {path: "/cufl/leagues/division-one", label: "Division 1"},
        {path: "/cufl/leagues/division-two", label: "Division 2"},
        {path: "/cufl/leagues/division-three", label: "Division 3"},
        {path: "/cufl/leagues/division-four", label: "Division 4"},
        
    ]



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
    

    const icon = () => {

        switch (slug) {
            case "premier-division":
                return Svg.prem;
            case "division-one":
                return Svg.d1;
            case "division-two":
                return Svg.d2;
            case "division-three":
                return Svg.d3;
            case "division-four":
                return Svg.d4;
        
            default:
                return null;
        }
    };



    
    
    // console.log(props)
    return(
        <React.Fragment>
        <Masthead identifier={"cufl-nav"} default={nav} changed={() => setNav(!nav)}>
                <CuflNav clicked={() => setNav(!nav)}/>
            </Masthead>
        <div className="container">
            <div className="league-main-content">
                <div className="league-container">
                    <Nav navItem={navItem} />
                    <LatestImage>
                        <div>{icon()}
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