import React from 'react';


import '../commonBox';
import commonBox from '../commonBox';
import '../../Independents/Input/Input';



function newSpeciality(){
    return (
        <div>
            {commonBox('New speciality details',[Input('Name'),Input('Doctors assigned')],'Create')}
        </div>
    )
}

export default newSpeciality;