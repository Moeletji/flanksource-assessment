import React, { useState, useEffect } from 'react';

const GamesWon = ({team, fixtures}) => {

    const [gamesWon, setGamesWon] = useState(0);

    useEffect(() => {
        getGamesWon();
    }, [])

    const getGamesWon = () => {
        let teams = [];
        let games = 0;
        fixtures.forEach(fixture => {
            let teamScore = Object.entries(fixture.score);
            
            let team1Info = String(teamScore[0]).split(",");
            let team2Info = String(teamScore[1]).split(",");
            
            if (Number(team1Info[1]) > Number(team2Info[1]) && team == team1Info[0]) {
                games++;
            }else if (Number(team1Info[1]) < Number(team2Info[1]) && team == team2Info[0]) {
                games++;
            }
        });
        
        setGamesWon(games);
    };

    return (
        <>
            {
                gamesWon
            }
        </>
    )
}

export default GamesWon
