import React from 'react';
import '../Table/allTableElements.css';
import '../main.css'

function Sidebar(){
    return (
        <aside id="sideBar">
            <div>
                <img src="../../../assets/logo_icon.png" alt="" />            </div>
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

export default Sidebar;