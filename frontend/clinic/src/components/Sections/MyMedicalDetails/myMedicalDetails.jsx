import React, { useState } from 'react';

import BoxModelTwo from '../boxModelTwo';
import Input from '../../Independents/Input/Input';
import TextAreaInput from '../../Independents/TextArea/textarea';


function MyMedicalDetails(){
    return (
        <div>
            {BoxModelTwo('Appointment details',[Input('First Name'),Input('Insurance Type'),Input('Last Name'),Input('Insurance Number')],[TextAreaInput('Historical record')])}
        </div>
    )
}

export default MyMedicalDetails;