import React, { useState } from 'react';

import BoxModelTwo from '../boxModelTwo';
import Input from '../../Independents/Input/Input';
import TextAreaInput from '../../Independents/TextArea/textarea';


function AppointmentDetails(){
    return (
        <div>
            {BoxModelTwo('Appointment details',[Input('Date'),Input('Speciality'),Input('Time'),Input('Doctor')],[TextAreaInput('Observations'),TextAreaInput('Evaluation'),TextAreaInput('Prescription')])}
        </div>
    )
}

export default AppointmentDetails;