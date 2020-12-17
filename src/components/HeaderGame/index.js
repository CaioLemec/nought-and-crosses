import React from 'react';
import './styles.css';
import LogoType from '../../objects/LogoType/';
import GameMenu from '../../objects/GameMenu';
import AboutLink from '../../objects/AboutLink';

const HeaderGame = ({ onClick }) => (
    <header className="header-game">
        <LogoType />
        <AboutLink onClick={onClick}/>
        <GameMenu onClick={onClick}/>
    </header>
);

export default HeaderGame;