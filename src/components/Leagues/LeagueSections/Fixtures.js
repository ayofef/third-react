import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useLocation } from "react-router-dom";
import Loader from "../../Ui/Loader/Loader";
import ErrorMini from "../../Ui/Error/ErrorMini/ErrorMini";
import FixturesBox from "../LeaguesHtml/FixturesHtml/FixturesHtml";
import FinSemiQuart from "./finalSemiQuarter";



import fixturesQuery from "../LeaguesQuerys/CuflFixtures";

function Fixtures () {

    const location = useLocation();
    let matched;

    /* MATCHING QUERY {} WITH LOCATION */
    if((location.pathname === "/cufl/leagues/premier-division") || (location.pathname === "/cufl/leagues/premier-division/fixtures-result")){
      matched = fixturesQuery.premierDivision
    }else if((location.pathname === "/cufl/leagues/division-one") || (location.pathname === "/cufl/leagues/division-one/fixtures-result")){
        matched = fixturesQuery.divisionOne
    }else if((location.pathname === "/cufl/leagues/division-two") || (location.pathname === "/cufl/leagues/division-two/fixtures-result")){
        matched = fixturesQuery.divisionTwo
    }else if((location.pathname === "/cufl/leagues/division-three") || (location.pathname === "/cufl/leagues/division-three/fixtures-result")){
        matched = fixturesQuery.divisionThree
    }else if((location.pathname === "/cufl/leagues/division-four") || (location.pathname === "/cufl/leagues/division-four/fixtures-result")){
        matched = fixturesQuery.divisionFour
    }
    /* MATCHING QUERY {} WITH LOCATION */
    

    const { loading, error, data } = useQuery(matched);
    

    if (loading) return <Loader /> ;
    if (error) return <ErrorMini />;  
    
   
    if((location.pathname === "/cufl/leagues/premier-division") || (location.pathname === "/cufl/leagues/premier-division/fixtures-result")){
    
        return(
            <React.Fragment>
                <FinSemiQuart />
                <FixturesBox whose="North Premier Division" perPage={3} data={data.cuflNorthPremierDivisionFixtureses} />
                <FixturesBox whose="South Premier Division" perPage={3} data={data.cuflSouthPremierDivisionFixtureses} />
            </React.Fragment>
    
    
        );

    }else if((location.pathname === "/cufl/leagues/division-one") || (location.pathname === "/cufl/leagues/division-one/fixtures-result")){

        return (
            <React.Fragment>
                <FinSemiQuart />
                <FixturesBox whose="Group A" perPage={3} data={data.cuflDivisionOneGroupAFixtureses} />
                <FixturesBox whose="Group B" perPage={3} data={data.cuflDivisionOneGroupBFixtureses} />
                <FixturesBox whose="Group C" perPage={3} data={data.cuflDivisionOneGroupCFixtureses} />
                <FixturesBox whose="Group D" perPage={3} data={data.cuflDivisionOneGroupDFixtureses} />
            </ React.Fragment>
        
        
        );

    }else if((location.pathname === "/cufl/leagues/division-two") || (location.pathname === "/cufl/leagues/division-two/fixtures-result")){

        return (
            <React.Fragment>
                <FinSemiQuart />
                <FixturesBox whose="Group A" perPage={3} data={data.cuflDivisionTwoGroupAFixtureses} />
                <FixturesBox whose="Group B" perPage={3} data={data.cuflDivisionTwoGroupBFixtureses} />
                <FixturesBox whose="Group C" perPage={3} data={data.cuflDivisionTwoGroupCFixtureses} />
                <FixturesBox whose="Group D" perPage={3} data={data.cuflDivisionTwoGroupDFixtureses} />
            </ React.Fragment>
        
        
        );

    }else if((location.pathname === "/cufl/leagues/division-three") || (location.pathname === "/cufl/leagues/division-three/fixtures-result")){

        return (
            <React.Fragment>
                <FinSemiQuart />
                <FixturesBox whose="Group A" perPage={3} data={data.cuflDivisionThreeGroupAFixtureses} />
                <FixturesBox whose="Group B" perPage={3} data={data.cuflDivisionThreeGroupBFixtureses} />
                <FixturesBox whose="Group C" perPage={3} data={data.cuflDivisionThreeGroupCFixtureses} />
                <FixturesBox whose="Group D" perPage={3} data={data.cuflDivisionThreeGroupDFixtureses} />
            </ React.Fragment>
        
        
        );

    }else if((location.pathname === "/cufl/leagues/division-four") || (location.pathname === "/cufl/leagues/division-four/fixtures-result")){

        return (
            <React.Fragment>
                <FinSemiQuart />
                <FixturesBox whose="Group A" perPage={3} data={data.cuflDivisionFourGroupAFixtureses} />
                <FixturesBox whose="Group B" perPage={3} data={data.cuflDivisionFourGroupBFixtureses} />
                <FixturesBox whose="Group C" perPage={3} data={data.cuflDivisionFourGroupCFixtureses} />
                <FixturesBox whose="Group D" perPage={3} data={data.cuflDivisionFourGroupDFixtureses} />
            </ React.Fragment>
        
        
        );

    }else{
        return ( <Loader /> );
    }

    
}


export default Fixtures;