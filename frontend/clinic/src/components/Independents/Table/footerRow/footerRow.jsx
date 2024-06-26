import React, { useState } from 'react';

import NavButton from '../navButton';

function FooterRow(numberCurrent,numberEnd){
    return (
        <div class="footer-container">
            <button class="navigationButton" id="tablePaginationBack">&#8592;</button>
            <p>{`${numberCurrent} of ${numberEnd}`}</p>
            {NavButton(()=>console.log(0))}
        </div> 
    )
}

export default FooterRow;