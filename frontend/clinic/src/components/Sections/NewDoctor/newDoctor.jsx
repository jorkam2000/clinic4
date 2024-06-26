import React, { useState } from 'react';

import CommonBox from '../commonBox';
import '../../Independents/Input/Input';


function NewDoctor({ buttons }) {
    return (
        <div>
            <CommonBox
                title='New doctor details'
                inputElements={[
                    <Input key="first-name" labelName='First Name' />,
                    <Input key="email" labelName='Email' />,
                    <Input key="phone" labelName='Phone' />,
                    <Input key="speciality" labelName='Speciality' />,
                    <Input key="last-name" labelName='Last Name' />,
                    <Input key="password" labelName='Password' />
                ]}
                buttons={buttons}
            />
        </div>
    );
}

export default NewDoctor;