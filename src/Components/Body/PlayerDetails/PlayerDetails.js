import React from 'react';
import './PlayerDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCoffee, faDollarSign, faFlag, faUserPlus } from '@fortawesome/free-solid-svg-icons'

const PlayerDetails = (props) => {
    const players = props.playersData;
    const clickedBtn = props.clickBtn;
    // console.log(players);
    const { name, img, age, role, batting_style, born, salary } = players;
    return (
        <div className="players">
            <div className="player-head">
                <div className="name-part">
                    <h2>{name}</h2>
                    <small>Bangladesh </small>
                </div>
                <div className="player-btn">
                    <button onClick={()=>clickedBtn(players)}><FontAwesomeIcon icon={faUserPlus} /> Select Player</button>
                </div>
            </div>
            <div className="players-info">
                <div className="player-img">
                    <img src={img} alt="" />
                </div>
                <div className="player-body">
                    <p>Name: {name}</p>
                    <p>Born: {born}</p>
                    <p>Current age: {age}</p>
                    <p>Playing role: {role}</p>
                    <p>Batting style: {batting_style}</p>
                    <p>Salary: <FontAwesomeIcon icon={faDollarSign} />{salary}</p>
                </div>
            </div>
        </div>
    );
};

export default PlayerDetails;