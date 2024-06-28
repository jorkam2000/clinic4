import React, { useState } from 'react';
import '../Table/allTableElements.css';
import '../main.css'

function Header({title}){
    return (
        <header id="header">
            <button className="navigationButton" id="backArrowHeader">&#8592;</button>
            <h1>{title}</h1>
            <div id="statusHeader">
                <p>Status: </p>
                <p id="statusLabel"> confirmed </p>
            </div>
        </header>
    )
}

export default Header;
