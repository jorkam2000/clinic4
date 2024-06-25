
import React from 'react';
import './commonElements.css';
import '../Independents/Sidebar/sidebar';

function commonElementsPage(topElement,notCommonElements){
    return (
        <div class='mainBox'>
            <div class='column leftSide'>{sidebar}</div>
            <div class='column rightSide'>
                {[topElement,notCommonElements]}
            </div>
        </div>
    )
}

export default commonElementsPage;