import React from 'react';
import './boxModelTwo.css';
import './commonBox.css'


function boxModel(title,firstFour,lastThree){
    let firstB='Cancel';
    let secondB;
    if (buttonType==='Create'){secondB='Create'}
    else if (buttonType==='Edit'){secondB='Edit'}
    return (
        <div class='commonBox'>
            <div class='titleSection'>{title}</div>
            <div class='inputSectionMTwo'>{firstFour}</div>
            <div class='largeInputSection'>{lastThree}</div>
        </div>
    )
}

export default commonBox;