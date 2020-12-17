import React from 'react';

const GameInput = ({ id="", value = "", type = "text" }) => (
    <input className="game-input" id={id} type ={type} value={value} />
);

export default GameInput;