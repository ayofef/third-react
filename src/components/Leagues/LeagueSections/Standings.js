import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useLocation } from "react-router-dom";
import Loader from "../../Ui/Loader/Loader";
import ErrorMini from "../../Ui/Error/ErrorMini/ErrorMini";
import EmptyData from "../../Ui/EmptyArray/EmptyArray";
import standingsQuery from "../LeaguesQuerys/CuflStandings";



import StandingBox from "../LeaguesHtml/StandingsHtml/StandingsHtml";
import StandingCard from "../LeaguesHtml/StandingsHtml/StandingCard";




function Standings () {
    const emptyItem = {
        width: "100%",
        position: "absolute", 
        left: "50%",
        bottom: "5rem",
        transform: "translateX(-50%)"
    }
    
    const location = useLocation();
    let matched;

    // if( location.pathname === "/cufl/leagues/premier-division/standings"  ){
    //     matched = standingsQuery.premierDivision
    // }else if( location.pathname === "/cufl/leagues/division-one/standings" ){
    //       matched = standingsQuery.divisionOne
    // }else if( location.pathname === "/cufl/leagues/division-two/standings" ){
    //       matched = standingsQuery.divisionTwo
    // }else if( location.pathname === "/cufl/leagues/division-three/standings" ){
    //       matched = standingsQuery.divisionThree
    // }else if( location.pathname === "/cufl/leagues/division-four/standings" ){
    //       matched = standingsQuery.divisionFour
    // }

    const { loading, error, data } = useQuery(standingsQuery);
    


    if (loading) return <Loader /> ;
    if (error) return <ErrorMini />;  


    const DataStandings = [
        ...data.cuflNorthPremierDivisionTables,
        ...data.cuflSouthPremierDivisionTables,
        ...data.cuflDivisionOneGroupATables,
        ...data.cuflDivisionOneGroupBTables,
        ...data.cuflDivisionOneGroupCTables,
        ...data.cuflDivisionOneGroupDTables,
        ...data.cuflDivisionTwoGroupATables,
        ...data.cuflDivisionTwoGroupBTables,
        ...data.cuflDivisionTwoGroupCTables,
        ...data.cuflDivisionTwoGroupDTables,
        ...data.cuflDivisionThreeGroupATables,
        ...data.cuflDivisionThreeGroupBTables,
        ...data.cuflDivisionThreeGroupCTables,
        ...data.cuflDivisionThreeGroupDTables,
        ...data.cuflDivisionFourGroupATables,
        ...data.cuflDivisionFourGroupBTables,
        ...data.cuflDivisionFourGroupCTables,
        ...data.cuflDivisionFourGroupDTables

    ]

    const sortedDataStandings = DataStandings.slice().sort((a, b) => b.points - a.points);



    console.log(data, DataStandings, sortedDataStandings)

    if( data && sortedDataStandings){
        return(
            <React.Fragment>
                <StandingBox whose="Standings">
                    {sortedDataStandings < 1 ? <tr><td style={emptyItem}><EmptyData /></td></tr>   : sortedDataStandings.map((el, index) => (
                        <StandingCard 
                        key={el.id}
                        position={JSON.stringify(index + 1)}
                        logo={el.teamLogo.url}
                        team={el.teamName}
                        played={el.played}
                        wins={el.wins}
                        draws={el.draws}
                        loses={el.losses}
                        goalDiff={el.goalDifference}
                        points={el.points}
                        />
                    ))}
                </StandingBox>
                {/*  */}
            </React.Fragment>
        )
    }

    return  <Loader /> ;
    
    
}



export default Standings;