import React from 'react';
import './styles.css'; // Recurso do ecosistema REACT.

const GameMenu = ({onClick}) => (
    <a href="#menu" 
    className="game-menu"
    onClick={onClick}><span className="center">Menu</span></a>
);

export default GameMenu;