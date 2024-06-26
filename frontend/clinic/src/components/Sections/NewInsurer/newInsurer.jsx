import React, { useState } from 'react';

import CommonBox from '../commonBox';
import Input from '../../Independents/Input/Input';


function NewInsurer({ buttons }) {
    return (
        <div>
            <CommonBox
                title='New insurer details'
                inputElements={[
                    <Input key="insurer-name" labelName='Name' />
                ]}
                buttons={buttons}
            />
        </div>
    );
}

export default NewInsurer;