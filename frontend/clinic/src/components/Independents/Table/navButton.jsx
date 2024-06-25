import React from 'react';
import './allTableElements.css';

function navButton(onClickF){
    return (
        <button class="navigationButton" id="navigationForward" onClick={onClickF}>&#x2192;</button>
    );
}

export default navButton;
