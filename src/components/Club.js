import React, { useState, useEffect } from 'react'
import { data }  from '../data';
import { Link } from 'react-router-dom';
import { format } from 'date-fns'

const Club = (props) => {
    const [fixtures, setFixtures] = useState(data);
    const [team, setTeam] = useState(props.match.params.teamName);

    const [results, setResults] = useState([]);
    const [newFixtures, setNewFixtures] = useState([]);
    const [prettyResults, setPrettyResults] = useState([]);
    const [prettyFixtures, setPrettyFixtures] = useState([]);

    useEffect(() => {
        getAllFixtures();
    }, []);

    useEffect(() => {
        displayResults();
        displayFixtures();
    }, [results, newFixtures]);

    const getAllFixtures = () => {
        let teamFixtures = [];
        let teamResults = [];

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

    const displayResults = () => {
        let resultsArray = [];
        results.forEach(result => {
            let teamScore = Object.entries(result.score);
            let resultString = "";
            let team1Info = String(teamScore[0]).split(",");
            let team2Info = String(teamScore[1]).split(",");
            
            if (team == team1Info[0] && team1Info[1] !== "" || team == team2Info[0] && team2Info[1] !== "") {
                resultString += (team1Info[0] + ' ' + team1Info[1] + ' - ' + team2Info[1] + ' ' + team2Info[0] + ' ' + result.date);   
            }
            console.log(resultString);
            resultsArray.push(resultString);
        });

        setPrettyResults(resultsArray);
    };

    const displayFixtures = () => {
        let fixtureArray = [];
        newFixtures.forEach(fixture => {
            let teamScore = Object.entries(fixture.score);
            let fixtureString = "";
            let team1Info = String(teamScore[0]).split(",");
            let team2Info = String(teamScore[1]).split(",");
            
            if (team == team1Info[0] && team1Info[1] == "" || team == team2Info[0] && team2Info[1] == "") {
                fixtureString += (team1Info[0]  + ' vs ' + team2Info[0] + ' ' + fixture.date);   
            }
            console.log(fixtureString);
            fixtureArray.push(fixtureString);
        });
        setPrettyFixtures(fixtureArray);
    };

    return (
        <div>
            <h1>{team}</h1>
            <h4>Results</h4>
                <ul>
                    {
                        prettyResults.map(result => <li key={result}>{result}</li>)
                    }
                </ul>
            <h4>Fixtures</h4>
                <ul>
                    {
                        prettyFixtures.map(fixture => <li key={fixture}>{fixture}</li>)
                    }
                </ul>
            <br />
            <Link to="/">Home</Link>
        </div>
    )
}

export default Club
