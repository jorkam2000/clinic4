import React from 'react';

import '../commonBox';
import commonBox from '../commonBox';
import '../../Independents/Input/Input';
import '../../Independents/Button/buttons';


function newInsurer(){
    return (
        <div>
            {commonBox('New insurer details',[Input('Name')],'Create')}
        </div>
    )
}

export default newInsurer;