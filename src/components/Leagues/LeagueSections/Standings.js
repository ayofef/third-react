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
    const location = useLocation();
    let matched;

    if( location.pathname === "/cufl/leagues/premier-division/standings"  ){
        matched = standingsQuery.premierDivision
    }else if( location.pathname === "/cufl/leagues/division-one/standings" ){
          matched = standingsQuery.divisionOne
    }else if( location.pathname === "/cufl/leagues/division-two/standings" ){
          matched = standingsQuery.divisionTwo
    }else if( location.pathname === "/cufl/leagues/division-three/standings" ){
          matched = standingsQuery.divisionThree
    }else if( location.pathname === "/cufl/leagues/division-four/standings" ){
          matched = standingsQuery.divisionFour
    }

    const { loading, error, data } = useQuery(matched);
    

    if (loading) return <Loader /> ;
    if (error) return <ErrorMini />;  



    if( location.pathname === "/cufl/leagues/premier-division/standings" ){
        return(
            <React.Fragment>
                <StandingBox whose="North Premier Division">
                    {data.cuflNorthPremierDivisionTables < 1 ? <EmptyData /> : data.cuflNorthPremierDivisionTables.map((el, index) => (
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
                <StandingBox whose="South Premier Division">
                    {data.cuflSouthPremierDivisionTables < 1 ? <EmptyData />: data.cuflSouthPremierDivisionTables.map((el, index) => (
                        <StandingCard 
                        key={el.id}
                        position={index + 1}
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
            </React.Fragment>
        );
    }else if( location.pathname === "/cufl/leagues/division-one/standings" ){
        return(
            <React.Fragment>
                <StandingBox whose="Group A">
                    {data.cuflDivisionOneGroupATables < 1 ? <EmptyData /> : data.cuflDivisionOneGroupATables.map((el, index) => (
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
                <StandingBox whose="Group B">
                    {data.cuflDivisionOneGroupBTables < 1 ? <EmptyData /> : data.cuflDivisionOneGroupBTables.map((el, index) => (
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
                <StandingBox whose="Group C">
                    {data.cuflDivisionOneGroupCTables < 1 ? <EmptyData /> : data.cuflDivisionOneGroupCTables.map((el, index) => (
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
                <StandingBox whose="Group D">
                    {data.cuflDivisionOneGroupDTables < 1 ? <EmptyData /> : data.cuflDivisionOneGroupDTables.map((el, index) => (
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
            </React.Fragment>
        );
    }else if( location.pathname === "/cufl/leagues/division-two/standings" ){
        return(
            <React.Fragment>
                <StandingBox whose="Group A">
                    {data.cuflDivisionTwoGroupATables < 1 ? <EmptyData /> : data.cuflDivisionTwoGroupATables.map((el, index) => (
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
                <StandingBox whose="Group B">
                    {data.cuflDivisionTwoGroupBTables < 1 ? <EmptyData /> : data.cuflDivisionTwoGroupBTables.map((el, index) => (
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
                <StandingBox whose="Group C">
                    {data.cuflDivisionTwoGroupCTables < 1 ? <EmptyData /> : data.cuflDivisionTwoGroupCTables.map((el, index) => (
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
                <StandingBox whose="Group D">
                    {data.cuflDivisionTwoGroupDTables < 1 ? <EmptyData /> : data.cuflDivisionTwoGroupDTables.map((el, index) => (
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
            </React.Fragment>
        );
    }else if( location.pathname === "/cufl/leagues/division-three/standings" ){
        return(
            <React.Fragment>
                <StandingBox whose="Group A">
                    {data.cuflDivisionThreeGroupATables < 1 ? <EmptyData /> : data.cuflDivisionThreeGroupATables.map((el, index) => (
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
                <StandingBox whose="Group B">
                    {data.cuflDivisionThreeGroupBTables < 1 ? <EmptyData /> : data.cuflDivisionThreeGroupBTables.map((el, index) => (
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
                <StandingBox whose="Group C">
                    {data.cuflDivisionThreeGroupCTables < 1 ? <EmptyData /> : data.cuflDivisionThreeGroupCTables.map((el, index) => (
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
                <StandingBox whose="Group D">
                    {data.cuflDivisionThreeGroupDTables < 1 ? <EmptyData /> : data.cuflDivisionThreeGroupDTables.map((el, index) => (
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
            </React.Fragment>
        );
    }else if( location.pathname === "/cufl/leagues/division-four/standings" ){
        return(
            <React.Fragment>
                <StandingBox whose="Group A">
                    {data.cuflDivisionFourGroupATables < 1 ? <EmptyData /> : data.cuflDivisionFourGroupATables.map((el, index) => (
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
                <StandingBox whose="Group B">
                    {data.cuflDivisionFourGroupBTables < 1 ? <EmptyData /> : data.cuflDivisionFourGroupBTables.map((el, index) => (
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
                <StandingBox whose="Group C">
                    {data.cuflDivisionFourGroupCTables < 1 ? <EmptyData /> : data.cuflDivisionFourGroupCTables.map((el, index) => (
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
                <StandingBox whose="Group D">
                    {data.cuflDivisionFourGroupDTables < 1 ? <EmptyData /> : data.cuflDivisionFourGroupDTables.map((el, index) => (
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
            </React.Fragment>
        );
    }else{
        return ( <Loader /> );
    }
    
}



export default Standings;