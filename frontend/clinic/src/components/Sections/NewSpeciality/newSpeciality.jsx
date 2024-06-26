import React, { useState } from 'react';

import CommonBox from '../commonBox';
import Input from '../../Independents/Input/Input';


function NewSpeciality({ buttons }) {
    return (
        <div>
            <CommonBox
                title='New speciality details'
                inputElements={[
                    <Input key="speciality-name" labelName='Name' />,
                    <Input key="doctors-assigned" labelName='Doctors assigned' />
                ]}
                buttons={buttons}
            />
        </div>
    );
}

export default NewSpeciality;