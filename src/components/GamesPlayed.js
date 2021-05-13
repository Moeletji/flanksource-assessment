import React, { useState, useEffect } from 'react'

const GamesPlayed = ({team, fixtures}) => {

    const [gamesPlayed, setGamesPlayed] = useState(0)

    useEffect(() => {
        getGamesPlayed();
    }, [])

    const getGamesPlayed = () => {
        let teams = [];
        let games = 0;
        fixtures.forEach(fixture => {
            let teamScore = Object.entries(fixture.score);
            
            let team1Info = String(teamScore[0]).split(",");
            let team2Info = String(teamScore[1]).split(",");
            
            if (team1Info[1] !== "" && team2Info[1] !== "") {
                if (team == team1Info[0]) {
                    teams.push(team);
                }else if (team == team2Info[0]) {
                    teams.push(team);
                }
            }
            
        });

        teams.forEach((element) => {
            if (team === element) {
                games++;
            }
        })

        setGamesPlayed(games);
    };

    return (
        <>
            {
                gamesPlayed
            }
        </>
    )
}

export default GamesPlayed
