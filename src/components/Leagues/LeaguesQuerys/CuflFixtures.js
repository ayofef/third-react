
import { gql } from "apollo-boost";

const getFixtures = {

    premierDivision : gql`
        query{
            cuflNorthPremierDivisionFixtureses(orderBy : dateAndTime_ASC){
            id,
            homeTeamName,
            homeTeamLogo{
            id,
            url
            }
            homeTeamScore,
            awayTeamScore,
            awayTeamLogo{
            id,
            url
            }
            awayTeamName,
            dateAndTime,
            venue
            },
            cuflSouthPremierDivisionFixtureses(orderBy : dateAndTime_ASC){
                id,
                homeTeamName,
                homeTeamLogo{
                id,
                url
                }
                homeTeamScore,
                awayTeamScore,
                awayTeamLogo{
                id,
                url
                }
                awayTeamName,
                dateAndTime,
                venue
                }
        
        }

    `,

    divisionOne : gql`
        query{
            cuflDivisionOneGroupAFixtureses(orderBy : dateAndTime_ASC){
            id,
            homeTeamName,
            homeTeamLogo{
            id,
            url
            }
            homeTeamScore,
            awayTeamScore,
            awayTeamLogo{
            id,
            url
            }
            awayTeamName,
            dateAndTime,
            venue
        }
        
        }

    `,

    

}

export default getFixtures;