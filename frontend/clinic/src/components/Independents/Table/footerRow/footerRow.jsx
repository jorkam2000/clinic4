import React from 'react';

import '../navButton';

function footerRow(numberCurrent,numberEnd){
    return (
        <div class="footer-container">
            <button class="navigationButton" id="tablePaginationBack">&#8592;</button>
            <p>{`${numberCurrent} of ${numberEnd}`}</p>
            <button class="navigationButton" id="tablePaginationForward">&#x2192;</button>
        </div> 
    )
}

export default footerRow;