import React, { useState } from 'react';

import NavButton from '../navButton';

function FooterRow({ initNumber, endNumber }) {
    return (
        <div className="footer-container">
            <button className="navigationButton" id="tablePaginationBack">&#8592;</button>
            <p>{`${initNumber} of ${endNumber}`}</p>
            <NavButton key='NavButton' onClick={() => console.log(0)} />
        </div> 
    );
}

export default FooterRow;