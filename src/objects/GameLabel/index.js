import React from 'react';
import './styles.css'


const GameLabel = ({ htmlFor, content, onClick }) => (
    <label onClick={onClick} className="game-label" htmlFor={htmlFor}>{content}</label>
);

export default GameLabel;