import React from 'react';

const PlayerDetails = (props) => {
    const players = props.playersData;
    // console.log(players);
    const {name, img, age, role, batting_style, born, salary} = players;
    return (
        <div>
            <div className="">
                <img src={img} alt=""/>
                <h2>Name: {name}</h2>
            </div>
            <div className="">
                <h4>Born: {born}</h4>
                <h4>Current age: {age}</h4>
                <h4>Playing role: {role}</h4>
                <h4>Batting style: {batting_style}</h4>
                <h4>Salary: {salary}</h4>
            </div>
        </div>
    );
};

export default PlayerDetails;