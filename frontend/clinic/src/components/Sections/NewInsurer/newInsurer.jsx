import React, { useState } from 'react';

import CommonBox from '../commonBox';
import Input from '../../Independents/Input/Input';


function NewInsurer(buttons){
    return (
        <div>
            {CommonBox('New insurer details',[Input('Name')],buttons)}
        </div>
    )
}

export default NewInsurer;