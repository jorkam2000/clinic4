import React from 'react';

import './allTableElements.css';
import './footerRow/footerRow';
import './table';

function mainTable(Title,Matrix,initNumber,endNumber){
    return (
        <div id='mainComponents'>
            <div id='tableComponent'>
                <div id="caption">
                    {Title}
                    <input type="text" id="searchInput" placeholder="Search..."/>
                    <button id="createinTableButton" style="float: right;"> New </button>
                </div>
            </div>
            <div class='table-container'>
                {tableMatrix(Matrix)}
            </div>
            {footerRow(initNumber,endNumber)}
        </div>
    )
}