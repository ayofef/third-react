import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useLocation } from "react-router-dom";
import Loader from "../../Ui/Loader/Loader";
import ErrorMini from "../../Ui/Error/ErrorMini/ErrorMini";
import FixturesBox from "../LeaguesHtml/FixturesHtml/FixturesHtml";
import FixturesCard from "../LeaguesHtml/FixturesHtml/FixturesCard";



import fixturesQuery from "../LeaguesQuerys/CuflFixtures";

function LatestImage () {

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ]

    const location = useLocation();
    let matched;

    if(location.pathname === "/cufl/leagues/premier-division" || "/cufl/leagues/premier-division/fixtures-result"){
      matched = fixturesQuery.premierDivision
    }else if(location.pathname === "/cufl/leagues/division-one"){
        matched = fixturesQuery.divisionOne
    }
    
    const { loading, error, data } = useQuery(matched);


    if (loading) return <Loader /> ;
    if (error) return <ErrorMini />;  
    
    
    if(location.pathname === "/cufl/leagues/premier-division" || "/cufl/leagues/premier-division/fixtures-result"){
    
        return(
            <React.Fragment>
            <FixturesBox whose="North Premier Division">
                {data.cuflNorthPremierDivisionFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={`${[el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1]].join(" : ")}`}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[2] - 1]].join(" ")}`}
                        venue={el.venue}
                        homeName={el.homeTeamName}
                        homeLogo={el.homeTeamLogo.url}
                        homeScore={el.homeTeamScore}
                        awayScore={el.awayTeamScore}
                        awayLogo={el.awayTeamLogo.url}
                        awayName={el.awayTeamName}
                        
                    
                    />
                ))}
            </FixturesBox>
            <FixturesBox whose="South Premier Division">
                {data.cuflSouthPremierDivisionFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={`${[el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1]].join(" : ")}`}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[2] - 1]].join(" ")}`}
                        venue={el.venue}
                        homeName={el.homeTeamName}
                        homeLogo={el.homeTeamLogo.url}
                        homeScore={el.homeTeamScore}
                        awayScore={el.awayTeamScore}
                        awayLogo={el.awayTeamLogo.url}
                        awayName={el.awayTeamName}
                        
                    
                    />
                ))}
            </FixturesBox>
            </React.Fragment>
    
    
        );

    }else{
        return <Loader />
    }

    
}


export default LatestImage;