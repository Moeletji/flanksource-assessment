import React, { useState, useEffect } from 'react';

const GoalDifference = ({team, fixtures}) => {

    const [goalDifference, setGoalDifference] = useState(0);

    useEffect(() => {
        getGoalDifference();
    }, [])

    const getGoalDifference = () => {
        let teams = [];
        let goalsFor = 0;
        let goalsAgainst = 0;
        fixtures.forEach(fixture => {
            let teamScore = Object.entries(fixture.score);
            
            let team1Info = String(teamScore[0]).split(",");
            let team2Info = String(teamScore[1]).split(",");
            
            // console.log(`${team} : team 1 ${team1Info[1]}, team 2 ${team2Info[1]}`);
            if (team2Info[1] !== "" && team2Info[1] !== "") {
                if (Number(team1Info[1]) > Number(team2Info[1]) && team == team1Info[0]) {
                    // console.log(`${team} score for ${team1Info[1]} score against ${team2Info[1]}`);
                    goalsFor += Number(team1Info[1]);
                    goalsAgainst += Number(team2Info[1]);
                } else if (Number(team1Info[1]) < Number(team2Info[1]) && team == team2Info[0]) {
                    //console.log(`${team} score for ${team2Info[1]} score against ${team1Info[1]}`);
                    goalsFor += Number(team2Info[1]);
                    goalsAgainst += Number(team1Info[1]);
                }

                if (Number(team1Info[1]) < Number(team2Info[1]) && team == team1Info[0]) {
                    // console.log(`${team} score for ${team1Info[1]} score against ${team2Info[1]}`);
                    goalsFor += Number(team1Info[1]);
                    goalsAgainst += Number(team2Info[1]);
                } else if (Number(team1Info[1]) > Number(team2Info[1]) && team == team2Info[0]) {
                    // console.log(`${team} score for ${team2Info[1]} score against ${team1Info[1]}`);
                    goalsFor += Number(team2Info[1]);
                    goalsAgainst += Number(team1Info[1]);
                }

                if (Number(team1Info[1]) == Number(team2Info[1]) && team == team1Info[0]) {
                    // console.log(`${team} score for ${team1Info[1]} score against ${team2Info[1]}`);
                    goalsFor += Number(team1Info[1]);
                    goalsAgainst += Number(team2Info[1]);
                } else if (Number(team1Info[1]) == Number(team2Info[1]) && team == team2Info[0]) {
                    // console.log(`${team} score for ${team2Info[1]} score against ${team1Info[1]}`);
                    goalsFor += Number(team2Info[1]);
                    goalsAgainst += Number(team1Info[1]);
                }
            }
        });
        
        setGoalDifference(goalsFor - goalsAgainst);
    };

    return (
        <>
            {
                goalDifference
            }
        </>
    )
}

export default GoalDifference
