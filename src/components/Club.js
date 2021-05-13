import React, { useState, useEffect } from 'react'
import { data }  from '../data';
import { Link } from 'react-router-dom';

const Club = (props) => {
    const [fixtures, setFixtures] = useState(data);
    const [team, setTeam] = useState(props.match.params.teamName);

    const [results, setResults] = useState([]);
    const [newFixtures, setNewFixtures] = useState([]);

    useEffect(() => {
        getAllFixtures();
        console.log(results);
        console.log(newFixtures);
    }, []);

    const getAllFixtures = () => {
        let teamFixtures = [];
        let teamResults = [];
        let games = 0;
        fixtures.forEach(fixture => {
            let teamScore = Object.entries(fixture.score);
            
            let team1Info = String(teamScore[0]).split(",");
            let team2Info = String(teamScore[1]).split(",");
            
            if (team == team1Info[0] && team1Info[1] !== "") {
                teamResults.push(fixture);
            }else if (team == team2Info[0] && team2Info[1] !== "") {
                teamResults.push(fixture);
            }

            if (team == team1Info[0] && team1Info[1] == "") {
                teamFixtures.push(fixture);
            }else if (team == team2Info[0] && team2Info[1] == "") {
                teamFixtures.push(fixture);
            }
        });
        setResults(teamResults);
        setNewFixtures(teamFixtures);
    };

    return (
        <div>
            <h1>{team}</h1>
            <h4>Results</h4>
            <h4>Fixtures</h4>
            <br />
            <Link to="/">Home</Link>
        </div>
    )
}

export default Club
