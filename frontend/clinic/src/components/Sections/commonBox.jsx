import React from 'react';
import './commonBox.css';

/*
function CommonBox({title,inputElements,buttons}){
    return (
        <div className='commonBox'>
            <div className='titleSection'>{title}</div>
            <div className='inputSection'>{inputElements}</div>
            <div className='buttonSection'>{buttons}</div>
        </div>
    )
}
*/
function CommonBox({ title, inputElements, buttons }) {
    return (
        <div className='commonBox'>
            <div className='titleSection'>{title}</div>
            <div className='inputSection'>
                {inputElements.map((element, index) => (
                    <div key={`input-${index}`} className='inputElement'>
                        {element}
                    </div>
                ))}
            </div>
            <div className='buttonSection'>
                {buttons.map((button, index) => (
                    <div key={`button-${index}`} className='buttonElement'>
                        {button}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommonBox;