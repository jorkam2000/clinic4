import React from 'react'
import './button.css'

function button(main=true){
    let position;
    if (main){position='mainB'}
    else {position='secB'}
    return (
        <div>
            <button class={position} id="miBoton">Haz clic aquí</button>
        </div>
    )
}

export default button;