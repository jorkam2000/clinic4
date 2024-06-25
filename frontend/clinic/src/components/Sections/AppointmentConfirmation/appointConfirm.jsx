import React from 'react';
import '../../Independents/Input/Input';
import '../../Independents/Button/buttons';


function appointConfirm(){
    
    return (
        <div class='appoconfirm'>
            <div class='titleSection'>Appointment details</div>
            <div class='inputSectionAppDet'>{firstFour}</div>
            <div class='buttonSection'>{lastThree}</div>
        </div>
    )
}

export default commonBox;