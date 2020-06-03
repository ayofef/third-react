import React from 'react';
import classes from "./BlogResults.module.scss";

import DateFormatter from "../../CustomHooks/Date";

const resultCard = ({data}) => {

    return(
        <div className={classes.ResultCard}>
            <div className={classes.ResultCard__FixRes}>
                <div className={classes.ResultCard__Home}>
                    <img src={data.homeTeamLogo.url} alt={data.homeTeamName} className="fixtures-card__details--img" />
                    <p className="fixtures-card__details--score">{data.homeTeamScore}</p>
                </div>
                <p className={classes.ResultCard__VS}>-</p>
                <div className={classes.ResultCard__Away}>
                    <p className="fixtures-card__details--score">{data.awayTeamScore}</p>
                    <img src={data.awayTeamLogo.url} alt={data.awayTeamName} className="fixtures-card__details--img" />
                </div>
            </div>

            <div className={classes.ResultCard__Date}>
                {DateFormatter(data.dateAndTime)}
            </div>
        </div>
    )
}

export default resultCard;