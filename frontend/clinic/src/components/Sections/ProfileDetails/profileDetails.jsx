import React, { useState } from 'react';

import CommonBox from '../commonBox';
import Input from '../../Independents/Input/Input';



function NewDetails({ buttons, dictOfValues, blockTyping }) {
    return (
        <div>
            <CommonBox 
                title='Profile details' 
                inputElements={[
                    <Input key="first-name" labelName='First Name'
                        blockTyping={blockTyping}
                        baseValue={dictOfValues['firstName']}
                    />,
                    <Input key="email" labelName='Email'
                        blockTyping={blockTyping}
                        baseValue={dictOfValues['email']}
                    />,
                    <Input key="phone" labelName='Phone'
                        blockTyping={blockTyping}
                        baseValue={dictOfValues['phone']}
                    />,
                    <Input key="last-name" labelName='Last name'
                        blockTyping={blockTyping}
                        baseValue={dictOfValues['lastName']}
                    />,
                    <Input key="password" labelName='Password'
                        blockTyping={blockTyping}
                    />
                ]}
                buttons={buttons}
            />
        </div>
    );
}

export default NewDetails;