import React, { useState } from 'react';

import CommonBox from '../commonBox';
import '../../Independents/Input/Input';


function NewDoctor(buttons){
    return (
        <div>
            {CommonBox('New doctor details',[Input('First Name'),Input('Email'),Input('Phone'),Input('Speciality'),Input('Last name'),Input('Password')],buttons)}
        </div>
    )
}

export default NewDoctor;