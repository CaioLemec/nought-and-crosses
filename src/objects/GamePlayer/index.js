import React from 'react';
import './styles.css'
import cross from '../../images/cross.svg';
import nought from '../../images/nought.svg';

const GamePlayer = ({ content = '' }) => {
    const players = [];
    players['']= '';
    players['cross'] = cross;
    players['nought'] = nought;
    return (
        <button className="game-player">
            {players[content] && <img src={players[content]} alt={`Player ${content}`} />}
        </button>
    );   
};

export default GamePlayer;