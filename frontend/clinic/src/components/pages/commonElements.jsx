
import React from 'react';
import './commonElements.css'

function commonElementsPage(notCommonElements){
    return (
        <div class='mainBox'>
            <div class='column leftSide'></div>
            <div class='column rightSide'>
                {notCommonElements}
            </div>
        </div>
    )
}

export default commonElementsPage;