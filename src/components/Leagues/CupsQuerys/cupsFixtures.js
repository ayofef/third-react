import { gql } from "apollo-boost";

const getFixtures = {
  perpetualCup: gql`
    query {
      cfaiPerpetualCupFixtureses(orderBy: dateAndTime_DESC, stage: PUBLISHED) {
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
      cfaiPerpetualCupSemiFinalFixtureses(
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
      cfaiPerpetualCupQuarterFinalFixtureses(
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
      cfaiPerpetualCupFinalFixtureses(
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
  challengeCup: gql`
    query {
      cfaiChallengeCupFixtureses(orderBy: dateAndTime_DESC, stage: PUBLISHED) {
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
      cfaiChallengeCupSemiFinalFixtureses(
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
      cfaiChallengeCupQuarterFinalFixtureses(
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
      cfaiChallengeCupFinalFixtureses(
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
  eustaceCup: gql`
    query {
      cfaiEustaceCupFixtureses(orderBy: dateAndTime_DESC, stage: PUBLISHED) {
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
      cfaiEustaceCupSemiFinalFixtureses(
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
      cfaiEustaceCupQuarterFinalFixtureses(
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
      cfaiEustaceCupFinalFixtureses(
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
  eustaceShield: gql`
    query {
      cfaiEustaceShieldFixtureses(orderBy: dateAndTime_DESC, stage: PUBLISHED) {
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
      cfaiEustaceShieldSemiFinalFixtureses(
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
      cfaiEustaceShieldQuarterFinalFixtureses(
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
      cfaiEustaceShieldFinalFixtureses(
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
  plate: gql`
    query {
      cfaiPlateCupFixtureses(orderBy: dateAndTime_DESC, stage: PUBLISHED) {
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
      cfaiPlateCupSemiFinalFixtureses(
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
      cfaiPlateCupQuarterFinalFixtureses(
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
      cfaiPlateCupFinalFixtureses(orderBy: dateAndTime_DESC, stage: PUBLISHED) {
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
