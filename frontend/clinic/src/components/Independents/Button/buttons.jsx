import React from 'react'
import './button.css'



function button(main,buttonText,onClickF){
    let position;
    if (main){position='mainB'}
    else {position='secB'}
    return (
        <div>
            <button class={position} onClick={onClickF} id="miBoton">{buttonText}</button>
        </div>
    )
}

export default button;