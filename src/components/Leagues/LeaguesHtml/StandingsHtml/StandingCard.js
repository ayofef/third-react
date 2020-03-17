import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";


function StandingCard (props) {

    const pointsRef = JSON.parse(props.points);
    const spring = useSpring({ number: pointsRef, from: { number: 0 } });
    

    return(
        <tr>
            <td className="standing-table__position">{props.position}</td>
            <td className="standing-table__team">
                <img src={props.logo} alt={props.team} />
                <p>{props.team}</p>
            </td>
            <td className="standing-table__played">{props.played}</td>
            <td className="standing-table__wins">{props.wins}</td>
            <td className="standing-table__draws">{props.draws}</td>
            <td className="standing-table__loses">{props.loses}</td>
            <td className="standing-table__goal-diff">{props.goalDiff}</td>
            <td className="standing-table__points"><animated.div>{spring.number.interpolate(number => Math.floor(number))}</animated.div></td>
        </tr>
    );
}

StandingCard.propTypes = {
    position: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    played: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    wins: PropTypes.string.isRequired,
    draws: PropTypes.string.isRequired,
    loses: PropTypes.string.isRequired,
    goalDiff: PropTypes.string.isRequired,
    points: PropTypes.string.isRequired

}

export default StandingCard;