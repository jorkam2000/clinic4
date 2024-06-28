import React, { useState } from 'react';

import BoxModelTwo from '../boxModelTwo';
import Input from '../../Independents/Input/Input';
import TextAreaInput from '../../Independents/TextArea/textarea';


function MyMedicalDetails({user}) {

    function loadDataProcess(user){
        let data = {
            'firstName':'Manolo',
            'insuranceType':'Securitas Todo Chiste',
            'lastName':'Arias',
            'insuranceNumber':'123',
            'observaciones':'No se recupera :('
        };
        return data;
    }
    let data = loadDataProcess(user);
    return (
        <div>
            <BoxModelTwo
                title='Appointment details'
                firstFour={[
                    <Input key="first-name" labelName='First Name' blockTyping={true} baseValue={data['firstName']}/>,
                    <Input key="insurance-type" labelName='Insurance Type' blockTyping={true} baseValue={data['insuranceType']}/>,
                    <Input key="last-name" labelName='Last Name' blockTyping={true} baseValue={data['lastName']}/>,
                    <Input key="insurance-number" labelName='Insurance Number' blockTyping={true} baseValue={data['insuranceNumber']}/>
                ]}
                lastThree={[
                    <TextAreaInput key="historical-record" labelName='Historical record' baseValue={data['observaciones']}/>
                ]}
            />
        </div>
    );
}

export default MyMedicalDetails;