import React, { useState, useEffect } from "react";
import {useParams, useHistory }from "react-router-dom";
import Select from 'react-select';
import { useQuery } from "@apollo/react-hooks";



import CuflNav from "../Ui/PageMasthead/CuflNavs/CuflNavs";
import Masthead from "../Ui/PageMasthead/PageMasthead";
import Footer from "../Ui/Footer/Footer"; 
import FixturesBox from "./LeaguesHtml/FixturesHtml/FixturesHtml";
import Loader from "../Ui/Loader/Loader";
import Error from "../Ui/Error/Error";

import Nav from "./LeagueSections/Nav";
import LatestImage from "./LeagueSections/LatestImage";
import Svg from "./LeaguesHtml/FixturesHtml/TextSvg";
import Querys from "./CupsQuerys/cupsFixtures";

function Cups (props){
    let { slug } = useParams();
    let history = useHistory();

    const [nav, setNav] = useState(false);
    const [sort, setSort] = useState({value: slug , label: slug.split("-").join(" ").toUpperCase()});

    const navItem = (url) => {

        const location = url.location.pathname;
        const processedLocation = location.split("/")[1];


        switch (processedLocation) {
            case "cfai":
                return(
                    [
                        {path: "/cfai/cups/perpetual-cup", label: "Perpetual Cup"},
                        {path: "/cfai/cups/challenge-cup", label: "Challenge Cup"},
                        {path: "/cfai/cups/eustace-cup", label: "Eustace Cup"},
                        {path: "/cfai/cups/plate", label: "Plate"},
                        {path: "/cfai/cups/eustace-shield", label: "Eustace Shield"},
                        
                    ]
                )
            case "iufu":
                return(
                    [
                        {path: "/iufu/cups/collingwood-cup", label: "Collingwood Cup"},
                        {path: "/iufu/cups/harding-cup", label: "Harding Cup"},
                        {path: "/iufu/cups/duggan-cup", label: "Duggan Cup"},
                        {path: "/iufu/cups/crowley-cup", label: "Crowley Cup"},
                        {path: "/iufu/cups/####", label: "####"},
                        
                    ]
                )
            case "wscai":
                return(
                    [
                        {path: "/wscai/cups/####", label: "####"},
                        {path: "/wscai/cups/####", label: "####"},
                        {path: "/wscai/cups/####", label: "####"},
                        {path: "/wscai/cups/####", label: "####"},
                        {path: "/wscai/cups/####", label: "####"},
                        
                    ]
                )
            default:
                return null;
        }


    } 

    const handleChange = (selectedOption) => {
        setSort(selectedOption);
        history.push(`/${history.location.pathname.split("/")[1]}/cups/${selectedOption.value}`);
        // setCurrentPage(1);
    }
    const sortOption = () => {
        const matchOptions = navItem(history);

        const processedOptions = matchOptions.map(({label}) => ({value: label.split(" ").join("-").toLowerCase() , label: label.toUpperCase()}))
        
        return processedOptions;
    }

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
    const matchQuery = () => {

        switch (slug) {
            case "perpetual-cup":
                return Querys.perpetualCup;
            case "challenge-cup":
                return Querys.challengeCup;
            case "eustace-cup":
                return Querys.eustaceCup;
            case "eustace-shield":
                return Querys.eustaceShield;
            case "plate":
                return Querys.plate;
        
            default:
                return null;
        }
    }

    const matchData = () => {
        switch (slug) {
            case "perpetual-cup":
                return {
                    allFixtures: data.cfaiPerpetualCupFixtureses,
                    semiFinal: data.cfaiPerpetualCupSemiFinalFixtureses,
                    quaterFinal: data.cfaiPerpetualCupQuarterFinalFixtureses,
                    final: data.cfaiPerpetualCupFinalFixtureses
                }
            case "challenge-cup":
                return {
                    allFixtures: data.cfaiChallengeCupFixtureses,
                    semiFinal: data.cfaiChallengeCupSemiFinalFixtureses,
                    quaterFinal: data.cfaiChallengeCupQuarterFinalFixtureses,
                    final: data.cfaiChallengeCupFinalFixtureses
                }
            case "eustace-cup":
                return {
                    allFixtures: data.cfaiEustaceCupFixtureses,
                    semiFinal: data.cfaiEustaceCupSemiFinalFixtureses,
                    quaterFinal: data.cfaiEustaceCupQuarterFinalFixtureses,
                    final: data.cfaiEustaceCupFinalFixtureses
                }
            case "eustace-shield":
                return {
                    allFixtures: data.cfaiEustaceShieldFixtureses,
                    semiFinal: data.cfaiEustaceShieldSemiFinalFixtureses,
                    quaterFinal: data.cfaiEustaceShieldQuarterFinalFixtureses,
                    final: data.cfaiEustaceShieldFinalFixtureses
                }
            case "plate":
                return {
                    allFixtures: data.cfaiPlateCupFixtureses,
                    semiFinal: data.cfaiPlateCupSemiFinalFixtureses,
                    quaterFinal: data.cfaiPlateCupQuarterFinalFixtureses,
                    final: data.cfaiPlateCupFinalFixtureses
                }
        
            default:
                return null
        }
    }

    const { loading, error, data } = useQuery(matchQuery());
    

    if (loading) return <Loader /> ;
    if (error) return <Error />;
    
    console.log(props, data, matchData().allFixtures)

    const gotData = matchData();

    return(
        <React.Fragment>
        <Masthead identifier={"cufl-nav"} default={nav} changed={() => setNav(!nav)}>
                <CuflNav clicked={() => setNav(!nav)}/>
            </Masthead>
        <div className="container">
            <div className="league-main-content">
                <div className="league-container">
                    <Nav navItem={navItem(history)}/>
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
                            options={sortOption()}
                            value={sort}
                            onChange={handleChange}
                        />
                    </div>
                    {
                        gotData.final && gotData.final.length >= 1 ? <FixturesBox whose="Final" perPage={2} data={gotData.final} /> : null
                    }
                    {
                        gotData.semiFinal && gotData.semiFinal.length >= 1 ? <FixturesBox whose="Semi-Final" perPage={2} data={gotData.semiFinal} /> : null
                    }
                    {
                        gotData.quaterFinal && gotData.quaterFinal.length >= 1 ? <FixturesBox whose="Quarter-Final" perPage={2} data={gotData.quaterFinal} /> : null
                    }
                    {
                        gotData && (gotData.final.length < 1 || 
                        gotData.quaterFinal.length < 1 ||
                        gotData.semiFinal.length < 1) ?
                            <FixturesBox whose="Fixtures and Results" perPage={10} data={gotData.allFixtures} /> : null
                    }
                </div>
            </div>
        </div>
        <Footer page="" activeCfai="" activeWscai="" activeIufu="" activeCufl=""/>
        </React.Fragment>
    

    );
}

export default Cups;