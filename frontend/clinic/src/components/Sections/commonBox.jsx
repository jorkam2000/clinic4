import React from 'react';
import './commonBox.css';

function commonBox(title,inputElements,buttons){
    return (
        <div class='commonBox'>
            <div class='titleSection'>{title}</div>
            <div class='inputSection'>{inputElements}</div>
            <div class='buttonSection'>{buttons}</div>
        </div>
    )
}

export default commonBox;