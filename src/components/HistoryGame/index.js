import React from 'react';
import './styles.css'
import GameTag from '../../objects/GameTag'
 
const HistoryGame = ({history, onClick}) => (
    <ol className={"history-game"}>
        {history.map((content, key) => (
            <li key={key} className="action" onClick={ () => onClick(key) }>
                <GameTag content={content} />
            </li>
        ))}
    </ol>
);

export default HistoryGame;