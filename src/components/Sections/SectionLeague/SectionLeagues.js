import React from "react";
import LeagueCard from "./LeagueCard/LeagueCard";
import LeagueStar from "./LeagueCardStar/LeagueCardStar";
import sprite from "../../../assets/images/sprite.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SectionLeagues(props) {

    const NthSth = ["North", "South"];
    const Group = ["Group A", "Group B", "Group C", "Group D"];
    
    return(
        <section className={["leagues", `${props.identifier +"-leagues"}`].join(" ")} id={props.identifier + "-leagues"}>
            <div className="container">
                <h2 className={["u-heading", "u-center", `${props.identifier + "-heading"}`].join(" ")}>LEAGUE</h2>
                <div className="leagues-box">
                    <LeagueStar identifier="premier" committe="cufl" star="leagues__card--icon-premier-star" path="/cufl/leagues/premier-division" heading="Premier Division">
                        {
                            NthSth.map((el, index) => <p key={index}>{el}</p>)
                        }
                    </LeagueStar>
                    <LeagueCard identifier="d1" committe="cufl" path="/cufl/leagues/division-one" heading="Division 1">
                        {
                            NthSth.map((el, index) => <p key={index}>{el}</p>)
                        }
                    </LeagueCard>
                    <LeagueCard identifier="d2" committe="cufl" path="/cufl/leagues/division-two" heading="Division 2">
                        {
                            Group.map((el, index) => <p key={index}>{el}</p>)
                        }
                    </LeagueCard>
                    <LeagueStar identifier="d3" committe="cufl" path="/cufl/leagues/division-three" heading="Division 3">
                        {
                            Group.map((el, index) => <p key={index}>{el}</p>)
                        }
                    </LeagueStar>
                    <LeagueCard identifier="d4" committe="cufl" path="/cufl/leagues/division-four" heading="Division 4">
                        {
                            Group.map((el, index) => <p key={index}>{el}</p>)
                        }
                    </LeagueCard>
                </div>
                <div className="leagues__form u-center">
                    <Link to="/cufl/leagues/premier-division" className="btn leagues__link">Leagues 
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



