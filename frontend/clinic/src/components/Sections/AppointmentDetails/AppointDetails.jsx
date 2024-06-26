import React, { useState } from 'react';

import BoxModelTwo from '../boxModelTwo';
import Input from '../../Independents/Input/Input';
import TextAreaInput from '../../Independents/TextArea/textarea';


function AppointmentDetails() {
    return (
        <div>
            <BoxModelTwo
                title='Appointment details'
                inputElements={[
                    <Input key="date" labelName='Date' />,
                    <Input key="speciality" labelName='Speciality' />,
                    <Input key="time" labelName='Time' />,
                    <Input key="doctor" labelName='Doctor' />
                ]}
                textAreaElements={[
                    <TextAreaInput key="observations" labelName='Observations' />,
                    <TextAreaInput key="evaluation" labelName='Evaluation' />,
                    <TextAreaInput key="prescription" labelName='Prescription' />
                ]}
            />
        </div>
    );
}

export default AppointmentDetails;