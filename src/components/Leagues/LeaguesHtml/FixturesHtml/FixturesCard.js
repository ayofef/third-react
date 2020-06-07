import React from "react";
import PropTypes from "prop-types";

import DateFormatter from "../../../Ui/CustomHooks/Date";



function fixturesCard (props) {

    /* Date and TIME */
    const time = (datDate) =>{

        
        const receivedDate = new Date(datDate);
        const precessedRecived = receivedDate.toTimeString().split(":");
        const hour = precessedRecived[0] % 12 || 12;
        const AmOrPm = precessedRecived[0] >= 12 ? 'PM' : 'AM';
        const minute = precessedRecived[1];
        // const prefix = receivedDate.toTimeString().split(" ")[1];
        // console.log(precessedRecived, hour)
        return hour + " : " + [minute, AmOrPm].join(" ");
    }
    /* Date and TIME */

    return(
        
        <div className="fixtures-card">
            <div className="fixtures-card__dates">
                <p>{time(props.time)}</p>
                <p className="fixtures-card__dates--day">{DateFormatter(props.date)}</p>
                <p>{props.venue}</p>
            </div>
            <div className="fixtures-card__details">
                <div className="fixtures-card__details--box fixtures-card__details--box-first">
                    <p className="fixtures-card__details--text">{props.homeName}</p>
                    <img src={props.homeLogo} alt={props.homeName} className="fixtures-card__details--img" />
                    <p className="fixtures-card__details--score">{props.homeScore}</p>
                </div>
                <p className="fixtures-card__vs">-</p>
                <div className="fixtures-card__details--box fixtures-card__details--box-second">
                    <p className="fixtures-card__details--score">{props.awayScore}</p>
                    <img src={props.awayLogo} alt={props.awayName} className="fixtures-card__details--img" />
                    <p className="fixtures-card__details--text">{props.awayName}</p>
                </div>
            </div>
        </div>
        

    );

}

fixturesCard.propTypes = {

    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    venue: PropTypes.string.isRequired,
    homeName: PropTypes.string.isRequired,
    homeLogo: PropTypes.string.isRequired,
    homeScore: PropTypes.string.isRequired,
    awayName: PropTypes.string.isRequired,
    awayLogo: PropTypes.string.isRequired,
    awayScore: PropTypes.string.isRequired
}


export default fixturesCard;