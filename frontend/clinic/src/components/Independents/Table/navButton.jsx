import React, { useState } from 'react';
import './allTableElements.css';

function NavButton({ onClickF }) {
    return (
        <button className="navigationButton" id="navigationForward" onClick={onClickF}>
            &#x2192;
        </button>
    );
}

export default NavButton;
