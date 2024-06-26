import React from 'react';
import './textarea.css';

function TextAreaInput({title}){
    return (
        <div>
            <label htmlFor={title}>{title}</label>
            <textarea type="text" id="nombre" name={title} placeholder="Observaciones" rows="5">
            </textarea>
        </div>
    )
}

export default TextAreaInput