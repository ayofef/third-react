import { gql } from "apollo-boost";

const getStandings = {

    premierDivision: gql`
        query{
            cuflNorthPremierDivisionTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflSouthPremierDivisionTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            }
        }

    `,
    divisionOne: gql`
        query{
            cuflDivisionOneGroupATables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionOneGroupBTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionOneGroupCTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionOneGroupDTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            }
        }

    `,
    divisionTwo: gql`
        query{
            cuflDivisionTwoGroupATables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionTwoGroupBTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionTwoGroupCTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionTwoGroupDTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            }
        }

    `,
    divisionThree: gql`
        query{
            cuflDivisionThreeGroupATables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionThreeGroupBTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionThreeGroupCTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionThreeGroupDTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            }
        }

    `,
    divisionFour: gql`
        query{
            cuflDivisionFourGroupATables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionFourGroupBTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionFourGroupCTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            },
            cuflDivisionFourGroupDTables(orderBy: points_DESC){
                id,
                teamName,
                played,
                wins,
                draws,
                losses,
                goalDifference,
                points,
                teamLogo{
                    id,
                    url
                }
            }
        }

    `


}


export default getStandings;