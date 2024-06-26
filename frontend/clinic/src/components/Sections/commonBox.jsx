import React from 'react';
import './commonBox.css';


function CommonBox(title,inputElements,buttons){
    return (
        <div class='commonBox'>
            <div className='titleSection'>{title}</div>
            <div className='inputSection'>{inputElements}</div>
            <div className='buttonSection'>{buttons}</div>
        </div>
    )
}

export default CommonBox;