import React from 'react';
import './newSpeciality.css';

import '../commonBox';
import commonBox from '../commonBox';
import '../../Independents/Input/Input';



function newDetails(){
    return (
        <div>
            {commonBox('Profile details',[Input('First Name'),Input('Email'),Input('Phone'),Input('Last name'),Input('Password')],'Edit')}
        </div>
    )
}

export default newDetails;