import React, { useState, useEffect } from 'react';

const Points = ({team, fixtures}) => {

    const [totalPoints, setTotalPoints] = useState(0);

    useEffect(() => {
        getPoints();
    }, [])

    const getPoints = () => {
        let teams = [];
        let points = 0;
        fixtures.forEach(fixture => {
            let teamScore = Object.entries(fixture.score);
            
            let team1Info = String(teamScore[0]).split(",");
            let team2Info = String(teamScore[1]).split(",");
            
            if (team1Info[1] !== "" && team2Info[1] !== "") {
                //Win
                if (Number(team1Info[1]) > Number(team2Info[1]) && team == team1Info[0]) {
                    points += 3;
                } 
                
                if (Number(team1Info[1]) < Number(team2Info[1]) && team == team2Info[0]) {
                    points += 3;
                }

                //Lose
                if (Number(team1Info[1]) < Number(team2Info[1]) && team == team1Info[0]) {
                    points += 0;
                } 
                
                if (Number(team1Info[1]) > Number(team2Info[1]) && team == team2Info[0]) {
                    points += 0;
                }

                //Draw
                if (Number(team1Info[1]) == Number(team2Info[1]) && team == team1Info[0]) {
                    points += 1;
                } 
                
                if (Number(team1Info[1]) == Number(team2Info[1]) && team == team2Info[0]) {
                    points += 1;
                }
            }

        });
        
        setTotalPoints(points);
    };

    return (
        <>
            {
                totalPoints
            }
        </>
    )
}

export default Points
