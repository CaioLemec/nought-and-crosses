import React from 'react';
import './styles.css'

const SocialMedia = ({src, alt, action}) => (
    <a target="_blank" href={action} rel="noreferrer noopener">
        <img className="social-media" src={src} alt={alt} />
    </a>

);


export default SocialMedia;


// rel="noreferrer noopener" -> ll guarantee more security for the user.