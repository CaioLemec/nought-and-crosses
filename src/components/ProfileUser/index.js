import React from 'react';
import AvatarProfile from '../../objects/AvatarProfile';
import Avatar from '../../images/avatar.png'
import SocialMedia from '../../objects/SocialMedia';
import './styles.css';
import GitHub from '../../images/github.svg'
import LinkedIn from '../../images/linkedin.svg'
import Twitter from '../../images/twitter.svg'
import Email from '../../images/email.svg'
import WhatSapp from '../../images/whatsapp.svg'

const ProfileUser = () => (

    <dl className="profile-user">
        <dd className="avatar">
            <AvatarProfile src={Avatar} alt ="Avatar Icon" />
        </dd>
        <dt className="title">
            Caio Lemec
        </dt>
        <dd className="description">
        After many attempts in the areas of engineering and marketing, 
        I discovered in programming the passion I needed to pursue my career.
        </dd>
        <dd className="socials">
        <SocialMedia action="https://github.com/CaioLemec" src={GitHub} alt="GitHub Icon" />
        <SocialMedia action="https://br.linkedin.com/in/name/" src={LinkedIn} alt="LinkedIn Icon" />
        <SocialMedia action="https://twitter.com/name_?lang=en" src={Twitter} alt="Twitter Icon" /> 
        <SocialMedia action="mailto:email@gmail.com" src={Email} alt="E-mail Icon" />  
        <SocialMedia action="https://api.whatsapp.com/send?phone=5521YOURNUMBER&text=Ol%C3%A1,%20me%20envie%20uma%20menssagem!" src={WhatSapp} alt="WhatSapp Icon" /> 
        </dd>
    </dl>

);

export default ProfileUser;