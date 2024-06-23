import React from 'react';

import '../commonBox';
import '../boxModelTwo';
import '../../Independents/Input/Input';
import '../../Independents/TextArea/textarea';
import textAreaInput from '../../Independents/TextArea/textarea';


function appointmentDetails(){
    return (
        <div>
            {boxModelTwo('Appointment details',[Input('Date'),Input('Speciality'),Input('Time'),Input('Doctor')],[textAreaInput('Observations'),textAreaInput('Evaluation'),textAreaInput('Prescription')])}
        </div>
    )
}

export default appointmentDetails;