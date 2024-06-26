import React, { useState } from 'react';

import CommonElementsPage from '../commonElements';
import NewDetails from '../../Sections/ProfileDetails/profileDetails';
import Button from '../../Independents/Button/buttons';



function ProfilePage() {
    const [buttonsOptions, setButtons] = useState(false);

    let buttonsWhenFalse = [<Button 
        key="edit" 
        isPrimary={true} 
        text='Edit' 
        onClickF={editProcess}
    />];

    let buttonsWhenTrue = [
        <Button key="cancel" isPrimary={false} text='Cancel' onClickF={backToEdit} />,
        <Button key="save" isPrimary={true} text='Save' onClickF={saveProcess} />
    ];

    function backToEdit() {
        console.log('Se ejecuta');
        setButtons(false);
    }

    function saveProcess() {
        /*Falta añadir lo que se haga para guardar en el backend*/
        setButtons(false);
        console.log('Se ejecuta');
    }

    function editProcess() {
        setButtons(true);
        console.log('Se ejecuta');
    }
    
    let buttons;
    if (buttonsOptions){buttons = buttonsWhenTrue;}
    else {buttons = buttonsWhenFalse;}

    return (
        <CommonElementsPage
            title='Profile details'
            notCommonElements={[
                <NewDetails key="details" buttons={buttons} />
            ]}
        />
    );
}


export default ProfilePage;

