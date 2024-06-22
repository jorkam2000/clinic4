import React from 'react'
import './button.css'

function button(main,buttonText){
    let position;
    if (main){position='mainB'}
    else {position='secB'}
    return (
        <div>
            <button class={position} id="miBoton">{buttonText}</button>
        </div>
    )
}

export default button;