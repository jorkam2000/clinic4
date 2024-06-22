import React from 'react';
import './commonBox.css';
import button from '../Independents/Button/buttons'; '../Independents/Button/buttons';

function commonBox(title,inputElements,buttonType){
    let firstB='Cancel';
    let secondB;
    if (buttonType==='Create'){secondB='Create'}
    else if (buttonType==='Edit'){secondB='Edit'}
    return (
        <div class='commonBox'>
            <div class='titleSection'>{title}</div>
            <div class='inputSection'>{inputElements}</div>
            <div class='buttonSection'>{[button(false,firstB),button(true,secondB)]}</div>
        </div>
    )
}

export default commonBox;