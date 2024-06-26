import React, { useState } from 'react';

import '../allTableElements.css';

function DataRow(listOfCells){
    return (
        <tr>{listOfCells}</tr>
    )
}

export default DataRow;