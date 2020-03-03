import React from "react";



function Standings (){

    return(

        <section className="league-standing">
            <div className="standing">
                <div className="standing__division">
                    <div className="standing__division--heading">
                        North Premier Division
                    </div>
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
                            <tr>
                                <td className="standing-table__position">1</td>
                                <td className="standing-table__team">
                                    <img src="../img/indesign.png" alt="TEam 1" />
                                    <p>Lorem, ipsum.</p>
                                </td>
                                <td className="standing-table__played">18</td>
                                <td className="standing-table__wins">16</td>
                                <td className="standing-table__draws">0</td>
                                <td className="standing-table__loses">2</td>
                                <td className="standing-table__goal-diff">23</td>
                                <td className="standing-table__points">79</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

export default Standings;