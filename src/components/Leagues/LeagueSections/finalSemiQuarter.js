import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loader from "../../Ui/Loader/Loader";
import ErrorMini from "../../Ui/Error/ErrorMini/ErrorMini";

import FixturesBox from "../LeaguesHtml/FixturesHtml/FixturesHtml";


const GET_FINAL_SEMI_QUARTER = gql`
    query{
        cuflLeagueSemiFinalFixtureses(orderBy : dateAndTime_DESC, where: {status: PUBLISHED}){
            id
            homeTeamName
            homeTeamLogo{
            id
            url
            }
            homeTeamScore
            awayTeamScore
            awayTeamLogo{
            id
            url
            }
            awayTeamName
            dateAndTime
            venue
        },
        cuflLeagueQuarterFinalFixtureses(orderBy : dateAndTime_DESC, where: {status: PUBLISHED}){
            id
            homeTeamName
            homeTeamLogo{
            id
            url
            }
            homeTeamScore
            awayTeamScore
            awayTeamLogo{
            id
            url
            }
            awayTeamName
            dateAndTime
            venue
        },
        cuflLeagueFinalFixtureses(orderBy : dateAndTime_DESC, where: {status: PUBLISHED}){
            id
            homeTeamName
            homeTeamLogo{
            id
            url
            }
            homeTeamScore
            awayTeamScore
            awayTeamLogo{
            id
            url
            }
            awayTeamName
            dateAndTime
            venue
        }
    }
`;

const FinalSemiQuarter = () => {

    const { loading, error, data } = useQuery(GET_FINAL_SEMI_QUARTER);
    

    if (loading) return <Loader /> ;
    if (error) return <ErrorMini />;  

    return(
        <>
            {
                data.cuflLeagueFinalFixtureses && data.cuflLeagueFinalFixtureses.length >= 1 ? <FixturesBox whose="Final" perPage={5} data={data.cuflLeagueFinalFixtureses} /> : null
            }
            {
                data.cuflLeagueQuarterFinalFixtureses && data.cuflLeagueQuarterFinalFixtureses.length >= 1 ? <FixturesBox whose="Quarter-Final" perPage={5} data={data.cuflLeagueQuarterFinalFixtureses} /> : null
            }
            {
                data.cuflLeagueSemiFinalFixtureses && data.cuflLeagueSemiFinalFixtureses.length >= 1 ? <FixturesBox whose="Semi-Final" perPage={5} data={data.cuflLeagueSemiFinalFixtureses} /> : null
            }
        </>
    )
}


export default FinalSemiQuarter;