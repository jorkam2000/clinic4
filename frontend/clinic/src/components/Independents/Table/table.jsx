import React, { useState } from 'react';

import './allTableElements.css';
import HeaderCell from './headerCell/headerCell';
import HeaderRow from './HeaderRow/headerRow';
import DataCell from './DataCell/dataCell';
import DataRow from './DataRow/dataRow';
import FooterRow from './footerRow/footerRow';

import NavButton from './navButton';


function TableMatrix({ matrix }) {
    const header = matrix[0].map((x, index) => (
        <HeaderCell key={`header-${index}`} content={x} />
    ));
    //header.push(<HeaderCell key="header-dummy" content="-" />);

    const rows = matrix.slice(1).map((row, rowIndex) => {
        const formattedRow = row.map((cell, cellIndex) => (
            <DataCell key={`data-${rowIndex}-${cellIndex}`} content={cell} />
        ));
        //formattedRow.push(<NavButton key={`nav-${rowIndex}`} onClick={() => { console.log(1); }} />);
        //formattedRow.push(<DataCell key={`data-${-}-${-}`} content={'-'} />);
        return <DataRow key={`row-${rowIndex}`} listOfCells={formattedRow} />;
    });

    return (
        <table className="table-container">
            <thead>
                <HeaderRow listOfCells={header} />
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}

export default TableMatrix;
