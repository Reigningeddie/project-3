import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';


import './infoBar.css';

const InfoBar = ({room}) => (
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online image"/>
        </div>
        <h1>Artsy Chat</h1>
        <div className="rightInnerContainer">
            <a href="/join" ><img src={closeIcon} alt="close image"/></a>
            
        </div>
    </div>

)

export default InfoBar;