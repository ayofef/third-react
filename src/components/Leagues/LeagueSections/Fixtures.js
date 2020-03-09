import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useLocation } from "react-router-dom";
import Loader from "../../Ui/Loader/Loader";
import ErrorMini from "../../Ui/Error/ErrorMini/ErrorMini";
import FixturesBox from "../LeaguesHtml/FixturesHtml/FixturesHtml";
import FixturesCard from "../LeaguesHtml/FixturesHtml/FixturesCard";
import EmptyData from "../../Ui/EmptyArray/EmptyArray";



import fixturesQuery from "../LeaguesQuerys/CuflFixtures";

function Fixtures () {

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec" ];

    const time = (hour, minute) =>{
        if(hour <= 11){
            return hour + " : " + minute + " AM";
        }else if(hour > 11){
            return (hour - 12) + " : " + minute + " PM"
        }else if(hour < 1){
            return (hour) + " : " + minute + " AM"
        } 
    }

    const location = useLocation();
    let matched;

    if((location.pathname === "/cufl/leagues/premier-division") || (location.pathname === "/cufl/leagues/premier-division/fixtures-result")){
      matched = fixturesQuery.premierDivision
    }else if((location.pathname === "/cufl/leagues/division-one") || (location.pathname === "/cufl/leagues/division-one/fixtures-result")){
        matched = fixturesQuery.divisionOne
    }else if((location.pathname === "/cufl/leagues/division-two") || (location.pathname === "/cufl/leagues/division-two/fixtures-result")){
        matched = fixturesQuery.divisionTwo
    }else if((location.pathname === "/cufl/leagues/division-three") || (location.pathname === "/cufl/leagues/division-three/fixtures-result")){
        matched = fixturesQuery.divisionThree
    }else if((location.pathname === "/cufl/leagues/division-four") || (location.pathname === "/cufl/leagues/division-four/fixtures-result")){
        matched = fixturesQuery.divisionFour
    }
    
    const { loading, error, data } = useQuery(matched);
    

    if (loading) return <Loader /> ;
    if (error) return <ErrorMini />;  
    
    
    
    if((location.pathname === "/cufl/leagues/premier-division") || (location.pathname === "/cufl/leagues/premier-division/fixtures-result")){
    
        return(
            <React.Fragment>
            <FixturesBox whose="North Premier Division">
                {data.cuflNorthPremierDivisionFixtureses < 1 ? <EmptyData /> : data.cuflNorthPremierDivisionFixtureses.map(el => (
                    
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
                {data.cuflSouthPremierDivisionFixtureses < 1 ? <EmptyData /> : data.cuflSouthPremierDivisionFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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

    }else if((location.pathname === "/cufl/leagues/division-one") || (location.pathname === "/cufl/leagues/division-one/fixtures-result")){

        return (
            <React.Fragment>
            <FixturesBox whose="Group A">
                {data.cuflDivisionOneGroupAFixtureses < 1 ? <EmptyData /> : data.cuflDivisionOneGroupAFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group B">
                {data.cuflDivisionOneGroupBFixtureses < 1 ? <EmptyData /> : data.cuflDivisionOneGroupBFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group C">
                {data.cuflDivisionOneGroupCFixtureses < 1 ? <EmptyData /> : data.cuflDivisionOneGroupCFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group D">
                {data.cuflDivisionOneGroupDFixtureses < 1 ? <EmptyData /> : data.cuflDivisionOneGroupDFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            </ React.Fragment>
        
        
        );

    }else if((location.pathname === "/cufl/leagues/division-two") || (location.pathname === "/cufl/leagues/division-two/fixtures-result")){

        return (
            <React.Fragment>
            <FixturesBox whose="Group A">
                {data.cuflDivisionTwoGroupAFixtureses < 1 ? <EmptyData /> : data.cuflDivisionTwoGroupAFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group B">
                {data.cuflDivisionTwoGroupBFixtureses < 1 ? <EmptyData /> : data.cuflDivisionTwoGroupBFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group C">
                {data.cuflDivisionTwoGroupCFixtureses < 1 ? <EmptyData /> : data.cuflDivisionTwoGroupCFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group D">
                {data.cuflDivisionTwoGroupDFixtureses < 1 ? <EmptyData /> : data.cuflDivisionTwoGroupDFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            </ React.Fragment>
        
        
        );

    }else if((location.pathname === "/cufl/leagues/division-three") || (location.pathname === "/cufl/leagues/division-three/fixtures-result")){

        return (
            <React.Fragment>
            <FixturesBox whose="Group A">
                {data.cuflDivisionThreeGroupAFixtureses < 1 ? <EmptyData /> : data.cuflDivisionThreeGroupAFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group B">
                {data.cuflDivisionThreeGroupBFixtureses < 1 ? <EmptyData /> : data.cuflDivisionThreeGroupBFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group C">
                {data.cuflDivisionThreeGroupCFixtureses < 1 ? <EmptyData /> : data.cuflDivisionThreeGroupCFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group D">
                {data.cuflDivisionThreeGroupDFixtureses < 1 ? <EmptyData /> : data.cuflDivisionThreeGroupDFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            </ React.Fragment>
        
        
        );

    }else if((location.pathname === "/cufl/leagues/division-four") || (location.pathname === "/cufl/leagues/division-four/fixtures-result")){

        return (
            <React.Fragment>
            <FixturesBox whose="Group A">
                {data.cuflDivisionFourGroupAFixtureses < 1 ? <EmptyData /> : data.cuflDivisionFourGroupAFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group B">
                {data.cuflDivisionFourGroupBFixtureses < 1 ? <EmptyData /> : data.cuflDivisionFourGroupBFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group C">
                {data.cuflDivisionFourGroupCFixtureses < 1 ? <EmptyData /> : data.cuflDivisionFourGroupCFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            <FixturesBox whose="Group D">
                {data.cuflDivisionFourGroupDFixtureses < 1 ? <EmptyData /> : data.cuflDivisionFourGroupDFixtureses.map(el => (
                    <FixturesCard 
                        key={el.id}
                        time={time(el.dateAndTime.split("T")[1].split(":")[0], el.dateAndTime.split("T")[1].split(":")[1])}
                        date={`${[el.dateAndTime.split("T")[0].split("-")[2], month[el.dateAndTime.split("T")[0].split("-")[1] - 1]].join(" ")}`}
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
            </ React.Fragment>
        
        
        );

    }else{
        return ( <Loader /> );
    }

    
}


export default Fixtures;