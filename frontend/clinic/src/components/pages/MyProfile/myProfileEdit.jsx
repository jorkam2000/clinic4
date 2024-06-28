import React, { useState } from 'react';

import CommonElementsPage from '../commonElements';
import NewDetails from '../../Sections/ProfileDetails/profileDetails';
import Button from '../../Independents/Button/buttons';



function ProfilePage() {
    const [buttonsOptions, setButtons] = useState(false);
    const [blockTyping, setTypingBlock] = useState(true);

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
        setButtons(false);
        setTypingBlock(true);
    }

    function saveProcess() {
        /*Falta añadir lo que se haga para guardar en el backend*/
        setButtons(false);
        setTypingBlock(true);
    }

    function editProcess() {
        setButtons(true);
        setTypingBlock(false);
    }

    function getCurrentValues(){
        let defaultDict = {
            'firstName':'Manolo',
            'email':'manolo@arias.com',
            'phone':'0000000000000',
            'lastName':'Arias'
        }
        return defaultDict;
    }
    
    let buttons;
    if (buttonsOptions){buttons = buttonsWhenTrue;}
    else {buttons = buttonsWhenFalse;}

    return (
        <CommonElementsPage
            title='Profile details'
            notCommonElements={[
                <NewDetails key="details" buttons={buttons} blockTyping={blockTyping} dictOfValues={getCurrentValues()}/>
            ]}
        />
    );
}


export default ProfilePage;

