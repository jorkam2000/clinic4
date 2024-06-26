import React, { useState } from 'react';

import CommonElementsPage from '../commonElements';
import NewDetails from '../../Sections/ProfileDetails/profileDetails';
import Button from '../../Independents/Button/buttons';



function ProfilePage() {
    const [buttons, setButtons] = useState([
        <Button 
            key="edit" 
            isPrimary={true} 
            text='Edit' 
            onClick={editProcess}
        />
    ]);

    function backToEdit() {
        setButtons([
            <Button key="edit" isPrimary={true} text='Edit' onClick={editProcess} />
        ]);
    }

    function saveProcess() {
        /*Falta añadir lo que se haga para guardar en el backend*/
        setButtons([
            <Button key="edit" isPrimary={true} text='Edit' onClick={editProcess} />
        ]);
    }

    function editProcess() {
        setButtons([
            <Button key="cancel" isPrimary={false} text='Cancel' onClick={backToEdit} />,
            <Button key="save" isPrimary={true} text='Save' onClick={saveProcess} />
        ]);
    }
    
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

