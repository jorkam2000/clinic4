import React, { useState } from 'react';
import './Input.css';

function Input({labelName}){
    let typeV;
    if (labelName === 'Password'){typeV='password'}
    else if (['First name','Last name','Email'].includes(labelName)){typeV='text'}
    else if (labelName === 'Phone'){typeV='number'}

    let id = `${labelName.replace(" ", "-").toLowerCase()}_textInput`
    if (labelName === 'Phone'){}
    return (
        <div>
            <label htmlFor={id}>{labelName}</label>
            <input className='inputCorrect' type={typeV} id={id} name={labelName} placeholder="----------"></input>
        </div>
    )
}

export default Input;