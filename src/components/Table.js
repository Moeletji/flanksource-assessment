import React, { useState, useEffect } from 'react';
import GamesPlayed from './GamesPlayed';
import GamesWon from './GamesWon';
import GamesLost from './GamesLost';
import GamesDrew from './GamesDrew';
import GoalDifference from './GoalDifference';
import Points from './Points';
import { Link } from 'react-router-dom';

const Table = ({ fixtures}) => {

    const [uniqueTeams, setUniqueTeams] = useState([]);

    useEffect(() => {
        getTeams()
    }, []);

    const getTeams = () => {
        let teams = [];
        fixtures.forEach(fixture => {
            teams = [...teams, ...Object.keys(fixture.score)];
        });
        setUniqueTeams([...new Set(teams)]);
    };

    return (
        <div >
            <h1 id='title'>React Dynamic Table</h1>
            <table id='students'>
                <thead>
                    <tr>
                        <th>Team</th>
                        <th>Games Played</th>
                        <th>Win</th>
                        <th>Loss</th>
                        <th>Draw</th>
                        <th>Goal difference</th>
                        <th>Points</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>
                        {
                            uniqueTeams.map(team => <tr key={team}>
                                <Link to={`/team/${team}`} >{team}</Link>
                            </tr>)
                        }
                    </td>
                    <td>
                        {
                            uniqueTeams.map(team => <tr key={team}>
                                <GamesPlayed team={team} fixtures={fixtures} />
                            </tr>)
                        }
                    </td>
                    <td>
                        {
                            uniqueTeams.map(team => <tr key={team}>
                                <GamesWon team={team} fixtures={fixtures} />
                            </tr>)
                        }
                    </td>
                    <td>
                        {
                            uniqueTeams.map(team => <tr key={team}>
                                <GamesLost team={team} fixtures={fixtures} />
                            </tr>)
                        }
                    </td>
                    <td>
                        {
                            uniqueTeams.map(team => <tr key={team}>
                                <GamesDrew team={team} fixtures={fixtures} />
                            </tr>)
                        }
                    </td>
                    <td>
                        {
                            uniqueTeams.map(team => <tr key={team}>
                                <GoalDifference team={team} fixtures={fixtures} />
                            </tr>)
                        }
                    </td>
                    <td>
                        {
                            uniqueTeams.map(team => <tr key={team}>
                                <Points team={team} fixtures={fixtures} />
                            </tr>)
                        }
                    </td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Table;
