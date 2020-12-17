import React from 'react';
import './styles.css'

const DarkLayer = ({ children, className="" }) => (

<article className={`dark-layer ${className}`}>
    {children}
</article>

);

export default DarkLayer;