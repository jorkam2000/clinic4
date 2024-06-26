import React, { useState } from 'react';
import Input from '../../Independents/Input/Input';
import Button from '../../Independents/Button/buttons';
import './appointConfirm.css';


function AppointConfirm(){
    
    return (
        <div class='appoconfirm'>
            <div class='titleSection'>Appointment details</div>
            <div class='inputSectionAppDet'>{firstFour}</div>
            <div class='buttonSection'>{lastThree}</div>
        </div>
    )
}

export default AppointConfirm;