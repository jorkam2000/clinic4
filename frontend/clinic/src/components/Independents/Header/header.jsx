import React from 'react';
import '../Table/allTableElements.css';

function header(){
    return (
        <header id="header">
            <button class="navigationButton" id="backArrowHeader">&#8592;</button>
            <h1>Users</h1>
            <div id="statusHeader">
                <p>Status: </p>
                <p id="statusLabel"> confirmed </p>
            </div>
        </header>
    )
}

export default header;
