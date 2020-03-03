import React from "react";
import LeagueCard from "./LeagueCard/LeagueCard";
import LeagueStar from "./LeagueCardStar/LeagueCardStar";
import sprite from "../../../assets/images/sprite.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SectionLeagues(props) {
    
    return(
        <section className={["leagues", `${props.identifier +"-leagues"}`].join(" ")} id={props.identifier + "-leagues"}>
            <div className="container">
                <h2 className={["u-heading", "u-center", `${props.identifier + "-heading"}`].join(" ")}>LEAGUES</h2>
                <div className="leagues-box">
                    <LeagueStar identifier="premier" committe="cufl" star="leagues__card--icon-premier-star" path="/" heading="Premier Division">
                        <p>North</p>
                        <p>South</p>
                    </LeagueStar>
                    <LeagueCard identifier="d1" committe="cufl" path="/" heading="Division 1">
                        <p>North</p>
                        <p>South</p>
                    </LeagueCard>
                    <LeagueCard identifier="d2" committe="cufl" path="/" heading="Division 2">
                        <p>Group A</p>
                        <p>Group B</p>
                        <p>Group C</p>
                        <p>Group D</p>
                    </LeagueCard>
                    <LeagueStar identifier="d3" committe="cufl" path="/" star="" heading="Division 3">
                        <p>Group A</p>
                        <p>Group B</p>
                        <p>Group C</p>
                        <p>Group D</p>
                    </LeagueStar>
                    <LeagueCard identifier="d4" committe="cufl" path="/" heading="Division 4">
                        <p>Group A</p>
                        <p>Group B</p>
                        <p>Group C</p>
                        <p>Group D</p>
                    </LeagueCard>
                </div>
                <div className="leagues__form u-center">
                    <Link to="/" className="btn leagues__link">Leagues 
                    <span><svg className="arrow-button-icon">
                                <use xlinkHref={sprite + "#icon-chevron-right"}></use>
                            </svg>
                        </span>
                    </Link>
                </div>
            </div>
        </section>

    );

}

SectionLeagues.propTypes = {
    identifier: PropTypes.string.isRequired,
    
}

export default SectionLeagues;



