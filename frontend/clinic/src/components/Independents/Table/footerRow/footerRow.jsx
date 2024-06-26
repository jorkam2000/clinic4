import React, { useState } from 'react';

import NavButton from '../navButton';

function FooterRow({ numberCurrent, numberEnd }) {
    return (
        <div className="footer-container">
            <button className="navigationButton" id="tablePaginationBack">&#8592;</button>
            <p>{`${numberCurrent} of ${numberEnd}`}</p>
            <NavButton onClick={() => console.log(0)} />
        </div> 
    );
}

export default FooterRow;