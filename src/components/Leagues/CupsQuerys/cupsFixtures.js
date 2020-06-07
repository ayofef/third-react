
import { gql } from "apollo-boost";

const getFixtures = {

    perpetualCup : gql`
    
        query{
            cfaiPerpetualCupFixtureses(orderBy : dateAndTime_DESC, where: {status: PUBLISHED}){
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
            cfaiPerpetualCupSemiFinalFixtureses(orderBy : dateAndTime_DESC, where: {status: PUBLISHED}){
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
            cfaiPerpetualCupQuarterFinalFixtureses(orderBy : dateAndTime_DESC, where: {status: PUBLISHED}){
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
            cfaiPerpetualCupFinalFixtureses(orderBy : dateAndTime_DESC, where: {status: PUBLISHED}){
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

    `,

    

}

export default getFixtures;