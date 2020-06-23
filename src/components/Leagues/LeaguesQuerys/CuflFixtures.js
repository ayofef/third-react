import { gql } from "apollo-boost";

const getFixtures = {
  premierDivision: gql`
    query {
      cuflNorthPremierDivisionFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflSouthPremierDivisionFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
    }
  `,

  divisionOne: gql`
    query {
      cuflDivisionOneGroupAFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionOneGroupBFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionOneGroupCFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionOneGroupDFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
    }
  `,

  divisionTwo: gql`
    query {
      cuflDivisionTwoGroupAFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionTwoGroupBFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionTwoGroupCFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionTwoGroupDFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
    }
  `,

  divisionThree: gql`
    query {
      cuflDivisionThreeGroupAFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionThreeGroupBFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionThreeGroupCFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionThreeGroupDFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
    }
  `,
  divisionFour: gql`
    query {
      cuflDivisionFourGroupAFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionFourGroupBFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionFourGroupCFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
      cuflDivisionFourGroupDFixtureses(
        orderBy: dateAndTime_DESC
        stage: PUBLISHED
      ) {
        id
        homeTeamName
        homeTeamLogo {
          id
          url
        }
        homeTeamScore
        awayTeamScore
        awayTeamLogo {
          id
          url
        }
        awayTeamName
        dateAndTime
        venue
      }
    }
  `,
};

export default getFixtures;
