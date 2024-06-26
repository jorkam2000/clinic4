import React, { useState } from 'react';

import './allTableElements.css';
import HeaderCell from './headerCell/headerCell';
import HeaderRow from './HeaderRow/headerRow';
import DataCell from './DataCell/dataCell';
import DataRow from './DataRow/dataRow';
import FooterRow from './footerRow/footerRow';

import NavButton from './navButton';
import HeaderCell from './headerCell/headerCell';


function TableMatrix({ matrix }) {
    let header = matrix[0].map((x, index) => <HeaderCell key={`header-${index}`} value={x} />);
    header.push(<HeaderCell key="header-dummy" value="-" />);

    let rows = matrix.slice(1);
    let formattedRows = rows.map((row, rowIndex) => {
        let formattedRow = row.map((cell, cellIndex) => <DataCell key={`data-${rowIndex}-${cellIndex}`} value={cell} />);
        formattedRow.push(<NavButton key={`nav-${rowIndex}`} onClick={() => { console.log(1) }} />);
        return formattedRow;
    });

    return (
        <table className="table-container">
            <thead>
                <HeaderRow>{header}</HeaderRow>
            </thead>
            <tbody>
                {formattedRows.map((row, index) => <DataRow key={`row-${index}`}>{row}</DataRow>)}
            </tbody>
            <tfoot>
                <FooterRow />
            </tfoot>
        </table>
    );
}

export default TableMatrix;
