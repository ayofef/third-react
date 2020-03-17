import React from "react";
import FixturesBox from "../../../Leagues/LeaguesHtml/FixturesHtml/FixturesHtml";
import FixturesCard from "../../../Leagues/LeaguesHtml/FixturesHtml/FixturesCard";
import logo from "../../../../assets/images/indesign.png";

function UpcomingFix () {

    return(
        <div style={{marginTop: "9rem"}}>
            <div className="container">
            <FixturesBox whose="Upcoming Fixtures">
                <FixturesCard 
                time="2PM"
                date="7 Mar"
                venue="Dublin"
                homeName="Home"
                homeLogo={logo}
                homeScore="0"
                awayScore="0"
                awayLogo={logo}
                awayName="Away"
                />

            <FixturesCard 
                time="2PM"
                date="7 Mar"
                venue="Dublin"
                homeName="Home"
                homeLogo={logo}
                homeScore="0"
                awayScore="0"
                awayLogo={logo}
                awayName="Away"
                />
            </FixturesBox>
            
            </div>
        </div>
        
    );
}


export default UpcomingFix;