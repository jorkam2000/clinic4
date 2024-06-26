import React, { useState } from 'react'
import './button.css'



function Button({main,buttonText,onClickF}){
    let position;
    if (main){position='mainB'}
    else {position='secB'}
    return (
        <div>
            <button className={position} onClick={onClickF} id="miBoton">{buttonText}</button>
        </div>
    )
}

export default Button;