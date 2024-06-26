import React from 'react';
import './boxModelTwo.css';
import './commonBox.css'


function BoxModelTwo(title,firstFour,lastThree){
    
    return (
        <div class='boxModelTwo'>
            <div className='titleSection'>{title}</div>
            <div className='inputSectionMTwo'>{firstFour}</div>
            <div className='largeInputSection'>{lastThree}</div>
        </div>
    )
}

export default BoxModelTwo;