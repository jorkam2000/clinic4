import React, { useState } from 'react';

import BoxModelTwo from '../boxModelTwo';
import Input from '../../Independents/Input/Input';
import TextAreaInput from '../../Independents/TextArea/textarea';


function MyMedicalDetails() {
    return (
        <div>
            <BoxModelTwo
                title='Appointment details'
                firstFour={[
                    <Input key="first-name" labelName='First Name' />,
                    <Input key="insurance-type" labelName='Insurance Type' />,
                    <Input key="last-name" labelName='Last Name' />,
                    <Input key="insurance-number" labelName='Insurance Number' />
                ]}
                lastThree={[
                    <TextAreaInput key="historical-record" labelName='Historical record' />
                ]}
            />
        </div>
    );
}

export default MyMedicalDetails;