import React from 'react';
import './newSpeciality.css';

import '../commonBox';
import commonBox from '../commonBox';
import '../../Independents/Input/Input';
import '../../Independents/Button/buttons';


function newSpeciality(){
    return (
        <div>
            {commonBox('New doctor details',[Input('First Name'),Input('Email'),Input('Phone'),Input('Speciality'),Input('Last name'),Input('Password')],'Create')}
        </div>
    )
}

export default newSpeciality;