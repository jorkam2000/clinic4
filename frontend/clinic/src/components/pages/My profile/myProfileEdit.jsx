import React from 'react';

import '../../Sections/Profile Details/profileDetails'
import '../commonElements'
import commonElementsPage from '../commonElements';
import '../../Sections/Profile Details/profileDetails';
import '../../Independents/Button/buttons';




function profilePage(initialButton){
    function backToEdit(){
        changer([button(true,'Edit',editProcess)])
    }
    function saveProcess(){
        /*Falta añadir lo que se haga para guardar en el backend*/
        changer([button(true,'Edit',editProcess)])
    }
    function editProcess(){
        changer([button(false,'Cancel',backToEdit),button(true,'Save',saveProcess)])
    }
    const [initial,changer] = useState([button(true,'Edit',editProcess)])
    
    commonElementsPage('Profile details',newDetails(initial))
}

export default profilePage;