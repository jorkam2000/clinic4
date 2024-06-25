import React from 'react';

import '../commonBox';
import commonBox from '../commonBox';
import '../../Independents/Input/Input';


function newInsurer(buttons){
    return (
        <div>
            {commonBox('New insurer details',[Input('Name')],buttons)}
        </div>
    )
}

export default newInsurer;