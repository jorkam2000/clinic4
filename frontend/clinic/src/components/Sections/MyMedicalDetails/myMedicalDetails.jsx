import React from 'react';

import '../commonBox';
import '../boxModelTwo';
import '../../Independents/Input/Input';
import '../../Independents/TextArea/textarea';
import textAreaInput from '../../Independents/TextArea/textarea';


function myMedicalDetails(){
    return (
        <div>
            {boxModelTwo('Appointment details',[Input('First Name'),Input('Insurance Type'),Input('Last Name'),Input('Insurance Number')],[textAreaInput('Historical record')])}
        </div>
    )
}

export default myMedicalDetails;