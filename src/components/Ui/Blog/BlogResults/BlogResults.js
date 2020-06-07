import React from 'react';
import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";


import Error from "../../Error/ErrorMini/ErrorMini";
import Loader from "../../Loader/Loader";

import ResultCard from "./ResultCard";
import classes from "./BlogResults.module.scss";

const GET_BLOG_RESULT_DATA = gql`
    query{
        cuflNorthPremierDivisionFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflSouthPremierDivisionFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionOneGroupAFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionOneGroupBFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionOneGroupCFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionOneGroupDFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionTwoGroupAFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionTwoGroupBFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionTwoGroupCFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionTwoGroupDFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionThreeGroupAFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionThreeGroupBFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionThreeGroupCFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionThreeGroupDFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionFourGroupAFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionFourGroupBFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionFourGroupCFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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
        cuflDivisionFourGroupDFixtureses(orderBy : dateAndTime_ASC, first: 1, where: {status: PUBLISHED}){
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

function BlogResults () {

    const { loading, error, data} = useQuery(GET_BLOG_RESULT_DATA);

    if (loading) return <Loader />;
    if (error) return <Error /> ;


    /* Logic for DISPLAYING BLOG's FIXTURES AND RESULT */

    const DataFixtures = [
        ...data.cuflNorthPremierDivisionFixtureses,
        ...data.cuflSouthPremierDivisionFixtureses,
        ...data.cuflDivisionOneGroupAFixtureses,
        ...data.cuflDivisionOneGroupBFixtureses,
        ...data.cuflDivisionOneGroupCFixtureses,
        ...data.cuflDivisionOneGroupDFixtureses,
        ...data.cuflDivisionTwoGroupAFixtureses,
        ...data.cuflDivisionTwoGroupBFixtureses,
        ...data.cuflDivisionTwoGroupCFixtureses,
        ...data.cuflDivisionTwoGroupDFixtureses,
        ...data.cuflDivisionThreeGroupAFixtureses,
        ...data.cuflDivisionThreeGroupBFixtureses,
        ...data.cuflDivisionThreeGroupCFixtureses,
        ...data.cuflDivisionThreeGroupDFixtureses,
        ...data.cuflDivisionFourGroupAFixtureses,
        ...data.cuflDivisionFourGroupBFixtureses,
        ...data.cuflDivisionFourGroupCFixtureses,
        ...data.cuflDivisionFourGroupDFixtureses

    ]

    const sortedDataFixtures = DataFixtures.slice().sort((a, b) => new Date(b.dateAndTime) - new Date(a.dateAndTime));
    // console.log(DataFixtures, sortedDataFixtures)


  /* Logic for DISPLAYING BLOG's FIXTURES AND RESULT */



    if(sortedDataFixtures && sortedDataFixtures.length >= 1){

        return (
            <aside className={classes.BlogResults}>
                <h2 className={classes.BlogResults__Heading}>Latest Fixtures & Results</h2>
                <div className={classes.BlogResults__ResultBox}>
                    {
                        sortedDataFixtures.slice(0, 5).map((el)=>(
                            <ResultCard data={el} key={el.id}/>
                        ))
                    }
                </div>
                <div className={classes.BlogResults__LinkBox}>
                    <Link to="/cufl/leagues" className={classes.BlogResults__LinkBox__Link}>
                        CFAI Cup
                    </Link>
                    <Link to="/cufl/leagues" className={classes.BlogResults__LinkBox__Link}>
                        Iufu Cup
                    </Link>
                    <Link to="/cufl/leagues" className={classes.BlogResults__LinkBox__Link}>
                        Wscai Cup

                    </Link>
                    <Link to="/cufl/leagues/premier-division" className={classes.BlogResults__LinkBox__Link}>
                        Cufl League

                    </Link>
                </div>
            </aside>
        )
    }

    return null;
    
}


export default BlogResults;