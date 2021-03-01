import React from 'react';
import './SelectPlayer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDollarSign} from '@fortawesome/free-solid-svg-icons'

const SelectPlayer = (props) => {
    const countPlayer = props.countPlayer;
    let names = [];
    let totalSalary = 0;
    for (let i = 0; i < countPlayer.length; i++) {
        const player = countPlayer[i];
        const playerName = player.name;
        const salary = player.salary;
        names = names + playerName +" ($" + salary + ")"+ ", ";
        const numSalary = parseInt(player.salary);
        totalSalary = totalSalary + numSalary;
    }
    return (
        <div className="player-selected">
            <h2>Selected Player</h2>
            <div className="select-player-body">
                <h4 className="total-select-player">Total Select Player: {countPlayer.length}</h4>
                <h4 className="select-player-name">Selected Player Name: <small>{names}</small></h4>
                <h4 className="total-salary">Total Salary: <FontAwesomeIcon icon={faDollarSign} />{totalSalary}</h4>
            </div>
        </div>
    );
};

export default SelectPlayer;