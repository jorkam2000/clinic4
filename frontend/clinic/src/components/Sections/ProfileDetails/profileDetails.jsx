import React, { useState } from 'react';

import CommonBox from '../commonBox';
import Input from '../../Independents/Input/Input';



function NewDetails({ buttons }) {
    return (
        <div>
            <CommonBox 
                title='Profile details' 
                elements={[
                    <Input key="first-name" labelName='First Name' />,
                    <Input key="email" labelName='Email' />,
                    <Input key="phone" labelName='Phone' />,
                    <Input key="last-name" labelName='Last name' />,
                    <Input key="password" labelName='Password' />
                ]}
                buttons={buttons}
            />
        </div>
    );
}

export default NewDetails;