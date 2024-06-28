import React from 'react';
import './textarea.css';

function TextAreaInput({title, blockTyping=true, baseValue='Observaciones'}){
    return (
        <div>
            <label htmlFor={title}>{title}</label>
            <textarea type="text" id="nombre" name={title} placeholder={baseValue} rows="5" readOnly={blockTyping}>
            </textarea>
        </div>
    )
}

export default TextAreaInput