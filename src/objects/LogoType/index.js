import React from 'react';
import LogoType1 from '../../images/logotype1.png';
import LogoType2 from '../../images/logotype2.png';


const LogoType = ({ light = false }) => (
    <img className="logo-type"
         src={light? LogoType2 : LogoType1} 
         alt="Game logotype"
         onClick={() => window.location.reload(false)}
    />
);

export default LogoType;
