import React from 'react';
import '../Table/allTableElements.css';

function sidebar(){
    return (
        <aside id="sideBar">
            <div>
                <img src="./src/logo_icon.png" alt=""/>
            </div>
            <div>
                <a href="">My profile</a>
                <a href="">Users</a>
                <a href="">Specialities</a>
                <a href="">Insurances</a>
            </div>
            <p> Clinic4 2024 ©️ </p>
        </aside>
    )
}

export default sidebar;