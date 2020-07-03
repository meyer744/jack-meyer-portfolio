import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from '@fortawesome/free-solid-svg-icons'


const BottomBar = () => {
    return (
        <div className="bottom-bar">
        <ul className="bottom-bar-list">
            <li>Jack Meyer All Rights Reserved <FontAwesomeIcon className="bottom-bar-icon" icon={faCopyright} /> 2020</li>
            <li>Created with React.js</li>
        </ul>
        </div>
    )
}

export default BottomBar;