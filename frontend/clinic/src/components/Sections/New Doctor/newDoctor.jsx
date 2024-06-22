import React from 'react';

import '../commonBox';
import commonBox from '../commonBox';
import '../../Independents/Input/Input';


function newDoctor(){
    return (
        <div>
            {commonBox('New doctor details',[Input('First Name'),Input('Email'),Input('Phone'),Input('Speciality'),Input('Last name'),Input('Password')],'Create')}
        </div>
    )
}

export default newDoctor;