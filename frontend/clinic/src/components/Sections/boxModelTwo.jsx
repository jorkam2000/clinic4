import React from 'react';
import './boxModelTwo.css';
import './commonBox.css'


function boxModel(title,firstFour,lastThree){
    
    return (
        <div class='boxModelTwo'>
            <div class='titleSection'>{title}</div>
            <div class='inputSectionMTwo'>{firstFour}</div>
            <div class='largeInputSection'>{lastThree}</div>
        </div>
    )
}

export default commonBox;