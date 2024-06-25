import React from 'react';

import './allTableElements.css';
import './headerCell/headerCell';
import './HeaderRow/headerRow';
import './DataCell/dataCell';
import './DataRow/dataRow';
import './footerRow/footerRow';

import './navButton';
import headerCell from './headerCell/headerCell';


function tableMatrix(matrix){
    let header = headerRow(matrix[0].map((x)=>headerCell(x)));
    header.push(headerCell('-'));

    let rows = matrix.slice(1);
    let formattedRows = [];
    for (let row of rows){
        let formattedRow = dataRow(row.map((x)=>dataCell(x)));
        formattedRow.push(navButton);
        formattedRows.push(formattedRow);
    }


    return (
        <table class="table-container">
            <thead>
                {header}
            </thead>
            <tbody>
                {formattedRows}
            </tbody>
        </table>
    )
}

export default tableMatrix;
