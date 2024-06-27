import React from 'react';

import '../allTableElements.css';

function HeaderRow({listOfCells}){
    return (
        <tr>
            {listOfCells}
        </tr>
    )
}

export default HeaderRow;