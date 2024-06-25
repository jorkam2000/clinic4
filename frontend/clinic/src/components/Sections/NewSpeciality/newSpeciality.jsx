import React from 'react';


import '../commonBox';
import commonBox from '../commonBox';
import '../../Independents/Input/Input';



function newSpeciality(buttons){
    return (
        <div>
            {commonBox('New speciality details',[Input('Name'),Input('Doctors assigned')],buttons)}
        </div>
    )
}

export default newSpeciality;