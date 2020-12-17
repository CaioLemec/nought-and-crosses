import React from 'react';
import './styles.css';

const GameTag = ({content, className}) => (

<output className ={`game-tag ${className}`}>{content}</output>

);

export default GameTag;