import React from "react";
import PropTypes from "prop-types";



function StandingsHtml (props){

    return(

        <section className="league-standing">
            <div className="standing">
                <div className="standing__division">
                    <div className="standing__division--heading">{props.whose}</div>
                    <table className="standing-table">
                        <thead className="standing-table__header">
                            <tr>
                                <th title="Position" className="standing-table__position">Pos</th>
                                <th title="Team Name" className="standing-table__team">Team</th>
                                <th title="Matches Played" className="standing-table__played">P</th>
                                <th title="Matches Won" className="standing-table__wins">W</th>
                                <th title="Matches Drawn" className="standing-table__draws">D</th>
                                <th title="Matches Lost" className="standing-table__loses">L</th>
                                <th title="Goal Difference" className="standing-table__goal-diff">+/-</th>
                                <th title="Points" className="standing-table__points">PTS</th>
                            </tr>
                        </thead>
                        <tbody className="standing-table__body">
                            {props.children}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

StandingsHtml.propTypes = {
    whose: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}


export default StandingsHtml;