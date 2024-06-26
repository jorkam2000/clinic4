import React, { useState } from 'react';

import './allTableElements.css';
import HeaderCell from './headerCell/headerCell';
import HeaderRow from './HeaderRow/headerRow';
import DataCell from './DataCell/dataCell';
import DataRow from './DataRow/dataRow';
import FooterRow from './footerRow/footerRow';

import NavButton from './navButton';
import HeaderCell from './headerCell/headerCell';


function TableMatrix(matrix){
    let header = HeaderRow(matrix[0].map((x)=>HeaderCell(x)));
    header.push(HeaderCell('-'));

    let rows = matrix.slice(1);
    let formattedRows = [];
    for (let row of rows){
        let formattedRow = DataRow(row.map((x)=>DataCell(x)));
        formattedRow.push(NavButton(()=>{console.log(1)}));
        formattedRows.push(formattedRow);
    }


    return (
        <table className="table-container">
            <thead>
                {header}
            </thead>
            <tbody>
                {formattedRows}
            </tbody>
        </table>
    )
}

export default TableMatrix;
