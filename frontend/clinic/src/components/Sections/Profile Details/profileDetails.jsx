import React from 'react';
import './newSpeciality.css';

import '../commonBox';
import commonBox from '../commonBox';
import '../../Independents/Input/Input';



function newDetails(buttons){
    return (
        <div>
            {commonBox('Profile details',[Input('First Name'),Input('Email'),Input('Phone'),Input('Last name'),Input('Password')],buttons)}
        </div>
    )
}

export default newDetails;