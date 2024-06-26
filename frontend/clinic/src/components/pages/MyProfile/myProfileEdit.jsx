import React, { useState } from 'react';

import CommonElementsPage from '../commonElements';
import NewDetails from '../../Sections/ProfileDetails/profileDetails';
import Button from '../../Independents/Button/buttons';



function ProfilePage() {
    function backToEdit() {
        changer([<Button key="edit" isPrimary={true} text='Edit' onClick={editProcess} />]);
    }

    function saveProcess() {
        /*Falta añadir lo que se haga para guardar en el backend*/
        changer([<Button key="edit" isPrimary={true} text='Edit' onClick={editProcess} />]);
    }

    function editProcess() {
        changer([
            <Button key="cancel" isPrimary={false} text='Cancel' onClick={backToEdit} />,
            <Button key="save" isPrimary={true} text='Save' onClick={saveProcess} />
        ]);
    }

    const [initial, changer] = useState([
        <Button key="edit" isPrimary={true} text='Edit' onClick={editProcess} />
    ]);

    return (
        <CommonElementsPage
            title='Profile details'
            notCommonElements={[
                <NewDetails key="details" buttons={initial} />
            ]}
        />
    );
}

export default ProfilePage;

