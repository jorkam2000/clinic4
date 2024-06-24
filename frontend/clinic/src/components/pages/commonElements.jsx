
import React from 'react';
import './commonElements.css'

function commonElementsPage(topElement,notCommonElements){
    return (
        <div class='mainBox'>
            <div class='column leftSide'></div>
            <div class='column rightSide'>
                {[topElement,notCommonElements]}
            </div>
        </div>
    )
}

export default commonElementsPage;