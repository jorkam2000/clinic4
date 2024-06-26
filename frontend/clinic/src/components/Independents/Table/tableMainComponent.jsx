import React, { useState } from 'react';

import './allTableElements.css';
import FooterRow from './footerRow/footerRow';
import TableMatrix from './table';

function MainTable({ Title, Matrix, initNumber, endNumber }) {
    return (
        <div id='mainComponents'>
            <div id='tableComponent'>
                <div id="caption">
                    {Title}
                    <input type="text" id="searchInput" placeholder="Search..." />
                    <button id="createinTableButton" style={{ float: 'right' }}> New </button>
                </div>
            </div>
            <div className='table-container'>
                <TableMatrix Matrix={Matrix} />
            </div>
            <FooterRow initNumber={initNumber} endNumber={endNumber} />
        </div>
    );
}

export default MainTable