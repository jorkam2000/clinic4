import React, { useState } from 'react';

import CommonBox from '../commonBox';
import Input from '../../Independents/Input/Input';



function NewSpeciality(buttons){
    return (
        <div>
            {CommonBox('New speciality details',[Input('Name'),Input('Doctors assigned')],buttons)}
        </div>
    )
}

export default NewSpeciality;