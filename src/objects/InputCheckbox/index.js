import React from 'react';
import './styles.css'
import GameInput from '../GameInput';
import GameLabel from '../GameLabel';

const InputCheckbox = ({ id = "", value = "", content = "", onClick}) => (
    <>
    <GameInput id={id} value={value} type="checkbox" content={content}/>
    <GameLabel htmlFor={id} content={content} onClick={onClick} />
    </>
);

export default InputCheckbox;