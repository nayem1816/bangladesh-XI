import React, { useEffect, useState } from 'react';
import PlayerDetails from './PlayerDetails/PlayerDetails';
import SelectPlayer from './SelectPlayer/SelectPlayer';
import './Body.css';
import PlayerData from '../../PlayerData/data.json'

const Body = () => {
    const [playersData, setPlayerData] = useState([]);
    useEffect(() => {
        setPlayerData(PlayerData);
    })
    // console.log(playersData);
    return (
        <div className="mainBody">
            <div className="player-details">
                <h2>Total Players : {playersData.length}</h2>
                {
                    playersData.map(player => <PlayerDetails playersData={player} key = {player.id}></PlayerDetails>)
                }
            </div>
            <div className="select-player">
                <SelectPlayer></SelectPlayer>
            </div>
        </div>
    );
};

export default Body;