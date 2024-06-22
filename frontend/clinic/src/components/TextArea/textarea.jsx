import React from 'react'

function textAreaInput(){
    return (
        <div>
            <label for="Observaciones">Comentarios de observación:</label>
            <textarea type="text" id="nombre" name="Observaciones" placeholder="Observaciones" rows="5">
            </textarea>
        </div>
    )
}

export default textAreaInput