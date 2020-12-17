import React from 'react';
import './styles.css';
import LogoType from '../../objects/LogoType'
import IconClose from '../../objects/IconClose'
import AboutLink from '../../objects/AboutLink';

const InternalHeader = ( {onClick} ) => (
    <header className="internal-header">
    <LogoType light />
    <AboutLink className="-light" onClick={onClick}/>
    <IconClose onClick={onClick}/>
    </header> 

);

export default InternalHeader;
