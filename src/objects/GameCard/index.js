import React from 'react';
import './styles.css'

const GameCard = ({children}) => (

    <article className="game-card">
        {children}
    </article>

);

export default GameCard;